"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Outriders "Join Free" form. Native + on-brand, posts the same payload the
 * GoHighLevel funnel collects so leads keep flowing to GHL (drop the inbound
 * webhook into NEXT_PUBLIC_GHL_WEBHOOK_URL / lib/site.ts). Client validation +
 * success state. Submit label per brief: "Join Free."
 */

const MEMBER_TYPES = [
  "Company Driver",
  "Owner Operator",
  "For-Hire Carrier",
  "Freight Broker",
  "Private Fleet",
];

type Txt = { name: string; label: string; type?: string; required?: boolean; half?: boolean };
const TEXT_FIELDS: Txt[] = [
  { name: "firstName", label: "First Name", required: true, half: true },
  { name: "lastName", label: "Last Name", half: true },
  { name: "company", label: "Company", half: true },
  { name: "phone", label: "Mobile Phone", type: "tel", required: true, half: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "truckCount", label: "Truck Count", type: "number", half: true },
  { name: "trailerCount", label: "Trailer Count", type: "number", half: true },
];

export default function JoinForm({
  accent = "#F07820",
  accentDark = "#C85A12",
}: {
  accent?: string;
  accentDark?: string;
} = {}) {
  const ACCENT = accent;
  const ACCENT_DARK = accentDark;
  const [values, setValues] = useState<Record<string, string>>({ memberType: MEMBER_TYPES[0] });
  const [sms, setSms] = useState(false);
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const set = (k: string, v: string) => setValues((s) => ({ ...s, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.firstName?.trim() || !values.phone?.trim() || !values.email?.trim()) {
      setError("Please add your first name, mobile number, and email.");
      return;
    }
    if (!terms) {
      setError("Please accept the terms to join — it's free and takes a second.");
      return;
    }
    setError("");
    const webhook = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || site.ghlWebhookUrl || "";
    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            audience: "outriders",
            page: "join",
            submittedAt: new Date().toISOString(),
            ...values,
            smsConsent: sms,
            termsAccepted: terms,
          }),
        });
      } catch {
        /* swallow — still confirm to the member */
      }
    }
    setDone(true);
  };

  if (done) {
    return (
      <div className="frame">
        <div className="rounded-[4px] bg-ink/85 p-8 text-center backdrop-blur sm:p-10">
          <div
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-ink"
            style={{ background: ACCENT }}
          >
            ✓
          </div>
          <h3 className="mt-5 font-display text-[clamp(24px,3vw,32px)] font-black uppercase text-white">
            Welcome to the Outriders.
          </h3>
          <p className="mx-auto mt-3 max-w-md font-body text-[16px] leading-relaxed text-[#d8d8d8]">
            {values.firstName ? `Thanks, ${values.firstName}. ` : ""}
            Your membership is in. Watch your phone — we&apos;ll be in touch with your
            Outriders Club details and first-Hub news.
          </p>
          <a
            href={site.phoneHref}
            className="mt-6 inline-flex items-center gap-2 font-mono text-[13px] text-chrome underline transition-colors hover:text-white"
          >
            Questions? Call (602) 898-8000
          </a>
        </div>
      </div>
    );
  }

  const fieldCls =
    "w-full rounded-btn border border-chrome/20 bg-carbon px-4 py-3 font-body text-[15px] text-white outline-none transition-colors placeholder:text-[#6a6a6a] focus:border-[var(--ac)]";

  return (
    <form onSubmit={submit} className="frame" style={{ ["--ac" as string]: ACCENT }}>
      <div className="rounded-[4px] bg-ink/85 p-6 backdrop-blur sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {TEXT_FIELDS.map((f) => (
            <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
              <label className="mb-1.5 block font-label text-[9px] uppercase tracking-[0.18em] text-chrome">
                {f.label}
                {f.required ? " *" : ""}
              </label>
              <input
                type={f.type || "text"}
                inputMode={f.type === "number" ? "numeric" : undefined}
                value={values[f.name] || ""}
                onChange={(e) => set(f.name, e.target.value)}
                className={fieldCls}
              />
            </div>
          ))}

          <div className="sm:col-span-2">
            <label className="mb-1.5 block font-label text-[9px] uppercase tracking-[0.18em] text-chrome">
              Member Type *
            </label>
            <select
              value={values.memberType}
              onChange={(e) => set("memberType", e.target.value)}
              className={`${fieldCls} appearance-none`}
            >
              {MEMBER_TYPES.map((t) => (
                <option key={t} value={t} className="bg-carbon text-white">
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <label className="mt-5 flex cursor-pointer items-start gap-3 font-body text-[14px] text-[#d8d8d8]">
          <input
            type="checkbox"
            checked={sms}
            onChange={(e) => setSms(e.target.checked)}
            className="mt-1"
            style={{ accentColor: ACCENT }}
          />
          <span>
            Text me Outriders Club updates and Hub news. Message &amp; data rates may
            apply; reply STOP to opt out.
          </span>
        </label>
        <label className="mt-3 flex cursor-pointer items-start gap-3 font-body text-[14px] text-[#d8d8d8]">
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            className="mt-1"
            style={{ accentColor: ACCENT }}
          />
          <span>
            I agree to the LineHaul Station membership terms. Your information stays
            private — never sold or shared.
          </span>
        </label>

        {error && <p className="mt-4 font-mono text-[12px] text-ember">{error}</p>}

        <button
          type="submit"
          className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-btn px-8 py-[18px] font-label text-[12px] uppercase tracking-[0.16em] text-ink transition hover:brightness-110 active:scale-[0.99]"
          style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})` }}
        >
          Join Free. <span aria-hidden>→</span>
        </button>

        <p className="mt-4 text-center font-body text-[13px] text-chrome">
          Driver memberships are completely free. Prefer to talk first?{" "}
          <a href="tel:6028988000" className="underline hover:text-white">
            Call (602) 898-8000
          </a>
          .
        </p>
      </div>
    </form>
  );
}
