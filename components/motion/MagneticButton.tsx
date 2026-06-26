"use client";

import { useRef } from "react";

/**
 * Magnetic hover wrapper — the child drifts toward the cursor while the pointer
 * is over it, easing back on leave. Fine-pointer only (skips touch / coarse
 * pointers) and fully disabled under prefers-reduced-motion. Renders an
 * inline-block span; pass a button/anchor as the child.
 */
export default function MagneticButton({
  children,
  strength = 0.3,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`inline-block will-change-transform ${className}`}
      style={{ transition: "transform .4s cubic-bezier(.2,.7,.2,1)" }}
    >
      {children}
    </span>
  );
}
