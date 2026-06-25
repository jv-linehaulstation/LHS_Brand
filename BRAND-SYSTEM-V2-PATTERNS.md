# BRAND SYSTEM v2 — chrome/steel gradients + unimplemented patterns ⭐

JJ updated the brand system. Two jobs: (1) add the **new metallic chrome/steel gradient** and
apply it on the **homepage**, and (2) implement the brand-system **patterns we haven't built on
the site yet**. **Source of truth = `reference/brand-system-v2.html`** (now in the repo — open it
and match the patterns/values exactly). Work autonomously per CLAUDE.md on `redesign-v2`. Keep
brand rules, reduced-motion safety, AA contrast, and responsiveness. End with
`npx tsc --noEmit` + `npm run build` + a browser check, then commit + push.

> The brand-system file is a single large HTML reference. Open it, read the **Color System /
> Chrome Gradient Palette**, **Components / Component Blueprints**, **Patterns & Textures**, and
> **Motion** sections, and port the exact gradient stops, pill/card/badge/rule markup, and
> keyframes into the site's `tailwind.config.ts` + `app/globals.css` as reusable utilities.

## 1. New gradient tokens (add to the design system)
Add these as named utilities/tokens (e.g. `.grad-chrome`, `.grad-fuel-chrome`, `.grad-gold-chrome`)
and Tailwind `backgroundImage` entries. Exact stops from the brand system:
- **Chrome / Steel (brushed metal):**
  `linear-gradient(180deg,#F2F2F2 0%,#C4C4C4 16%,#8E8E8E 44%,#6A6A6A 50%,#9C9C9C 56%,#D6D6D6 76%,#7C7C7C 100%)`
- **Fuel Chrome:**
  `linear-gradient(135deg,#FCE0BE 0%,#F4A24A 30%,#C85A12 52%,#E88A3C 60%,#F07820 100%)`
- **Gold Chrome:**
  `linear-gradient(135deg,#E8C97E 0%,#C8A060 34%,#8C6E3A 54%,#B89452 62%,#C8A060 100%)`
- **Fuel (solid metallic):** `linear-gradient(135deg,#FBB04A 0%,#F07820 55%,#C85A12 100%)`
- **Steel Blue** (crown/cool accents — pull the exact stops + the "Steel Blue Light / Wash"
  values from the brand file).
- Keep the existing **brushed-metal frame** but align it to the v2 chrome palette.

## 2. Apply chrome/steel on the HOMEPAGE (judicious — it's a premium accent, not everywhere)
Per the brand system's usage, apply the chrome/steel gradient as the **premium metallic accent**:
- The **LH badge / wordmark / logo crown** treatment where shown.
- **Frames / card borders** on key cards (e.g. Three Programs cards, Jeff/board, gallery frame).
- **Rules · underlines · keylines** (section dividers, the measured hairlines, animated underlines).
- **Chrome pill** badges/chips (status chips, "Open Now," tags) — use the Chrome Pill pattern.
- Headline accent: where a single word currently uses the orange outline-stroke, the brand system
  may use a **chrome or fuel-chrome** fill — match what the brand file shows; don't overuse it
  (still one accent moment per section).
- Add the **chrome glint** motion (`lhsGlint`-style sweep) on the badge/logo/premium cards, and
  any `lhsRoll`/`lhsDraw` treatments — reduced-motion disables them.

## 3. Implement the patterns we haven't built yet (from the brand system)
Port these as reusable components/utilities and use them on the homepage (then they're available
site-wide):
- **Buttons · chips** — the brand-system button + chrome-pill chip styles.
- **Cards · frames** — metallic-framed card pattern.
- **Badge fills · coins** — the circular "coin" badge treatment.
- **Dividers · rules · underlines · keylines** — the engineered hairline + animated underline set.
- **Patterns & Textures** — the texture gradients / blueprint washes (premium dark-section backdrops).
- **Motion** — wire up the keyframes from the brand file: `lhsScan`, `lhsPulse`, `lhsGlint`,
  `lhsDraw`, `lhsRoll`, `lhsBlink` (only where they match an element; all reduced-motion safe).
- **Type scale / spacing / grid** — reconcile the site's scale with the brand system's Type Scale
  and Grid & Spacing if they differ.

## 4. Guardrails
- Don't introduce off-brand colors — only the brand-system palette (carbon, fuel, chrome/steel,
  gold, steel-blue). Per-page accents stay.
- Chrome on dark must stay legible; chrome text needs enough contrast (use it on large/bold display
  or as fills/borders, not small body text). Verify AA.
- Reduced-motion: all glint/scan/roll animations off.
- Mobile: metallic frames/pills scale cleanly; no overflow.

## 5. Scope / sequence
- **Homepage first** (this brief). Once the patterns/tokens exist as shared utilities, they flow to
  the sub-pages via `SUBPAGES-ALIGNMENT-BRIEF.md` — note there to apply the v2 chrome/steel
  treatments on every page too.

## Done checklist
- [ ] Chrome/Steel + Fuel-Chrome + Gold-Chrome + Steel-Blue tokens added (tailwind + globals)
- [ ] Chrome/steel applied on the homepage (badge/logo, frames, rules, chrome pills, one accent/section)
- [ ] Chrome glint + brand keyframes wired, reduced-motion safe
- [ ] Brand patterns built as reusable utilities (buttons/chips, cards/frames, coins, dividers, textures)
- [ ] AA contrast verified · responsive · brand rules intact
- [ ] `npx tsc --noEmit` clean · `npm run build` passes · browser-checked · pushed to `redesign-v2`

---

## ⭐ Round 2 (JJ QA — apply on top)

**QA finding:** the v2 tokens/patterns are in and `tsc` passes, and chrome frames/pills/coins/glint
ARE used — but the **metallic gradient is under-applied** (`grad-chrome`, `grad-steel`,
`text-steel-fill` = 0 uses in JSX), so the homepage still reads orange-dominant. Lift the chrome/
steel prominence per below.

- **Homepage — make chrome/steel the premium structural color (less orange).**
  - **Photo borders:** wrap key images in the **ChromeFrame / `grad-chrome` (dual-metal)** border —
    the lane media, gallery, Three Programs cards, Who-We-Are images, section renders.
  - **Form borders:** give the contact / Join form (container + inputs) **chrome/steel borders**.
  - Keep **orange as a deliberate accent only** (primary CTA, one headline word) — let chrome/steel
    carry frames, rules, dividers, pills, and badges.
- **Orange stays the Drivers signal.** Keep the **Drivers landing page orange-forward** (its accent
  is `#F07820`); the homepage leans chrome/steel.

- **Who We Are — center Col 2 (Jeff).** Jeff's column hugs the far left. Center the column's
  content (e.g. `mx-auto` / ~150px or less side margin) so **Cols 1, 2, 3 are evenly spaced** and
  balanced.

- **Coins (real PNGs — already split & in repo):**
  - `public/assets/coin-onehome.png` (ONE★HOME) → use on the **Drivers** landing page.
  - `public/assets/coin-flexspace.png` (FLEX★SPACE) → use on the **Carriers** landing page.
  - **Incorporate the coins on the homepage** too — in the **Three Programs** section: OneHome card
    → OneHome coin, FlexSpace card → FlexSpace coin (Outriders card can use a gold-chrome mark).
  - Size them tastefully (≈80–120px), crisp, with subtle drop/glow; don't stretch.

- Re-verify: AA contrast on chrome text, reduced-motion safe, responsive, `tsc` + `build`, push.
