import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getNewsletterProvider } from "@/lib/newsletter-provider";

const prisma = new PrismaClient();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: { email?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email address is required" }, { status: 400 });
  }

  const provider = getNewsletterProvider();

  try {
    await prisma.newsletterSubscriber.upsert({
      where: { email },
      update: { unsubscribed: false },
      create: { email, source: body.source ?? "unknown", provider: provider.name }
    });
    await provider.subscribe(email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter signup failed", err);
    return NextResponse.json({ error: "Could not complete signup" }, { status: 500 });
  }
}
