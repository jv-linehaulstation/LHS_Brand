"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Clip/mask reveal (vaulk feel) — children draw up from a clipped edge the first
 * time they enter the viewport. Styling lives in globals.css (.clipr/.in), which
 * also forces a static, visible state under prefers-reduced-motion.
 */
export default function ClipReveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            window.setTimeout(() => setShown(true), delay);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Comp = Tag as React.ElementType;
  return (
    <Comp ref={ref as React.Ref<HTMLElement>} className={`clipr ${shown ? "in" : ""} ${className}`}>
      {children}
    </Comp>
  );
}
