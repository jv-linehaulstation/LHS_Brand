"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Slim footer newsletter capture (Luxe footer "Newsletter" column) — email +
 * Subscribe. Posts to the same GHL webhook the Join form uses (tagged
 * newsletter) when configured; always confirms to the user. Distinct, lighter
 * intent than the §12 Join OneHome form.
 */
export default function NewsletterForm({ accent = "#F07820" }: { accent?: string }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const webhook = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || site.ghlWebhookUrl || "";
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ audience: "newsletter", page: "drivers", email, submittedAt: new Date().toISOString() }),
        });
      } catch {
        /* swallow — still confirm */
      }
    }
    setDone(true);
  };

  if (done) {
    return (
      <p className="font-sans text-[16px] leading-relaxed text-chrome">
        You&apos;re on the list — we&apos;ll send launch and West Memphis founding-rate news.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex max-w-xs items-center gap-2 rounded-full border border-chrome/25 bg-white/[0.04] p-1.5 pl-4 focus-within:border-chrome/50">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        aria-label="Email address"
        className="min-w-0 flex-1 bg-transparent font-sans text-[16px] text-white outline-none placeholder:text-[#7a7a7a]"
      />
      <button
        type="submit"
        className="flex-none rounded-full px-4 py-2 font-label text-[12px] uppercase tracking-[0.14em] text-ink transition hover:brightness-110"
        style={{ background: accent }}
      >
        Subscribe
      </button>
    </form>
  );
}
