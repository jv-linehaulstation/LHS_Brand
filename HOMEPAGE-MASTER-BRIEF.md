# HOMEPAGE MASTER BRIEF ⭐ (canonical — supersedes the others)

This is the single source of truth for the homepage rebuild. It absorbs and replaces:
`HOMEPAGE-VAULK-SCROLL-BRIEF.md`, `HOMEPAGE-VISUALS-BRIEF.md`,
`HOMEPAGE-RESTRUCTURE-BRIEF.md`. Where details differ, **this file wins.** (Those three are
kept only as deeper reference — read them for extra asset notes, but build from this.)

**Goal:** rebuild `app/page.tsx` into a cinematic, scroll-driven single page in the spirit of
**vaulk.com** (smooth scroll, alternating **black ↔ white** sections, scroll-scrubbed media,
pinned numbered sliders, clip/mask text reveals) — with the narrative backbone of
**fourstonesgrp.com** (origin story, values, featured terminals) — rendered in the
**LineHaul Station** brand (Carbon `#0B0B0B` + Fuel Orange `#F07820`, Archivo display).
And: **no text section stands alone** — every block is paired with a real visual.

A visual reference mockup is at `../vaulk-scroll-mockup.html` (open in a browser). Match that
feel; refine with real assets.

Work autonomously per CLAUDE.md, on `redesign-v2`. **Use every design/motion skill** —
`frontend-design`, `ui-ux-pro-max`, `impeccable` (typeset/layout/animate), `design-taste`,
`emilkowalski/skills`. Keep all brand rules (casing: LineHaul Station / FlexSpace / OneHome /
Outriders Club; Hubs/Terminals/Service Centers, never "nodes"; CTAs only "Connect With Us" /
"Schedule a Call" / "Join Free"; dark overlay under white-on-photo text). Finish with
`npx tsc --noEmit` + `npm run build`; commit + push. Keep the current homepage working until
the new one is verified.

---

## 1. Scroll engine & motion (build first)
- Add **Lenis** smooth/inertia scroll in a client root wrapper; **disable on
  `prefers-reduced-motion`** (and ensure every effect has a static, readable fallback).
- Use **Framer Motion** `useScroll`/`useTransform` for pins, scrubbing, parallax, counters.
  (GSAP ScrollTrigger only if a pin is genuinely easier — keep deps lean.)
- Signature mechanics (get these two right first — they're the "wow"):
  1. **Terminal scroll-scrub reveal** — pin a section; scrub through the BUILDING PREVIEWS
     views as you scroll. Create `public/assets/building-seq/01..07.jpg` from the 7 source
     PNGs (`LHS_VIEW_1..4`, `LHS_Aerial Drone View`, `LHS_Front Hero View`, `LHS_Left Side View`),
     web-optimized ≤2000px.
  2. **Pinned 5-audience slider** — Vaulk's `001/005…005/005`: pin the section, image +
     title + counter advance with scroll across Drivers/Carriers/Brokers/Shippers/Government.
- Also: **0→100 numeric preloader** merged with the existing badge `Loader`; **clip/mask
  headline reveals**; **sticky media columns**; count-ups (existing `CountUp`, runs once).

## 2. Alternating black ↔ white system
Alternate every section. Black = Carbon `#0B0B0B`, white text, Fuel accents. White = warm
near-white `#F4F2EF` (or pure white) bg, **Carbon text**, Fuel accents, hairline `#E2DDD6`
dividers; photos on white get a thin frame/border instead of a dark overlay. Swap logo per bg
(`logo-horz-dark` on white, `logo-horz-light` on black). Verify **WCAG AA** contrast. No two
adjacent sections share background OR layout.

## 3. Section order (B=black, W=white)
1. **Preloader** — badge + `0→100` + wipe-up.
2. **[B] Hero** — full-bleed parallax (`marketing/be-bold-be-different.jpg` or
   `deck-library/photos/context-truck-sunset.jpg`), clip-reveal headline, "Schedule a Call" +
   "Find Your Lane". Nav scrim.
3. **[W] Origin Story** (Four Stones DNA) — asymmetric: prose + pull-quote beside a framed
   `deck-library/photos/people-driver-in-cab.jpg`. Founder copy from the Leadership page
   (Jeff Swenson, $2B, dignity, never compromise on quality). Trim prose.
4. **[B] Problem → Fix** — sticky media column (`marketing/driver-frustrated.jpg`) with text
   scrolling beside it; resolve on `marketing/driver-proud.jpg` / `driver-flag.jpg`. Tight copy.
5. **[W] Terminal scroll-scrub reveal** — the pinned building-seq scrubber (§1.1) + short copy.
6. **[B] How a Hub works** — pinned numbered process `001/002/003` (Pull in → Recharge at the
   Service Center → Relay out). Support visual: `marketing/explainer-lhs.jpg` or `map-memphis.png`.
7. **[W] Find Your Lane** — pinned 5-audience slider (§1.2). Images: Drivers→`chrome-club-skydeck`,
   Carriers→`fleet-services-fuel`, Brokers→`cross-dock`, Shippers→`building-terminal-aerial`,
   Government→`context-civic-courthouse`; each "Explore →" to its page.
8. **[B] Amenities matrix** — grid of the 8 amenity renders (sky deck, lounge, fitness,
   gamer's den, gear shop, laundry, pool/spa, camp K9), hover-zoom + lightbox.
9. **[W] The Network** — `NetworkMap`, framed by `deck-library/photos/context-highway-interchange.jpg`
   / `context-city-skyline.jpg`.
10. **[B/W] By the numbers** — count-up stats (133 spaces, 600 future, $1,800/mo saved, 50+ Hubs);
    optional `marketing/pricing-sheet.jpg` / `memphis-info.jpg` callout.
11. **[B] Closing CTA** — full-bleed parallax (`context-truck-sunset` / `lifestyle-skydeck-sunset`),
    "Connect With Us" / "Schedule a Call". Footer.

## 4. Asset inventory (all in-repo)
- `public/assets/marketing/` (15) — `be-bold-be-different`, `driver-flag`, `driver-proud`,
  `driver-frustrated`, `fuel-imagination-1/3`, `pony-express`, `explainer-lhs`, `explainer-2025`,
  `map-memphis`, `memphis-info`, `pricing-sheet`, `memphis-bar`, `memphis-ad-1/2` (`.jpg/.png`).
- `public/assets/deck-library/` (45) — see its `MANIFEST.md` (renders + human/context photos).
- `public/assets/amenities/` (8), `public/assets/photos/`, `public/assets/outriders/story.mp4`.
- **To create:** `public/assets/building-seq/01..07.jpg` from BUILDING PREVIEWS source PNGs.

## 5. Performance & honesty
- Optimize all media (≤2000px, compress mp4, `next/image`, lazy-load) so smooth scroll stays smooth.
- Some MARKETING images are AI-generated brand concepts — fine as owned assets, but skip any
  that look low-res at full-bleed.
- Vaulk's exact easings aren't visible from markup — match the *feel* (slow, weighty, precise),
  then tune.

## Done checklist
- [ ] Lenis smooth scroll + 0→100 preloader (reduced-motion safe)
- [ ] Alternating black/white system, AA contrast, logo-per-bg
- [ ] Terminal scroll-scrub reveal + pinned 5-audience slider working
- [ ] Origin story, problem→fix sticky column, numbered process, amenities matrix, network, count-ups, closing
- [ ] Every section has a paired visual; prose trimmed
- [ ] Brand rules intact; `npx tsc --noEmit` clean; `npm run build` passes
- [ ] Committed + pushed to `redesign-v2`
