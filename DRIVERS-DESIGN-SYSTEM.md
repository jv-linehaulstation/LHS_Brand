# ⭐ /drivers (OneHome) — consolidated DESIGN SYSTEM (single source of truth)

One reconciled system from the four references JJ shared — so the build follows ONE direction, not four.
This governs **look + motion**; `DRIVERS-ONEHOME-REALIGN.md` governs **copy + sequence**;
`DRIVERS-APPLY-FLUIDGLASS.md` is the build runbook that points here. Branch `redesign-v2`.

**North star:** a **dark, cinematic, premium** OneHome page — resort-quality, money-first, grounded for
drivers (not elitist). Luxe = the skin; fluid.glass = the motion; Spence = the amenities showcase;
the "concessionnaires" site = the membership hover (pending URL).

---

## 1. Foundations

**Palette (dark luxury — overrides any earlier off-white rhythm)**
- Base near-black `#0E0E10` / carbon `#1A1A1A`; elevated cards `#16161A`–`#202024`; lines/hairlines warm
  chrome at ~10–14% white. Text `#EDEAE6` / dim `#B0B0B0` on dark.
- **Accent: Fuel Orange `#F07820`** (buttons, small labels, thin rules, active states) — used sparingly.
- Warm amber comes from interior photography, not fills. Optional faint burgundy tint on a few dark
  sections (OneHome nod). No large off-white or flat mid-grey fields.

**Type (KEEP brand fonts — NO serif)**
- Archivo = display/headings (heavy, tight), Outfit = body, DM Mono = uppercase eyebrows/labels/counters.
- Elegance comes from scale, spacing, and dark framing — not a fancy typeface. Big `clamp()` headlines,
  centered section intros (mono eyebrow → headline → one supporting line).

**Surfaces & layout**
- **Framed, rounded-corner image cards with page side margins** (inset, ~`clamp(16px,4vw,64px)` gutters) —
  NOT edge-to-edge, except the hero photo (large + rounded). Radius ~`16–22px`.
- **Glass** surfaces (nav, calculator card, stat chips, comparison panel) in a **dark** key: `backdrop-blur`,
  ~6–8% white fill, 1px chrome hairline, soft inner highlight.
- Pill CTAs (rounded-full; white-outline or fuel-orange). Circular prev/next arrow buttons. Generous vertical
  rhythm `py-[clamp(70px,11vh,140px)]`.

**Motion system (one stack)**
- **Lenis** smooth scroll. Scroll-reveal (clip/rise + fade) on enter. **Multi-speed parallax** on hero +
  feature images + footer. **Scroll-linked scale** (1.05→1.2) for the "scroll-zoom" media band.
  Magnetic buttons; optional custom cursor. Tasteful, ~30% snappier on mobile.
- **Everything `prefers-reduced-motion` safe** (static fallback). Mobile perf budget; lazy media; AVIF/WebP.
- Tune easings with the installed **review-animations / emil-design-eng** skills.

---

## 2. Component library (where each reference is used — once each)

| Component | From | Used in |
|---|---|---|
| Glass top nav (frosts on scroll) + full-screen overlay menu | fluid.glass | global |
| Cinematic full-bleed hero video + multi-speed parallax | fluid.glass | Hero |
| Stat chip ("$15K+ saved / yr") · framed image cards · pill CTAs · circular arrows | Luxe | throughout |
| **Peeking-card carousel** (large center, edges peek, circular arrows) | Luxe | Building Previews |
| **Pinned one-at-a-time showcase** (image swaps, 01–08 counter) | Spence "Our Services" | Amenities |
| **Scroll-zoom media band** (scale on scroll) | fluid.glass "Showroom" | Home Hub / West Memphis |
| **Cross-out comparison** (strikethrough the "Traditional" column) | (ours) | Value Statement |
| **Hover-reveal list** (hover item → large preview image) | vincentetdussault.com "Plus de 300 concessionnaires réalisés" | Membership + Space (§9) |
| **Video + 3 quote-cards** testimonial | Luxe | Testimonials |
| **Accordion FAQ** (first open, ± toggles) | Luxe | FAQ |
| **Parallax dark-image footer** + link columns + Subscribe | Luxe / fluid.glass | Footer |

---

## 3. Section map (final — look + copy together)
All sections on the dark skin; framed cards + glass; the counter/eyebrow in DM Mono.

1. **Hero** — full-bleed rounded video, parallax; money headline (OneHome verse) + scroll cue.
2. **Welcome to the Club** (next to hero) — Outriders story + Vimeo `1055748426` in a dark glass frame,
   "Jeffrey J. Swenson — Founder & CEO" credit under the video (no portrait).
3. **Building Previews** — Luxe **peeking-card carousel** + circular arrows.
4. **Here's A New & Better Option** — big centered money statement + **the main OneHome calculator** in a
   dark glass card (replaces "Stop paying for what you don't use"; the only calculator on the page).
5. **For a lot less money…** — left = "What is home for you today?" prompts; right = **cross-out comparison
   table** (strikethrough Traditional column); **left + table equal height**.
6. **Amenities** — **Spence pinned showcase**, one amenity at a time (01–08), big image swap; stacks on mobile.
7. **We have EVERYTHING you need** — Home Hub **+ Fleet Services combined** in the Home-Hub layout.
8. **Network / Map** — markets chips; West Memphis proof here as the **scroll-zoom** band (once).
9. **Membership + Space** — condensed **hover-reveal list** (ref: vincentetdussault.com "Plus de 300
   concessionnaires réalisés"). Layout = a list of items (3 membership steps: Free Membership · Create
   Profile · Get Others Excited; + 3 Space ways: Earn · Request · Purchase), each a tight one-liner.
   **On hover of an item, a large preview image reveals** for that item — **clip/mask wipe + fade +
   subtle scale (1.0→1.05)**, the image **tracking the cursor with slight inertia** (or anchored in a
   fixed preview panel beside the list); **non-hovered items dim**, active item gets a Fuel-Orange
   marker. Easing ~`cubic-bezier(.2,.7,.2,1)`, ~450–600ms. **Touch/mobile:** no hover — stack each item
   with its image inline (tap to expand). **Reduced-motion:** images shown statically, no follow.
   The image carries the richness so the copy stays minimal.
10. **Testimonials** — Luxe **video + 3 quote-cards** (supersedes the earlier carousel choice).
11. **FAQ** — Luxe **accordion**, OneHome Q&A (`TODO(JJ)` final answers).
12. **Closing CTA** — big type over a parallax image; "Join OneHome" + "Schedule a Call".
13. **Footer** — Luxe dark-image parallax footer; Quick Links / Explore / Newsletter (+ Subscribe), socials,
    legal, contact.

---

## 3b. REFINEMENT ROUND — JJ feedback on the live build (apply these; supersede where conflicting)

**Do NOT touch:** the **homepage** and the **Welcome to the Club** section — JJ approves both as-is.

1. **Building Previews — copy the Luxe mockup; images are too small.** The current peeking carousel cards
   are too small. Rebuild like Luxe "Featured Masterpieces": **one large dominant center image card**
   (big — roughly 50–60% of the content width, tall), neighbors peeking at the edges, **circular prev/next
   arrows**, and a caption row (name + spec line) under the active card. Make the active image the hero of
   the section, not a thumbnail.
2. **"Here's A New & Better Option" — calculator vs right column uneven height.** Put the calculator (left)
   and the content/counters (right) in an **equal-height** two-column layout — stretch both to the same
   height (align-items stretch / matched min-heights), no lopsided columns. Glass calculator card.
3. **"For a lot less money…" — too simple/static.** Add motion + interaction: rows **reveal on scroll**,
   the **strikethrough on the Traditional column draws in** (animated line), and **row hover states**
   (highlight the OneHome win, subtle scale/he­xglow on the active row). Should feel alive, not a flat table.
   Keep left prompts + right table **equal height**.
4. **"Absolutely Amazing Amenities" — remove image border-radius + fix low quality.** **Square the images
   (no `rounded-card`/radius)** — sharp edges. Fix quality: render at full size (drop the `sizes="…25vw"`
   downscale; use `sizes` matching the real display width, e.g. `~50vw`), avoid forced upscaling, and
   **`TODO(JJ): supply higher-res amenity photos (≥2400px, ideally portrait)** — current gallery assets are
   only ~1500px landscape, which looks soft at large display. Also remove the old amenities-tiles leftover
   so only the Spence pinned showcase renders.
5. **"We have EVERYTHING you need" — combine Home Hub + Fleet Services, keep the design, as TILES/IMAGE
   BOXES.** Merge both into ONE section using the "We have EVERYTHING you need." design — but render the
   items as **image tiles / boxes** (not plain text): Home Hub — Mail Services · Personal Vehicle · Storage
   Lockers; Fleet Services — Repairs · Maintenance · Inspections · Truck Wash. Each tile = image + label
   (+ short line). Don't lose the section design when merging.
6. **"Nothing To Lose / Everything To Gain" — still weak, keep improving.** This section is still too
   text-heavy/dull. Push it further: condense to tight one-liners, make it **interactive** (the hover-reveal
   from §9 of the design system), give it real visual structure (numbered process + imagery), and reduce the
   wall of copy. Still **`PENDING` the "concessionnaires" reference URL** to lock the exact hover — until
   then, build a strong condensed interactive version, not a paragraph block.
7. **Cleanup (impeccable):** remove the half-merged leftovers spotted in `AudiencePage.tsx` — the old
   `a.amenities.tiles` block and any **second/standalone calculator** section — so the calculator and
   amenities each render exactly once.

## 3c. GAP vs the live join-drivers page — ADD (decision: ONE page does both)
`/drivers` absorbs the free Outriders membership flow on top of the OneHome content. Add what the live
`linehaulstation.com/join-drivers` has that we're missing:

1. **Prominent FREE "Join Free" register, high on the page.** On the live page the register form sits
   right under the hero — joining free is the #1 action. Surface a clear **"Join Free" (Outriders Club)
   register** near the top (e.g., directly after Welcome To The Club), distinct from the OneHome paid
   interest form. Keep both CTAs legible: **Join Free** (free club membership) vs **Join OneHome** (home
   program). Anchor a "Join Free" button in the nav.
2. **Register form fields (driver segmentation):** add **Member Type** (Company Driver · Owner Operator ·
   Fleet or Carrier · Freight Broker · Private Fleet) and **Truck Count** to the membership form, plus
   First/Last name, Company, Phone, Email + the consent line. (The OneHome interest form can stay separate
   or share this — keep one register that captures Member Type + Truck Count.)
3. **Fleet Services — add Cross Dock + detail.** Add **Cross Dock** to the fleet items, and (optional) the
   detailed service list: Tire Pressure Management · Pre & Post-Trip Inspection · DOT Annual Inspection ·
   Tractor/Trailer Service · Routine PM Repairs. Keep the merged Home Hub + Fleet tiles design.
4. **(Optional) fuller amenities list** so nothing from the live club menu is lost — represent the three
   groupings **Food & Drink · Entertainment · Amenities** (the 8 showcase tiles stay the hero treatment;
   add a compact "everything included" categorized list if JJ wants completeness — items like Coffee &
   Juice Bar, Billiards/Game Tables, Conference Center, Sauna & Wellness, Barbershop).

**Don't regress our wins** the live page lacks: OneHome calculator, comparison table, 38-market network,
Home Hub, FAQ, testimonials, dark-luxury motion.

## 3d. LATEST OVERRIDE — Amenities take the Building-Previews carousel (JJ approved this design)
JJ approves the **peeking-card carousel** as built (big center rounded card, peeking neighbor, eyebrow →
big title → sub, caption row with name + dotted tag line + `01 / N` counter + circular ← → arrows).
**Use THIS carousel design for "Absolutely Amazing Amenities"** — it **supersedes** the earlier amenities
treatment (the Spence pinned showcase AND the "square the images" note — those applied to the removed
grid; **keep this carousel's rounded frame**, JJ likes it).

- **Replace the Building-Previews section's content** with the **8 amenities** (name + short tag + image):
  Member's Grill · Sky Deck · Digital Den · Fitness Studio · Laundry & More · Gear Shop · Resort Pool &
  Spa · Camp K9. Pull tag lines from `lib/audiences.ts` (amenities / outriders.services) and images from
  the amenity photo set (clubDining, skydeck, gamerDen1, fitness, laundry, gearShop, waterFeature,
  clubPatio). Eyebrow → "THE OUTRIDERS CLUB"; title "Absolutely Amazing Amenities"; sub one line; caption
  e.g. **MEMBER'S GRILL · "Hot meals · real cooking · sports bar" · 01 / 08**.
- **No separate Building-Previews carousel** — the hub/building imagery is already shown in the Hero,
  Network/Map, and West Memphis sections (dedupe). *(If JJ later wants a hubs showcase back, it returns as
  its own carousel; for now this slot = Amenities.)*
- **Higher-res matters more now:** the active card is huge — `TODO(JJ): supply ≥2400px amenity photos`
  (current ~1500px will look soft at this size). Keep crisp `sizes`, no upscale.
- Removes the duplicate-amenities problem entirely: **one amenities section = this carousel**.
- **Add an "Everything included" categorized list beneath the carousel** (three columns, on the dark skin,
  mono category labels + clean item rows). Use JJ's full list verbatim:
  - **Food & Drink:** Member's Grill & Bar · Coffee & Juice Bar · Grab-and-Go Market · Snacks & Provisions
  - **Entertainment:** Digital Den & Gaming · Billiards & Game Tables · Trap & Skeet · Sky Deck & Firepits
  - **Amenities:** Fitness Studio · Resort Pool & Spa · Sauna & Wellness · Barbershop · Laundry & More ·
    Gear Shop · Conference Center · Camp K9
  So the section = **carousel (8 hero amenities) + the full "Everything included" 3-column list** below it.
  The carousel's 8 items should map to these (e.g., Member's Grill, Sky Deck & Firepits, Digital Den,
  Fitness Studio, Resort Pool & Spa, Gear Shop, Laundry & More, Camp K9). Reveal the columns on scroll.

## 3g. LATEST — "Here's A New & Better Option" layout (calculator-led, copy below)
Restructure this section to a **stacked, single-column** layout (supersedes the earlier equal-height
two-column note):
- **Remove** the sub-labels **"Run Your Own Numbers"** and **"What OneHome Puts Back In Your Pocket"**.
- **Calculator on top, made WIDER** — a wide glass calculator card (near content-width), the focal element.
- **Body copy BELOW the calculator** — the playbook's revised Core Sales copy (the "Housing is expensive –
  rent/mortgage, taxes, insurance, utilities, maintenance … SAVE $15,000 or more per year …" block,
  3 short paragraphs — already in the repo / `lib/audiences.ts` Core Sales body; don't rewrite it).
- Keep the section headline "HERE'S A NEW & BETTER OPTION" + the 365-vs-100 hook above the calculator.

## 3f. LATEST — move "Nothing To Lose / Everything To Gain" up
Move the **"Free membership — Nothing To Lose / Everything To Gain"** section to **immediately after
"For a lot less money, a far superior experience."** (i.e., right after §5 Value Statement / comparison
table). Order becomes: … Value Statement (comparison) → **Nothing To Lose / Everything To Gain
(free-membership steps)** → Amenities → … . Everything else in the sequence stays.

## 3e. LATEST — one form only (remove the pre-footer form)
There must be **only ONE form on the page** — the register/contact form **above** (the "Join Free" /
membership register near the top, with Member Type + Truck Count). **Remove the second form before the
footer** (the standalone Join OneHome interest form). The **closing CTA band before the footer stays**,
but as **buttons only** ("Join Free" / "Schedule a Call") that scroll up to the single form — no form
fields there. Footer unchanged.

## 4. Guardrails · dedupe · verify
- **Money-first beats pretty:** the $15k math, comparison table, and calculator stay prominent and scannable.
- **Brand:** Fuel Orange accent; brand fonts (no serif); "OneHome" no star in body copy; "Join" not "Sign Up";
  "Home Hub" not "home base"; FlexSpace / Outriders Club casing; approved CTAs. White-on-photo keeps dark overlay.
- **Impeccable dedupe (nothing twice):** one calculator (§4), one amenities section (§6), Fleet merged once
  (§7), webinar video once (§2), West Memphis once (§8), comparison once (§5), membership/Space once (§9).
- **Open items (post-build punch list — inputs from JJ, not code):**
  - §9 hover **LOCKED** → vincentetdussault.com "Plus de 300 concessionnaires réalisés" (hover-list image
    reveal; full spec in §9 above). Rebuild the placeholder to match it. *(Optional: live-Chrome capture
    for frame-exact easing if JJ wants pixel parity.)*
  - `TODO(JJ)` **higher-res amenity photos** (≥2400px, ideally portrait — current ~1500px look soft at
    ~49vw); **Gear Shop** white ¾-zip + real logo; dedicated **Fleet / Home-Hub tile photos**; **FAQ
    answers** confirmation; **testimonial video**.
  - **Contact = RESOLVED:** uses `lib/site.ts` (602-428-2222 / info@); the playbook's jj@ / 602-858-8000
    was intentionally dropped (commit `3413616`). No action needed unless JJ wants JJ's direct line back.
- **Verify:** dark-luxury skin consistent; brand fonts; each component renders once; §5 equal-height + strikethrough;
  §6 pins + advances and stacks clean on mobile; carousel + scroll-zoom + parallax work; Vimeo plays; one `<h1>`;
  no overflow at 390/768/1440; reduced-motion falls back. `npx tsc --noEmit` clean · `npm run build` passes ·
  browser-checked · committed + pushed.
