# Claude Code Prompt — Bring the LineHaul Station site to life with real deck imagery

> Paste everything below into Claude Code, run from the repo root
> (`lhs-homepage-LATEST`). It is written for that repo specifically.

---

## Context

This is the **LineHaul Station** marketing site — Next.js 14 (App Router), React 18, TypeScript, Tailwind. The site is well-built structurally but **feels like a template because it's photo-poor**. We have just added a library of **45 real, high-resolution images extracted from the company's pitch decks** (clean architectural renders + human/context photos, no text baked in). Your job is to weave them throughout the site so it feels real, premium, and finished.

**The new assets are already in the repo** at:
- `public/assets/deck-library/renderings/` — 30 clean architectural renders
- `public/assets/deck-library/photos/` — 15 building/human/context photos

Web paths are `/assets/deck-library/renderings/<name>.jpg` and `/assets/deck-library/photos/<name>.jpg`. The filenames are descriptive — use them for captions/alt. Full list at the end of this prompt.

## Non-negotiable brand rules (from `CLAUDE.md`)

- **Terminology:** "Hubs", "Private Terminals", "Service Centers" — **never "nodes."**
- **Exact casing:** LineHaul Station · FlexSpace · OneHome · Outriders Club.
- **CTAs only:** "Connect With Us" or "Schedule a Call." Never "Sign Up / Register / Get Started / Submit."
- **Legibility:** white text over any photo must sit on a darkened overlay/gradient (reuse the existing patterns in the codebase).
- **Section rhythm:** no two adjacent sections share the same background treatment (use the `Section` `variant` prop: ink / carbon / panel / blueprint / image / gradient).
- Apply the **`frontend-design`** skill in `.claude/skills/` for any layout/visual/motion decisions — deliberate, on-brand choices, not defaults.
- Use **`next/image`** for all new images (lazy by default, `priority` only for above-the-fold heroes), always with descriptive `alt`. Keep animations `prefers-reduced-motion` safe (match existing `components/motion/*`).
- Verify with `npx tsc --noEmit` and `npm run build` before finishing.

## Goal

Make the site look like a real, photographed place — not a wireframe. The renderings are the company's actual facility; use them generously but tastefully. Keep all existing copy and structure; this is primarily an **imagery + a few visual sections** pass.

---

## Tasks (in priority order)

### 1. Renderings gallery — "Take the Tour" (highest impact)
Create a new reusable component `components/RenderingsGallery.tsx`:
- A responsive, on-brand gallery/lightbox of the 30 renderings, grouped by category (Arrival & Building · The Outriders Club indoor · Sky Deck & Outdoor · Fleet Services).
- `next/image`, lazy-loaded, captions derived from filenames (e.g. `vintage-barber-shop.jpg` → "Vintage Barber Shop"). Hover/zoom + keyboard-accessible lightbox; `prefers-reduced-motion` safe.
- Add it to the **home page** (`app/page.tsx`) as a new `Section` (variant that doesn't clash with neighbors) titled around "See the build" / "Inside the Network," and reuse a filtered subset on the **Drivers** page (Outriders/club shots) via `components/AudiencePage.tsx`.

### 2. Give every audience page real imagery
Audience pages render from `components/AudiencePage.tsx` + `lib/audiences.ts`. Wire category-appropriate images into each lane's hero, problem, how-it-works, features, and West Memphis bands. Mapping:

- **Drivers (OneHome / Outriders):** `chrome-club-skydeck`, `skydeck-fireplace`, `lifestyle-skydeck-sunset`, club interiors (`chrome-club-lounge-1/2`, `fitness-studio`, `gamer-s-den-1/2/3`, `vintage-barber-shop`, `gear-shop`, `laundry-center`), `interior-club-dining`, `people-driver-in-cab`.
- **Carriers (FlexSpace):** `fleet-services-fuel`, `fleet-services-entry-1/2`, `fleet-services-exit`, `cross-dock`, `truck-wash-entry/exit`, `gate-house-entry-drive`, `building-terminal-aerial`.
- **Brokers:** `cross-dock`, `building-terminal-aerial`, `context-highway-interchange`, `gate-house-entry-drive`.
- **Shippers:** `cross-dock`, `building-terminal-aerial`, `context-highway-interchange`, `context-city-skyline`.
- **Government:** `building-terminal-aerial`, `oblique-site-plan`, `context-civic-courthouse`, `context-groundbreaking-shovel`, `people-leadership-group`, `context-highway-interchange`.

Update the `PHOTOS` map and per-audience `heroImage`/`memphisImage` in `lib/audiences.ts` to point at these real assets (several current entries are aliases pointing multiple labels at the same building render — replace with distinct, accurate images). Add an optional `gallery?: string[]` field to the `Audience` type if helpful.

### 3. Home page hero & section imagery
- Hero: `chrome-club-aerial-view` or `chrome-club-entry` as the parallax hero (keep the dark gradient + blueprint overlay for legibility).
- "Three Programs" cards: back each with an image — FlexSpace → `fleet-services-fuel`, OneHome → `lifestyle-skydeck-sunset`, Outriders Club → `chrome-club-lounge-1`.
- Near the "Live Network" section, add `context-highway-interchange` / `context-city-skyline` as supporting visuals.
- Replace remaining placeholder/duplicated `building-*` references with the richer deck renders.

### 4. Leadership page
Add `people-leadership-group` and a building exterior (`chrome-club-entry`) for a more human, credible feel (keep the existing founder/advisor headshots).

### 5. Expand the NetworkMap to the full national vision
`components/NetworkMap.tsx` plots only 6 hubs. Expand the `HUBS` array to tell the **50+ hub, Phase I–V** story. Keep West Memphis as the live anchor; keep phase-one (Dallas–Fort Worth, Atlanta, Indianapolis, Chicago, Carlisle); add **planned** markers (styled distinctly: live / phase-one / planned) for the deck's named markets (approximate well-known city coords are fine):
San Antonio, El Paso, Houston, Dallas–Fort Worth, Mobile, Jackson, Nashville, Knoxville, Charlotte, Wilmington, Richmond, Carlisle, Cleveland, Detroit, Chicago, Indianapolis, Atlanta, Kansas City, Oklahoma City, Phoenix, Denver (+ a few more to credibly suggest 50+).
- Add a legend (Open / Phase One / Planned); keep the faint relay lines from West Memphis.
- **Stretch:** a lightweight, reduced-motion-safe "relay" animation — a marker traveling hub-to-hub along a corridor — to visualize freight moving 24/7 (hubs ~450–600 mi apart).

### 6. (Optional, if straightforward) Two high-impact content sections
- **"The Problem, By The Numbers"** band (home): 312,962 parking spaces vs. 1,000,000+ trucks a night; $94.6B annual congestion; 25% of U.S. transport emissions from Class 8; driver shortage (avg age 54, 7% female). Use `CountUp` + `context-highway-interchange` / `context-truck-sunset`.
- **SOLO vs. RELAY** comparison (Carriers/Government): ~80,000 → 300,000+ miles/truck/yr, 3–4× asset utilization, drivers home daily.

## Constraints & acceptance criteria

- All images via `next/image` with real `alt`; non-hero images lazy-loaded.
- Mobile-first responsive; no layout shift; gallery + map work on touch.
- No copy rewrites except the optional Task 6 sections; keep the approved CTAs.
- `npx tsc --noEmit` clean and `npm run build` succeeds.
- Don't touch `lib/site.ts` contact info or the GHL webhook wiring.
- Commit in logical chunks with clear messages; summarize what changed and how to preview (`npm run dev`).

---

## Full asset list

**renderings/** (`/assets/deck-library/renderings/`):
chrome-club-entry, chrome-club-entry-2, chrome-club-aerial-view, gate-house-entry-drive, entry-drive-welcome, oblique-site-plan, chrome-club-skydeck, skydeck-entry, skydeck-fireplace, chrome-club-patio, corn-hole-courts, water-feature, chrome-club-lounge-1, chrome-club-lounge-2, fitness-studio, gamer-s-den-1, gamer-s-den-2, gamer-s-den-3, gear-shop, laundry-center, vintage-barber-shop, restrooms, parking-lot-restrooms, fleet-services-fuel, fleet-services-entry-1, fleet-services-entry-2, fleet-services-exit, cross-dock, truck-wash-entry, truck-wash-exit

**photos/** (`/assets/deck-library/photos/`):
building-terminal-aerial, building-exterior-day, interior-club-dining, interior-club-lounge, interior-club-shop, interior-overdrive-lounge, lifestyle-skydeck-sunset, people-driver-in-cab, people-leadership-group, context-groundbreaking-shovel, context-city-skyline, context-civic-courthouse, context-highway-interchange, context-truck-sunset, context-truck-sunset-2

Start with Task 1, show me the gallery, then proceed through the list.
