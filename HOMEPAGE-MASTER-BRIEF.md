# HOMEPAGE MASTER BRIEF ⭐ (canonical — supersedes the others)

This is the single source of truth for the homepage rebuild. It absorbs and replaces:
`HOMEPAGE-VAULK-SCROLL-BRIEF.md`, `HOMEPAGE-VISUALS-BRIEF.md`,
`HOMEPAGE-RESTRUCTURE-BRIEF.md`. Where details differ, **this file wins.** (Those three are
kept only as deeper reference — read them for extra asset notes, but build from this.)

### Revision R1 (JJ's review — current, do these)
1. **Nav:** remove the 2-digit numbers before each link; **remove the "Leadership" tab**
   (the `/leadership` page stays live, just not in the nav). Keep Join Free + Connect With Us.
2. **Hero:** add a **full-bleed background video** (move the cinematic video that currently
   sits near the footer up into the hero; delete that footer video section). Reposition copy —
   **not centered/low**; anchor it cleanly over the video. Add a Vaulk-style **"Scroll to
   explore" animated mouse indicator** at the bottom.
3. **Who We Are:** fold in **Jeff Swenson's profile only** (photo + Founder & CEO + short bio +
   LinkedIn/email, from the leadership page). **Do NOT** add the 3 board advisors here — they
   stay on `/leadership`. Optional "Meet the full team →" link.
4. **"A real terminal is not a parking lot":** replace the image-scrub with a **video playing
   on the left** + **vertical tabs** on the right whose **description scrolls/clips in** (Vaulk-style).
5. **New — full-width image slider** (Vogue-style): a big edge-to-edge carousel of ALL our renders.
6. **Audiences:** description on the **left**, image/icon box on the **right** panel.
7. **Inside the Hub:** add **Vaulk-style filter chips**; clicking a filter **animates/expands**
   the grid to the matching images.
8. **National network map:** keep as-is ("this is perfect").

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
- Signature mechanics (get these right first — they're the "wow"):
  1. **"Real terminal" — left video + vertical tabs + scroll-in text** (replaces the old
     image-scrub): a muted autoplay video plays on the left while Vaulk-style **vertical tabs**
     on the right reveal copy that clips/scrolls in on scroll. (See §3, section 4.)
  2. **5-audience module** — description on the left, image/icon panel on the right; advance by
     scroll (Vaulk `001/005…`) or click. (See §3, section 6.)
  3. **Filterable "Inside the Hub" gallery** — Vaulk-style filter chips; clicking animates/
     expands the grid to the matching renders. (See §3, section 7.)
- Also: **0→100 numeric preloader** merged with the existing badge `Loader`; **clip/mask
  headline reveals**; **sticky media columns**; **full-width image slider**; count-ups (existing
  `CountUp`, runs once).

## 2. Alternating black ↔ white system
Alternate every section. Black = Carbon `#0B0B0B`, white text, Fuel accents. White = warm
near-white `#F4F2EF` (or pure white) bg, **Carbon text**, Fuel accents, hairline `#E2DDD6`
dividers; photos on white get a thin frame/border instead of a dark overlay. Swap logo per bg
(`logo-horz-dark` on white, `logo-horz-light` on black). Verify **WCAG AA** contrast. No two
adjacent sections share background OR layout.

## 3. Section order (B=black, W=white) — incorporates Revision R1

**0. Nav** — remove the 2-digit index numbers on each tab; remove the "Leadership" tab. Keep
the 5 audience links + Join Free + Connect With Us. (`/leadership` stays reachable directly.)

1. **Preloader** — badge + `0→100` + wipe-up.

2. **[B] Hero — WITH VIDEO.** Full-bleed **muted autoplay/loop background video** — the
   **golden-hour "Outriders" cowboy-at-sunset clip** (JJ approved). Use it remotely (keep it
   off the repo, ~23 MB):
   `https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/69554d56cb5b716ba310c3dd.mp4`
   Set `muted autoPlay loop playsInline preload="metadata"` and
   `poster="/assets/marketing/hero-poster.jpg"` (already in repo) so a still shows instantly.
   Dark scrim/gradient over it for legibility (the amber tones match Fuel Orange — lean into it).
   Note: source is 480p — keep a dark gradient so softness reads as atmosphere, not low-res. **Reposition the headline — not centered/low**;
   anchor it (e.g. lower-left) so it reads cleanly over the video: big Archivo clip-reveal
   headline + subline + "Schedule a Call" / "Find Your Lane". Add a **"Scroll to explore"
   affordance with an animated mouse indicator** (the Vaulk wheel-dot animation) pinned bottom-center.
   **Delete the old near-footer video section** (it now lives here).

3. **[W] Who We Are (origin + Jeff).** Asymmetric origin prose + pull-quote (founder voice)
   beside a framed `deck-library/photos/people-driver-in-cab.jpg`. **Fold in Jeff Swenson's
   profile ONLY** — reuse from `app/leadership/page.tsx`: his photo (`...Bio_JS-23-1.png`),
   "Founder & CEO", the $2B bio, LinkedIn + `js@linehaulstation.com`. **Do NOT add the 3 board
   advisors here.** Optional small "Meet the full team →" link to `/leadership`. Trim prose.

4. **[B] "A real terminal is not a parking lot" — video + vertical tabs.** Replace the
   image-scrub with: **left = a muted autoplay/loop video** (`outriders/story.mp4`); **right =
   Vaulk-style vertical tabs** (e.g. Structure · Amenities · Service · Security) whose
   **description text clips/scrolls in** as you scroll / switch tabs. Video keeps playing.
   Reduced-motion safe.

5. **[W] Full-width image slider (Vogue-style) — NEW.** A big **edge-to-edge** carousel of ALL
   our renders (deck-library renderings + amenities + building previews). Large imagery,
   minimal captions, auto-advance + drag/arrows, smooth slide transition.

6. **[B] Find Your Lane — audiences.** **Description on the LEFT**, **image/icon box on the
   RIGHT panel.** Drivers / Carriers / Brokers / Shippers / Government — switch by scroll
   (Vaulk `001/005…`) or click; right panel shows that lane's image
   (Drivers→`chrome-club-skydeck`, Carriers→`fleet-services-fuel`, Brokers→`cross-dock`,
   Shippers→`building-terminal-aerial`, Government→`context-civic-courthouse`). "Explore →" per lane.

7. **[W] Inside the Hub — filterable gallery.** Vaulk-style **filter chips** (All · Club ·
   Fleet Services · Outdoor · Facilities). Clicking a filter **animates/expands** the grid
   (fade + scale/expand transition) to the matching deck-library renders. Lightbox on click.

8. **[B] The Network** — `NetworkMap` **(keep as-is — "this is perfect")**, framed by
   `deck-library/photos/context-highway-interchange.jpg` / `context-city-skyline.jpg`.

9. **[W] By the numbers** — count-up stats (133 spaces, 600 future, $1,800/mo saved, 50+ Hubs);
   optional `marketing/pricing-sheet.jpg` / `memphis-info.jpg` callout.

10. **[B] Closing CTA** — full-bleed parallax (`context-truck-sunset` / `lifestyle-skydeck-sunset`),
    "Connect With Us" / "Schedule a Call". Footer. *(No video here — it moved to the hero.)*

## 4. Asset inventory (all in-repo)
- `public/assets/marketing/` (15) — `be-bold-be-different`, `driver-flag`, `driver-proud`,
  `driver-frustrated`, `fuel-imagination-1/3`, `pony-express`, `explainer-lhs`, `explainer-2025`,
  `map-memphis`, `memphis-info`, `pricing-sheet`, `memphis-bar`, `memphis-ad-1/2` (`.jpg/.png`).
- `public/assets/deck-library/` (45) — see its `MANIFEST.md` (renders + human/context photos).
- `public/assets/amenities/` (8), `public/assets/photos/`, `public/assets/outriders/story.mp4`.
- **Hero video (LOCKED):** golden-hour Outriders cowboy clip, remote ~23 MB —
  `https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/69554d56cb5b716ba310c3dd.mp4`
  poster `public/assets/marketing/hero-poster.jpg` (in repo).
- **"Real terminal" video:** `public/assets/outriders/story.mp4` (local, 6.7 MB).
- (Building-seq image-scrub is dropped per R1 — replaced by the video + vertical tabs.)
- Do NOT use the MARKETING Facebook live-event mp4 — it's ~631 MB.

## 5. Performance & honesty
- Optimize all media (≤2000px, compress mp4, `next/image`, lazy-load) so smooth scroll stays smooth.
- Some MARKETING images are AI-generated brand concepts — fine as owned assets, but skip any
  that look low-res at full-bleed.
- Vaulk's exact easings aren't visible from markup — match the *feel* (slow, weighty, precise),
  then tune.

## Done checklist
- [ ] Nav: numbers removed, "Leadership" tab removed
- [ ] Hero: background video moved up from the footer; copy repositioned (not centered/low);
      animated "Scroll to explore" mouse indicator
- [ ] Who We Are: Jeff's profile folded in (no board advisors on home)
- [ ] "Real terminal": left video + vertical tabs + scroll-in description
- [ ] Full-width Vogue-style image slider
- [ ] Audiences: description left + image/icon panel right
- [ ] Inside the Hub: Vaulk filter chips with animated expand
- [ ] Network map kept; count-ups; closing CTA (no footer video)
- [ ] Lenis smooth scroll + 0→100 preloader; alternating B/W with AA contrast; logo-per-bg
- [ ] Brand rules intact; `npx tsc --noEmit` clean; `npm run build` passes
- [ ] Committed + pushed to `redesign-v2`
