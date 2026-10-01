import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { REXOL_URL, SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: SITE.tagline,
  description: SITE.description,
  path: "/"
});

const sections = [
  { title: "News", description: "AI picks and sample stories by category.", href: "/news" },
  { title: "AI", description: "Preview the Rexol.World discovery directory.", href: "/ai" },
  { title: "Startup", description: "List a startup on Rexol.World.", href: "/startups" }
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="py-14 sm:py-20">
        <p className="text-sm font-medium text-cobalt">AI discovery, made simpler</p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-[1.04] tracking-tight text-ink sm:text-7xl">
          Find the AI that fits the work.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
          RexolNews shares category-based AI picks and startup stories from Rexol.World.
        </p>
        <a href={REXOL_URL} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex bg-cobalt px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink">
          Visit Rexol.World <span aria-hidden="true" className="ml-3">↗</span>
        </a>
      </section>

      <nav aria-label="Explore RexolNews" className="mb-16 grid border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-line">
        {sections.map((section) => (
          <Link key={section.href} href={section.href} className="group border-b border-line px-1 py-6 last:border-0 sm:border-0 sm:px-5 first:sm:pl-0 last:sm:pr-0">
            <h2 className="font-serif text-2xl font-semibold text-ink group-hover:text-cobalt">{section.title}<span aria-hidden="true" className="ml-2 text-cobalt">↗</span></h2>
            <p className="mt-2 text-sm text-graphite">{section.description}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
}
