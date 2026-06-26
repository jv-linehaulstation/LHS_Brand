"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Traditional-vs-OneHome comparison as a "cross out the old way" panel that
 * comes alive: rows reveal (staggered) when the panel scrolls into view, the
 * strikethrough on each Traditional item DRAWS IN (an animated line, not a
 * static line-through), and each row highlights on hover. Fills its column
 * height (flex-1 rows) so it matches the prompts column. Reduced-motion: shows
 * everything instantly (lines drawn, no movement).
 */
type Row = { trad: string; one: string };

export default function ComparisonTable({ rows, accent = "#F07820" }: { rows: Row[]; accent?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }),
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    const t = window.setTimeout(() => setShown(true), 1500); // failsafe — never stay hidden
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, []);

  return (
    <div ref={ref} className="flex h-full flex-col rounded-[20px] border p-6 sm:p-8" style={{ borderColor: "#1C1C20", background: "#16161A" }}>
      <div className="flex items-center justify-between font-label text-[10px] uppercase tracking-[0.18em]">
        <span className="relative inline-block text-chrome">
          Traditional Housing
          <span
            className="absolute left-0 top-1/2 h-[2px] w-full origin-left bg-ember/70 transition-transform duration-700 ease-out"
            style={{ transform: shown ? "scaleX(1)" : "scaleX(0)" }}
            aria-hidden
          />
        </span>
        <span className="rounded-full px-3 py-1 text-ink" style={{ background: accent }}>OneHome</span>
      </div>

      <ul className="mt-5 flex flex-1 flex-col">
        {rows.map((r, i) => (
          <li
            key={r.trad}
            className="group flex flex-1 flex-col justify-center gap-1 rounded-lg border-t border-white/8 px-2 py-3.5 transition-[background,opacity,transform] duration-500 ease-out first:border-t-0 first:pt-0 hover:bg-white/[0.04]"
            style={{ opacity: shown ? 1 : 0, transform: shown ? "none" : "translateY(10px)", transitionDelay: `${i * 70}ms` }}
          >
            <span className="flex items-baseline gap-2.5 text-[clamp(15px,1.5vw,17px)] font-semibold leading-snug text-white">
              <span aria-hidden className="transition-transform duration-300 group-hover:scale-125" style={{ color: accent }}>✓</span>
              {r.one}
            </span>
            <span className="relative inline-block w-fit pl-[1.4em] text-[13px] leading-snug text-chrome/80">
              {r.trad}
              <span
                className="absolute bottom-[45%] left-[1.4em] h-[1.5px] origin-left bg-ember/60 transition-transform duration-700 ease-out"
                style={{ width: "calc(100% - 1.4em)", transform: shown ? "scaleX(1)" : "scaleX(0)", transitionDelay: `${i * 70 + 160}ms` }}
                aria-hidden
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
