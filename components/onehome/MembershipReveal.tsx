"use client";

import { useState } from "react";

/**
 * Membership steps + Space ways as a clean numbered hover-highlight list (no
 * image reveal). Hovering / focusing an item lights its number + title in
 * Fuel-Orange and raises a left marker. Two groups render side by side; a
 * single group fills the column. Reduced-motion safe (hover-only color/marker).
 */
export type RevealItem = { n: string; title: string; line: string; img?: string };

export default function MembershipReveal({
  groups,
  accent = "#F07820",
}: {
  groups: { label: string; items: RevealItem[] }[];
  accent?: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={groups.length > 1 ? "grid gap-x-12 gap-y-10 sm:grid-cols-2" : "max-w-3xl"}>
      {groups.map((g) => (
        <div key={g.label}>
          <div className="font-mono text-[13px] uppercase tracking-[0.18em] text-chrome">{g.label}</div>
          <ul className="mt-4">
            {g.items.map((it) => {
              const key = g.label + it.n;
              const on = active === key;
              return (
                <li
                  key={it.n}
                  onMouseEnter={() => setActive(key)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(key)}
                  onBlur={() => setActive(null)}
                  tabIndex={0}
                  className="group relative flex items-center gap-4 border-t border-white/10 py-5 outline-none transition-colors duration-300 first:border-t-0 first:pt-0"
                >
                  <span
                    className="absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-full transition-transform duration-300 motion-reduce:transition-none"
                    style={{ background: accent, transform: on ? "scaleY(1)" : "scaleY(0)", transformOrigin: "center" }}
                    aria-hidden
                  />
                  <span className="tnum pl-4 font-mono text-[15px] transition-colors" style={{ color: on ? accent : "#7a7a7a" }}>{it.n}</span>
                  <span className="flex-1">
                    <span className="block font-display text-[clamp(23px,2.99vw,41px)] font-black uppercase leading-[1.05] tracking-[-0.01em] transition-colors" style={{ color: on ? accent : "#ffffff" }}>{it.title}</span>
                    <span className="mt-1 block max-w-[46ch] text-[16px] leading-snug text-chrome">{it.line}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
