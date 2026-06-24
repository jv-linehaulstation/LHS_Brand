# HOMEPAGE — Revision R2 (JJ's review of the built page)

Fix list from JJ's walkthrough of the current `redesign-v2` homepage. **Follow these written
instructions — do NOT follow any HTML mockup file.** Work autonomously per CLAUDE.md.
After changes: `npx tsc --noEmit` + `npm run build`, **verify in a real browser that every
section heading is visible**, then commit + push to `redesign-v2`.

---

## 🔴 P0 — Section headers are invisible (ROOT CAUSE — fix first)
Almost every section heading is missing on screen: hero text, "A Real Terminal…", "The
Gallery", "Find Your Lane", "Inside the Hub", "The Network", "Let's Talk".

**Cause:** `components/motion/ClipReveal.tsx` renders headings with `.clipr`
(`opacity:0; clip-path: inset(0 0 100% 0)`) and only reveals when the IntersectionObserver
adds `.in`. That reveal is not firing reliably (with Lenis smooth-scroll mounted), so the
headings stay permanently hidden.

**Fix — make reveal bulletproof (headings must NEVER stay hidden):**
- In `ClipReveal`, on mount, immediately check `getBoundingClientRect()` — if the element is
  already in or above the viewport, set `shown=true` right away (don't wait for an IO event).
- Add a **failsafe timeout**: if not shown within ~1200ms, force `shown=true`.
- Give the IntersectionObserver a `rootMargin: "0px 0px -10% 0px"` so it triggers a touch early,
  and keep `threshold` low (~0.01).
- Confirm it also reveals correctly while **Lenis** is running (test by scrolling).
- Verify in a browser that **every** section heading + kicker appears. This one fix restores
  most of the "missing header" complaints.

Also confirm semantic hierarchy: hero = `<h1>`, each section title = `<h2>`, and they read as
strong, large headers.

---

## P1 — Section-by-section

**Loader.** It currently reads as the old badge loader. Make it lead with the **bold `0 / 100`
numeric counter** as the focal element (large, centered, like the version JJ liked), with the
badge/wordmark secondary. Keep it dark, load-gated, wipe-up reveal, reduced-motion safe.

**Hero — text position.** Move the headline + CTAs **up** — they're pinned at the very bottom
now. Put them back where they were before (upper / vertically-centered area), not bottom-anchored.
Keep the cowboy video + dark gradient.

**Hero — scroll cue.** **Remove** the fixed "Scroll to explore" mouse indicator pinned at the
bottom. Replace with a **cursor-following scroll affordance**: as the mouse moves over the hero,
a small round "Scroll ↓" badge follows the cursor (Vaulk-style). Hide it on touch devices and
under `prefers-reduced-motion`. No fixed element glued to the bottom edge.

**Nav logo — too small.** Increase the logo ~30–44% (e.g. `h-[26px]` → about `h-[36px]`,
width auto). Make it clearly bigger; keep it crisp.

**"A Real Terminal / What We Built".** The left video is just a carbon-fiber "chrome" texture —
it says nothing. Replace it with **meaningful media**: real terminal/building footage if we
have it, otherwise a slow auto-advancing (Ken-Burns) montage of the building + amenity renders
that **changes with the active vertical tab** (Structure → exterior/aerial, Amenities → sky
deck/lounge, Service → fleet/fuel/cross-dock, Security → gate house). And make sure this
section's header shows (P0 fix). The point: the visual should communicate, not just shimmer.

**Gallery slider — make it FULL-SCREEN / full-bleed.** Right now slides are ~78–86% width with
side gutters, so it looks small and boxed. Rebuild it edge-to-edge like Vaulk: **no column
margins/gutters**, slides span the full viewport width (true full-bleed), much larger imagery,
minimal caption. Keep drag + arrows + slow auto-advance (reduced-motion safe). Add the section
header (P0).

**Find Your Lane.** Header missing — P0 fix. Confirm kicker + H2 show; keep desc-left / image-right.

**Inside the Hub.** Header missing — P0 fix. Keep the filter chips + animated grid.

**The Network.** Header missing — P0 fix. Otherwise keep the map as-is.

**By the Numbers.** Fix the **spacing** — the stat cells are cramped/uneven. Give them more
internal padding and consistent gaps, and balance the vertical rhythm with the sections around it.

**Let's Talk (closing).** Header missing — P0 fix.

---

## Notes
- **Ignore the HTML mockups** (`vaulk-scroll-mockup*.html`, `fourstones-*`) — they are deprecated.
  Build from this file + the prior written briefs only.
- Keep all brand rules (casing, Hubs/Terminals/Service Centers, CTA wording, white-on-photo
  overlays, alternating black/white, logo-per-bg).
- Reduced-motion safe throughout.

## Done checklist
- [ ] ClipReveal fixed — every section heading visible (browser-verified)
- [ ] Loader leads with bold 0/100
- [ ] Hero text moved up; cursor-following scroll cue (no bottom-pinned indicator)
- [ ] Logo ~30–44% bigger
- [ ] "What We Built" video replaced with meaningful, tab-linked media
- [ ] Gallery is full-bleed full-screen slider (no gutters)
- [ ] By-the-Numbers spacing fixed
- [ ] `npx tsc --noEmit` clean, `npm run build` passes, browser-checked, pushed to `redesign-v2`
