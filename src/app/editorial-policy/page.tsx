import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Editorial Policy",
  description: `How ${SITE.name} produces, sources, and corrects its reporting.`,
  path: "/editorial-policy"
});

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-serif text-3xl font-semibold text-ink">Editorial Policy</h1>
      <div className="article-body mt-8">
        <h2>How articles are produced</h2>
        <p>
          Every article has a named author and, before publication, a second editorial review. We
          mark articles that used AI drafting assistance internally and always require a human edit
          and fact-check pass before anything goes live — an AI draft is never published as-is.
        </p>
        <h2>How we handle sources</h2>
        <p>
          We distinguish reported fact, company claims, analyst opinion, and our own editorial
          analysis, and we link to primary sources where they exist. We don't copy or republish
          other outlets' reporting — where a story originates elsewhere, we credit it and add our
          own reporting, testing, or analysis on top.
        </p>
        <h2>Testing methodology</h2>
        <p>
          For reviews and best-of comparisons, we state upfront what we tested, how, and against
          what criteria. We don't publish rankings, scores, or claims about products we haven't
          actually used. Where a detail couldn't be independently verified, we say so in the piece
          rather than presenting it as confirmed.
        </p>
        <h2>Corrections policy</h2>
        <p>
          When we get something wrong, we fix it and note the correction — including the date and
          what changed — directly on the article. We don't quietly edit published facts.
        </p>
        <h2>Sponsored content and affiliate links</h2>
        <p>
          Any sponsored article is labeled "Sponsored" at the top and is written or reviewed by our
          editorial team regardless of the sponsor. Where we use affiliate links, that's disclosed
          on the article. Sponsorship never determines a review's verdict or a best-of ranking.
        </p>
      </div>
    </div>
  );
}
