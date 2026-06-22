"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a stat up from zero the first time it scrolls into view, then STOPS.
 * Accepts messy real-world values: "$15M", "96%", "<100", "60K", "24/7",
 * "133→600", "Now", "On-site". It animates the first numeric run and keeps the
 * surrounding prefix/suffix; purely non-numeric values render as-is.
 * Respects prefers-reduced-motion.
 */
export default function CountUp({
  value,
  className = "",
  style,
  duration = 1100,
}: {
  value: string;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const m = String(value).match(/^(\D*)([\d,]+)(.*)$/);
  const isNum = !!m;
  const prefix = m ? m[1] : "";
  const target = m ? parseInt(m[2].replace(/,/g, ""), 10) : 0;
  const suffix = m ? m[3] : "";
  const grouped = m ? /,/.test(m[2]) : false;

  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    // Deps are PRIMITIVES only (isNum, target, duration) so this runs once per
    // value — not on every setN re-render — and `started` guarantees it fires once.
    if (!isNum) return;
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      started.current = true;
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e || !e.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(target * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [isNum, target, duration]);

  const shown = !isNum
    ? value
    : `${prefix}${grouped ? n.toLocaleString() : n}${suffix}`;

  return (
    <span ref={ref} className={className} style={style}>
      {shown}
    </span>
  );
}
