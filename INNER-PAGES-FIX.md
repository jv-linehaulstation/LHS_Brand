# INNER PAGES — match the homepage's section styling + fonts (keep each page's accent) ⭐

The 5 audience pages (drivers/carriers/brokers/shippers/government — all from
`components/AudiencePage.tsx`) look broken because their **section widths and rhythm don't match
the homepage**. Bring them fully in line with the homepage's **section styling + typography**,
keeping each page's **accent color**. Work autonomously per CLAUDE.md on `redesign-v2`.
End with `npx tsc --noEmit` + `npm run build` + a **browser pass at mobile (~390) / tablet (~768)
/ desktop (~1440)** on all 5 audience pages + leadership + join. Commit + push.

## Already fixed (uncommitted in the tree — commit it)
- **`components/Section.tsx`:** the standard variants (`ink/carbon/panel/blueprint/light`) were
  capping content at `mx-auto max-w-site` (1180px) — a narrow centered column — while the homepage
  and the `image`/`gradient` variants are full-width on the `px-[clamp(20px,6vw,100px)]` gutter.
  I removed the `max-w-site` cap so **every section is now full-width like the homepage**. Commit
  this change.

## Finish the alignment
1. **Section rhythm = the homepage's clean black ↔ white.** The inner pages stack several dark
   variants (`ink` / `carbon` / `panel` / `blueprint`) which muddies the rhythm and doesn't match
   the homepage. Re-map the sections to the homepage's **alternating black (`#0B0B0B` ink) ↔ white
   (`#F4F2EF` light)** beat — no two adjacent sections share a background. Keep `image` (hero/road/
   Memphis) and `gradient` (Let's Talk) where they earn it. Per-audience accent stays the signal.
2. **Typography parity.** Match the homepage's type scale, fonts, and the **bulletproof reveal**
   (headings must always show). Align `SectionHead` sizes to the homepage's section `<h2>` scale
   (homepage uses ~`clamp(34px,5.6vw,84px)`); use the same eyebrow (mono), body, and script styles.
   Confirm `tone="onLight"` headings are carbon on white sections and white on dark.
3. **Spacing parity.** Match the homepage's vertical rhythm / section padding so the pages feel
   like the same site (consistent `py-[clamp(...)]`, gutters, and grid gaps).
4. **Keep each page's accent** — Drivers `#F07820` · Carriers `#4878A8` · Brokers `#7EC8E3` ·
   Shippers `#18A848` · Government `#C8A060`. Accent drives kickers, CTAs, coins, rules, counters
   ONLY; structure/typography/B-W rhythm come from the homepage.
5. **Brand v2 consistency.** Keep the chrome/steel treatments (ChromeFrame, chrome-rule, chrome
   pills, coins) consistent with the homepage; no off-brand colors.
6. **Leadership + Join** — same treatment (full-width, B/W rhythm, type parity, reveals).

## Verify (the part that actually catches "broken")
- No width jumps between sections; nothing capped to a narrow column; no horizontal overflow at any width.
- Every section heading is visible (reveals fire).
- Accents correct per page; chrome/coins render; calculators (drivers/carriers) usable on mobile.
- `npx tsc --noEmit` clean · `npm run build` passes · browser-checked at 3 widths · pushed.
