import { notFound } from "next/navigation";
import { StandardCard } from "@/components/ArticleCard";
import { listByCategory } from "@/lib/content";
import { CATEGORIES } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return CATEGORIES
    .filter(({ slug }) => !["news", "ai", "startups"].includes(slug))
    .map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = CATEGORIES.find(({ slug }) => slug === params.category);
  if (!category) return {};
  return buildMetadata({
    title: category.name,
    description: category.description,
    path: `/${category.slug}`
  });
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const category = CATEGORIES.find(({ slug }) => slug === params.category);
  if (!category) notFound();

  const articles = await listByCategory(category.slug);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-8 border-b border-line pb-6">
        <h1 className="font-serif text-4xl font-semibold text-ink">{category.name}</h1>
        <p className="mt-2 max-w-2xl text-graphite">{category.description}</p>
      </header>
      {articles.length ? (
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => <StandardCard key={article.slug} article={article} />)}
        </div>
      ) : (
        <p className="py-10 text-graphite">No stories in this section yet.</p>
      )}
    </section>
  );
}
