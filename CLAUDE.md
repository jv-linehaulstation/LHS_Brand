# CLAUDE.md — project context for Claude Code

## Operating constraints (read first)
- Work only within THIS project / computer. Do NOT inspect, read, or interrupt other
  sessions, chats, or computers on the account — they may be running other tasks.
- If you need content from another machine or chat, ask the user to paste/upload it here.

## Working style — proceed autonomously
- Do NOT ask the user yes/no or multiple-choice questions for routine decisions.
  Make a sensible, on-brand choice and keep going; explain what you decided afterward.
- Batch any genuinely necessary questions to the END of a task, not mid-flow.
- Only pause to confirm BEFORE irreversible / destructive actions: deleting files,
  `git push --force`, history rewrites, dependency removals, or anything that changes
  production. For normal edits, refactors, installs, and commits, just do it.
- Always finish by running `npx tsc --noEmit` (and `npm run build` before any deploy);
  fix what you break.

## What this is
The **LineHaul Station** marketing site, rebuilt on the official LHS Brand System.
**Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 3.** Deployed on
Vercel. This folder (`lhs-homepage-LATEST`) is the single source of truth — push its
contents to the GitHub repo and Vercel auto-deploys.

## Run it
```bash
rm -rf node_modules .next   # only needed the first time after copying the folder
npm install
npm run dev                 # http://localhost:3000
npm run build               # production build
```
Restart `npm run dev` after changing `tailwind.config.ts`, fonts, or `next.config.mjs`.

## Routes
- `/` — master brand hub (Re-Think Trucking, "Find Your Lane" router, national Hub map)
- `/drivers` — OneHome (orange) · savings + 30-yr wealth calculator + amenities photos
- `/carriers` — FlexSpace (fleet blue) · per-tier cost calculator
- `/brokers` (steel) · `/shippers` (green) · `/government` (gold)
- `/leadership` — founder + board advisors

## Structure
```
app/                route segments + layout (Loader mounted here) + globals.css
components/         Nav, Footer, Section (bg variants), CTA, Contact, LeadForm,
                    AudiencePage (the shared 5-page template), NetworkMap, Loader
components/motion/  Reveal (scroll entrance), CountUp (counters), ParallaxImage
components/calculators/  OneHomeCalculator, FlexSpaceCalculator
lib/audiences.ts    ALL per-audience copy + photo assignments (single source of content)
lib/site.ts         phone/email + CTA targets + GHL webhook (NEXT_PUBLIC_GHL_WEBHOOK_URL)
lib/fonts.ts        next/font setup (web substitutes for the licensed faces)
public/assets/      logos, building renders (photos/), amenity photos (amenities/), badge
```

## Brand rules (non-negotiable)
- **Colors:** Carbon `#0B0B0B`/`#1A1A1A`, Chrome `#B0B0B0`, Fuel Orange `#F07820`
  (sparingly). Per-audience accents: Drivers `#F07820` · Carriers `#4878A8` ·
  Brokers `#7EC8E3` · Shippers `#18A848` · Government `#C8A060`. Tokens in `tailwind.config.ts`.
- **Type:** Archivo (display) · Michroma (labels) · Newsreader (body) · Caveat (script) ·
  JetBrains Mono (data). Via `next/font`.
- **Voice:** Hubs · Private Terminals · Service Centers — **never "nodes."**
  Exact casing: **LineHaul Station · FlexSpace · OneHome · Outriders Club.**
- **CTA Golden Rule:** every button is **"Connect With Us"** or **"Schedule a Call."**
  Never "Sign Up / Register / Get Started / Submit."
- **Legibility:** white text over photos always sits on a darkened overlay.

## Conventions
- Backgrounds alternate via `Section` (`variant`: ink / carbon / panel / blueprint /
  image / gradient) — no two adjacent sections share a treatment.
- Animations are `prefers-reduced-motion` safe. `CountUp` runs once and stops.
- Per-audience content lives ONLY in `lib/audiences.ts`; pages render from it.
- Verify changes with `npx tsc --noEmit` (and `npm run build` before deploy).

## Design skill
Apply the **`frontend-design`** skill (in `.claude/skills/frontend-design/`) whenever
changing layout, typography, motion, or visual styling — make deliberate, on-brand
choices, not templated defaults.

## Likely next work
- "Built for Today / Designed for Tomorrow" section · "what drivers love / what
  companies leverage" comparison · Fleet Services band · favicon/OG tags ·
  wire `LeadForm` to the real GHL webhook.
