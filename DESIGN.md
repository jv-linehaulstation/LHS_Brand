# DESIGN.md — LineHaul Station

Visual system for the LineHaul Station marketing site. Tokens live in `tailwind.config.ts`; utilities/keyframes in `app/globals.css`; fonts in `lib/fonts.ts`.

## Theme
Dark-dominant, premium "freight control-room / wayfinding". Carbon black is the base; warm near-white (`#F4F2EF`) sections alternate in for editorial relief. Brushed **chrome/steel** metal is the structural accent; each audience lane adds one saturated accent. Strategy: **Committed** (carbon + one accent per lane) with a metallic accent layer.

## Color (OKLCH-aware; hex tokens shipped)
- **Carbon / ink** — `#0B0B0B` page base, `#1A1A1A` carbon surface, `#141414` panel, `#101010` carbon strip.
- **Light** — warm near-white `#F4F2EF` sections; hairline `#E2DDD6`; carbon text `#0B0B0B`, secondary `#3a3733`, muted `#6a655e`.
- **Chrome / steel** — `chrome #B0B0B0`, `chromelight #F2F2F2`; **steel-blue** `#7EC8E3` / `steellight #B8D4E8`. Metallic gradients: `grad-chrome`, `grad-steel`, `grad-fuel-chrome`, `grad-gold-chrome`, `grad-dual-metal`, `grad-icon-ramp`.
- **Per-lane accents** — Drivers `#F07820` (Fuel Orange), Carriers `#4878A8`, Brokers `#7EC8E3`, Shippers `#18A848`, Government `#C8A060`; gold `#C8A060`, amber `#FBB04A`, ember `#D02020`.
- **Contrast** — body ≥4.5:1 (carbon-on-cream, white/chrome-on-ink); large display fills allowed only at heading scale with solid fallbacks.

## Typography
- **Display** — Archivo (`font-display`), black weight, uppercase, tight tracking; section `<h2>` scale ~`clamp(34px,5.6vw,84px)`.
- **Labels** — Michroma (`font-label`), small uppercase mono kickers/CTAs.
- **Body** — Newsreader serif (`font-body`) — committed brand identity (kept despite being a common default).
- **Script** — Caveat (`font-script`) for accent lines ("Welcome to the Club", lane sub-lines).
- **Data** — JetBrains Mono (`font-mono`) for figures, coordinates, tabular nums (`.tnum`).

## Components & patterns
- **Section** — bg-rhythm wrapper: `ink / carbon / panel / blueprint / light / image / gradient`, full-width on `px-[clamp(20px,6vw,100px)]`.
- **Metallic frames** — `ChromeFrame` (`chrome` / `dual` / `steel` variants, optional `glint` sweep); `chrome-rule`, `chrome-pill`, minted `Coin` (CSS) + real PNG `CoinImage` (OneHome / FlexSpace / Outriders).
- **SectionHead / Kick** — measured rule + optional mono kicker + display title. (Kickers are landmarks, not per-section grammar.)
- **Modules** — `AudienceScroll` / `HowItWorks` (sticky media + numbered blocks), `WideSlider`, `FilterGallery`, `RenderingsGallery`, `NetworkMap`, `LaneConnector`, calculators (OneHome / FlexSpace), `JoinForm`, `Loader`.
- **Motion** — `Reveal` entrance, `CountUp` (once), `ParallaxImage`, chrome `glint`/`scan`; all `prefers-reduced-motion` safe.

## Layout
- Full-width sections with ~100px desktop gutters (clamp); readable `max-w-*` per text block.
- Alternating dark↔light; image/gradient/blueprint as deliberate dark accents; no two adjacent sections share a background.
- Responsive grids reflow 4→2→1; verified clean at 390 / 768 / 1440 with no horizontal overflow.
