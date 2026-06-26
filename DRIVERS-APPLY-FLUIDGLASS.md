# ▶ Claude Code — apply the OneHome realign + Fluid Glass design to /drivers

Branch `redesign-v2`, per `CLAUDE.md`. Instructions only — no HTML mockups. One page: **/drivers**.

## Read first (in the repo)
1. `DRIVERS-ONEHOME-REALIGN.md` — authoritative OneHome copy + section sequence (source of truth).
2. `FLUID-GLASS-DESIGN-DIRECTION.md` — the visual/motion language (background rhythm + unorthodox layout).
3. `reference/OneHome_Copy_Playbook-Revised-3-18-26.docx` — long-form copy to quote verbatim.

## Goal
Rebuild `/drivers` (OneHome) so it follows the **playbook copy + sequence** AND wears the **Fluid
Glass** design language. Keep Fuel Orange (no burgundy repaint of the whole page).

## Structure & copy (from DRIVERS-ONEHOME-REALIGN.md)
Hero (One★Home verse) → Core Sales Block ("HERE'S A NEW & BETTER OPTION", revised money copy) → Value
Statement + Traditional‑vs‑OneHome comparison table → **Absolutely Amazing Amenities** (8 cards,
replacement subheads — replaces the old Services/Amenities dupes) → Fleet Services (image cards) →
Network/Map (markets list) → Home Hub/Services → Lifestyle Calculator → **Outriders free‑membership
block** (Welcome + Vimeo `1055748426`, Jeff credited under the video, 3‑step process, Space) → **Join
OneHome** form. Remove all duplicate sections. Rules: no star on "OneHome" in body copy, "Join" not
"Sign Up", "Home Hub" not "home base". Flag the phone/email mismatch (playbook 602‑858‑8000 / jj@ vs
site 602.428.2222 / info@) and use `lib/site.ts`.

## Background / color rhythm (NOT all‑white, NOT flat grey)
Alternate **carbon `#1A1A1A` ↔ warm off‑white `#F4F2EF`** (never pure `#FFFFFF`). Off‑white = readable
money beats (Core Sales, comparison table, Home Hub, calculator). Carbon = cinematic/glass beats (hero
video, amenities, gallery, Home Hub scroll‑zoom). Optionally tint dark sections slightly burgundy; Fuel
Orange stays the accent.

## Design & motion (from FLUID-GLASS-DESIGN-DIRECTION.md)
1. **Glass top nav** — transparent over hero → frosts on scroll (backdrop‑blur + hairline chrome
   border); full‑screen overlay menu; CTA "Join OneHome".
2. **Hero** — full‑bleed video + multi‑speed parallax; keep the money headline; reduced‑motion = poster.
3. **Core Sales "365 vs 100"** = big centered statement.
4. **Amenities + gallery = UNORTHODOX, break the grid:** varied sizes/orientations, vertical‑offset
   stagger, edge‑bleed + overlapping images (z‑index), adjacent images at different parallax speeds,
   floating mono captions, zoom‑on‑hover. Clean single‑column stack (no overlap) on mobile.
5. **Home Hub / West Memphis** — full‑bleed media that scroll‑zooms (scale 1.05→1.2).
6. **Gallery** — two big tall images at different parallax speeds, captions + index counter (01/04).
7. **Testimonials** — 01/05 carousel: face + quote + name/role + rating badge.
8. **Closing CTA + footer** — big type over a parallax image; parallax‑image footer.
Cross‑cutting: keep **Lenis** smooth‑scroll; add scroll‑linked parallax + scale; **glassmorphism**
surfaces (nav, calculator card, amenity cards, comparison table, stat chips); magnetic buttons. All
`prefers-reduced-motion` safe, mobile perf budget. `npm i framer-motion` only if JS motion needs it.
Use **review-animations · emil-design-eng · frontend-design · ui-ux-pro-max · impeccable · brand-voice
· accessibility-review**.

## Guardrail
Cinematic styling must **not** bury the money — the $15k math, comparison table, and calculator stay
prominent and scannable. White‑on‑photo keeps the dark overlay; headings always reveal.

## Suggested 2 passes (de‑risk)
- **Pass 1:** copy + structure + carbon↔off‑white rhythm → tsc + build → commit ("OneHome realign").
- **Pass 2:** glass nav + parallax + Home Hub scroll‑zoom + off‑grid amenities collage + testimonial
  carousel → tsc + build → commit ("Fluid Glass design language").

## Verify
Playbook order + copy correct; no duplicate sections; carbon↔off‑white (no all‑white / no flat grey);
glass nav frosts; hero/footer parallax + Home Hub scroll‑zoom work; amenities truly off‑grid
(overlap/stagger) and stack clean on mobile; Vimeo plays; one `<h1>`, clean `<h2>`s; no overflow at
390 / 768 / 1440; reduced‑motion falls back. `npx tsc --noEmit` clean · `npm run build` passes ·
browser‑checked · committed + pushed.
