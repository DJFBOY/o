import readingTime from "reading-time";
import { Article } from "./types";
import {
  getPublishedArticles,
  getArticleBySlug as _getArticleBySlug,
  getArticlesByCategory as _getArticlesByCategory,
  getRelatedArticles as _getRelatedArticles
} from "@/data/articles";
import { getAuthor } from "@/data/authors";
import { rexolNewsArticles, rexolToolsRoundup } from "@/data/rexol-news";
import { prisma } from "@/lib/prisma";

// This module is the single seam between the site and its data source.
// Today it reads from src/data (seed content). To move to the database,
// replace the bodies below with Prisma queries — page components should
// not need to change.

function parseStringList(value: string) {
  try {
    const parsed: unknown = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function fromDatabase(row: any): Article {
  return {
    slug: row.slug,
    category: row.category.slug,
    type: row.type,
    status: row.status,
    headline: row.headline,
    deck: row.deck ?? undefined,
    bodyMarkdown: row.bodyMarkdown,
    featuredImageUrl: row.featuredImageUrl ?? undefined,
    featuredImageAlt: row.featuredImageAlt ?? undefined,
    authorSlug: row.author.slug,
    tags: row.tags.map((tag: { slug: string }) => tag.slug),
    sources: row.sources.map((source: any) => ({
      publication: source.publication,
      url: source.url,
      author: source.author ?? undefined,
      publishedAt: source.publishedAt?.toISOString(),
      claimType: source.claimType
    })),
    corrections: row.corrections.map((correction: any) => ({
      correctedAt: correction.correctedAt.toISOString(),
      explanation: correction.explanation
    })),
    bestOfProducts: row.bestOfProducts.map((product: any) => ({
      name: product.name,
      logoUrl: product.logoUrl ?? undefined,
      description: product.description,
      officialUrl: product.officialUrl,
      pricing: product.pricing ?? undefined,
      hasFreePlan: product.hasFreePlan,
      keyFeatures: parseStringList(product.keyFeatures),
      strengths: parseStringList(product.strengths),
      limitations: parseStringList(product.limitations),
      bestFor: product.bestFor ?? undefined,
      testingNotes: product.testingNotes ?? undefined,
      needsVerification: product.needsVerification,
      lastVerifiedAt: product.lastVerifiedAt?.toISOString()
    })),
    editoriallyReviewed: row.editoriallyReviewed,
    publishedAt: row.publishedAt?.toISOString() ?? row.createdAt.toISOString(),
    updatedAt: row.updatedAt?.toISOString(),
    metaTitle: row.metaTitle ?? undefined,
    metaDescription: row.metaDescription ?? undefined
  } as Article;
}

const articleInclude = {
  category: true,
  author: true,
  tags: true,
  sources: true,
  corrections: true,
  bestOfProducts: true
};

export async function listPublished(): Promise<Article[]> {
  const databaseRows = await prisma.article.findMany({ where: { status: "PUBLISHED" }, include: articleInclude });
  const all = [
    ...getPublishedArticles(),
    rexolToolsRoundup,
    ...rexolNewsArticles,
    ...databaseRows.map(fromDatabase)
  ];
  return all.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getArticle(slug: string) {
  const article = _getArticleBySlug(slug) ?? (slug === rexolToolsRoundup.slug ? rexolToolsRoundup : undefined) ?? rexolNewsArticles.find((item) => item.slug === slug) ?? (await prisma.article.findUnique({
    where: { slug, status: "PUBLISHED" },
    include: articleInclude
  }).then((row) => row ? fromDatabase(row) : undefined));
  if (!article) return null;
  const author = getAuthor(article.authorSlug);
  const stats = readingTime(article.bodyMarkdown);
  return { article, author, readingTimeMinutes: Math.max(1, Math.round(stats.minutes)) };
}

export async function listByCategory(category: string): Promise<Article[]> {
  const databaseRows = await prisma.article.findMany({
    where: { status: "PUBLISHED", category: { slug: category } },
    include: articleInclude
  });
  return [
    ..._getArticlesByCategory(category),
    ...(category === rexolToolsRoundup.category ? [rexolToolsRoundup] : []),
    ...rexolNewsArticles.filter((article) => article.category === category),
    ...databaseRows.map(fromDatabase)
  ].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function related(article: Article, limit = 3): Promise<Article[]> {
  const all = await listPublished();
  return all
    .filter((candidate) => candidate.slug !== article.slug && (
      candidate.category === article.category || candidate.tags.some((tag) => article.tags.includes(tag))
    ))
    .slice(0, limit);
}

export async function search(query: string): Promise<Article[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const all = await listPublished();
  return all.filter((a) => {
    const haystack = [a.headline, a.deck ?? "", a.category, ...a.tags, a.authorSlug]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
