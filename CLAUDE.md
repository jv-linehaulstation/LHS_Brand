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
- `/blog` — **Blog** index (featured post + card grid; ISR from Supabase)
- `/blog/[slug]` — article template (ISR from Supabase, seed fallback)
- `/admin` — Supabase-auth blog CMS (login + create/edit/delete posts)
- `/join` — Outriders Club free-membership register

## Structure
```
app/                route segments + layout (Loader mounted here) + globals.css
app/blog/           Blog index (page.tsx) + [slug]/page.tsx article template (async/ISR)
app/admin/          Supabase-auth blog CMS: login/, page.tsx (list), new/, [id]/ (edit),
                    actions.ts (save/delete/signOut), data.ts (admin reads)
components/         GlassNav + LuxeFooter (the LIVE site chrome — used on every page),
                    Section (bg variants), CTA, Contact, LeadForm, AudiencePage
                    (shared 5-page template), NetworkMap, Loader, BlogBody (Markdown)
components/admin/   PostForm, AdminHeader, SetupNotice
components/motion/  Reveal (scroll entrance), CountUp (counters), ParallaxImage
components/calculators/  OneHomeCalculator, FlexSpaceCalculator
lib/audiences.ts    ALL per-audience copy + photo assignments (single source of content)
lib/blog.ts         PUBLIC blog data layer — async Supabase reads + seed fallback
lib/blog-seed.json  the 9 bundled posts (Markdown body); seed source + build fallback
lib/supabase/       server.ts (cookie client + hasSupabaseEnv) · client.ts (browser)
lib/site.ts         phone/email + CTA targets + GHL webhook (NEXT_PUBLIC_GHL_WEBHOOK_URL)
lib/fonts.ts        next/font setup (web substitutes for the licensed faces)
middleware.ts       refreshes Supabase session + guards /admin
supabase/schema.sql posts table + RLS (run once in Supabase SQL Editor)
scripts/            export-seed.mjs (blocks→Markdown), seed-blog.mjs (upsert to Supabase)
public/assets/      logos, building renders (photos/), amenity photos (amenities/),
                    blog/ (1600×900 post hero images), badge
```
> **Nav/footer note:** the live chrome is `GlassNav` + `LuxeFooter`. The older
> `Nav.tsx` / `Footer.tsx` are legacy and **not imported anywhere** — don't wire
> new links into them; edit `GlassNav` (overlay `overlayLinks`) and `LuxeFooter`.

### Blog — how it works (Supabase-backed)
- **Source of truth is Supabase** (table `posts`), edited via **`/admin`** (login +
  create/edit/delete, Markdown body). `lib/blog.ts` reads published posts with a
  cookie-free anon client (ISR `revalidate = 60`). **Do NOT hand-edit posts in
  code** — use `/admin`.
- **Fallback:** when the Supabase env vars are absent, `lib/blog.ts` serves
  `lib/blog-seed.json` so local dev and the production build always work. `/admin`
  shows a setup checklist until configured.
- `components/BlogBody.tsx` renders the Markdown body (react-markdown + remark-gfm)
  mapped to brand styles: `##`/`###` headings, `- `/`1.` lists, `**bold**`, `*italic*`,
  `[label](/internal-or-https)`, `>` quotes. Internal links use `next/link`.
- `dateLabel` and `readTime` are **derived** (date format + word count) — not stored.
- The `[slug]` hero shows the **title-card image** (the title is baked into the image);
  it does NOT overlay a second `<h1>` (kept `sr-only` for SEO). Heroes live in
  `public/assets/blog/<slug>.png` (1600×900). Article JSON-LD + OG/Twitter auto-emitted.

**First-time Supabase setup:** copy `.env.local.example` → `.env.local` and fill keys ·
run `supabase/schema.sql` in the SQL Editor · add an admin user (Auth → Users) ·
`npm run blog:seed` to load the 9 posts · restart dev. Env vars: `NEXT_PUBLIC_SUPABASE_URL`,
`NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (seed only, server-side).
Regenerate the seed from code with `npm run blog:export`.

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
- **Blog follow-ups:** homepage "From The Dispatch" teaser strip linking the latest
  posts · `app/sitemap.ts` + `app/robots.ts` (include `/blog` + each post) ·
  optional FAQ JSON-LD on `shared-terminals-101` (free membership? what is FlexSpace?
  is the fee refundable?) · swap the in-article "Connect With Us" `#contact` anchor
  for a real contact target if `/blog/*` ever needs an on-page contact band.
- **Verify before deploy:** run `npm run build` locally — types pass (`npx tsc
  --noEmit` is green), but the full production build was not run in the authoring
  environment.

## Handoff status (2026-06-26)
- Added The Dispatch blog: `/blog`, `/blog/[slug]`, `lib/blog.ts` (3 posts),
  `components/BlogBody.tsx`, 3 hero images in `public/assets/blog/`, and "The
  Dispatch" links in `GlassNav` (overlay) + `LuxeFooter`.
- `npx tsc --noEmit` → clean. Production build not yet run locally (see above).
- Source copy for the 3 posts (with SEO front matter) also lives outside the repo
  as `LHS_Blog_1_Rig_Carlton.md`, `LHS_Blog_2_Nowhere_To_Park.md`,
  `LHS_Blog_3_Shared_Terminals_101.md` if you need to re-export elsewhere.
