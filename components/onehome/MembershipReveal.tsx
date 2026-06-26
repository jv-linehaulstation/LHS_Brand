"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * §9 Membership + Space — hover-list image reveal (ref: vincentetdussault.com
 * "Plus de 300 concessionnaires réalisés"). A list of one-liner items; hovering
 * one reveals its large preview image, which FOLLOWS THE CURSOR with slight
 * inertia and wipes in (clip-path mask) + fades + scales 1.0→1.05. Non-hovered
 * items dim; the active item gets a Fuel-Orange marker. The image carries the
 * richness, so the copy stays minimal.
 *
 * Touch / reduced-motion: no cursor follow — items stack with their image
 * inline (tap to expand on touch); images are shown statically.
 * TODO(JJ): dedicated per-item imagery (see OneHomePage data).
 */
export type RevealItem = { n: string; title: string; line: string; img: string };

const IMG_W = 420;
const IMG_H = 300;
const EASE = "cubic-bezier(.2,.7,.2,1)";

export default function MembershipReveal({
  groups,
  accent = "#F07820",
}: {
  groups: { label: string; items: RevealItem[] }[];
  accent?: string;
}) {
  const all = groups.flatMap((g) => g.items);
  const [active, setActive] = useState<number | null>(null);
  const [mode, setMode] = useState<"hover" | "static">("hover"); // resolved after mount
  const [open, setOpen] = useState<number | null>(0); // touch tap-to-expand

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const floatRef = useRef<HTMLDivElement | null>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMode(coarse || reduce ? "static" : "hover");
  }, []);

  // Inertia loop — the floating preview eases toward the cursor.
  useEffect(() => {
    if (mode !== "hover") return;
    const loop = () => {
      pos.current.x += (targetPos.current.x - pos.current.x) * 0.14;
      pos.current.y += (targetPos.current.y - pos.current.y) * 0.14;
      if (floatRef.current) {
        floatRef.current.style.transform = `translate3d(${pos.current.x.toFixed(2)}px, ${pos.current.y.toFixed(2)}px, 0)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, [mode]);

  const onMove = (e: React.MouseEvent) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const r = wrap.getBoundingClientRect();
    targetPos.current.x = e.clientX - r.left - IMG_W / 2;
    targetPos.current.y = e.clientY - r.top - IMG_H / 2;
  };

  // ---- Touch / reduced-motion: stacked items + inline image (tap to expand) ----
  if (mode === "static") {
    return (
      <div className="space-y-10">
        {groups.map((g) => (
          <div key={g.label}>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-chrome">{g.label}</div>
            <ul className="mt-4 space-y-3">
              {g.items.map((it) => {
                const idx = all.indexOf(it);
                const isOpen = open === idx;
                return (
                  <li key={it.n} className="overflow-hidden border-t border-white/10 first:border-t-0">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start gap-4 py-4 text-left"
                    >
                      <span className="tnum mt-0.5 font-mono text-[13px]" style={{ color: accent }}>{it.n}</span>
                      <span className="flex-1">
                        <span className="block font-display text-[clamp(18px,5vw,24px)] font-black uppercase leading-tight tracking-[0.01em] text-white">{it.title}</span>
                        <span className="mt-1 block text-[14px] leading-snug text-chrome">{it.line}</span>
                      </span>
                      <span className="mt-1 font-mono text-[16px] text-chrome">{isOpen ? "–" : "+"}</span>
                    </button>
                    <div className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                      <div className="overflow-hidden">
                        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[14px] border border-white/12">
                          <Image src={it.img} alt={it.title} fill loading="lazy" className="img-grade object-cover" sizes="100vw" />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(11,11,11,0.4))]" />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  // ---- Desktop: cursor-following hover-reveal ----
  return (
    <div ref={wrapRef} onMouseMove={onMove} onMouseLeave={() => setActive(null)} className="relative">
      {/* floating preview — eases toward the cursor; wipes + fades + scales in */}
      <div
        ref={floatRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-20 will-change-transform"
        style={{ width: IMG_W, height: IMG_H, opacity: active !== null ? 1 : 0, transition: `opacity .5s ${EASE}` }}
      >
        <div
          className="relative h-full w-full overflow-hidden rounded-[14px] border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
          style={{ clipPath: active !== null ? "inset(0 0 0 0)" : "inset(0 0 100% 0)", transition: `clip-path .55s ${EASE}` }}
        >
          {all.map((it, i) => (
            <Image
              key={it.n + it.title}
              src={it.img}
              alt=""
              fill
              loading="lazy"
              className="img-grade object-cover"
              sizes="420px"
              style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1.05)" : "scale(1)", transition: `opacity .45s ${EASE}, transform .6s ${EASE}` }}
            />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,11,11,0.5))]" />
          <div className="absolute inset-x-0 top-0 h-0.5 opacity-80" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
        </div>
      </div>

      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.label}>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-chrome">{g.label}</div>
            <ul className="mt-4">
              {g.items.map((it) => {
                const idx = all.indexOf(it);
                const on = idx === active;
                const dim = active !== null && !on;
                return (
                  <li
                    key={it.n}
                    onMouseEnter={() => setActive(idx)}
                    onFocus={() => setActive(idx)}
                    onBlur={() => setActive(null)}
                    tabIndex={0}
                    className="group relative flex cursor-default items-center gap-4 border-t border-white/10 py-5 outline-none transition-[opacity,color] duration-[450ms] first:border-t-0 first:pt-0"
                    style={{ opacity: dim ? 0.35 : 1, transitionTimingFunction: "cubic-bezier(.2,.7,.2,1)" }}
                  >
                    {/* fuel-orange active marker */}
                    <span
                      className="absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-full transition-transform duration-[450ms]"
                      style={{ background: accent, transform: on ? "scaleY(1)" : "scaleY(0)", transformOrigin: "center", transitionTimingFunction: "cubic-bezier(.2,.7,.2,1)" }}
                      aria-hidden
                    />
                    <span className="tnum pl-4 font-mono text-[13px] transition-colors" style={{ color: on ? accent : "#7a7a7a" }}>{it.n}</span>
                    <span className="flex-1">
                      <span className="block font-display text-[clamp(22px,2.8vw,40px)] font-black uppercase leading-[1.02] tracking-[-0.01em] transition-colors" style={{ color: on ? accent : "#ffffff" }}>{it.title}</span>
                      <span className="mt-1 block max-w-[42ch] text-[14px] leading-snug text-chrome">{it.line}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
