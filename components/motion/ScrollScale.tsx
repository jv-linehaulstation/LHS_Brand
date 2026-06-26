"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-linked "Showroom" zoom — the wrapped media scales up as the section
 * passes through the viewport (default 1.06 → 1.2). Full-bleed: renders an
 * absolutely-positioned, overflow-clipped layer, so the parent must be
 * `relative`. Under prefers-reduced-motion it holds a single static scale (no
 * movement). Same lightweight rAF + getBoundingClientRect pattern as
 * ParallaxImage — tracks native scroll, so it works with Lenis.
 */
export default function ScrollScale({
  children,
  from = 1.06,
  to = 1.2,
  className = "",
}: {
  children: React.ReactNode;
  from?: number;
  to?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = `scale(${from})`; // static — no scroll movement
      return;
    }

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // t: 0 when the section center sits at the bottom of the viewport,
        // 1 when it reaches the top — i.e. zoom tracks scroll-through.
        const center = rect.top + rect.height / 2;
        const t = Math.min(1, Math.max(0, 1 - center / vh));
        const scale = from + (to - from) * t;
        el.style.transform = `scale(${scale.toFixed(4)})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [from, to]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        ref={ref}
        className="absolute inset-0 will-change-transform"
        style={{ transform: `scale(${from})` }}
      >
        {children}
      </div>
    </div>
  );
}
