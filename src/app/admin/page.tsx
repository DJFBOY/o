import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ArticleQueueActions } from "@/components/ArticleQueueActions";

export default async function AdminDashboard({ searchParams }: { searchParams: { submitted?: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/admin/login");

  const articles = await prisma.article.findMany({
    orderBy: { createdAt: "desc" },
    take: 12,
    include: { category: true }
  });

  return (
    <main className="mx-auto min-h-[70vh] max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-5 border-b border-line pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-cobalt">RexolNews · Admin desk</p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-ink">Newsroom</h1>
          <p className="mt-2 text-sm text-graphite">Signed in as {session.user.email}</p>
        </div>
        <Link href="/admin/news/new" className="inline-flex w-fit items-center bg-cobalt px-5 py-3 text-sm font-semibold text-white hover:bg-ink">
          <span aria-hidden="true" className="mr-2 text-lg">＋</span> Add news
        </Link>
      </div>

      <section className="mt-8" aria-labelledby="submissions-heading">
        {searchParams.submitted === "1" && (
          <p role="status" className="mb-5 border-l-2 border-cobalt bg-white px-4 py-3 text-sm text-ink">News sent to the editorial review queue.</p>
        )}
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="submissions-heading" className="font-serif text-2xl font-semibold text-ink">Recent submissions</h2>
          <span className="text-sm text-graphite">{articles.length} shown</span>
        </div>
        {articles.length ? (
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {articles.map((article) => (
              <li key={article.id} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-medium text-ink">{article.headline}</p>
                  <p className="mt-1 text-xs text-graphite">{article.category.name} · {new Date(article.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-fit border border-line px-2.5 py-1 text-xs text-graphite">{article.status.replaceAll("_", " ")}</span>
                  <ArticleQueueActions id={article.id} status={article.status} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 border border-dashed border-line p-8 text-sm text-graphite">No stories have been submitted yet. Add the first news item to start your editorial queue.</p>
        )}
      </section>
    </main>
  );
}
