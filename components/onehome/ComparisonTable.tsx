"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Side-by-side Traditional-Housing vs OneHome table: two columns sharing each
 * row, the Traditional cell struck through and muted, the OneHome cell tinted
 * and checked. Rows reveal (staggered) when the panel scrolls into view; they
 * flex to fill the column height so it matches the prompts column. Reduced
 * motion: everything shows instantly.
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
    const t = window.setTimeout(() => setShown(true), 1500); // failsafe
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, []);

  return (
    <div ref={ref} className="flex h-full flex-col overflow-hidden rounded-[20px] border" style={{ borderColor: "#1C1C20", background: "#16161A" }}>
      {/* column headers */}
      <div className="grid grid-cols-2">
        <div className="border-b border-r border-white/10 px-5 py-4 font-label text-[11px] uppercase tracking-[0.16em] text-chrome">
          Traditional Housing
        </div>
        <div className="border-b border-white/10 px-5 py-4 font-label text-[11px] uppercase tracking-[0.16em] text-ink" style={{ background: accent }}>
          OneHome
        </div>
      </div>

      {/* rows — flex to fill height, each cell side by side */}
      <div className="flex flex-1 flex-col">
        {rows.map((r, i) => (
          <div
            key={r.one}
            className="grid flex-1 grid-cols-2 transition-[opacity,transform] duration-500 ease-out"
            style={{ opacity: shown ? 1 : 0, transform: shown ? "none" : "translateY(10px)", transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex items-center border-r border-t border-white/8 px-5 py-3.5 text-[clamp(13px,1.4vw,15px)] leading-snug text-chrome/70">
              <span className="line-through decoration-ember/60 decoration-1">{r.trad}</span>
            </div>
            <div
              className="flex items-center gap-2.5 border-t border-white/8 px-5 py-3.5 text-[clamp(13px,1.4vw,15px)] font-semibold leading-snug text-white"
              style={{ background: `${accent}12` }}
            >
              <span aria-hidden className="flex-none" style={{ color: accent }}>✓</span>
              {r.one}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
