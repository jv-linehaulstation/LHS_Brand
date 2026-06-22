"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Full-bleed background image with a gentle scroll-parallax drift.
 * The image is over-sized (top/bottom inset) so the drift never reveals an edge.
 * Disabled under prefers-reduced-motion.
 */
export default function ParallaxImage({
  src,
  alt = "",
  strength = 0.18,
  priority = false,
}: {
  src: string;
  alt?: string;
  strength?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // progress: -1 (just below) → 1 (just above)
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${(-progress * strength * 100).toFixed(2)}px, 0)`;
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
  }, [strength]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div ref={ref} className="absolute -inset-y-[12%] inset-x-0 will-change-transform">
        <Image src={src} alt={alt} fill priority={priority} className="object-cover" sizes="100vw" />
      </div>
    </div>
  );
}
