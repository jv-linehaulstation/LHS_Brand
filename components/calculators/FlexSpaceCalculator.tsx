"use client";

import { useState } from "react";

/**
 * FlexSpace cost calculator — ported from the static carriers.html.
 * Exact pricing/logic preserved; restyled in the LHS Brand System.
 *
 *   Guest Pass  $59 / day   (billed per day used)
 *   Membership  $19 / day   (billed per day used)
 *   Dedicated   $395 / mo   (flat monthly rate per truck)
 *
 *   monthly = dedicated ? trucks × 395 : trucks × days × dayRate
 */

type Tier = "guest" | "prop" | "ded";

const TIERS: { id: Tier; label: string; price: string }[] = [
  { id: "guest", label: "Guest Pass", price: "$59 / day" },
  { id: "prop", label: "Membership", price: "$19 / day" },
  { id: "ded", label: "Dedicated Space", price: "$395 / mo" },
];

const RATE = { guest: 59, prop: 19, ded: 395 };
const money = (n: number) => "$" + Math.round(n).toLocaleString();

export default function FlexSpaceCalculator({ accent = "#4878A8" }: { accent?: string }) {
  const [tier, setTier] = useState<Tier>("guest");
  const [trucks, setTrucks] = useState(5);
  const [days, setDays] = useState(12);

  const isDed = tier === "ded";
  const mo = isDed ? trucks * RATE.ded : trucks * days * RATE[tier];
  const yr = mo * 12;
  const perTruck = trucks ? mo / trucks : 0;

  return (
    <section id="calculator" className="mx-auto max-w-site px-5 py-[84px] sm:px-8">
      <div className="mb-10">
        <div className="font-label text-[11px] uppercase tracking-[0.24em] text-steel">
          Run Your Own Numbers
        </div>
        <h2 className="mt-3 font-display text-[clamp(28px,4vw,46px)] font-black uppercase tracking-[-0.01em] text-white">
          What FlexSpace Actually Costs You.
        </h2>
      </div>

      <div className="chrome-frame">
        <div className="bg-panel p-6 sm:p-9">
          {/* TIER SELECT */}
          <div className="font-label text-[10px] uppercase tracking-[0.2em] text-chrome">
            Choose Your Access Plan
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {TIERS.map((t) => {
              const on = t.id === tier;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTier(t.id)}
                  className="flex flex-col items-start rounded-card border bg-carbon px-5 py-4 text-left transition-colors"
                  style={{
                    borderColor: on ? accent : "rgba(176,176,176,0.18)",
                    borderTopWidth: on ? 2 : 1,
                    borderTopColor: on ? accent : "rgba(176,176,176,0.18)",
                    background: on ? `${accent}14` : undefined,
                  }}
                >
                  <span className="font-display text-[15px] font-extrabold uppercase text-white">
                    {t.label}
                  </span>
                  <span className="mt-1 font-mono text-[12px]" style={{ color: on ? accent : "#9a9a9a" }}>
                    {t.price}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RESULT */}
          <div className="mt-6 rounded-card border border-chrome/15 bg-ink2 p-6 sm:p-8">
            <div className="font-label text-[10px] uppercase tracking-[0.2em] text-chrome">
              Your FlexSpace Cost
            </div>
            <div
              className="mt-1 font-display text-[clamp(44px,8vw,72px)] font-black leading-none"
              style={{ color: accent }}
            >
              {money(mo)}
              <span className="text-[20px] text-chrome">/mo</span>
            </div>
            <div className="mt-2 font-body text-[16px] text-[#d8d8d8]">
              <b className="text-white">{money(yr)}</b> a year ·{" "}
              <b className="text-white">{money(perTruck)}</b> per truck / month
            </div>
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 border-t border-chrome/10 pt-4">
              <span className="font-body text-[15px] text-chrome">
                To build your own terminal →
              </span>
              <span className="font-display text-[28px] font-black text-white">~$15M</span>
            </div>
          </div>

          {/* TRUCKS */}
          <div className="mt-7 flex items-center gap-4">
            <span className="whitespace-nowrap font-label text-[10px] uppercase tracking-[0.18em] text-chrome">
              Trucks Needing Access
            </span>
            <input
              type="range"
              min={1}
              max={20}
              value={trucks}
              step={1}
              onChange={(e) => setTrucks(+e.target.value)}
              aria-label="Trucks needing access"
              className="w-full"
              style={{ accentColor: accent }}
            />
            <span className="whitespace-nowrap font-mono text-[13px] text-white">
              {trucks} {trucks === 1 ? "truck" : "trucks"}
            </span>
          </div>

          {/* DAYS (disabled for dedicated) */}
          <div
            className="mt-5 flex items-center gap-4 transition-opacity"
            style={{ opacity: isDed ? 0.4 : 1 }}
          >
            <span className="whitespace-nowrap font-label text-[10px] uppercase tracking-[0.18em] text-chrome">
              Days Per Month At A Hub
            </span>
            <input
              type="range"
              min={1}
              max={30}
              value={days}
              step={1}
              disabled={isDed}
              onChange={(e) => setDays(+e.target.value)}
              aria-label="Days per month at a Hub"
              className="w-full"
              style={{ accentColor: accent }}
            />
            <span className="whitespace-nowrap font-mono text-[13px] text-white">
              {days} {days === 1 ? "day" : "days"}
            </span>
          </div>

          <p className="mt-5 font-body text-[14px] text-chrome">
            Guest Pass and Membership bill per day used. Dedicated Space is a flat monthly
            rate per truck — your spot is always there.
          </p>
        </div>
      </div>
    </section>
  );
}
