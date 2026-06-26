"use client";

import { useRef } from "react";

/**
 * Mouse-reactive card surface: a soft radial glow tracks the cursor and the
 * card lifts on hover. Pointer position is written to CSS vars (--mx/--my) only
 * while hovered, so it's cheap. The glow + lift live in the `.spotlight` rule in
 * globals.css and are disabled under prefers-reduced-motion / coarse pointers.
 */
type Props = React.HTMLAttributes<HTMLDivElement> & { glow?: string };

export default function Spotlight({ glow, className = "", style, children, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`spotlight ${className}`}
      style={{ ...(glow ? { ["--glow" as string]: glow } : {}), ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
