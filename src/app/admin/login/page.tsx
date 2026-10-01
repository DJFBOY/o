"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirect: false
    });
    setPending(false);
    if (!result?.ok) {
      setError("Email or password is incorrect.");
      return;
    }
    const callbackUrl = new URLSearchParams(window.location.search).get("callbackUrl");
    router.replace(callbackUrl || "/admin");
    router.refresh();
  }

  return (
    <main className="mx-auto grid min-h-[70vh] max-w-6xl place-items-center px-4 py-12 sm:px-6">
      <section className="w-full max-w-md border border-line bg-white p-7 sm:p-9">
        <p className="text-sm font-medium text-cobalt">RexolNews · Admin</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-ink">Sign in to your desk</h1>
        <p className="mt-2 text-sm text-graphite">Use your RexolNews editor account to manage news submissions.</p>
        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <label className="block text-sm font-medium text-ink">
            Email
            <input name="email" type="email" autoComplete="username" required className="mt-2 w-full border border-line px-3 py-2.5 font-normal outline-none focus:border-cobalt" />
          </label>
          <label className="block text-sm font-medium text-ink">
            Password
            <input name="password" type="password" autoComplete="current-password" required className="mt-2 w-full border border-line px-3 py-2.5 font-normal outline-none focus:border-cobalt" />
          </label>
          {error && <p role="alert" className="text-sm text-alert">{error}</p>}
          <button disabled={pending} className="w-full bg-ink px-4 py-3 text-sm font-semibold text-white hover:bg-cobalt disabled:opacity-60">
            {pending ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </section>
    </main>
  );
}
