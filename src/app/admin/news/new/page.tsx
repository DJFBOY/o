"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useCaseGroups } from "@/data/use-cases";

export default function NewNewsPage() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("/api/admin/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not send this story.");
      router.push("/admin?submitted=1");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send this story.");
      setPending(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link href="/admin" className="text-sm text-cobalt hover:underline">← Back to newsroom</Link>
      <header className="mt-5 border-b border-line pb-6">
        <p className="text-sm font-medium text-cobalt">Admin desk · News</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold text-ink">Add a news story</h1>
        <p className="mt-2 text-sm text-graphite">Send an AI pick to the editorial queue. It will be marked for review before publication.</p>
      </header>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <label className="block text-sm font-medium text-ink">
          Headline
          <input name="headline" required maxLength={180} placeholder="What should readers know?" className="mt-2 w-full border border-line bg-white px-3 py-3 font-normal outline-none focus:border-cobalt" />
        </label>
        <label className="block text-sm font-medium text-ink">
          Category
          <select name="useCase" required defaultValue="" className="mt-2 w-full border border-line bg-white px-3 py-3 font-normal outline-none focus:border-cobalt">
            <option value="" disabled>Choose a use case</option>
            {useCaseGroups.map((group) => (
              <optgroup key={group.slug} label={group.group}>
                {group.items.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
              </optgroup>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-ink">
          Summary
          <textarea name="deck" required maxLength={300} rows={3} placeholder="A short explanation of why this AI pick matters." className="mt-2 w-full border border-line bg-white px-3 py-3 font-normal outline-none focus:border-cobalt" />
        </label>
        <label className="block text-sm font-medium text-ink">
          Story notes
          <textarea name="bodyMarkdown" required rows={8} placeholder="Add your reporting, context, and what makes this pick useful." className="mt-2 w-full border border-line bg-white px-3 py-3 font-normal outline-none focus:border-cobalt" />
        </label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium text-ink">
            AI product website
            <input name="productUrl" type="url" required placeholder="https://example.com" className="mt-2 w-full border border-line bg-white px-3 py-3 font-normal outline-none focus:border-cobalt" />
          </label>
          <label className="block text-sm font-medium text-ink">
            Source publication
            <input name="sourcePublication" required maxLength={100} placeholder="Company site or publication" className="mt-2 w-full border border-line bg-white px-3 py-3 font-normal outline-none focus:border-cobalt" />
          </label>
        </div>
        {error && <p role="alert" className="text-sm text-alert">{error}</p>}
        <div className="flex flex-wrap items-center gap-4 border-t border-line pt-5">
          <button disabled={pending} className="bg-cobalt px-5 py-3 text-sm font-semibold text-white hover:bg-ink disabled:opacity-60">
            {pending ? "Sending…" : "Send news for review"}
          </button>
          <Link href="/admin" className="text-sm text-graphite hover:text-ink">Cancel</Link>
        </div>
      </form>
    </main>
  );
}
