# HOMEPAGE — Revert to a clean base, then rebuild from these instructions ⭐ CANONICAL

JJ's decision: **revert** the homepage off the buggy vaulk/HTML-mockup build, then **redo all
the revisions from these written instructions only.** Do NOT follow any HTML mockup file
(`vaulk-scroll-mockup*.html`, `fourstones-*`) — they are deprecated; ignore them. This file
supersedes the earlier homepage briefs. Work autonomously per CLAUDE.md on `redesign-v2`.
End with `npx tsc --noEmit` + `npm run build` AND a real-browser check that every section
heading is visible. Commit + push.

---

## STEP 1 — Revert the homepage to the clean pre-vaulk base
- Restore **`app/page.tsx`** to its state at commit **`2306b52`**
  ("Homepage visuals: pair every render…") — the last good homepage before the vaulk rebuild:
  `git checkout 2306b52 -- app/page.tsx` (then build the changes below on top).
- The buggy vaulk pieces should be **rewritten, not patched**. If you reuse a component, fix it
  to the spec below; otherwise replace it. The key offender to NOT carry over as-is is the
  `ClipReveal` reveal that left headings invisible (see Step 2, "Headers").
- Leave unrelated pages (drivers/carriers/etc., leadership, join) untouched.

## STEP 2 — Rebuild these features on the clean base (all approved by JJ)

### Headers / reveals — MUST always be visible (the #1 past bug)
Any scroll-reveal on headings must be **bulletproof**: reveal on mount if the element is
already in/near the viewport (check `getBoundingClientRect`), add a **failsafe timeout
(~1200ms) that forces visible**, use `rootMargin:"0px 0px -10% 0px"` + low threshold, and
confirm it works **with Lenis smooth-scroll running**. A heading must never stay hidden.
Browser-verify every section title shows. Semantic `<h1>` for hero, `<h2>` per section.

### Loader
Lead with the **bold `0 / 100` numeric counter** as the focal element (large, centered), badge
+ wordmark secondary, on the dark wipe-up panel. Load-gated, reduced-motion safe.

### Nav
- No index numbers; **no "Leadership"** tab (page stays at `/leadership`). Audience lanes +
  Join Free + Connect With Us.
- **Logo ~30–44% bigger** (e.g. `h-[26px]` → ~`h-[36px]`, width auto).

### Hero (black) — video
- Full-bleed muted/loop **cowboy video** (remote, poster `/.../hero-poster.jpg`):
  `https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/69554d56cb5b716ba310c3dd.mp4`
  dark gradient for legibility.
- **Headline + CTAs positioned higher** (upper / vertically-centered) — NOT pinned at the bottom.
- **Scroll cue = cursor-following badge:** a small round "Scroll ↓" that follows the mouse over
  the hero (Vaulk-style). **Remove** the fixed bottom "Scroll to explore" indicator. Hide on
  touch + reduced-motion.

### Alternating black ↔ white
Re-introduce the **alternating black/white section system** JJ liked: black = Carbon, white =
warm near-white `#F4F2EF` with carbon text + fuel accents + hairline dividers; correct logo per
bg; **WCAG AA** contrast. No two adjacent sections share bg or layout.

### Section order & content
1. Hero (black, video) — above.
2. **Who We Are (white)** — origin story + **Jeff Swenson's profile ONLY** (photo, Founder & CEO,
   short bio, LinkedIn + js@linehaulstation.com, from `/leadership`). No board advisors. Add a
   "Meet the full team → /leadership" link.
3. **A Real Terminal / What We Built (black)** — left **media** + right **vertical tabs**
   (Structure / Amenities / Service / Security). **Replace the carbon-fiber "chrome" video** —
   it says nothing — with meaningful media that **changes with the active tab**: Structure →
   building exterior/aerial, Amenities → sky deck/lounge, Service → fleet/fuel/cross-dock,
   Security → gate house (use the deck-library renders; Ken-Burns/auto-advance is fine). Tabs are
   real buttons, keyboard-accessible. Section header must show.
4. **The Gallery (white)** — **FULL-SCREEN, full-bleed slider**: edge-to-edge, **no column
   gutters/margins**, slides span the full viewport width, large imagery, minimal captions, drag
   + arrows + slow auto-advance (reduced-motion safe). (Current one is too small/boxed.) Header must show.
5. **Find Your Lane (black)** — description **left**, image/icon panel **right**;
   Drivers/Carriers/Brokers/Shippers/Government, "Explore →" each. Header must show.
6. **Inside the Hub (white)** — **filter chips** (All/Club/Fleet/Outdoor/Facilities) that
   animate/expand the grid to matching deck renders; keyboard-accessible lightbox. Header must show.
7. **The Network (black)** — keep the `NetworkMap` as-is, framed by a context render. Header must show.
8. **By the Numbers (white)** — count-ups; **fix the cramped spacing** (more cell padding,
   consistent gaps, balanced vertical rhythm).
9. **Closing CTA (black)** — full-bleed parallax + "Connect With Us" / "Schedule a Call".
   Footer. (No footer video — the video lives in the hero.) Header must show.

### Smooth scroll
Keep **Lenis** smooth scroll (reduced-motion disables it). Ensure it does NOT break the header
reveals (test together).

## Brand rules (unchanged)
Casing (LineHaul Station / FlexSpace / OneHome / Outriders Club); Hubs/Terminals/Service
Centers, never "nodes"; CTAs only "Connect With Us" / "Schedule a Call" / "Join Free"; dark
overlay under white-on-photo text.

## Assets (in repo)
`public/assets/marketing/` (incl. `hero-poster.jpg`), `public/assets/deck-library/` (see its
MANIFEST), `public/assets/amenities/`, `public/assets/photos/`, `public/assets/building-seq/`,
`public/assets/outriders/story.mp4`.

## Done checklist
- [ ] `app/page.tsx` reverted to `2306b52` base, then rebuilt per above
- [ ] Headers bulletproof — every section title visible in a real browser
- [ ] Loader leads with bold 0/100 · nav: no numbers/Leadership · logo ~30–44% bigger
- [ ] Hero: video, text higher, cursor-following scroll cue (no bottom indicator)
- [ ] Alternating black/white (AA) · Jeff-only Who We Are
- [ ] What We Built: meaningful tab-linked media (no plain chrome texture)
- [ ] Gallery: full-bleed full-screen slider (no gutters)
- [ ] Audiences desc-left/image-right · filterable Hub · map kept · stats spacing fixed
- [ ] HTML mockups ignored · brand rules intact
- [ ] `npx tsc --noEmit` clean · `npm run build` passes · browser-checked · pushed to `redesign-v2`
