import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { randomUUID } from "crypto";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { useCaseGroups } from "@/data/use-cases";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 120) || "news-story";
}

function validWebUrl(value: unknown): value is string {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string } | undefined)?.role;
  if (!session?.user || !["admin", "editor"].includes(role ?? "")) {
    return NextResponse.json({ error: "Sign in with an editor account to send news." }, { status: 401 });
  }

  let input: Record<string, unknown>;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "The request body is invalid." }, { status: 400 });
  }

  const headline = typeof input.headline === "string" ? input.headline.trim() : "";
  const deck = typeof input.deck === "string" ? input.deck.trim() : "";
  const bodyMarkdown = typeof input.bodyMarkdown === "string" ? input.bodyMarkdown.trim() : "";
  const sourcePublication = typeof input.sourcePublication === "string" ? input.sourcePublication.trim() : "";
  const useCaseSlug = typeof input.useCase === "string" ? input.useCase : "";
  const useCase = useCaseGroups.flatMap((group) => group.items).find((item) => item.slug === useCaseSlug);

  if (headline.length < 8 || headline.length > 180) {
    return NextResponse.json({ error: "Headline must be between 8 and 180 characters." }, { status: 400 });
  }
  if (!deck || deck.length > 300 || !bodyMarkdown || bodyMarkdown.length > 20000) {
    return NextResponse.json({ error: "Add a summary (up to 300 characters) and story notes." }, { status: 400 });
  }
  if (!useCase || !sourcePublication || sourcePublication.length > 100 || !validWebUrl(input.productUrl)) {
    return NextResponse.json({ error: "Choose a category and enter valid website and source details." }, { status: 400 });
  }

  const email = session.user.email?.toLowerCase();
  if (!email) return NextResponse.json({ error: "Your editor account needs an email address." }, { status: 400 });

  const category = await prisma.category.upsert({
    where: { slug: "news" },
    update: { name: "News" },
    create: { slug: "news", name: "News", description: "AI picks and updates by use case." }
  });
  const authorSlug = `editor-${slugify(email)}`;
  const author = await prisma.author.upsert({
    where: { slug: authorSlug },
    update: { name: session.user.name || email },
    create: { slug: authorSlug, name: session.user.name || email, bio: "RexolNews editor." }
  });
  const tag = await prisma.tag.upsert({
    where: { slug: useCase.slug },
    update: { name: useCase.name },
    create: { slug: useCase.slug, name: useCase.name }
  });

  const article = await prisma.article.create({
    data: {
      slug: `${slugify(headline)}-${randomUUID().slice(0, 8)}`,
      type: "NEWS",
      status: "IN_REVIEW",
      headline,
      deck,
      bodyMarkdown,
      categoryId: category.id,
      authorId: author.id,
      createdById: (session.user as { id?: string }).id,
      tags: { connect: { id: tag.id } },
      sources: {
        create: {
          publication: sourcePublication,
          url: input.productUrl,
          claimType: "COMPANY_CLAIM"
        }
      }
    },
    select: { id: true, headline: true, status: true }
  });

  return NextResponse.json({ ok: true, article }, { status: 201 });
}

export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string } | undefined)?.role;
  if (!session?.user || !["admin", "editor"].includes(role ?? "")) {
    return NextResponse.json({ error: "Sign in with an editor account to manage news." }, { status: 401 });
  }

  let input: { id?: unknown; status?: unknown };
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: "The request body is invalid." }, { status: 400 });
  }
  if (typeof input.id !== "string" || !["PUBLISHED", "DRAFT"].includes(String(input.status))) {
    return NextResponse.json({ error: "Choose a valid story status." }, { status: 400 });
  }

  const status = String(input.status);
  const article = await prisma.article.update({
    where: { id: input.id },
    data: {
      status,
      publishedAt: status === "PUBLISHED" ? new Date() : null,
      editoriallyReviewed: status === "PUBLISHED"
    },
    select: { id: true, status: true }
  });
  return NextResponse.json({ ok: true, article });
}
