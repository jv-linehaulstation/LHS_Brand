"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

type Dir = "up" | "left" | "right" | "none";

type Phase = "static" | "hidden" | "shown";

/**
 * Scroll-entrance wrapper. Slides + fades children in as they enter the viewport.
 * `delay` (ms) staggers siblings. Respects prefers-reduced-motion (no transform).
 *
 * PROGRESSIVE ENHANCEMENT (the entrance enhances an already-visible default —
 * content is NEVER gated on JS): the server/first render is fully visible
 * ("static"). Only after mount, and only for elements that are still BELOW the
 * fold (offscreen — so arming the hidden state can't flash), do we hide-then-
 * reveal on scroll. Above-the-fold content simply stays visible, and any
 * no-JS / headless / non-hydrating renderer ships the page fully visible.
 * Still bulletproof: a 1200ms failsafe + reduced-motion path force visible.
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
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  // Visible by default so SSR / no-JS / hydration all paint the real content.
  const [phase, setPhase] = useState<Phase>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already in / near the viewport on mount → leave visible (no entrance, no
    // flash). The hero and first fold appear instantly with the page.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) return;

    // Below the fold → safe to arm the hidden state (offscreen: invisible flash)
    // then animate it in once it scrolls into view.
    setPhase("hidden");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setPhase("shown");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    // Failsafe: nothing stays hidden. If the observer never fires (edge cases
    // with smooth-scroll / fast loads), force-reveal after 1200ms.
    const failsafe = window.setTimeout(() => setPhase("shown"), 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  const offset =
    dir === "up"
      ? "translateY(24px)"
      : dir === "left"
      ? "translateX(-24px)"
      : dir === "right"
      ? "translateX(24px)"
      : "none";

  const hidden = phase === "hidden";
  const animating = phase !== "static";

  const Comp = Tag as keyof React.JSX.IntrinsicElements;
  const Any = Comp as React.ElementType;

  return (
    <Any
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      style={{
        ...style,
        opacity: hidden ? 0 : 1,
        transform: hidden ? offset : "none",
        transition: animating
          ? `opacity .56s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .56s cubic-bezier(.2,.7,.2,1) ${delay}ms`
          : undefined,
        // Hold the GPU layer only while an entrance is pending; release otherwise.
        willChange: hidden ? "opacity, transform" : "auto",
      }}
    >
      {children}
    </Any>
  );
}
