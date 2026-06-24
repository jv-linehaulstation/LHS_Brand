# HOMEPAGE — "Vaulk-style" scroll experience (alternating black/white + scroll effects)

Goal: rebuild the homepage (`app/page.tsx`) to feel like **vaulk.com/en-GB** — a smooth,
cinematic, scroll-driven single page with **alternating black ↔ white sections**,
scroll-scrubbed media, pinned numbered sliders, and clip/mask text reveals — but in the
**LineHaul Station** brand (Carbon `#0B0B0B` + Fuel Orange `#F07820`, Archivo display).

Reference reconstructed from Vaulk's structure + tech signature (Strapi media, `.mov`/`.mp4`
scroll sequences, a numeric `0/100` preloader, numbered pinned use-case slider). Match the
**feel and mechanics**, not their content.

Work autonomously per CLAUDE.md, on `redesign-v2`. **Use every design/motion skill**:
`frontend-design`, `ui-ux-pro-max`, `impeccable` (typeset/layout/animate), `design-taste`,
and `emilkowalski/skills` for motion. Keep brand rules (casing; Hubs/Terminals/Service
Centers, never "nodes"; CTAs only "Connect With Us" / "Schedule a Call" / "Join Free";
dark overlay under white-on-photo text). Finish `npx tsc --noEmit` + `npm run build`; commit + push.

---

## A. The Vaulk effect inventory (what to replicate)
1. **Numeric preloader** — counts `0 → 100`, then the page reveals. (Merge with our existing
   badge `Loader` — keep the badge, add a 0→100 counter + the wipe.)
2. **Smooth/inertia scroll** — buttery momentum scrolling site-wide (Lenis-style).
3. **Scroll-scrubbed media** — a video/image-sequence whose progress is tied to scroll while
   the section is **pinned** (Vaulk uses this to "assemble the bunker"). Our version:
   **rotate/reveal the terminal** by scrubbing the building-view images as you scroll.
4. **Alternating black ↔ white sections** — the look the client loves. Crisp inversions:
   black (carbon) → white → black → white. White = `#F4F2EF`/white bg, carbon text, fuel accents.
5. **Pinned numbered process** — `001 / 002 / 003` steps that advance as you scroll
   (Vaulk's "D+0 → D+7 logistics chain").
6. **Pinned vertical use-case slider** — `001/005 … 005/005`, the image swaps per step.
7. **Clip / mask text reveals** — headlines wipe/clip up on enter; lines stagger.
8. **Sticky media column** — text scrolls past a pinned render/video.
9. **Capability matrix** — clean grid of cards (Vaulk's "protection matrix").
10. Restraint + big type + lots of negative space; one idea per screen.

## B. Tech to add
- `lenis` for smooth scroll (mount once in a client root wrapper; respect
  `prefers-reduced-motion` → disable).
- Use **Framer Motion** `useScroll`/`useTransform` for pins, scrubbing (`video.currentTime`
  or image-sequence index), parallax, and counters. (Add GSAP ScrollTrigger only if a pin
  is easier there — keep it lean.)
- All scroll effects must degrade gracefully: reduced-motion users get static, readable sections.
- Keep `next/image` for stills; lazy-load video; provide poster frames.

## C. Section-by-section build (LHS homepage)
Alternate the background every section (B=black/carbon, W=white).

1. **Preloader (merge)** — badge + `0→100` counter + wipe-up. (Existing `#lhs-loader`.)
2. **[B] Hero** — full-bleed, big Archivo headline that **clip-reveals**, one subline, CTAs.
   Background: parallax `marketing/be-bold-be-different.jpg` OR `deck-library/photos/context-truck-sunset.jpg`.
   Thin scrim for nav legibility.
3. **[W] What LineHaul Station is** — the scroll-scrubbed **terminal reveal**: pin the
   section, scrub through building views as you scroll using the BUILDING PREVIEWS source
   PNGs (`LHS_VIEW_1..4`, `LHS_Aerial Drone View`, `LHS_Front Hero View`, `LHS_Left Side View`).
   *(Builder: copy those PNGs into `public/assets/building-seq/` as `01..07.jpg`, web-optimized
   ≤2000px; build an image-sequence scrubber.)* Short copy pinned beside it.
4. **[B] The Problem → The Fix** — sticky media column (`marketing/driver-frustrated.jpg`)
   with text scrolling beside it; end on `marketing/driver-proud.jpg` / `driver-flag.jpg`.
   Keep copy tight (lead line + a few short lines).
5. **[W] How a Hub works / Freight Relay** — **pinned numbered process** `001/002/003`
   (e.g. Pull in → Rest & recharge at the Service Center → Relay out). Use
   `marketing/explainer-lhs.jpg` or `map-memphis.png` as the supporting visual.
6. **[B] Find Your Lane → pinned use-case slider** — reuse Vaulk's `001/005…005/005`
   exactly for our **5 audiences**: Drivers / Carriers / Brokers / Shippers / Government.
   Image swaps per step (Drivers→`deck-library/renderings/chrome-club-skydeck.jpg`,
   Carriers→`fleet-services-fuel.jpg`, Brokers→`cross-dock.jpg`,
   Shippers→`building-terminal-aerial.jpg`, Government→`context-civic-courthouse.jpg`),
   each with an "Explore →" to its page.
7. **[W] Amenities matrix** — Vaulk "matrix" grid of cards: the 8 amenity renders
   (sky deck, lounge, fitness, gamer's den, gear shop, laundry, pool/spa, camp K9) with
   hover-zoom + lightbox.
8. **[B] The Network** — keep `NetworkMap`, framed by `deck-library/photos/context-highway-interchange.jpg`.
9. **[W] By the numbers** — count-up stats (terminals, spaces, states, savings) on a clean
   white band; optional `marketing/pricing-sheet.jpg` / `memphis-info.jpg` as a callout.
10. **[B] Closing CTA** — full-bleed parallax (`context-truck-sunset` / `lifestyle-skydeck-sunset`)
    with "Connect With Us" / "Schedule a Call". Footer.

## D. Alternating black/white — brand note
White sections use a warm near-white (`#F4F2EF`) or pure white bg, **Carbon `#0B0B0B` text**,
Fuel Orange for accents/kickers, and hairline `#E2DDD6` dividers. Photos on white get a thin
inner border/frame instead of an overlay. Keep logos correct per bg (`logo-horz-dark` on
white, `logo-horz-light` on black). Verify contrast (WCAG AA).

## E. Assets already staged for this (in repo)
- `public/assets/marketing/` — `be-bold-be-different.jpg`, `driver-flag.jpg`, `driver-proud.jpg`,
  `driver-frustrated.jpg`, `fuel-imagination-1.jpg`, `fuel-imagination-3.jpg`, `pony-express.jpg`,
  `explainer-lhs.jpg`, `explainer-2025.jpg`, `map-memphis.png`, `memphis-info.jpg`,
  `pricing-sheet.jpg`, `memphis-bar.jpg`, `memphis-ad-1.jpg`, `memphis-ad-2.jpg`.
- `public/assets/deck-library/` — 45 renders (see its MANIFEST), `public/assets/amenities/` (8),
  `public/assets/photos/`, `public/assets/outriders/story.mp4`.
- **Building sequence (to create):** copy the 7 BUILDING PREVIEWS source PNGs into
  `public/assets/building-seq/` as `01..07.jpg` for the scroll-scrub reveal.

## F. Build order
1. Add Lenis smooth-scroll root + reduced-motion guard.
2. Preloader 0→100 merge.
3. Build the alternating B/W `Section` rhythm + clip-reveal headline primitive.
4. Add the two "hero" scroll mechanics: terminal image-sequence scrub (#3) + pinned use-case
   slider (#6) — these are the signature moments; get them right first.
5. Fill remaining sections with sticky-column + matrix + counters.
6. QA motion on desktop + mobile + reduced-motion.

## G. Caveats / honest notes
- Vaulk's exact easing/timings aren't visible from markup — match the *feel* (slow, weighty,
  precise), then tune.
- This is a **big change** (new scroll engine + B/W system). Do it on `redesign-v2`; keep the
  current homepage working until the new one is verified.
- Some MARKETING images are AI-generated brand concepts — fine as owned assets; sanity-check
  quality at full-bleed size and skip any that look low-res.
- Heavy media: optimize (≤2000px, compress mp4) and lazy-load so the smooth scroll stays smooth.

## Done checklist
- [ ] Lenis smooth scroll (reduced-motion safe) + 0→100 preloader
- [ ] Alternating black/white section system with AA contrast
- [ ] Terminal image-sequence scroll-scrub reveal
- [ ] Pinned numbered process + pinned 5-audience use-case slider (001/005…)
- [ ] Clip/mask headline reveals, sticky media columns, amenities matrix, count-ups
- [ ] Brand rules intact; `npx tsc --noEmit` clean; `npm run build` passes
- [ ] Committed + pushed to `redesign-v2`
