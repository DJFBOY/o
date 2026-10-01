import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of use for ${SITE.name}.`,
  path: "/terms"
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold text-ink">Terms of Service</h1>
      <p className="mt-2 text-sm text-graphite">
        Placeholder draft — have this reviewed by a lawyer before publishing.
      </p>
      <div className="article-body mt-8">
        <h2>Use of content</h2>
        <p>
          Articles on {SITE.name} are for personal, non-commercial reading. Don't republish or scrape
          our content without permission — you're welcome to link to us and quote briefly with
          attribution.
        </p>
        <h2>Accuracy</h2>
        <p>
          We work to keep articles accurate and up to date, and we correct errors when we find them
          (see our <a href="/editorial-policy">editorial policy</a>). We can't guarantee every
          third-party claim we report on turns out to be true.
        </p>
        <h2>No professional advice</h2>
        <p>
          Nothing on this site is financial, legal, or medical advice. Product reviews and best-of
          rankings reflect our own testing and opinions at the time of publication.
        </p>
      </div>
    </div>
  );
}
