# LineHaul Station — Homepage (Next.js + Tailwind)

A redesign of the LineHaul Station homepage as the **primary landing page**, built
directly on the **LHS Brand System v1.0**. It links out to all five audience
sub-pages: Drivers, Carriers, Brokers, Shippers, and Government.

Stack: **Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 3**.

---

## Run it on your Mac

> One-time note: a `node_modules` folder may already be here from the build
> machine. Delete it and reinstall so you get the correct Mac binaries:

```bash
cd "lhs-homepage"
rm -rf node_modules .next      # clean slate (safe to run)
npm install                    # installs dependencies
npm run dev                    # start the dev server
```

Then open **http://localhost:3000**.

Other commands:

```bash
npm run build    # production build
npm start        # serve the production build
```

If you change `tailwind.config.ts`, fonts, or `next.config.mjs`, **restart**
`npm run dev` — a plain browser refresh won't pick those up.

---

## What's here

```
app/
  layout.tsx          Root layout — loads the 5 brand fonts, global metadata
  page.tsx            THE HOMEPAGE (master brand hub)
  globals.css         Base styles + the 1.5px ".frame" + blueprint grid helpers
  drivers/page.tsx    /drivers   → OneHome
  carriers/page.tsx   /carriers  → FlexSpace
  brokers/page.tsx    /brokers
  shippers/page.tsx   /shippers
  government/page.tsx /government → Freight Relay Infrastructure
components/
  Nav.tsx             Sticky top bar + 5 audience links + Connect With Us
  Footer.tsx          Footer with "Find Your Lane" links + contact
  CTA.tsx             PrimaryCTA / GhostCTA (the two approved buttons)
  Contact.tsx         The homepage closer / contact band
  Section.tsx         Background-variant wrapper (the background "rhythm")
  LeadForm.tsx        Branded lead form + success state (Connect With Us)
  AudiencePage.tsx    One reusable template that powers all 5 sub-pages
  calculators/
    OneHomeCalculator.tsx     Drivers: savings + 30-yr wealth calculator
    FlexSpaceCalculator.tsx   Carriers: per-tier cost calculator
  motion/
    Reveal.tsx          Scroll-entrance fade/slide (IntersectionObserver)
    CountUp.tsx         Animated stat counters
    ParallaxImage.tsx   Scroll-parallax background photo
lib/
  audiences.ts        ALL content for the 5 pages (hero, problem, how-it-works,
                      amenities, West Memphis, forms) — ported from the HTML
public/assets/photos/ Real LHS photos extracted from the original pages
                      (terminal day/dusk/rendering, open road, club interiors)
lib/
  audiences.ts        All 5 audiences' copy (verbatim from the brand artifact)
  fonts.ts            next/font setup (web substitutes for the licensed faces)
  site.ts             Phone, email, and where the CTAs point — edit here only
public/assets/        Logos + site rendering (copied from the Brand System)
```

The homepage sections, in order: **Hero → Stats → The Flex-Space Model →
One Network / Three Programs → Find Your Lane (5-card router) → The Network Is
Live (West Memphis) → Contact → Footer.**

### Interactive calculators

Ported from the original `drivers.html` / `carriers.html` with the **exact
pricing and math preserved**, restyled in the brand system:

- **Drivers (OneHome)** — `OneHomeCalculator.tsx`. Pick days-home-per-year and
  your rent; it shows yearly/monthly savings, a 365-day "paid for, empty" meter,
  cost-per-night side-by-side, the West Memphis founding rate, and the 30-year
  invested-at-7% wealth figure. Pricing table (`std`/`yr1` per day tier) lives at
  the top of the file — edit there.
- **Carriers (FlexSpace)** — `FlexSpaceCalculator.tsx`. Choose Guest Pass
  ($59/day), Membership ($19/day), or Dedicated Space ($395/mo), set trucks and
  days/month; it shows monthly, yearly, and per-truck cost vs. the ~$15M of
  building your own. Rates live in the `RATE` constant.

Brokers, Shippers, and Government have no calculator in the source pages, so none
was added (no invented numbers).

### Every audience page now carries the full content

Each of `/drivers /carriers /brokers /shippers /government` runs the same template
(`AudiencePage.tsx`) and ports **all** the original HTML copy, in this order:

**Hero → Stat strip → Problem (the "what it really costs" counters) → Calculator
(Drivers/Carriers) → Road divider → How It Works → Amenities (Drivers) /
Capabilities (others) → West Memphis proof → Lead form.**

### Design & motion

- **Background rhythm** — `Section.tsx` enforces it: no two adjacent sections share
  a treatment. The cycle runs image → solid → panel → blueprint-grid → image →
  gradient. Photo sections use parallax with a darkened overlay so white text stays
  legible (per the brand legibility rule).
- **Layouts are asymmetric**, not center-stacked — split hero, two-column problem
  and proof bands, left-rail section heads.
- **Animations** — scroll-entrance reveals with staggered delays, stat counters
  that count up on first view, parallax photo drift, and hover states on every card
  and CTA. All of it is **`prefers-reduced-motion` safe** (motion off → content just
  appears).

### Lead forms

Every page ends in a branded lead form with client-side validation and a success
state (Drivers includes the Code-of-Conduct consent). To capture submissions, set
`NEXT_PUBLIC_GHL_WEBHOOK_URL` (or `ghlWebhookUrl` in `lib/site.ts`) to your
GoHighLevel inbound webhook — the form will POST the payload there.

> Brand note: the original Drivers page used a "Join Free" button. The brand
> system's CTA rule allows only **Connect With Us** / **Schedule a Call**, so the
> button reads "Connect With Us" while the "100% free membership" message is kept in
> the copy. Change it in `LeadForm.tsx` if you'd rather use "Join Free".

---

## Brand System compliance (baked in)

- **Colors** — Carbon base (`#0B0B0B`/`#1A1A1A`), Chrome `#B0B0B0`, Fuel Orange
  `#F07820` used sparingly for energy/CTAs. Per-audience accents:
  Drivers `#F07820` · Carriers `#4878A8` · Brokers `#7EC8E3` · Shippers `#18A848`
  · Government `#C8A060`. All in `tailwind.config.ts`.
- **Type** — Archivo (display), Michroma (labels), Newsreader (body), Caveat
  (script taglines), JetBrains Mono (data). Loaded via `next/font`.
- **Voice** — Hubs · Private Terminals · Service Centers (never "nodes").
  Exact casing: LineHaul Station · FlexSpace · OneHome · Outriders Club.
- **CTA Golden Rule** — every button is **"Connect With Us"** or **"Schedule a
  Call."** No "Sign Up / Register / Submit" anywhere.
- **Legibility** — headline copy always sits on solid carbon blocks or darkened
  photo overlays, never thin low-contrast lines.

---

## Things you'll likely want to wire up next

1. **Real CTAs** — `lib/site.ts` currently points "Connect With Us" / "Schedule a
   Call" at the on-page `#contact` band. Swap `connectHref` / `scheduleHref` for
   your real form (GoHighLevel, Calendly, etc.).
2. **Hero / network photography** — currently uses `public/assets/site-rendering.jpg`.
   Drop in real Hub footage; keep the darkened-sunset overlay for legibility.
3. **Phone / email** — set once in `lib/site.ts`.
4. **Deeper sub-pages** — the 5 audience pages share one template. Add
   page-specific sections (e.g., the OneHome wealth calculator, the FlexSpace
   cost calculator) inside `AudiencePage.tsx` or per-route as needed.
