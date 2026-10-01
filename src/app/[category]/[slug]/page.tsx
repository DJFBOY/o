import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticle, related } from "@/lib/content";
import { CATEGORIES, SITE } from "@/lib/constants";
import { ArticleBody } from "@/components/ArticleBody";
import { TableOfContents } from "@/components/TableOfContents";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ShareButtons } from "@/components/ShareButtons";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Newsletter } from "@/components/Newsletter";
import { buildMetadata, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { category: string; slug: string } }) {
  const data = await getArticle(params.slug);
  if (!data) return {};
  const { article } = data;
  return buildMetadata({
    title: article.metaTitle ?? article.headline,
    description: article.metaDescription ?? article.deck ?? "",
    path: `/${article.category}/${article.slug}`,
    imageUrl: article.featuredImageUrl,
    type: "article"
  });
}

const TYPE_LABEL: Record<string, string> = {
  NEWS: "News",
  REVIEW: "Review",
  BEST_OF: "Best Of",
  GUIDE: "Guide",
  ANALYSIS: "Analysis",
  STARTUP_SPOTLIGHT: "Startup Spotlight",
  TESTED: "Tested"
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function ArticlePage({
  params
}: {
  params: { category: string; slug: string };
}) {
  const data = await getArticle(params.slug);
  if (!data || data.article.category !== params.category) notFound();
  const { article, author, readingTimeMinutes } = data;

  const relatedArticles = await related(article);
  const categoryName = CATEGORIES.find((c) => c.slug === article.category)?.name ?? article.category;
  const url = `${SITE.url}/${article.category}/${article.slug}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article, author)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: categoryName, path: `/${article.category}` },
              { name: article.headline, path: `/${article.category}/${article.slug}` }
            ])
          )
        }}
      />

      <header>
        <div className="flex items-center gap-3 text-sm">
          <Link href={`/${article.category}`} className="font-medium text-signal hover:underline">
            {categoryName}
          </Link>
          <span className="text-graphite">·</span>
          <span className="text-graphite">{TYPE_LABEL[article.type]}</span>
        </div>

        <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {article.headline}
        </h1>
        {article.deck && <p className="mt-4 text-xl text-graphite">{article.deck}</p>}

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-graphite">
          {author && (
            <Link href={`/authors/${author.slug}`} className="font-medium text-ink hover:underline">
              {author.name}
            </Link>
          )}
          <span>{formatDate(article.publishedAt)}</span>
          {article.updatedAt && article.updatedAt !== article.publishedAt && (
            <span>Updated {formatDate(article.updatedAt)}</span>
          )}
          <span>{readingTimeMinutes} min read</span>
        </div>
      </header>

      {article.featuredImageUrl && (
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden bg-line">
          <Image
            src={article.featuredImageUrl}
            alt={article.featuredImageAlt ?? ""}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="mt-8">
        <TableOfContents markdown={article.bodyMarkdown} />
      </div>

      <ArticleBody markdown={article.bodyMarkdown} />

      {article.type === "BEST_OF" && article.bestOfProducts && article.bestOfProducts.length > 0 && (
        <ComparisonTable products={article.bestOfProducts} />
      )}

      {article.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="border border-line px-2.5 py-1 text-xs text-graphite">
              {tag}
            </span>
          ))}
        </div>
      )}

      {article.sources && article.sources.length > 0 && (
        <section className="rule mt-10 border-t pt-6">
          <h2 className="text-sm font-medium text-graphite">Sources</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {article.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-cobalt hover:underline">
                  {s.publication}
                </a>
                <span className="ml-2 text-xs text-graphite">
                  ({s.claimType.replace("_", " ").toLowerCase()})
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {article.corrections && article.corrections.length > 0 && (
        <section className="mt-6 border-l-2 border-alert pl-4">
          <h2 className="text-sm font-medium text-alert">Corrections</h2>
          {article.corrections.map((c) => (
            <p key={c.correctedAt} className="mt-2 text-sm text-graphite">
              <span className="font-medium">{formatDate(c.correctedAt)}:</span> {c.explanation}
            </p>
          ))}
        </section>
      )}

      <div className="rule mt-10 border-t pt-6">
        <ShareButtons url={url} title={article.headline} />
      </div>

      {author && (
        <section className="rule mt-10 border-t pt-6">
          <p className="text-sm font-medium text-graphite">About the author</p>
          <p className="mt-2 font-serif text-lg font-semibold text-ink">{author.name}</p>
          <p className="mt-1 text-sm text-graphite">{author.bio}</p>
        </section>
      )}

      <div className="-mx-4 mt-16 sm:-mx-6">
        <Newsletter source="article" />
      </div>

      <RelatedArticles articles={relatedArticles} />
    </article>
  );
}
