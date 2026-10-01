import { buildMetadata } from "@/lib/seo";
import { REXOL_URL } from "@/lib/constants";
import { UseCaseExplorer } from "@/components/UseCaseExplorer";

export const metadata = buildMetadata({
  title: "Rexol.World preview",
  description: "A visual preview of Rexol.World’s AI discovery homepage.",
  path: "/ai"
});

export default function AiPreviewPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-medium text-cobalt">Rexol.World · preview</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink sm:text-6xl">A first look at AI discovery.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite">
          This demo previews the main Rexol.World experience. The live site helps you discover AI
          tools and explore startup listings.
        </p>
      </header>

      <section className="mt-10 overflow-hidden border border-line border-t-4 border-t-ink bg-white text-ink shadow-xl" aria-label="Rexol.World homepage demo preview">
        <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-8">
          <span className="flex items-center gap-2 font-serif text-xl font-semibold"><span className="grid h-8 w-8 place-items-center bg-cobalt text-lg text-white">֎</span>Rexol</span>
          <span className="hidden text-xs text-graphite sm:inline">AI Discovery Engine</span>
          <span className="border border-ink px-3 py-1.5 text-xs font-medium">Sign in</span>
        </div>
        <div className="bg-white px-5 py-12 text-center sm:px-8 sm:py-16">
          <p className="text-xs font-semibold text-cobalt">AI DISCOVERY ENGINE</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-5xl">Discover the AI you need</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-graphite sm:text-base">
            Find useful AI tools for your work, interests, and ideas.
          </p>
          <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 border border-line bg-white p-2 text-left shadow-sm">
            <span aria-hidden="true" className="pl-2 text-cobalt">⌕</span>
            <span className="flex-1 py-2 text-sm text-graphite">What do you want to do with AI?</span>
            <span className="bg-cobalt px-4 py-2.5 text-sm font-semibold text-white">Discover</span>
          </div>
          <p className="mt-7 text-xs text-graphite">Browse 34 use cases across six categories below</p>
        </div>
        <div className="grid border-t border-line bg-[#fafafa] sm:grid-cols-3">
          <div className="p-5 sm:px-8"><p className="text-sm font-semibold">AI tools</p><p className="mt-1 text-xs text-graphite">Browse by what you need to do</p></div>
          <div className="border-t border-line p-5 sm:border-l sm:border-t-0 sm:px-8"><p className="text-sm font-semibold">Categories</p><p className="mt-1 text-xs text-graphite">Explore tools across different kinds of work</p></div>
          <div className="border-t border-line p-5 sm:border-l sm:border-t-0 sm:px-8"><p className="text-sm font-semibold">Startups</p><p className="mt-1 text-xs text-graphite">Discover new projects and products</p></div>
        </div>
      </section>

      <div className="mt-6 flex flex-col gap-3 text-sm text-graphite sm:flex-row sm:items-center sm:justify-between">
        <p>Static preview for RexolNews. Use the live site for current listings and working features.</p>
        <a href={REXOL_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-cobalt hover:underline">Open Rexol.World <span aria-hidden="true">↗</span></a>
      </div>

      <UseCaseExplorer />
    </div>
  );
}
