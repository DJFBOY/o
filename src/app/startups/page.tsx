import { buildMetadata } from "@/lib/seo";
import { REXOL_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "List your startup",
  description: "Submit your startup to Rexol.World for review and a chance to be listed.",
  path: "/startups"
});

export default function StartupsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="grid gap-10 border-b border-line pb-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <p className="text-sm font-medium text-cobalt">For founders · Rexol.World</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-ink sm:text-6xl">Give your startup a chance to be discovered.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite">
            Submit your product to Rexol.World. Startup listings are reviewed before they appear in
            the directory, giving new teams a route to reach people exploring AI and technology.
          </p>
          <a href={REXOL_URL} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex bg-cobalt px-5 py-3 text-sm font-semibold text-white hover:bg-ink">
            Add your startup on Rexol.World <span aria-hidden="true" className="ml-3">↗</span>
          </a>
        </div>
        <aside className="border-l-2 border-cobalt bg-white/60 p-6">
          <p className="font-mono text-xs text-cobalt">HOW IT WORKS</p>
          <ol className="mt-5 space-y-4 text-sm text-graphite">
            <li><span className="mr-3 font-semibold text-ink">01</span>Open Rexol.World and sign in.</li>
            <li><span className="mr-3 font-semibold text-ink">02</span>Submit your startup details for review.</li>
            <li><span className="mr-3 font-semibold text-ink">03</span>Rexol reviews submissions before listing.</li>
          </ol>
        </aside>
      </section>
      <section className="grid gap-6 py-9 sm:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-ink">Built for early ideas, too</h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-graphite">The live Rexol directory offers a free basic startup listing. Check Rexol.World for current eligibility and listing options.</p>
        </div>
        <div className="sm:justify-self-end sm:text-right">
          <a href={REXOL_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-cobalt hover:underline">Go to Rexol.World <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  );
}
