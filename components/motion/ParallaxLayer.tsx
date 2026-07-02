"use client";

import type React from "react";
import { useEffect, useRef } from "react";

/**
 * Generic scroll-parallax layer — translates its children on the Y axis as the
 * element passes through the viewport. Positive `speed` drifts up on scroll;
 * use a small speed for slow background layers and a larger one for foreground
 * elements to get a multi-speed effect. Disabled under prefers-reduced-motion.
 * Same rAF + getBoundingClientRect pattern as ParallaxImage (tracks native
 * scroll → works with Lenis).
 */
export default function ParallaxLayer({
  children,
  speed = 0.12,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${(-progress * speed * 100).toFixed(2)}px, 0)`;
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
  }, [speed]);

  const Any = Tag as React.ElementType;
  return (
    <Any ref={ref as React.Ref<HTMLElement>} className={`will-change-transform ${className}`}>
      {children}
    </Any>
  );
}
