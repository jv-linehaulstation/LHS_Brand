"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Site-wide smooth/inertia scroll (vaulk feel). Disabled under
 * prefers-reduced-motion — native scrolling stays, and every scroll-driven
 * effect has a static fallback. Renders nothing; mounted once at the root.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
