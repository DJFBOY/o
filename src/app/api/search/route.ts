import { NextRequest, NextResponse } from "next/server";
import { search } from "@/lib/content";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q") ?? "";
  const results = await search(q);
  return NextResponse.json({
    query: q,
    count: results.length,
    results: results.map((a) => ({
      headline: a.headline,
      deck: a.deck,
      category: a.category,
      slug: a.slug,
      url: `/${a.category}/${a.slug}`
    }))
  });
}
