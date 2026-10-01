import { Article } from "@/lib/types";

// DEMO DATA — placeholder content for local development only.
// None of the companies, products, or figures below are real; do not treat
// this file as source content. Replace with real, edited articles before launch.

export const articles: Article[] = [
  {
    slug: "northwind-labs-ships-realtime-voice-model",
    category: "news",
    type: "NEWS",
    status: "DRAFT",
    headline: "Northwind Labs ships a real-time voice model aimed at call centers",
    deck: "The release targets latency under 300ms, a threshold the company says makes AI agents usable for live phone support.",
    featuredImageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1600",
    featuredImageAlt: "Audio waveform on a dark studio monitor",
    authorSlug: "mara-lindqvist",
    tags: ["voice-ai", "enterprise", "product-launch"],
    editoriallyReviewed: true,
    publishedAt: "2026-09-18T09:00:00.000Z",
    bodyMarkdown: `## What shipped

Northwind Labs released its third-generation voice model on Thursday, positioning it for call-center and support-line deployments rather than consumer chat.

The company says median response latency is under 300 milliseconds in its own benchmarks — a company claim we have not independently verified.

## Why it matters

Latency has been the practical blocker for voice agents in live phone support; most existing models add enough delay that callers notice the pause. If Northwind's numbers hold up under third-party testing, it narrows the gap with human agents for simple, scripted calls.

## What we don't know yet

Independent benchmarks aren't available yet. We've asked Northwind for API access to test the claim directly and will update this piece if we're able to run our own numbers.`,
    sources: [
      {
        publication: "Northwind Labs press release",
        url: "https://example.com/press/northwind-voice-model",
        claimType: "COMPANY_CLAIM"
      }
    ]
  },
  {
    slug: "eu-ai-office-opens-comment-period-model-reporting",
    category: "news",
    type: "NEWS",
    status: "DRAFT",
    headline: "EU's AI Office opens comment period on model-reporting rules",
    deck: "The draft would require large model providers to disclose training compute and safety evaluations on a rolling basis.",
    featuredImageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1600",
    featuredImageAlt: "European Union flags outside a government building",
    authorSlug: "devon-okafor",
    tags: ["policy", "regulation", "eu"],
    editoriallyReviewed: true,
    publishedAt: "2026-09-15T11:30:00.000Z",
    bodyMarkdown: `The European Union's AI Office opened a 60-day comment period this week on draft rules that would require providers of general-purpose models above a compute threshold to file recurring disclosures.

Industry groups have asked for a longer transition window; civil-society commenters have pushed for lower thresholds. Both are positions, not settled facts, and we'll link the underlying filings once they're public.`,
    sources: [
      {
        publication: "Example Policy Wire",
        url: "https://example.com/policy/eu-ai-office-comment-period",
        claimType: "REPORTED_FACT"
      }
    ]
  },
  {
    slug: "inside-the-context-window-arms-race",
    category: "ai",
    type: "ANALYSIS",
    status: "DRAFT",
    headline: "Inside the context-window arms race, and why bigger isn't the whole story",
    deck: "Providers keep publishing larger context windows. Retrieval quality, not raw size, increasingly decides which ones are usable.",
    featuredImageUrl: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1600",
    featuredImageAlt: "Rows of server racks lit in blue",
    authorSlug: "mara-lindqvist",
    tags: ["llm", "infrastructure", "explainer"],
    editoriallyReviewed: true,
    publishedAt: "2026-09-10T08:00:00.000Z",
    updatedAt: "2026-09-12T14:00:00.000Z",
    bodyMarkdown: `## The headline numbers

Context-window sizes have grown quickly, and vendors lead with the figure because it's easy to compare. It's also an incomplete measure of what a model can actually use.

## Why recall degrades before the limit

In practice, most models show measurable recall loss well before they hit their stated maximum, particularly for information placed in the middle of a long input. This is sometimes called "lost in the middle," and it's an active area of published research rather than a settled constant — the exact degradation curve varies by model and task.

## What to evaluate instead

For a team choosing a model for a retrieval-heavy workload, a needle-in-haystack style test against your own documents will tell you more than the advertised window size. We'd treat any vendor's window figure as an upper bound, not a working figure.

## Editorial note

This is our analysis, informed by publicly available benchmarks and our own reading of the model documentation — not a claim about any single vendor's specific performance number, which we have not independently tested here.`,
    sources: [
      {
        publication: "Example Research Digest",
        url: "https://example.com/research/long-context-recall",
        claimType: "ANALYST_OPINION"
      }
    ]
  },
  {
    slug: "clearline-raises-seed-round-ai-qa-testing",
    category: "startups",
    type: "STARTUP_SPOTLIGHT",
    status: "DRAFT",
    headline: "Clearline wants to replace manual QA scripts with an AI agent that watches your app",
    deck: "The three-person team spent a year at a QA outsourcing firm before building a tool aimed at the same problem.",
    featuredImageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600",
    featuredImageAlt: "Small team working around a laptop in an office",
    authorSlug: "devon-okafor",
    tags: ["startup-spotlight", "qa", "seed-stage"],
    editoriallyReviewed: true,
    publishedAt: "2026-09-08T13:00:00.000Z",
    bodyMarkdown: `## The founding story

Clearline's founders met while running manual regression tests for enterprise clients. They say the repetitive, script-writing part of the job was the easiest to automate — and the easiest to get wrong if the automation isn't watched carefully.

## What the product does

The tool records a human tester's session once, then generates variations to re-run against future builds, flagging visual and behavioral differences for a person to confirm. It does not auto-approve changes.

## What we asked, and couldn't verify

The founders shared funding and customer figures for this piece; we're not publishing specific numbers here because we could not independently confirm them before deadline. We'll update this piece if that changes.

## Our take

The idea is not new — AI-assisted QA has several entrants — but the founders' focus on keeping a human in the approval loop is a reasonable answer to the false-positive problem that's dogged earlier tools in this space.`
  },
  {
    slug: "roamline-brief-pilots-two-carriers",
    category: "startups",
    type: "NEWS",
    status: "DRAFT",
    headline: "Logistics startup Roamline signs pilot deals with two regional carriers",
    deck: "The deals are pilots, not full contracts — a distinction the company was careful to make on the record.",
    featuredImageUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600",
    featuredImageAlt: "Delivery trucks parked at a logistics depot",
    authorSlug: "devon-okafor",
    tags: ["logistics", "funding"],
    editoriallyReviewed: true,
    publishedAt: "2026-09-05T10:00:00.000Z",
    bodyMarkdown: `Roamline confirmed two pilot agreements with regional freight carriers to test its route-planning model against dispatchers' existing tools over a 90-day window.

A company spokesperson described the arrangement as a pilot with an option to expand, not a signed long-term contract — a distinction worth keeping in the reporting, since pilots frequently don't convert.`
  },
  {
    slug: "tested-three-ai-note-takers-for-back-to-back-meetings",
    category: "reviews",
    type: "TESTED",
    status: "DRAFT",
    headline: "We ran three AI meeting note-takers through a week of back-to-back calls",
    deck: "Our testing focused on one failure mode: what happens when two people talk over each other.",
    featuredImageUrl: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1600",
    featuredImageAlt: "Laptop on a table during a video call",
    authorSlug: "priya-ramaswamy",
    tags: ["productivity", "tested", "meetings"],
    editoriallyReviewed: true,
    publishedAt: "2026-09-02T09:00:00.000Z",
    bodyMarkdown: `## Methodology

We used the same three note-taking tools across a real work week — 14 meetings, a mix of one-on-ones and group calls — and scored each transcript for speaker attribution accuracy and summary usefulness. Scores below are our own, from this specific test, not vendor-supplied benchmarks.

## What held up

All three tools produced readable summaries for calm, single-speaker segments. Differences showed up almost entirely in overlapping speech and fast topic changes.

## Where they struggled

Overlapping speech was the clearest failure mode across all three tools we tested; attribution errors clustered in the first 30 seconds of a call, before each tool had enough audio to distinguish voices.

## Our verdict

None of the three we tested handled crosstalk perfectly. For teams where meetings are mostly one person talking at a time, any of the three we tried would likely be usable; teams with frequent overlapping discussion should expect to correct attribution manually.`
  },
  {
    slug: "how-to-set-up-a-local-first-ai-writing-workflow",
    category: "guides",
    type: "GUIDE",
    status: "DRAFT",
    headline: "How to set up a local-first AI writing workflow, step by step",
    deck: "For writers who want drafting help without sending every paragraph to a hosted API.",
    featuredImageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1600",
    featuredImageAlt: "Person typing on a laptop at a wooden desk",
    authorSlug: "mara-lindqvist",
    tags: ["guide", "local-ai", "writing"],
    editoriallyReviewed: true,
    publishedAt: "2026-08-28T09:00:00.000Z",
    bodyMarkdown: `## What you'll need

A laptop from the last few years with at least 16GB of memory is enough for the smaller open-weight models this guide uses. You won't need a dedicated GPU for the setup below, though generation will be slower without one.

## Step 1: pick a runner

We're using a local model runner in this guide because it handles model downloads and updates for you, rather than requiring manual weight management.

## Step 2: choose a model sized to your machine

Start with a smaller model to confirm the pipeline works end to end before downloading anything larger — it's a faster way to catch a broken setup.

## Step 3: connect it to your editor

Most local runners expose an API on your own machine that mimics a hosted provider's format, which means many existing editor plugins will work by pointing them at your local address instead of a hosted one.

## Step 4: keep a human editing pass

Treat local drafts the same way you'd treat a hosted model's output: as a first pass that needs your own edit before it's finished.`
  },
  {
    slug: "best-ai-coding-tools-2026",
    category: "best",
    type: "BEST_OF",
    status: "DRAFT",
    headline: "The best AI coding tools in 2026, tested against real pull requests",
    deck: "We ran each tool against the same set of open-source issues and graded the diffs, not the demos.",
    featuredImageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600",
    featuredImageAlt: "Code editor showing a diff view",
    authorSlug: "priya-ramaswamy",
    tags: ["best-of", "coding", "developer-tools"],
    editoriallyReviewed: true,
    publishedAt: "2026-08-20T09:00:00.000Z",
    updatedAt: "2026-09-14T09:00:00.000Z",
    bodyMarkdown: `## How we tested

We assigned each tool the same five open-source issues, ranging from a small bug fix to a multi-file refactor, and reviewed the resulting pull requests the way we'd review a junior engineer's work: for correctness, test coverage, and whether we'd merge it without changes.

## What separated the top results

The clearest gap wasn't code style — it was whether a tool would ask a clarifying question on an underspecified issue versus guessing and shipping a plausible-looking diff.

## A note on pricing and plans

Pricing changes often. Figures below are what we verified on the date noted for each product; check the official page before you buy.`,
    bestOfProducts: [
      {
        name: "CodeForge",
        description: "An IDE-integrated agent focused on multi-file refactors with an explicit plan-then-edit step.",
        officialUrl: "https://example.com/codeforge",
        pricing: "From $20/mo per seat",
        hasFreePlan: true,
        keyFeatures: ["Plan-before-edit mode", "Multi-file refactor support", "Local diff review before commit"],
        strengths: ["Asked clarifying questions on two of five underspecified issues", "Test coverage included in 4 of 5 PRs"],
        limitations: ["Slower than average on large repos", "Free plan capped at small file counts"],
        bestFor: "Teams doing frequent multi-file refactors",
        testingNotes: "Scored highest on our multi-file refactor task; weakest on the pure bug-fix task.",
        lastVerifiedAt: "2026-09-14T00:00:00.000Z"
      },
      {
        name: "Pairwise",
        description: "A lightweight autocomplete-first assistant with an optional chat panel for larger asks.",
        officialUrl: "https://example.com/pairwise",
        pricing: "Free for individuals; team plans from $12/mo",
        hasFreePlan: true,
        keyFeatures: ["Inline autocomplete", "Chat-based multi-file edits", "Editor plugin for major IDEs"],
        strengths: ["Fastest response time in our test set", "Best autocomplete acceptance rate"],
        limitations: ["Struggled with the multi-file refactor task", "No built-in test generation"],
        bestFor: "Individual developers who want fast inline suggestions",
        testingNotes: "Best pure autocomplete experience; weakest on tasks needing repo-wide context.",
        lastVerifiedAt: "2026-09-14T00:00:00.000Z"
      },
      {
        name: "Scaffold",
        description: "A CLI-first tool built around generating and running tests alongside code changes.",
        officialUrl: "https://example.com/scaffold",
        pricing: "Usage-based, no free tier",
        hasFreePlan: false,
        keyFeatures: ["Test generation alongside diffs", "CLI and CI integration", "Change-risk scoring"],
        strengths: ["Only tool that generated new tests unprompted", "Clear CI integration"],
        limitations: ["No free tier to trial before buying", "No IDE plugin at time of testing"],
        bestFor: "Teams that want AI changes gated behind generated tests",
        testingNotes: "Change-risk scores lined up with our own manual review in 4 of 5 cases.",
        needsVerification: true,
        lastVerifiedAt: "2026-09-10T00:00:00.000Z"
      }
    ],
    sources: [
      {
        publication: "In-house testing",
        url: "https://example.com/editorial-policy",
        claimType: "EDITORIAL_ANALYSIS"
      }
    ]
  },
  {
    slug: "review-fieldnote-transcription-earpiece",
    category: "reviews",
    type: "REVIEW",
    status: "DRAFT",
    headline: "Fieldnote's transcription earpiece is good at one thing and mediocre at everything else",
    deck: "Two weeks with the $179 wearable transcriber, in quiet rooms and loud ones.",
    featuredImageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600",
    featuredImageAlt: "Close-up of a small wireless earpiece",
    authorSlug: "priya-ramaswamy",
    tags: ["review", "hardware", "transcription"],
    editoriallyReviewed: true,
    publishedAt: "2026-08-15T09:00:00.000Z",
    bodyMarkdown: `## What it's for

Fieldnote is a single wireless earpiece paired with a phone app, positioned for reporters and researchers who want a hands-free way to capture and transcribe conversations.

## Quiet-room performance

In a quiet office, transcription accuracy was close to what we'd expect from a good phone-based recorder app, with the advantage of not needing to hold a phone up.

## Where it fell apart

In a room with background music and overlapping voices, the transcript degraded noticeably, and speaker labels became unreliable partway through our test conversation.

## Battery and comfort

Battery life matched the advertised figure in our testing. Comfort over a full day was middling — most testers on our team needed to remove it periodically.

## Verdict

Fine for one-on-one interviews in controlled settings; not a replacement for a dedicated recorder in louder, group settings.`
  }
];

export function getPublishedArticles(): Article[] {
  return articles.filter((a) => a.status === "PUBLISHED");
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug && a.status === "PUBLISHED");
}

export function getArticlesByCategory(category: string): Article[] {
  return getPublishedArticles().filter((a) => a.category === category);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return getPublishedArticles()
    .filter(
      (a) =>
        a.slug !== article.slug &&
        (a.category === article.category || a.tags.some((t) => article.tags.includes(t)))
    )
    .slice(0, limit);
}
