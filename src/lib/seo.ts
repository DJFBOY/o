import { Metadata } from "next";
import { Article, Author } from "./types";
import { SITE } from "./constants";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${SITE.url}${opts.path}`;
  const title = opts.path === "/" ? SITE.name : `${opts.title} — ${SITE.name}`;
  return {
    title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: opts.description,
      url,
      siteName: SITE.name,
      type: opts.type ?? "website",
      images: opts.imageUrl ? [{ url: opts.imageUrl }] : undefined
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: opts.description,
      images: opts.imageUrl ? [opts.imageUrl] : undefined
    }
  };
}

// Article structured data (schema.org/Article). We only ever encode facts the
// CMS actually has — no fabricated ratings, review counts, or aggregate scores.
export function articleJsonLd(article: Article, author?: Author) {
  return {
    "@context": "https://schema.org",
    "@type": article.type === "REVIEW" ? "Review" : "NewsArticle",
    headline: article.headline,
    description: article.deck ?? article.metaDescription ?? "",
    image: article.featuredImageUrl ? [article.featuredImageUrl] : undefined,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: author
      ? { "@type": "Person", name: author.name, url: `${SITE.url}/authors/${author.slug}` }
      : undefined,
    publisher: organizationJsonLd(),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/${article.category}/${article.slug}` }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`
    }))
  };
}
