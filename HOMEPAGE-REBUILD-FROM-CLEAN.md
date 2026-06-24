# HOMEPAGE — Revert to a clean base, then rebuild from these instructions ⭐ CANONICAL

JJ's decision: **revert** the homepage off the buggy vaulk/HTML-mockup build, then **redo all
the revisions from these written instructions only.** Do NOT follow any HTML mockup file
(`vaulk-scroll-mockup*.html`, `fourstones-*`) — they are deprecated; ignore them. This file
supersedes the earlier homepage briefs. Work autonomously per CLAUDE.md on `redesign-v2`.
End with `npx tsc --noEmit` + `npm run build` AND a real-browser check that every section
heading is visible. Commit + push.

---

## ⭐ R3 deltas (JJ's review — apply on top; these OVERRIDE Step 2 where they conflict)

- **Global layout — FULL WIDTH.** Content sections must occupy the full screen width with only
  ~100px left/right margins on desktop, **not** the narrow centered `max-w-site` column.
  Use `px-[clamp(20px,6vw,100px)]` and drop the centered max-width on content containers (keep
  text line-lengths readable with per-block `max-w-*` where needed). Hero, the gallery slider,
  and the pinned "How It Works" stay fully edge-to-edge.
- **Hero heading (LOCKED — Option D, from the Drivers deck):**
  - Eyebrow/kicker: **We Hear You. Loud & Clear.**
  - Headline (`<h1>`): **Change Is Coming.**
  - Subhead: **A modern freight relay network built to get America's best drivers home — rested, respected, and proud of where they park.**
  - CTAs: **Schedule a Call** + **Find Your Lane.**
  Keep the cowboy/sunset video, the higher text position, and the cursor-following scroll cue.
- **The Gallery:** **remove the big "Every Angle…" heading** (a small kicker is fine).
  Replace the prev/next **arrows** with a **thumbnail strip below the slider** — small square
  images; clicking one shows that slide (active thumb highlighted; keyboard-accessible).
  **Remove the empty white space below** the slider (trim the trailing padding).
- **NEW — "How It Works" section (pinned, scroll-driven steps)** — the Vaulk/Vogue effect JJ
  wants: a **video/media pinned on the LEFT**; on the right, numbered steps advance **as you
  scroll** — **001** (step one) → scroll (visible scroll-movement transition) → **002** → scroll
  → **003**. Pin the section; drive the active step from scroll progress. Steps = the relay:
  **001 Pull In · 002 Recharge at the Service Center · 003 Relay Out.** The left media can change
  per active step (e.g. building-seq aerial/exterior → fleet/fuel → road/relay). Reduced-motion:
  stack the steps statically, no pin. Place it right after "A Real Terminal / What We Built."
- **Closing "Let's Talk":** **remove the CTA buttons.** Instead embed the **Join Free form**
  (reuse `components/JoinForm.tsx` — the same GHL form as `/join`) on one side, with the
  **contact information** (phone, email, domain) beside it. Keep a short heading + one line.
  *(See R4 — this is refined to a centered layout with 3-column contact.)*

---

## ⭐ R4 deltas (JJ's review of the built page — apply on top; OVERRIDE earlier where conflicting)

- **Shared container width — make it a PATTERN.** The **nav/header bar** and the **footer** must
  use the **same width + side margins as the content sections** (`px-[clamp(20px,6vw,100px)]`,
  full width — no narrow centered bar). Nav, sections, and footer all line up to one consistent
  container. Apply the footer container fix site-wide (it's shared).

- **Hero — add an overlay fade.** Keep the cowboy video + Option-D copy. Add a **bottom gradient
  fade** so the hero blends smoothly into the next section (no hard seam).

- **NEW section order (top of page):** after the hero, the **next section is "One Network. Every
  Lane." (the audiences)** — NOT Who We Are. Move **Who We Are (+ Jeff)** to AFTER the audiences
  section. Maintain black/white alternation with the new order.

- **Audiences = pinned sticky-scroll (same mechanic as "How It Works / Pull In · Recharge · Relay").**
  Not just titles. **Left = sticky media** (image/video) that **stays put** while you scroll
  (it may swap to the active lane's image, but stays in the same spot). **Right = content that
  scrolls** through each audience in turn — **Drivers → Carriers → Brokers → Shippers →
  Government** — and **each block has: heading, subheading, description, and a CTA** (e.g.
  "Explore Drivers →"). As you scroll, the left media sticks and the right swaps to the next
  audience. The titles/copy SCROLL (they do not sit static beside the media). Pin the section and
  drive the active audience from scroll progress. Reduced-motion / mobile: stack the 5 blocks
  statically (no pin).

- **Gallery — FULL SCREEN, thumbnails overlaid, no white space.**
  - **Remove the "The Gallery" heading** above it (kills the white space above).
  - Make the gallery **full-screen / full-bleed**.
  - The **thumbnail photo-slider strip is correct, but overlay it ON TOP of the slider image**
    (along the bottom of the full-screen slide), so there is **no white section/background below**
    it. Click a thumbnail → that slide shows; active thumb highlighted; keyboard + touch friendly.

- **"A Real Terminal / Not A Parking Lot" + "How It Works" — improve both.** These need a quality
  pass: use **meaningful, tab/step-linked media** (real building/amenity/fleet renders — NOT the
  blank chrome-fiber texture), stronger full-width composition, and bigger type. Get the pinned
  scroll feeling smooth. *(JJ will refine after seeing it — make it clearly better, not just present.)*

- **"Let's Talk" — centered layout.** Center everything in the section: centered heading, the
  **Join Free form centered**, and the **contact info laid out in three columns** (e.g.
  **Call · Email · Visit** — phone, email, address/domain). Replaces the side-by-side from R3.
  *(See R5 — contact info now sits ABOVE the form.)*

---

## ⭐ R5 deltas (JJ's review — apply on top; OVERRIDE earlier where conflicting)

Confirmed GOOD, leave as-is: **Hero**, the **Gallery slider**, **Filter the Tour** (Inside the
Hub), and the **Network map**.

- **Loader — shrink the 0/100 number by ~80%.** The numeric counter is far too big; reduce it to
  roughly **one-fifth** of its current size (badge/wordmark unchanged).

- **"One Network. Every Lane." (audiences) — richer + real media + better CTA.**
  - Add **real images/video** per lane on the sticky left (Drivers→sky deck, Carriers→fleet/fuel,
    Brokers→cross-dock, Shippers→terminal aerial, Government→civic); the left media should **fill
    the full height** of the section.
  - **More description:** each lane's right block = heading + subheading + **1–2 paragraphs** +
    CTA (not just a title). Write real copy for Drivers, Carriers, Brokers (and Shippers/Government).
  - **CTA button:** do NOT float it far right — make it a **full-width block button** (dark/black
    style), aligned under the copy.

- **Who We Are — use the space; add the board small.** Put **Jeff's photo + description centered**.
  Then add the **3 board advisors as small blocks** (a compact row of three, below/beside).
  *(Intentionally reverses the earlier "Jeff only" call.)* Pull advisors from `app/leadership/page.tsx`.

- **Remove "A Real Terminal / What We Built" AND "How It Works" — replace with THREE PROGRAMS.**
  Delete both. Restore the **"Three Programs"** section from commit `0543462`
  (`/* THREE PROGRAMS (panel) */`), restyled into the current system (full-width, B/W, reveals):
  - **FlexSpace** — *"It's YOUR Terminal Network."* — Shared-use terminal access sold in increments
    (Guest Pass · Proprietary Membership · Dedicated Space). Carrier-facing. Accent `#4878A8`. → `/carriers`
  - **OneHome** — *"Everywhere The Road Takes You."* — A private, resort-quality community network
    built exclusively for American truckers. Driver-facing. Accent `#F07820`. → `/drivers`
  - **Outriders Club** — *"The Rig Carlton."* — A 25,000+ sq ft private drivers club: restaurant,
    fitness, showers, gaming, rooftop sky deck, and more. Accent `#C8A060`.
  Place it where What We Built / How It Works were (after Who We Are).

- **Contact "Let's Talk" — info ABOVE the form.** Put the contact info (**Call · Email · Visit**,
  three columns) **on top, before the form**; the form sits below. Keep centered.

### Resulting homepage order (after R5)
Hero → **One Network. Every Lane.** (audiences, sticky-scroll) → **Who We Are** (Jeff centered +
3 board blocks) → **Three Programs** (FlexSpace · OneHome · Outriders Club) → **Gallery**
(full-screen, thumbs overlaid) → **Inside the Hub** (Filter the Tour) → **The Network** (map) →
**By the Numbers** → **Let's Talk** (contact info on top, form below). Keep black/white alternation.

---

## ⭐ R6 deltas (JJ's review — apply on top; OVERRIDE earlier where conflicting)

- **"One Network. Every Lane." (audiences) — fix the imagery so it matches each lane.** The
  current photos don't represent the copy beside them. Use these content-matched assets on the
  sticky left (swap per active lane):
  - **Drivers** → `deck-library/photos/people-driver-in-cab.jpg` (a real driver) — or `marketing/driver-proud.jpg`
  - **Carriers** → `deck-library/renderings/fleet-services-fuel.jpg` (fleet / FlexSpace service)
  - **Brokers** → `deck-library/renderings/cross-dock.jpg` (freight moving between carriers)
  - **Shippers** → `deck-library/photos/context-highway-interchange.jpg` (freight to market)
  - **Government** → `deck-library/photos/context-civic-courthouse.jpg` (or `context-groundbreaking-shovel.jpg`)
  *(Option for later: a short per-lane summary video cut from the decks — possible, but a separate
  production; ship the matched stills now.)*

- **Who We Are — 3-COLUMN layout** (drop the centered-Jeff version):
  - **Col 1:** ALL of this content lives in column 1 — the headline **"Built By People Who've
    Done It Before."**, the **"The Story"** eyebrow, AND both description paragraphs:
    > LineHaul Station didn't start with trucks. It started with a question: why does the
    > industry that moves America treat its best drivers the worst?
    >
    > We're building the answer — real terminals, real amenities, and a national relay that
    > lowers the cost of every mile while getting the best drivers home, rested and respected.
    > The same standard runs through every Hub, Service Center, and word we write.
  - **Col 2:** Jeff's info (photo + Founder & CEO + bio + LinkedIn/email). **Make Jeff's photo
    smaller / proportionate** — it's currently too big and unbalances the row; size it to sit in
    line with the other two columns (a compact headshot, not a tall hero image).
  - **Col 3:** the **Board Advisors** (the three, stacked compact).
  - The three columns should read as balanced, equal-weight blocks.

- **Three Programs AND Contact ("Let's Talk") — 2-COLUMN layout: content LEFT, boxes RIGHT.**
  - **Three Programs:** left = section heading + short intro; right = the three program cards
    (FlexSpace · OneHome · Outriders Club) stacked.
  - **Contact:** left = heading + contact info (Call · Email · Visit); right = the form (the input
    "text boxes"). *(Overrides R5's "info on top / centered" — now side-by-side, content left, form right.)*
  *(Interpreting "One Network · Three Programs" as the Three Programs section. If you meant the
  audiences section too, say so.)*

---

## ⭐ R7 deltas (JJ's review — apply on top)

- **Who We Are — heading size.** Increase the **"Built By People Who've Done It Before."** heading
  to **match the other section headings** (the big display `<h2>` — `clamp(34px,5.6vw,84px)`,
  font-black, uppercase). Right now it reads smaller than the rest.

- **Who We Are — Jeff's photo.** Make it a **square (1:1)** image and **increase its size**, but
  **don't let it fill the whole column** — a contained, centered square headshot (≈ 220–280px),
  with breathing room around it so Col 2 stays balanced with Cols 1 and 3.

- **Homepage polish pass — use the design skills.** Apply **`impeccable`** (typeset / layout /
  animate), **`frontend-design`**, and **`ui-ux-pro-max`** to improve the **animation and spacing**
  across the whole homepage: consistent vertical rhythm and section padding, balanced grids and
  gutters, unified easing/timing on reveals and hovers, and tightened typographic spacing. Keep it
  reduced-motion safe and on-brand (no new colors/fonts). This is a refinement pass — don't change
  the structure or content, just make it feel polished and cohesive.

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
