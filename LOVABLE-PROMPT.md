# Lovable.dev prompt — LineHaul Station "OneHome" landing page (glass + cinematic scroll)

Paste everything below into Lovable. It builds OUR page in the approved aesthetic (glassmorphism +
cinematic, scroll-driven motion) with LineHaul Station's brand and copy — not a copy of any other
site. Swap the placeholder image/video URLs for our real assets after generation.

---

Build a single-page, production-quality marketing landing page for **"OneHome by LineHaul Station"** —
a resort-quality home-network membership for American truck drivers. Tech: **React + Vite +
TypeScript + Tailwind CSS + Framer Motion + Lenis** (smooth scroll). Mobile-first and fully
responsive. All motion must respect `prefers-reduced-motion` (fall back to static).

## Brand
- Palette: Carbon `#1A1A1A` (base), Surface `#202020`, Line `#363330`; text `#D8D8D8`, labels
  `#B0B0B0`; **accent Fuel Orange `#F07820`**; warm chrome/steel for borders. Premium, industrial,
  warm — not corporate-cold.
- Type: headings **Archivo** (heavy, tight), body **Outfit**, mono labels **DM Mono**. Big editorial
  scale (`clamp()`), generous whitespace.
- **Background rhythm — NOT all-white, NOT flat grey.** Alternate **carbon near-black `#1A1A1A`** ↔
  **warm off-white `#F4F2EF`** (off-white, never pure `#FFFFFF`). Off-white = the readable money
  sections (statement, comparison table, calculator, Home Hub); carbon = the cinematic/glass beats
  (hero video, amenities, gallery). Optionally tint the dark sections slightly burgundy; Fuel Orange
  stays the accent.
- Surface language = **glassmorphism**: frosted translucent panels (`backdrop-blur`, ~8% white fill,
  1px chrome hairline border, soft inner highlight) for the nav, cards, calculator, and stat chips.
- Voice: money-first, direct, confident, warm. CTA buttons say **"Join OneHome"** or
  **"Schedule a Call"** — never "Sign Up".

## Global interactions
- **Lenis smooth scroll.** Scroll-reveal (clip/rise + fade) on section enter. **Multi-speed parallax**
  on hero/footer images. **Scroll-linked scale** (image/video scales 1.05→1.2 as its section passes).
  Magnetic hover on buttons; subtle custom cursor (optional). Tune easings tasteful and ~30% snappier
  on mobile. AVIF/WebP, lazy-loaded media.

## Sections (in order)
1. **Glass nav (top):** transparent over the hero, **frosts on scroll**. Wordmark left; links
   (Home Hub, Amenities, Network, Calculator, Join); right CTA "Join OneHome". A "Menu" button opens
   a **full-screen overlay menu** with staggered links + a muted background video and contact info.
2. **Hero (full-bleed video + parallax):** autoplay muted looping background video with a dark
   overlay. Headline (white): **"Everywhere the road takes you."** Sub: *"A home you only pay for on
   the days you're actually in it."* A "See the math ↓" scroll cue. Video parallaxes slower than the
   headline. Reduced-motion = static poster.
3. **Big centered money statement:** oversized centered headline **"You're paying for 365 days.
   You're only using about 100."** + one line: *"Stop paying for a home you barely live in."* Lots of
   air, gentle rise-in.
4. **Comparison (Traditional Housing vs OneHome):** a clean glass 2-column matrix — left "Traditional
   Housing", right "OneHome": Pay for 365 days / Pay only for days you use · Mortgage + interest / No
   mortgage, no interest · Full utilities / No utility burden · Maintenance & repairs / Zero
   maintenance · Can't park your truck / Secure truck parking included · Truck stop on the road /
   Resort-style network nationwide. Rows reveal on scroll.
5. **Amenities (UNORTHODOX layout, break the grid):** section title **"Absolutely Amazing
   Amenities"**, then 8 images as an **editorial collage — NOT a grid**: varied sizes and
   orientations (tall portrait beside small landscape beside full-bleed), **vertical-offset stagger**
   (each starts at a different height), images that **bleed off the edge and overlap** each other
   (layered z-index), adjacent images at **different parallax speeds**, floating mono caption labels.
   Items: Member's Grill, Sky Deck, Digital Den, Fitness Studio, Laundry & More, Gear Shop, Resort
   Pool & Spa, Camp K9. Hover = image zoom + label slides up + cursor change. Collapse to a clean
   single-column stack (no overlap) on mobile.
6. **Scroll-zoom "Home Hub" band:** a full-bleed building/aerial **video or image that scales up as
   you scroll** through it. Copy: **"The first Home Hub: West Memphis"**, address "1212 MLK Dr, West
   Memphis, AR — I-40 / I-55", and Mail Services • Personal Vehicle • Storage Lockers.
7. **Network band:** headline "Everywhere the road takes you." + a growing list of market chips
   (Dallas, Atlanta, Memphis, Chicago, Phoenix, Denver, Indianapolis, Carlisle, …).
8. **Featured / gallery (two big parallax images):** two large tall portrait images moving at
   different scroll speeds, clip-reveal, with captions and an index counter (01 / 04). Tour-the-club
   framing.
9. **Lifestyle calculator (glass card):** headline "The math might surprise you." + "You could save
   $15,000–$20,000 per year." An interactive card: inputs for monthly housing cost + days/month home,
   outputs estimated annual savings vs a OneHome membership. Glass panel, animated number count-up.
10. **Testimonial carousel:** "01 / 05" slider — face photo + quote + name/role + a 5.0 rating badge.
    Fade/slide between quotes; drag on mobile.
11. **Closing CTA (calm, money close):** big type over a full-bleed parallax image: **"A smarter way
    to live on the road."** + buttons "Join OneHome" and "Schedule a Call".
12. **Footer (big parallax image):** large parallax image behind a minimal footer — wordmark,
    socials, legal links, contact "602.428.2222 · info@LineHaulStation.com", © LineHaul Station.

## Notes
- Use tasteful placeholder imagery/video now; I'll replace with LineHaul Station assets.
- Keep the $15k math, the comparison table, and the calculator prominent — money-first beats pretty.
- Accessible: semantic landmarks, one `<h1>`, visible focus states, alt text, reduced-motion fallback,
  no horizontal overflow at 390 / 768 / 1440.
