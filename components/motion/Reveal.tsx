"use client";

import { useEffect, useRef, useState } from "react";

type Dir = "up" | "left" | "right" | "none";

/**
 * Scroll-entrance wrapper. Fades + slides children in the first time they enter
 * the viewport. `delay` (ms) staggers siblings. Respects prefers-reduced-motion
 * (renders fully visible, no transform).
 *
 * BULLETPROOF (never leave content hidden — the #1 past bug): reveals on mount
 * if the element is already in/near the viewport, runs a 1200ms failsafe that
 * forces visible no matter what, uses a low threshold + negative rootMargin, and
 * works with Lenis smooth-scroll (IntersectionObserver tracks native scroll).
 */
export default function Reveal({
  children,
  delay = 0,
  dir = "up",
  className = "",
  style,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  dir?: Dir;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    // Already in / near the viewport on mount → show immediately (no waiting on
    // an observer that may not fire for above-the-fold content).
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    // Failsafe: nothing stays hidden. If the observer never fires (edge cases
    // with smooth-scroll / fast loads), force-reveal after 1200ms.
    const failsafe = window.setTimeout(() => setShown(true), 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  const offset =
    dir === "up"
      ? "translateY(28px)"
      : dir === "left"
      ? "translateX(-28px)"
      : dir === "right"
      ? "translateX(28px)"
      : "none";

  const Comp = Tag as keyof JSX.IntrinsicElements;
  const Any = Comp as React.ElementType;

  return (
    <Any
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : offset,
        transition: `opacity .56s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .56s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        // Hold the GPU layer only while animating in; release it once shown.
        willChange: shown ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Any>
  );
}
