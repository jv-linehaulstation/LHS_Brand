"use client";

import { useEffect, useRef, useState } from "react";

type Dir = "up" | "left" | "right" | "none";

/**
 * Scroll-entrance wrapper. Fades + slides children in the first time they enter
 * the viewport. `delay` (ms) staggers siblings. Respects prefers-reduced-motion
 * (renders fully visible, no transform).
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
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
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
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
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
