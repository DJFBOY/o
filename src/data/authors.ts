import { Author } from "@/lib/types";

// DEMO DATA — for local development only. Replace with real bylines before launch.
export const authors: Author[] = [
  {
    slug: "mara-lindqvist",
    name: "Mara Lindqvist",
    bio: "Covers AI infrastructure and developer tools. Previously built data pipelines at a mid-size ad-tech company.",
    twitter: "https://x.com/example",
    linkedin: "https://linkedin.com/in/example"
  },
  {
    slug: "devon-okafor",
    name: "Devon Okafor",
    bio: "Writes about startups and the people funding them. Focused on go-to-market and early-stage traction.",
    linkedin: "https://linkedin.com/in/example"
  },
  {
    slug: "priya-ramaswamy",
    name: "Priya Ramaswamy",
    bio: "Runs hands-on product testing for the reviews desk. Former QA lead at an enterprise SaaS company.",
    website: "https://example.com"
  }
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
