"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const input =
    "mt-2 w-full rounded-lg border border-white/12 bg-carbon px-3.5 py-2.5 font-body text-[15px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-fuel";
  const label =
    "block font-label text-[11px] uppercase tracking-[0.16em] text-chrome";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign-in failed.");
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2.5">
          <span className="font-display text-[16px] font-black uppercase tracking-[0.04em] text-white">
            LineHaul Station
          </span>
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-fuel">
            Admin
          </span>
        </div>
        <h1 className="mt-5 font-display text-[clamp(26px,4vw,36px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white">
          Sign in
        </h1>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div>
            <label className={label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={input}
            />
          </div>
          <div>
            <label className={label} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={input}
            />
          </div>

          {error && (
            <p className="font-body text-[13px] text-red-300">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-btn bg-fuel px-7 py-3 font-label text-[11px] uppercase tracking-[0.16em] text-ink transition hover:brightness-110 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
