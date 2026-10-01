import { CategoryDef } from "./types";

// PLACEHOLDER BRAND — rename freely; this is the only place the name is defined.
export const SITE = {
  name: "RexolNews",
  tagline: "Find the right AI for the work.",
  description: "Category-based AI picks and updates from RexolNews, published by Rexol.World.",
  url: "https://rexol.world",
  twitter: "@rexolworld",
  locale: "en_US"
};

export const REXOL_URL = "https://rexol.world/";

export const CATEGORIES: CategoryDef[] = [
  { slug: "news", name: "News", description: "AI and technology news, as it happens." },
  { slug: "ai", name: "AI", description: "Models, research, and the companies building them." },
  { slug: "tools", name: "Tools", description: "AI tools and product discovery." },
  { slug: "startups", name: "Startups", description: "Startup news, spotlights, and founder stories." },
  { slug: "reviews", name: "Reviews", description: "Hands-on reviews of AI products and tools." },
  { slug: "guides", name: "Guides", description: "Practical, step-by-step AI guides." },
  { slug: "analysis", name: "Analysis", description: "Long-form original analysis." },
  { slug: "best", name: "Best Of", description: "Tested, comparative best-of roundups." }
];

export const NAV_LINKS = [
  { href: "/news", label: "News" },
  { href: "/ai", label: "AI" },
  { href: "/startups", label: "Startup" },
  { href: "/ai#use-cases-heading", label: "How Can I..." }
];
