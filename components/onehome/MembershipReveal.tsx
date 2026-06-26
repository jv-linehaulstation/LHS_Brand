"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * §9 Membership + Space — condensed, interactive. A numbered process (two
 * groups) on the left; hovering/focusing any item swaps a large preview image
 * in the fixed panel on the right (the hover-reveal pattern). Tight one-liners,
 * no wall of copy. PENDING(JJ): the exact "concessionnaires" hover reference —
 * this is the strong condensed interactive version until then. On touch/mobile
 * the panel shows the first item and the list stays fully readable.
 */
export type RevealItem = { n: string; title: string; line: string; img: string };

export default function MembershipReveal({
  groups,
  accent = "#F07820",
}: {
  groups: { label: string; items: RevealItem[] }[];
  accent?: string;
}) {
  const all = groups.flatMap((g) => g.items);
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-[clamp(28px,4vw,64px)] lg:grid-cols-[1fr_0.78fr] lg:items-start">
      <div className="space-y-10">
        {groups.map((g) => (
          <div key={g.label}>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-chrome">{g.label}</div>
            <ul className="mt-4">
              {g.items.map((it) => {
                const idx = all.indexOf(it);
                const on = idx === active;
                return (
                  <li
                    key={it.n}
                    onMouseEnter={() => setActive(idx)}
                    onFocus={() => setActive(idx)}
                    tabIndex={0}
                    className="group flex cursor-default items-start gap-4 border-t border-white/10 py-5 outline-none transition-colors first:border-t-0 first:pt-0 hover:bg-white/[0.03] focus-visible:bg-white/[0.04]"
                  >
                    <span className="tnum mt-0.5 font-mono text-[13px] transition-colors" style={{ color: on ? accent : "#7a7a7a" }}>{it.n}</span>
                    <div>
                      <div className="font-display text-[clamp(18px,2.1vw,24px)] font-black uppercase leading-tight tracking-[0.01em] transition-colors" style={{ color: on ? accent : "#ffffff" }}>{it.title}</div>
                      <p className="mt-1.5 max-w-[44ch] text-[15px] leading-snug text-chrome">{it.line}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* fixed preview — cross-fades to the active item's image */}
      <div className="lg:sticky lg:top-28">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/12">
          {all.map((it, i) => (
            <Image
              key={it.n + it.title}
              src={it.img}
              alt={i === active ? it.title : ""}
              fill
              loading="lazy"
              className="img-grade object-cover transition-opacity duration-500"
              style={{ opacity: i === active ? 1 : 0 }}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(11,11,11,0.66))]" />
          <div className="absolute inset-x-0 top-0 h-0.5 opacity-80" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} aria-hidden />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: accent }}>{all[active].n}</div>
            <div className="mt-1 font-display text-[clamp(18px,2.2vw,26px)] font-black uppercase tracking-[0.01em] text-white">{all[active].title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
