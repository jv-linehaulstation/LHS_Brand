"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * Four-Stones-style tabbed audience router. One block; selecting a tab swaps in
 * that lane's headline, one-liner, and an "Explore →" link to its page. The
 * content swap is a motion-safe opacity fade (keyed remount) — under
 * prefers-reduced-motion it simply switches with no animation.
 */
export type Lane = {
  key: string;
  label: string;
  headline: string;
  line: string;
  sub: string;
  accent: string;
  href: string;
  image: string;
};

export default function LaneTabs({ lanes }: { lanes: Lane[] }) {
  const [active, setActive] = useState(0);
  const lane = lanes[active];

  return (
    <div>
      {/* tab strip */}
      <div
        role="tablist"
        aria-label="Find your lane"
        className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto pb-1"
      >
        {lanes.map((l, i) => {
          const on = i === active;
          return (
            <button
              key={l.key}
              role="tab"
              type="button"
              aria-selected={on}
              onClick={() => setActive(i)}
              className="shrink-0 whitespace-nowrap rounded-btn border px-5 py-2.5 font-label text-[11px] uppercase tracking-[0.16em] transition-colors"
              style={{
                color: on ? "#0B0B0B" : "#cfcfcf",
                background: on ? l.accent : "rgba(20,20,20,0.6)",
                borderColor: on ? l.accent : "rgba(176,176,176,0.2)",
              }}
            >
              {l.label}
            </button>
          );
        })}
      </div>

      {/* active panel — asymmetric: copy left, image right */}
      <div
        key={lane.key}
        role="tabpanel"
        className="mt-8 grid gap-x-12 gap-y-8 motion-safe:animate-[fadeIn_.45s_ease] lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: lane.accent }} aria-hidden />
            <span className="font-script text-[clamp(22px,2.6vw,32px)] font-semibold" style={{ color: lane.accent }}>
              {lane.sub}
            </span>
          </div>
          <h3 className="mt-4 text-balance font-display text-[clamp(34px,5vw,68px)] font-black uppercase leading-[0.9] tracking-[-0.025em] text-white">
            {lane.headline}
          </h3>
          <p className="mt-5 max-w-[48ch] text-pretty font-body text-[clamp(17px,1.8vw,21px)] leading-relaxed text-[#dadada]">
            {lane.line}
          </p>
          <Link
            href={lane.href}
            className="group mt-7 inline-flex items-center gap-2.5 rounded-btn border px-7 py-[15px] font-label text-[11px] uppercase tracking-[0.16em] text-white transition-colors"
            style={{ borderColor: lane.accent }}
          >
            Explore {lane.label}
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: lane.accent }}>
              →
            </span>
          </Link>
        </div>

        <div className="frame">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[4px] bg-carbon">
            <Image
              src={lane.image}
              alt={`${lane.label} — LineHaul Station`}
              fill
              loading="lazy"
              className="img-grade object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(11,11,11,0.78))]" />
            <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, ${lane.accent}, transparent)` }} />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="font-display text-[clamp(22px,3vw,32px)] font-black uppercase leading-none text-white">
                {lane.label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
