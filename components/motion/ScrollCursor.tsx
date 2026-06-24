"use client";

import { useEffect, useRef } from "react";

/**
 * Vaulk-style cursor-following "Scroll ↓" badge. Mount it as a direct child of a
 * `relative` hero section — it tracks the mouse within that section with a gentle
 * lerp and fades out when the cursor leaves. Disabled (renders nothing active) on
 * touch devices and under prefers-reduced-motion. Pointer-events-none so it never
 * blocks the hero CTAs.
 */
export default function ScrollCursor({ label = "Scroll ↓" }: { label?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const badge = ref.current;
    const host = badge?.parentElement;
    if (!badge || !host) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (reduce || touch) return;

    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0, started = false;

    const onMove = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (!started) {
        started = true;
        cx = tx;
        cy = ty;
      }
      badge.style.opacity = "1";
    };
    const onLeave = () => {
      badge.style.opacity = "0";
    };
    const loop = () => {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      badge.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    host.addEventListener("mousemove", onMove);
    host.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      host.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-[5] grid h-[84px] w-[84px] place-items-center rounded-full border border-white/40 bg-ink/30 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-white opacity-0 backdrop-blur-sm transition-opacity duration-300"
    >
      {label}
    </div>
  );
}
