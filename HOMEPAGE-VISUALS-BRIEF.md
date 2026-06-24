# HOMEPAGE — Kill the "wall of text", pair every block with a visual

The homepage reads text-heavy because it barely touches the asset library. We have **45
clean deck renders** in `public/assets/deck-library/` (see its `MANIFEST.md`) plus amenity
tiles, building previews, and `outriders/story.mp4` — mostly unused. This task: rework
`app/page.tsx` so **no text section stands alone** — every block is paired with a real
render, broken into image+text modules, or replaced by a visual (gallery, stat-on-photo,
diagram, video). Cut prose density ~30–40%; let images carry the story.

Work autonomously per CLAUDE.md, on `redesign-v2`. **Use the design skills** —
`frontend-design`, `ui-ux-pro-max`, `impeccable` (typeset/layout/animate),
`design-taste`, and `emilkowalski/skills` for motion feel. Keep every brand rule
(casing, Hubs/Terminals/Service Centers not "nodes", CTAs only "Connect With Us" /
"Schedule a Call" / "Join Free", dark overlay under all white-on-photo text). Reuse
existing components (Section, Reveal, ParallaxImage, CountUp, NetworkMap, SectionHead/DataTag,
Bits). Finish with `npx tsc --noEmit` + `npm run build`; commit + push.

Web path prefix for the library: `/assets/deck-library/...`

---

## Global rules for this pass
1. **Every `Section` gets a visual.** If a section is currently text-only, either (a) make
   it a 2-column image+text split, (b) give it a full-bleed/parallax photo background with
   the copy on a dark overlay, or (c) convert the copy into a visual module (gallery, cards
   over photos, diagram). No exceptions.
2. **Break long paragraphs** into a lead line + 2–3 short lines, or into captioned visual
   points. Move details into image captions, stat chips, or tooltips.
3. **Alternate treatments** — no two adjacent sections share a layout OR a background
   variant (split-left, then full-bleed, then gallery, then split-right…).
4. **Add motion that earns it** (reduced-motion safe): slow image scale on hover, parallax
   on full-bleed photos, scroll-reveal on splits, a count-up on stats. Nothing loops noisily.
5. Keep Fuel Orange sparing; let the photography be the color.

---

## Section-by-section plan (current `app/page.tsx`)

**1. Hero** (`min-h-94dvh`, existing) — make the background a parallax full-bleed of
`photos/context-truck-sunset.jpg` (or `deck-library/photos/context-truck-sunset-2.jpg`) or
`renderings/chrome-club-aerial-view.jpg`, dark overlay, big headline. Add a thin scrim so the
nav stays legible. Optionally a muted autoplay `outriders/story.mp4` behind it (poster
fallback).

**2. Story / "Who We Are"** (`#story`, carbon) — make it the **asymmetric split** from the
mockup: prose on one side, a framed `deck-library/photos/people-driver-in-cab.jpg` (human,
on-brand) OR `chrome-club-entry.jpg` on the other. Pull-quote stays. Trim the prose.

**3. Find Your Lane** (`#lanes`, ink) — give each of the 5 audience cards a **thumbnail
image** so it's not a text list: Drivers→`chrome-club-skydeck.jpg`,
Carriers→`fleet-services-fuel.jpg`, Brokers→`cross-dock.jpg`,
Shippers→`building-terminal-aerial.jpg`, Government→`context-civic-courthouse.jpg`. Image
with label overlay + "Explore →".

**4. (panel section, line 171)** — convert to a **renderings gallery / marquee**: a
horizontal strip or masonry of 8–10 deck renders (sky deck, fireplace, lounge, fitness,
gamer's den, gear shop, barber, water feature, patio) with hover-zoom + lightbox. This is
the single biggest "show, don't tell" win — the amenities sell themselves.

**5. Network** (`#network`, carbon) — keep `NetworkMap`, but flank it with
`deck-library/photos/context-highway-interchange.jpg` and/or `context-city-skyline.jpg` as a
full-bleed band above or beside it so the map sits in real-world context, not on black.

**6. (ink section, line 193)** — turn this text block into **stat-cards-over-photos** or a
2-up image+copy split using `renderings/cross-dock.jpg` / `fleet-services-entry-1.jpg`.
CountUp the figures. No bare paragraphs.

**7. (image section, line 225 — buildingExterior)** — already a photo band; upgrade to
parallax and swap to `renderings/chrome-club-aerial-view.jpg` or
`photos/building-exterior-day.jpg` for a stronger hero render. One line of copy, one CTA.

**8. Closing CTA** (`min-h-64vh`, line 251) — full-bleed `context-truck-sunset.jpg` or
`lifestyle-skydeck-sunset.jpg` parallax behind the "Connect With Us" / "Schedule a Call"
close.

---

## Optional adds (if quick & on-brand)
- A **logo/credibility strip** or a thin **"by the numbers"** band (terminals, spaces,
  states) as count-ups over a dim `context-highway-interchange` photo.
- A small **site-plan callout** using `renderings/oblique-site-plan.jpg` to explain "what's
  inside a Hub" visually instead of in prose.

## Done checklist
- [ ] No text-only sections remain — every section has a paired visual
- [ ] Amenities renderings gallery (lightbox) added
- [ ] Audience cards have images; hero + closing are full-bleed parallax
- [ ] Long paragraphs trimmed into lead + short lines / captions
- [ ] Adjacent sections differ in layout AND background; motion is reduced-motion safe
- [ ] Brand rules intact; `npx tsc --noEmit` clean; `npm run build` passes
- [ ] Committed + pushed to `redesign-v2`
