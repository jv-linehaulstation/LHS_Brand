"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { audiences, AUDIENCE_ORDER } from "@/lib/audiences";
import { site } from "@/lib/site";
import MagneticButton from "@/components/motion/MagneticButton";

/**
 * Fluid-Glass top nav. Transparent over the hero, then frosts on scroll
 * (backdrop-blur + faint white fill + hairline chrome border). A full-screen
 * overlay menu reveals the wayfinding lanes with a staggered rise. The CTA is
 * explicit per the playbook — "Join OneHome." Reduced-motion safe (the overlay
 * links appear instantly; no scroll-jank). Client component: scroll state +
 * overlay open state + body scroll-lock.
 */
const SECTION_LINKS = [
  { href: "#core", label: "The Math" },
  { href: "#amenities", label: "Amenities" },
  { href: "#calculator", label: "Calculator" },
];

export default function GlassNav({ accent = "#F07820" }: { accent?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the overlay on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const overlayLinks = [
    { href: "/", label: "Home" },
    ...AUDIENCE_ORDER.map((k) => ({ href: `/${k}`, label: audiences[k].navLabel })),
    { href: "/leadership", label: "Leadership" },
    { href: "/join", label: "Outriders Club" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "glass-strong border-b border-chrome/15"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-[clamp(20px,6vw,100px)] py-3.5">
          <Link href="/" className="flex flex-none items-center" aria-label="LineHaul Station home">
            <Image
              src="/assets/logo-horz-light.png"
              alt="LineHaul Station"
              width={210}
              height={37}
              priority
              className="h-[34px] w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {SECTION_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="uline font-label text-[11px] uppercase tracking-[0.16em] text-chrome transition-colors hover:text-white"
                style={{ ["--ac" as string]: accent }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-none items-center gap-3">
            <MagneticButton strength={0.4} className="hidden sm:inline-block">
              <a
                href="#join"
                className="rounded-btn px-5 py-[11px] font-label text-[10px] uppercase tracking-[0.14em] text-ink shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:brightness-110 active:scale-[0.97]"
                style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
              >
                Join OneHome
              </a>
            </MagneticButton>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-btn border border-chrome/25 transition-colors hover:border-chrome/50"
            >
              <span className="h-px w-5 bg-chrome" aria-hidden />
              <span className="h-px w-5 bg-chrome" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-ink/92 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div className="bloom" style={{ ["--bloom" as string]: `${accent}22` }} aria-hidden />
        <div className="blueprint pointer-events-none absolute inset-0 opacity-30" aria-hidden />

        <div className="relative flex h-full flex-col px-[clamp(20px,6vw,100px)] py-5">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/logo-horz-light.png"
              alt="LineHaul Station"
              width={210}
              height={37}
              className="h-[34px] w-auto"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-chrome/30 font-mono text-[18px] text-chrome transition-colors hover:border-chrome/60 hover:text-white"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1.5">
            {open &&
              overlayLinks.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="overlay-link group flex w-fit items-center gap-4 font-display text-[clamp(32px,7vw,68px)] font-black uppercase leading-[1.04] tracking-[-0.02em] text-white transition-colors hover:text-[var(--ac)]"
                  style={{ ["--ac" as string]: accent, ["--i" as string]: i }}
                >
                  <span
                    className="font-mono text-[12px] font-normal tracking-[0.1em] opacity-50 transition-opacity group-hover:opacity-100"
                    style={{ color: accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {l.label}
                </Link>
              ))}
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-chrome/15 pt-5 font-mono text-[12px] text-chrome">
            <a href={site.phoneHref} className="tnum transition-colors hover:text-white">
              {site.phone}
            </a>
            <a href={site.emailHref} className="transition-colors hover:text-white">
              {site.email}
            </a>
            <span className="hidden sm:inline">{site.tagline}</span>
          </div>
        </div>
      </div>
    </>
  );
}
