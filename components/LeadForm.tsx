"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import type { FormField } from "@/lib/audiences";

/**
 * Branded lead form (the "Connect With Us" path). Client-side validation +
 * success state, matching the original drivers/carriers forms. There's no
 * backend wired yet — drop your GoHighLevel inbound webhook URL into
 * NEXT_PUBLIC_GHL_WEBHOOK_URL (or lib/site.ts) and it will POST the payload.
 */
export default function LeadForm({
  audienceKey,
  accent,
  accentDark,
  eyebrow,
  headline,
  body,
  fields,
  consent,
  success,
}: {
  audienceKey: string;
  accent: string;
  accentDark: string;
  eyebrow: string;
  headline: string;
  body: string;
  fields: FormField[];
  consent?: string;
  success: { headline: string; body: string };
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const set = (k: string, v: string) => setValues((s) => ({ ...s, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.firstName?.trim() || !values.phone?.trim()) {
      setError("Please add at least your first name and mobile number.");
      return;
    }
    if (consent && !agreed) {
      setError("Please agree to continue — it's all it takes.");
      return;
    }
    setError("");
    const webhook =
      process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || site.ghlWebhookUrl || "";
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            audience: audienceKey,
            page: `${audienceKey}-landing`,
            submittedAt: new Date().toISOString(),
            ...values,
            consent: consent ? agreed : undefined,
          }),
        });
      } catch {
        /* swallow — still show success */
      }
    }
    setDone(true);
  };

  if (done) {
    return (
      <div className="mx-auto max-w-xl rounded-card border border-chrome/15 bg-ink/70 p-8 text-center backdrop-blur">
        <div
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-ink"
          style={{ background: accent }}
        >
          ✓
        </div>
        <h3 className="mt-5 font-display text-[26px] font-black uppercase text-white">
          {success.headline}
        </h3>
        <p className="mt-3 font-body text-[16px] leading-relaxed text-[#d8d8d8]">
          {values.firstName ? `Thanks, ${values.firstName}. ` : ""}
          {success.body}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="text-center">
        <div className="font-label text-[11px] uppercase tracking-[0.24em]" style={{ color: accent }}>
          {eyebrow}
        </div>
        <h2 className="mt-3 text-balance font-display text-[clamp(28px,4.4vw,48px)] font-black uppercase leading-none tracking-[-0.01em] text-white">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-[17px] leading-relaxed text-[#e6e6e6]">
          {body}
        </p>
      </div>

      <form onSubmit={submit} className="mt-8 frame">
        <div className="bg-ink/80 p-6 backdrop-blur sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((f) => (
              <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
                <label className="mb-1.5 block font-label text-[9px] uppercase tracking-[0.18em] text-chrome">
                  {f.label}
                  {f.required ? " *" : ""}
                </label>
                <input
                  type={f.type || "text"}
                  value={values[f.name] || ""}
                  onChange={(e) => set(f.name, e.target.value)}
                  className="w-full rounded-btn border border-chrome/20 bg-carbon px-4 py-3 font-body text-[15px] text-white outline-none transition-colors placeholder:text-[#6a6a6a] focus:border-[var(--ac)]"
                  style={{ ["--ac" as string]: accent }}
                />
              </div>
            ))}
          </div>

          {consent && (
            <label className="mt-5 flex cursor-pointer items-start gap-3 font-body text-[14px] text-[#d8d8d8]">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1"
                style={{ accentColor: accent }}
              />
              <span>{consent}</span>
            </label>
          )}

          {error && (
            <p className="mt-4 font-mono text-[12px] text-ember">{error}</p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-btn px-8 py-[17px] font-label text-[12px] uppercase tracking-[0.16em] text-ink transition hover:brightness-110"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accentDark})` }}
          >
            Connect With Us <span aria-hidden>→</span>
          </button>

          <p className="mt-4 text-center font-body text-[13px] text-chrome">
            Prefer to talk it through first?{" "}
            <a href={site.phoneHref} className="underline hover:text-white">
              Schedule a Call
            </a>
            . No spam — your details stay with LineHaul Station.
          </p>
        </div>
      </form>
    </div>
  );
}
