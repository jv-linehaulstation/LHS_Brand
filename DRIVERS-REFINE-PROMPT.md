# ▶ Claude Code — /drivers refinement pass (JJ feedback on the live build)

On branch `redesign-v2`, per `CLAUDE.md`. Read **`DRIVERS-DESIGN-SYSTEM.md`** and apply
**"Section 3b. REFINEMENT ROUND — JJ feedback on the live build"** to `/drivers`. Instructions only —
no HTML mockups. Run the **impeccable** skill as a dedupe/QA pass.

**DO NOT TOUCH:** the **homepage**, and the **"Welcome to the Club"** section — JJ approves both as-is.

## Apply these 7 refinements
1. **Building Previews** → rebuild like the Luxe "Featured Masterpieces": ONE large dominant center
   image card (~50–60% of content width, tall), neighbors peeking at the edges, circular prev/next
   arrows, caption row (name + spec) under the active card. The active image is the hero of the
   section, not a thumbnail.
2. **"Here's A New & Better Option"** → calculator (left) and content/counters (right) in an
   **EQUAL-HEIGHT** two-column layout (align-items stretch / matched min-heights). Glass calculator card.
3. **"For a lot less money…"** → make it interactive: rows reveal on scroll, the strikethrough on the
   Traditional column draws in (animated), row hover states highlighting the OneHome win. Left prompts
   and right table **EQUAL height**.
4. **"Absolutely Amazing Amenities"** → **SQUARE the images** (remove `rounded-card`/radius), fix quality
   (drop the `sizes="...25vw"` downscale; use `sizes` matching real display width ~50vw; no forced
   upscale), and **remove the leftover old amenities-tiles block** so only the Spence pinned showcase
   renders. Leave a `TODO(JJ)` for higher-res photos (current gallery assets are only ~1500px).
5. **"We have EVERYTHING you need"** → merge **Home Hub + Fleet Services into ONE section** using that
   section's design, rendered as **IMAGE TILES / BOXES** (image + label + short line): Home Hub — Mail
   Services / Personal Vehicle / Storage Lockers; Fleet — Repairs / Maintenance / Inspections / Truck Wash.
6. **"Nothing To Lose / Everything To Gain"** → push further: condense to tight one-liners, make it
   **interactive** (hover-reveal), give it real visual structure (numbered process + imagery), cut the
   wall of copy. The exact hover reference URL is still **PENDING** — build a strong condensed interactive
   version for now, not a paragraph block.
7. **Cleanup:** remove half-merged leftovers in `AudiencePage.tsx` — the old `a.amenities.tiles` block and
   any second/standalone calculator section — so the calculator and amenities each render exactly once.

## Keep
Dark-luxury skin · brand fonts (no serif) · Fuel Orange accent · all Fluid Glass motion (Lenis,
parallax, scroll-zoom), `prefers-reduced-motion` safe. Apply **review-animations · emil-design-eng ·
frontend-design · ui-ux-pro-max · brand-voice · accessibility-review**.

## Verify
Each component renders once; equal-height columns hold (§2, §3 left/table); amenity images square +
crisp; Home Hub + Fleet merged as tiles; no overflow at 390 / 768 / 1440; reduced-motion falls back.
`npx tsc --noEmit` clean · `npm run build` passes · browser-checked · committed + pushed.

## Open items (not blockers)
- `TODO(JJ)` higher-res amenity photos (≥2400px, ideally portrait) → `public/assets/outriders/`.
- `PENDING` the "Plus de 300 concessionnaires réalisés" URL for §6's exact hover effect.
