"use client";

import { useState } from "react";

/**
 * Accessible FAQ accordion (one panel open at a time). Reduced-motion safe:
 * the open/close uses a grid-rows transition that collapses to no motion under
 * prefers-reduced-motion (handled globally). Copy is reproduced verbatim from
 * the live membership funnel.
 */
export type QA = { q: string; a: string };

export default function FAQ({ items, accent = "#F07820" }: { items: QA[]; accent?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-chrome/12 border-y border-chrome/12">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-5 py-6 text-left"
            >
              <span
                className="tnum font-mono text-[13px]"
                style={{ color: accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-display text-[clamp(18px,2.2vw,26px)] font-extrabold uppercase leading-tight tracking-[-0.01em] text-white">
                {item.q}
              </span>
              <span
                className="grid h-8 w-8 flex-none place-items-center rounded-full border border-chrome/25 text-[18px] text-white transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-[60ch] pb-7 pl-10 text-[clamp(16px,1.7vw,18px)] leading-relaxed text-[#d8d8d8]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
