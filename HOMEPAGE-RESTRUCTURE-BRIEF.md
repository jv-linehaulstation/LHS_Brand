# HOMEPAGE RESTRUCTURE — "Four Stones-inspired" narrative flow

Restructure the homepage (`app/page.tsx`) into a story-driven, single-page narrative
inspired by fourstonesgrp.com — but rendered in the LineHaul Station industrial skin
(carbon + Fuel Orange, Archivo display, bold/high-contrast), NOT their quiet-luxury beige.
Borrow their **structure and restraint**, keep OUR **voice, palette, and conversion**.

Work autonomously per CLAUDE.md. Apply the `frontend-design` skill. Reuse existing
components (Nav, Section variants, Reveal, ParallaxImage, CountUp, SectionHead/DataTag,
NetworkMap, LeadForm, Contact, Footer). Keep all brand rules: casing (LineHaul Station /
FlexSpace / OneHome / Outriders Club), Hubs/Terminals/Service Centers (never "nodes"),
CTAs only "Connect With Us" / "Schedule a Call" / "Join Free". White-on-photo always gets a
dark overlay. Finish with `npx tsc --noEmit` and `npm run build`; commit + push to
`redesign-v2`.

> A visual reference mockup of two of these sections lives at
> `../fourstones-homepage-mockup.html` (open in a browser). Match that spirit, not pixel-for-pixel.

## What Four Stones does (the patterns we're borrowing)
1. Single-page story scroll with an overlay/anchored menu (Who We Are → What We Do → Why →
   Experience → Team → News → Connections).
2. **Origin Story** written as editorial prose (no bullets), asymmetric layout.
3. **Tabbed services** — one block, content switches (Invest / Develop / Advise).
4. **4-up Values grid** (People / Integrity / Excellence / Stewardship).
5. **Featured Projects** as full-bleed image cards (name + location + "Learn More").
6. A **cinematic video** anchor.
7. **News / Media** credibility band.
8. Branded section names, generous whitespace, slow elegant reveals.

## Target homepage section order (LHS)
Keep the existing hero + national Hub map; insert the new narrative spine around them.

1. **Hero** (existing) — keep the bold hero; ensure one big headline + "Schedule a Call" /
   "Find Your Lane" CTAs.
2. **Origin Story** (NEW) — `variant="carbon"`. Asymmetric grid: a sticky left column
   (kicker "Who We Are" + "Founded · West Memphis, AR") and a wide right column with a big
   Archivo headline, a serif **lead** line, 2–3 prose paragraphs, and a pull-quote with the
   ethos line. Pull copy from the Leadership page founder bio (Jeff Swenson, $2B, dignity,
   never compromise on quality). One accent word in the headline uses the `.outline-head`
   stroke treatment.
3. **Find Your Lane** (RESTYLE existing audience router) — present it Four-Stones-style as a
   **tabbed block**: tabs Drivers / Carriers / Brokers / Shippers / Government; selecting a
   tab swaps in that audience's one-liner + a "Explore →" link to its page. Reduced-motion safe.
4. **Pillars / Why We Do It** (NEW) — `variant="surface"`. 4-up grid: Driver Dignity ·
   Real Estate (owned terminals) · Lower Cost (national relay) · Stewardship (American
   manufacturing / supply-chain resilience). Hairline-divided cells, mono numerals, Archivo titles.
5. **National Hub Map** (existing `NetworkMap`) — keep; frame it as "The Network."
6. **Featured Terminals** (NEW) — `variant="ink"`. Full-bleed image cards using
   `public/assets/photos` BUILDING PREVIEWS renders: one large hero card (West Memphis ·
   "Open Now" live badge) then a 2-up row (phase-one Hubs). Each card: badge, Archivo name,
   mono location, "Learn More →". Hover = slow image scale (1.04→1.10), reduced-motion safe.
   Link "View the Network →" to the map / a future experience page.
7. **Proof / Stats band** (existing West Memphis proof + CountUp figures) — keep.
8. **Cinematic break** (OPTIONAL) — a full-bleed muted autoplay video (road/terminal
   footage or the Outriders `hero.mp4`) with one line of copy. Skip if no good asset yet.
9. **Lead form / Contact** (existing) — keep conversion. CTA "Connect With Us" / "Schedule a Call".
10. **Footer** (existing).

## Design notes
- Type scale goes BIG (this matches the redesign-v2 direction): section headlines
  `clamp(34px,4.6vw,64px)+`, origin headline up to ~`clamp(40px,6vw,86px)`.
- Backgrounds alternate via `Section` — no two adjacent sections share a treatment.
- Keep Fuel Orange sparing and deliberate: kickers, one stroked word, badges, hovers.
- All new motion respects `prefers-reduced-motion`. Use existing `Reveal`.

## Done checklist
- [ ] Origin Story section (asymmetric, prose + pull-quote) from real founder copy
- [ ] Find Your Lane restyled as tabbed audience block
- [ ] Pillars 4-up grid
- [ ] Featured Terminals full-bleed cards (real BUILDING PREVIEWS renders)
- [ ] Order/alternation correct; hero + map + proof + lead form preserved
- [ ] Brand rules intact; `npx tsc --noEmit` clean; `npm run build` passes
- [ ] Committed + pushed to `redesign-v2`
