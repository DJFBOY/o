import { buildMetadata } from "@/lib/seo";
import { REXOL_URL } from "@/lib/constants";
import { useCaseGroups } from "@/data/use-cases";
import { listByCategory } from "@/lib/content";
import { StandardCard } from "@/components/ArticleCard";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "AI news by category",
  description: "Category-based AI picks and updates published by Rexol.World.",
  path: "/news"
});

export default async function NewsPage() {
  const publishedPicks = await listByCategory("news");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-medium text-cobalt">RexolNews · AI picks</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink sm:text-6xl">The best AI for the job you have.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite">
          Explore Rexol.World’s AI selections by category. RexolNews makes the directory easier to
          scan; the live listings and their latest details are on Rexol.World.
        </p>
        <a href={REXOL_URL} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex bg-cobalt px-5 py-3 text-sm font-semibold text-white hover:bg-ink">
          Browse AI picks on Rexol.World <span aria-hidden="true" className="ml-3">↗</span>
        </a>
      </header>

      <section className="mt-12 border-t border-line pt-7" aria-labelledby="latest-picks-heading">
        <p className="text-sm font-medium text-cobalt">RexolNews · 2026 directory guides</p>
        <h2 id="latest-picks-heading" className="mt-2 font-serif text-3xl font-semibold text-ink">Tools listed on Rexol.World</h2>
        <p className="mt-2 text-sm text-graphite">Each story summarizes a Rexol.World directory entry; these are not hands-on reviews or rankings.</p>
        <div className="mt-6 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {publishedPicks.map((article) => <StandardCard key={article.slug} article={article} />)}
        </div>
      </section>

      <section className="mt-14 border-t border-line" aria-labelledby="categories-heading">
        <div className="flex flex-col gap-2 border-b border-line py-5 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 id="categories-heading" className="font-serif text-2xl font-semibold text-ink">Browse by category</h2>
          <p className="text-sm text-graphite">Selections are published and maintained by Rexol.World.</p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
          {useCaseGroups.map((group) => (
            <li key={group.slug} className="flex items-center gap-3 border-b border-line py-4 sm:pr-6">
              <span className="text-xl" aria-hidden="true">{group.icon}</span>
              <div>
                <h3 className="font-medium text-ink">{group.group}</h3>
                <p className="mt-1 text-xs text-graphite">{group.items.length} use cases</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
