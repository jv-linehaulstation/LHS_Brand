"use client";

import { useMemo, useState } from "react";

/**
 * OneHome savings + wealth calculator — ported from the static drivers.html.
 * Exact pricing/logic preserved; restyled in the LHS Brand System.
 *
 *  • stops      = selectable "days home per year"
 *  • ohData     = OneHome monthly base (std) + West Memphis founding rate (yr1)
 *  • savings    = max(0, rent - std) per month  → ×12 per year
 *  • long game  = future value of yearly savings invested 30 yrs @ 7%
 */

const STOPS = [15, 30, 40, 50, 60, 80, 90, 100, 120, 180, 365];

const OH_DATA: Record<number, { std: number; yr1: number }> = {
  15: { std: 99, yr1: 79 },
  30: { std: 179, yr1: 119 },
  40: { std: 239, yr1: 149 },
  50: { std: 299, yr1: 189 },
  60: { std: 349, yr1: 199 },
  80: { std: 469, yr1: 269 },
  90: { std: 499, yr1: 299 },
  100: { std: 549, yr1: 339 },
  120: { std: 639, yr1: 399 },
  180: { std: 949, yr1: 599 },
  365: { std: 1699, yr1: 1199 },
};

const money = (n: number) => "$" + Math.round(n).toLocaleString();
const fmtM = (n: number) =>
  n >= 1e6
    ? "$" + (n / 1e6).toFixed(2) + "M"
    : n >= 1e3
    ? "$" + Math.round(n / 1e3) + "K"
    : money(n);
// future value of an annuity: a yearly contribution for y years at rate r
const fv = (a: number, y: number, r: number) => a * ((Math.pow(1 + r, y) - 1) / r);

export default function OneHomeCalculator({
  accent = "#F07820",
  accentDark = "#C85A12",
  onLight = false,
}: {
  accent?: string;
  accentDark?: string;
  /** Render the intro heading for a light (off-white) section instead of dark. */
  onLight?: boolean;
}) {
  const [dayIdx, setDayIdx] = useState(4); // → 60 days
  const [rent, setRent] = useState(1800);

  const days = STOPS[dayIdx];
  const oh = OH_DATA[days];
  const moSave = Math.max(0, rent - oh.std);
  const yrSave = moSave * 12;
  const longGame = fmtM(fv(yrSave, 30, 0.07));
  const aptNight = rent * 12 / days;
  const ohNight = oh.std * 12 / days;

  // 365-cell year meter
  const cells = useMemo(
    () => Array.from({ length: 365 }, (_, i) => i < days),
    [days]
  );

  return (
    <section>
      {/* The section provides the heading; the calculator is just the glass card. */}
      <div className="glass-strong h-full rounded-[20px] p-6 sm:p-9">
          {/* RESULT */}
          <div className="rounded-card border border-chrome/15 bg-ink2 p-6 sm:p-8">
            <div className="font-label text-[10px] uppercase tracking-[0.2em] text-chrome">
              Back In Your Pocket Every Year
            </div>
            <div
              className="mt-1 font-display text-[clamp(44px,8vw,72px)] font-black leading-none"
              style={{ color: accent }}
            >
              {money(yrSave)}
            </div>
            <div className="mt-2 text-[16px] text-[#d8d8d8]">
              That&apos;s <b className="text-white">{money(moSave)}</b> a month you stop
              paying for a place you&apos;re rarely in.
            </div>
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 border-t border-chrome/10 pt-4">
              <span className="text-[15px] text-chrome">
                Invest it 30 years at 7% →
              </span>
              <span className="font-display text-[28px] font-black text-white">
                {longGame}
              </span>
            </div>
          </div>

          {/* DAYS HOME */}
          <div className="mt-7 flex items-end justify-between gap-4">
            <div>
              <div className="font-label text-[10px] uppercase tracking-[0.2em] text-chrome">
                Days Home Per Year
              </div>
              <div className="mt-1 flex items-baseline gap-2.5">
                <span
                  className="font-display text-[40px] font-black leading-none"
                  style={{ color: accent }}
                >
                  {days}
                </span>
                <span className="font-mono text-[11px] leading-tight text-chrome">
                  Days
                  <br />
                  at your Home Hub
                </span>
              </div>
            </div>
            <div className="rounded-btn border border-chrome/20 bg-carbon px-3.5 py-2 text-right font-mono text-[12px] text-chrome">
              On the road <b className="text-white">{365 - days}</b> days a year
            </div>
          </div>

          <input
            type="range"
            min={0}
            max={STOPS.length - 1}
            value={dayIdx}
            step={1}
            onChange={(e) => setDayIdx(+e.target.value)}
            aria-label="Days home per year"
            className="mt-3 w-full"
            style={{ accentColor: accent }}
          />
          <div className="mt-2 flex justify-between font-mono text-[10px] text-chrome">
            {STOPS.map((s, i) => (
              <button
                key={s}
                onClick={() => setDayIdx(i)}
                className="transition-colors"
                style={{ color: i === dayIdx ? accent : undefined }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* YEAR METER */}
          <div className="mt-7">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-chrome">
                Your Year — One Square Per Day
              </span>
              <span className="flex items-center gap-4 font-mono text-[11px] text-chrome">
                <span className="flex items-center gap-1.5">
                  <i className="inline-block h-2.5 w-2.5 rounded-[2px]" style={{ background: accent }} />
                  Home
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="inline-block h-2.5 w-2.5 rounded-[2px] bg-carbon ring-1 ring-chrome/20" />
                  Paid for, empty
                </span>
              </span>
            </div>
            <div
              className="grid gap-[2px]"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(7px, 1fr))" }}
            >
              {cells.map((on, i) => (
                <span
                  key={i}
                  className="aspect-square rounded-[1px]"
                  style={{ background: on ? accent : "#222" }}
                />
              ))}
            </div>
            <p className="mt-3 text-[14px] text-chrome">
              A traditional lease bills you for every square. OneHome lights up only the
              ones you use — <b className="text-white">{days}</b> nights, not 365.
            </p>
          </div>

          {/* RENT TUNER */}
          <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <span className="whitespace-nowrap font-label text-[10px] uppercase tracking-[0.18em] text-chrome">
              Your Rent / Mortgage
            </span>
            <input
              type="range"
              min={900}
              max={3500}
              value={rent}
              step={50}
              onChange={(e) => setRent(+e.target.value)}
              aria-label="Monthly rent or mortgage"
              className="w-full"
              style={{ accentColor: accent }}
            />
            <span className="whitespace-nowrap font-mono text-[13px] text-white">
              {money(rent)}/mo
            </span>
          </div>

          {/* COMPARISON */}
          <div className="mt-8 font-label text-[10px] uppercase tracking-[0.2em] text-chrome">
            Side By Side — Per Month
          </div>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-chrome/15 bg-carbon p-6">
              <div className="font-label text-[9px] uppercase tracking-[0.16em] text-chrome">
                A Home That Sits Empty
              </div>
              <div className="mt-1 font-display text-[34px] font-black text-white">
                {money(rent)}
                <span className="text-[16px] text-chrome">/mo</span>
              </div>
              <div className="mt-1 text-[13px] text-chrome">
                Billed all 12 months — even the {365 - days} you&apos;re away
              </div>
              <div className="my-4 h-px bg-chrome/10" />
              <div className="font-label text-[9px] uppercase tracking-[0.16em] text-chrome">
                What Each Night Home Costs
              </div>
              <div className="mt-1 font-display text-[26px] font-black text-white">
                {money(aptNight)}
              </div>
              <div className="text-[12px] text-chrome">
                per night you&apos;re actually there
              </div>
            </div>

            <div
              className="rounded-card border bg-carbon p-6"
              style={{ borderColor: `${accent}66`, borderTopWidth: 2, borderTopColor: accent }}
            >
              <div className="font-label text-[9px] uppercase tracking-[0.16em]" style={{ color: accent }}>
                OneHome Membership
              </div>
              <div className="mt-1 font-display text-[34px] font-black text-white">
                {money(oh.std)}
                <span className="text-[16px] text-chrome">/mo</span>
              </div>
              <div className="mt-1 text-[13px] text-chrome">
                Base membership · {days} days/yr · month-to-month
              </div>
              <div className="my-4 h-px bg-chrome/10" />
              <div className="font-label text-[9px] uppercase tracking-[0.16em] text-chrome">
                What Each Night Home Costs
              </div>
              <div className="mt-1 font-display text-[26px] font-black text-white">
                {money(ohNight)}
              </div>
              <div className="text-[12px] text-chrome">
                per night, furnished &amp; staffed
              </div>
              <div
                className="mt-4 inline-block rounded-btn px-3 py-1.5 font-mono text-[11px] text-ink"
                style={{ background: accent }}
              >
                West Memphis founding rate: {money(oh.yr1)}/mo
              </div>
            </div>
          </div>
          <p className="mt-5 text-[13px] italic text-chrome">
            Base membership shown. Add OneHome services for $295/mo — private storage
            locker, covered parking, and a permanent mailing address — if you want them.
          </p>
      </div>
    </section>
  );
}
