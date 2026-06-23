"use client";

import { useEffect, useRef } from "react";

/**
 * Full-bleed muted background video. Autoplays only when motion is allowed;
 * under prefers-reduced-motion it stays paused on its poster frame (no movement).
 * Always renders the same element to avoid hydration mismatch — playback is
 * decided in an effect, never via conditional SSR output.
 */
export default function BackgroundVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // leave paused — the poster frame stands in, no motion
    v.muted = true;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
