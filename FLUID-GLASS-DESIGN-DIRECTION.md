# ⭐ Visual language upgrade — "Fluid Glass" patterns applied to LineHaul Station

Direction JJ approved from fluid.glass (Exo Ape). We're taking the **craft + interactions**, not the
content — keep LHS brand (carbon + Fuel Orange; burgundy OneHome identity per the playbook) and the
**money-first clarity** the OneHome Copy Playbook demands. Apply to **homepage + /drivers (OneHome)
first**, then roll to audience pages. Branch `redesign-v2`. tsc + build + browser pass, commit + push.

Motion stack: keep **Lenis** smooth-scroll; add scroll-linked transforms (parallax + scale). If JS
animation gets heavy, install **framer-motion** (`npm i framer-motion`) — otherwise CSS +
IntersectionObserver. **Everything reduced-motion safe** (static fallback) and within a mobile perf
budget. Use the installed **`review-animations` / `emil-design-eng`** skills to tune easings.

---

## JJ's picks → what to build

### 1. Nav — put it ON TOP (theirs is uniquely at the bottom; we lead with it)
Refined **glass top bar**: transparent over the hero, then **frosts on scroll** (`backdrop-blur`,
6–10% white fill, hairline chrome border). Wordmark left; minimal links; a **full-screen overlay
menu** (staggered link reveal + a background image/video, contact in the corner). CTA stays explicit:
**"Join OneHome" / "Schedule a Call"** (never vague).

### 2. Hero — full-bleed VIDEO + parallax on scroll  ✅ (JJ: "video + parallax on scroll")
Autoplay muted loop video, dark overlay for legible white text. **Parallax:** video/background drifts
slower than the foreground headline as you scroll. Keep the **money headline** (OneHome verse + "see
the math" scroll cue) — do NOT go one-word. Reduced-motion = static poster.

### 3. Big centered statement  ✅ (JJ: "big centered text")
An oversized, **centered** one-idea section — huge `clamp(40px,6vw,96px)` headline, lots of air,
gentle rise-in. Use it as the editorial breath, e.g. the Core Sales money line ("You're paying for
365 days. You're only using about 100.") or a short About-OneHome statement.

### 4. Unorthodox image layout + hover  ✅ (JJ: "not a grid — lay images out in an unorthodox way; hover is perfect")
**Break the grid.** No uniform rows/columns. Build an editorial **collage**:
- **Broken/asymmetric grid:** varied column spans + deliberate **vertical-offset stagger** (each
  image starts at a different height); never equal rows.
- **Edge bleed + overlap:** images run off the viewport edge and overlap section boundaries / each
  other (layered z-index) — not neat boxes.
- **Mixed sizes & orientations:** a tall portrait beside a small landscape beside a full-bleed —
  intentional scale jumps.
- **Multi-speed parallax** on adjacent images so the layout feels alive; optional one **pinned/sticky**
  image while captions scroll past.
- **Floating mono caption labels** (not boxed); optional diagonal baseline or a horizontal marquee strip.
- Hover = **image zoom + label slide-up + cursor change.**
Apply to the **Amenities (8)** and the **gallery / three programs** — editorial, breathing, premium.
Keep it reduced-motion safe and ensure it stacks cleanly (single column, no overlap) on mobile.

### 5. Scroll-zoom video  ✅ (JJ: "video that zooms in when scrolling — apply this")
A full-bleed video (or image) that **scales up as you scroll through the section** (scroll-linked
`scale` transform, ~1.05→1.2). Apply to **West Memphis / Home Hub** ("a real place — here's the
address") and optionally the hero hand-off. Signature Showroom effect.

### 6. Featured projects — two big parallax images, IMPROVED  ✅ (JJ: "2 big images that move on scroll; improve it")
Keep two large images moving at **different scroll speeds**, but improve: tall portrait imagery,
clip-reveal in, **stronger captions + an index counter (01/04)**, clear project framing
(**Outriders Club gallery / BUILDING PREVIEWS**), and a clean mobile stack. Make it feel like a
portfolio, not a slideshow.

### 7. Client stories — testimonial carousel  ✅ (agreed)
"01 / 05" slider: **face photo + quote + name/role + a rating or "founding member" badge.** Driver
testimonials. Fade/slide between quotes, drag on mobile, autoplay optional.

### 8. Closing CTA — calm, confident  ✅ (agreed, but money close)
Big type reveal over a **full-bleed parallax image**, two clear next steps. Ours = the **money close**:
"Join OneHome" + "Schedule a Call" (not a soft "get in touch").

### 9. Footer — big parallax image  ✅ (JJ: "big parallax image on the footer")
Large **parallax hero image** behind a minimal footer (wordmark, socials, legal, contact
602.428.2222 / info@). Atmospheric all the way to the bottom.

---

## Background / color rhythm (JJ Q: white vs grey?)
**Not all-white, not flat grey.** Keep our alternating beat: **carbon near-black `#1A1A1A` ↔ warm
off-white `#F4F2EF`** (off-white, NOT pure `#FFFFFF` — warmer, on-brand).
- **Off-white sections** = the readable money beats: Core Sales statement, comparison table, Home Hub,
  calculator. Max legibility.
- **Carbon sections** = the cinematic beats: hero video, glass panels, amenities collage, gallery,
  Showroom scroll-zoom. This is where glass + video feel premium.
- **OneHome nod:** optionally tint the dark/carbon sections slightly **burgundy** (per the playbook
  identity) while **Fuel Orange stays the accent**. No large mid-grey fields.

## Cross-cutting "glass" system (the connective tissue)
- **Glassmorphism surfaces:** frosted translucent panels for nav, the OneHome calculator card,
  amenity cards, the comparison table, stat chips — `backdrop-blur(14–20px)`, white 6–10% fill,
  1px chrome/steel hairline border, soft inner highlight. Reads as "warm chrome + glass" → on-brand.
- **Scroll system:** Lenis + scroll-reveal (clip/rise) + multi-speed parallax + scroll-linked scale
  (Showroom). Tune ~30–40% faster than fluid.glass so the offer lands quickly on mobile.
- **Polish:** magnetic buttons, optional custom cursor, AVIF/WebP everywhere, lazy media.

## Guardrails (don't let cinematic kill the sell)
- Keep the **$15k/year math, comparison table, and counters prominent** — money-first beats pretty.
- Carbon + Fuel Orange retained (burgundy = OneHome signal per playbook). CTAs: Join OneHome / Join
  Free / Schedule a Call / Connect With Us. "Home Hub" not "home base". Never "nodes".
- White-on-photo keeps the dark overlay; headings always reveal (bulletproof); reduced-motion safe.

## Phasing
1. **Glass surfaces + nav + scroll system** (low risk, big payoff) — homepage + /drivers.
2. **Hero parallax + Showroom scroll-zoom + uneven amenities + parallax footer.**
3. **Testimonial carousel + improved projects band.**
4. *(Optional later)* true WebGL liquid-glass hero (react-three-fiber) behind a perf budget — phase it.
