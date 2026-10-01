import { MetadataRoute } from "next";
import { listPublished } from "@/lib/content";
import { CATEGORIES, SITE } from "@/lib/constants";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await listPublished();

  const staticPages = ["", "/news", "/ai", "/startups", "/terms", "/editorial-policy"].map(
    (path) => ({ url: `${SITE.url}${path}`, lastModified: new Date() })
  );

  const categoryPages = CATEGORIES.map((c) => ({
    url: `${SITE.url}/${c.slug}`,
    lastModified: new Date()
  }));

  const articlePages = articles.map((a) => ({
    url: `${SITE.url}/${a.category}/${a.slug}`,
    lastModified: new Date(a.updatedAt ?? a.publishedAt)
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
