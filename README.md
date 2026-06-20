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
  Contact.tsx         The closer / contact band
  AudiencePage.tsx    One reusable template that powers all 5 sub-pages
lib/
  audiences.ts        All 5 audiences' copy (verbatim from the brand artifact)
  fonts.ts            next/font setup (web substitutes for the licensed faces)
  site.ts             Phone, email, and where the CTAs point — edit here only
public/assets/        Logos + site rendering (copied from the Brand System)
```

The homepage sections, in order: **Hero → Stats → The Flex-Space Model →
One Network / Three Programs → Find Your Lane (5-card router) → The Network Is
Live (West Memphis) → Contact → Footer.**

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
