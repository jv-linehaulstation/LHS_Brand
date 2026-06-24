# SUB-PAGES — Align every page with the new homepage + responsive ⭐

**Sequence: do this AFTER `HOMEPAGE-REBUILD-FROM-CLEAN.md` is built, verified, and pushed.**
Goal: bring drivers, carriers, brokers, shippers, government, leadership, and join **in line with
the rebuilt homepage's design language** — and make every page fully responsive. No HTML mockups.
Work autonomously per CLAUDE.md on `redesign-v2`. End with `npx tsc --noEmit` + `npm run build`
+ a real-browser pass at **mobile (~390px), tablet (~768px), desktop (~1440px)**, then push.

**Design source of truth = the rebuilt homepage** and its shared pieces (`Nav`, `Section`,
`ClipReveal`/`Reveal` (the FIXED bulletproof reveal), `WideSlider` w/ thumbnail nav,
`FilterGallery`, the pinned "How It Works", `BackgroundVideo`, `CountUp`, design tokens).
**Reuse these components — don't fork new ones.** Cohesion over per-page novelty.

---

## A. Global alignment rules (apply to ALL pages)
1. **Full-width layout** — same as homepage: content spans the screen with ~100px desktop side
   margins (`px-[clamp(20px,6vw,100px)]`), not the narrow centered `max-w-site` column. Keep
   readable line-lengths with per-block `max-w-*`.
2. **Alternating black ↔ white** — introduce the homepage's white sections (warm `#F4F2EF`,
   carbon text, hairline dividers) alternating with black/carbon. Today the audience pages are
   all-dark; rework so no two adjacent sections share bg or layout. **Keep each page's accent**
   (Drivers `#F07820` · Carriers `#4878A8` · Brokers `#7EC8E3` · Shippers `#18A848` ·
   Government `#C8A060`) — accent is the per-page signal; the B/W rhythm is shared.
3. **Bulletproof headers/reveals** — every heading must be visible (use the fixed reveal). Verify
   in a browser on each page. Correct semantic `<h1>`/`<h2>`.
4. **Shared Nav** (already: no numbers, no Leadership, bigger logo) — confirm the per-page accent
   underline still works.
5. **Hero treatment** matches the homepage: full-bleed media + the homepage's text position +
   reveal style. Where a page has fitting footage, use `BackgroundVideo`; otherwise a strong
   full-bleed render with parallax + dark overlay. Keep each page's deck-grounded headline.
6. **Motion + reduced-motion** identical to homepage (Lenis already global; pinned sections
   degrade to static stacks).
7. **Brand rules** unchanged (casing, Hubs/Terminals/Service Centers, CTA wording, white-on-photo
   overlays, logo-per-bg).

## B. Reuse homepage modules where each page already has the equivalent
- **Amenities / Capabilities grids** → render with the homepage's **full-bleed `WideSlider`
  (thumbnail-strip nav)** and/or **`FilterGallery`** instead of the old boxed grids.
- **"How It Works" sequences** (already in `AudiencePage`) → upgrade to the homepage's **pinned,
  scroll-driven 001→002→003** treatment (media pinned, steps advance on scroll; static on mobile/reduced-motion).
- **Stat consoles / problem-by-the-numbers** → homepage `CountUp` styling + spacing.
- **Closing/contact** → match the homepage's new "Let's Talk": embed the **Join Free form**
  (`JoinForm`) + contact info (CTAs handled by the form), per page accent.

## C. Page-specific — keep what's unique, restyle the shell
- **Drivers** (`#F07820`): keep the **OneHome wealth calculator** + Outriders amenities; hero ties
  to "Change Is Coming." (Drivers deck).
- **Carriers** (`#4878A8`): keep the **FlexSpace calculator** + SoloVsRelay. Deck headers fit well:
  "Stop Building Terminals. Start Buying Space." · "Three Ways In. One Premium Network." ·
  "First-Class. Full-Service. Member-Only." · "Retention Is Cheaper Than Replacement — By a Mile."
- **Brokers** (`#7EC8E3`) & **Shippers** (`#18A848`): no calculator; capacity/visibility focus
  (copy already in `lib/audiences.ts`).
- **Government** (`#C8A060`): keep the federal figures ($40K vs $196K/space, 133→600) — **leave the
  PENDING JEFF markers**; macro "freight relay infrastructure" framing.
- **Leadership**: align hero + sections to the new system (full-width, B/W, reveals); Jeff +
  3 board advisors stay here (homepage only shows Jeff).
- **Join**: align the page chrome to the new system; keep the embedded GHL form working.

## D. Responsive — explicit (test all three widths)
- Full-width margins collapse cleanly on mobile (no 100px gutters on phones — the clamp handles it).
- **Pinned scroll sections** (How It Works) become a simple stacked sequence on mobile and under
  reduced-motion — never trap scroll.
- **WideSlider + thumbnail nav** works on touch (swipe), thumbnails wrap/scroll, tap targets ≥44px.
- **FilterGallery** chips wrap; grid reflows 4→2→1; lightbox usable on mobile.
- **Calculators** (OneHome, FlexSpace) stack and stay usable on small screens; tables scroll, not overflow.
- **Nav** collapses sensibly (it already scrolls); the bigger logo still fits.
- Verify no horizontal overflow at any width; check the white sections keep WCAG AA contrast.

## Done checklist
- [ ] All pages: full-width layout, alternating B/W, per-page accent kept
- [ ] Headers visible everywhere (browser-verified, all 3 widths)
- [ ] Amenities/how-it-works/contact reuse the homepage modules (slider+thumbnails, pinned steps, Join form)
- [ ] Drivers/Carriers calculators intact; Government figures + PENDING JEFF intact; Leadership board intact
- [ ] Responsive: mobile/tablet/desktop clean, no overflow, touch works, reduced-motion safe
- [ ] `npx tsc --noEmit` clean · `npm run build` passes · pushed to `redesign-v2`
