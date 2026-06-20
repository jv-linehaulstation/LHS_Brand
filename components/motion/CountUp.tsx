"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a stat up from zero the first time it scrolls into view.
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
  const prefix = m ? m[1] : "";
  const target = m ? parseInt(m[2].replace(/,/g, ""), 10) : 0;
  const suffix = m ? m[3] : "";
  const grouped = m ? /,/.test(m[2]) : false;

  const [n, setN] = useState(m ? 0 : null);

  useEffect(() => {
    if (!m) return; // nothing numeric to animate
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(target * eased));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [m, target, duration]);

  const shown =
    n === null
      ? value
      : `${prefix}${grouped ? n.toLocaleString() : n}${suffix}`;

  return (
    <span ref={ref} className={className} style={style}>
      {shown}
    </span>
  );
}
