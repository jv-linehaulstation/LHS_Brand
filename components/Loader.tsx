"use client";

import { useEffect } from "react";

/**
 * First-load preloader — ported verbatim from the original LineHaul Station site.
 * Badge sweep → wordmark → amber progress fill with five hub dots lighting up in
 * sequence (the network coming online) → wipe-up reveal. Styles live in
 * globals.css (#lhs-loader / .ld-*). Load-gated (min 1650ms) and capped (2600ms);
 * skipped entirely under prefers-reduced-motion.
 *
 * Rendered in the root layout, so it shows on full page loads / refresh but not
 * on client-side route changes. The markup is static (no React state) and the
 * reveal is done imperatively, exactly like the original script.
 */
export default function Loader() {
  useEffect(() => {
    const loader = document.getElementById("lhs-loader");
    if (!loader) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      loader.style.display = "none";
      return;
    }

    document.documentElement.style.overflow = "hidden"; // no scroll behind loader

    // hub dots light up in sequence — the network coming online
    const dots = loader.querySelectorAll<HTMLElement>(".ld-dot");
    const dotTimers: number[] = [];
    dots.forEach((d, i) => {
      dotTimers.push(window.setTimeout(() => d.classList.add("on"), 440 + i * 250));
    });

    const MIN = 1650;
    const MAX = 2600;
    const start = Date.now();
    let done = false;

    const reveal = () => {
      if (done) return;
      done = true;
      loader.classList.add("done"); // panel wipes up
      document.documentElement.style.overflow = "";
      window.setTimeout(() => {
        loader.style.display = "none";
      }, 720);
    };

    const onReady = () =>
      window.setTimeout(reveal, Math.max(0, MIN - (Date.now() - start)));

    if (document.readyState === "complete") onReady();
    else window.addEventListener("load", onReady);

    const cap = window.setTimeout(reveal, MAX); // hard cap, never trap the user

    return () => {
      window.removeEventListener("load", onReady);
      window.clearTimeout(cap);
      dotTimers.forEach((t) => window.clearTimeout(t));
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div id="lhs-loader" aria-hidden="true">
      <div className="ld-badge">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/lhs-badge.png" alt="LineHaul Station" />
      </div>
      <div className="ld-word">LineHaul Station</div>
      <div className="ld-track">
        <div className="ld-fill" />
        <span className="ld-dot" style={{ left: "0%" }} />
        <span className="ld-dot" style={{ left: "25%" }} />
        <span className="ld-dot" style={{ left: "50%" }} />
        <span className="ld-dot" style={{ left: "75%" }} />
        <span className="ld-dot" style={{ left: "100%" }} />
      </div>
      <div className="ld-tag">Everywhere the road takes you</div>
    </div>
  );
}
