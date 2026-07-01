# ▶ Claude Code — /drivers (OneHome): restructure + Fluid Glass + JJ Round-2 revisions

Branch `redesign-v2`, per `CLAUDE.md`. Instructions only — no HTML mockups. One page: **/drivers**.
**Run the `impeccable` skill as a QA pass** — JJ's note: the page has **too much redundant content**.
Hunt and remove every duplication; each idea appears once. Also apply **review-animations ·
emil-design-eng · frontend-design · ui-ux-pro-max · brand-voice · accessibility-review**.

## Read first (in repo)
1. **`DRIVERS-DESIGN-SYSTEM.md` — the single source of truth for look + motion (reconciles all four
   references). Follow it; if anything below conflicts, the design system wins.**
2. `DRIVERS-ONEHOME-REALIGN.md` — OneHome verbatim copy (copy source).
3. `reference/OneHome_Copy_Playbook-Revised-3-18-26.docx` — long-form copy.
4. `FLUID-GLASS-DESIGN-DIRECTION.md` — background reference only (the design system supersedes its
   carbon↔off-white rhythm; we are now **dark luxury**).

## VISUAL SKIN — "Luxe" dark luxury  *(JJ reference; OVERRIDES the earlier carbon↔off-white rhythm)*
Go **predominantly dark / cinematic** like the Luxe real-estate reference:
- **Palette:** near-black base (carbon `#1A1A1A` / `#0E0E10`), subtly **elevated dark cards** (`#16161A`–
  `#202024`) instead of off-white sections. **Fuel Orange `#F07820`** accent; warm amber from interior
  photography. Light text on dark throughout. *(Drop the off-white alternation; off-white only as small
  high-contrast chips if ever needed.)* Dark sections may take a faint burgundy tint (OneHome nod).
- **Type:** **KEEP the brand fonts** — Archivo (headings), Outfit (body), DM Mono (labels). **No serif.**
  (Luxe uses a serif; we do NOT — we get its elegance from spacing, dark luxury, and framing, not type.)
- **Layout signature (from Luxe):** **framed, rounded-corner image cards with page side margins** (inset,
  not edge-to-edge — except the hero photo which is large + rounded). Generous spacing; centered section
  intros (eyebrow + headline + one line).
- **Luxe component kit to use:** a **stat chip** (e.g. "$15K+ saved / yr" or "133 spaces") top-right of
  the About/value band; **overlapping listing-style cards** sitting on top of a photo (with a play
  button + a small spec/price row — adapt to OneHome: membership tiers / days); **pill CTAs**
  (rounded-full, outlined white or fuel-orange); **circular prev/next arrows**; **accordion FAQ**;
  **video + quote-cards testimonial** (see §10).
Keep the Fluid Glass mechanics on top of this dark skin: glass surfaces (now dark-tinted), **Lenis**
smooth-scroll, parallax + scroll-zoom, magnetic buttons. `prefers-reduced-motion` safe; mobile perf budget.

---

# NEW SECTION ORDER (this supersedes earlier order)

### 1. HERO — full-bleed video + multi-speed parallax; money headline; scroll cue; reduced-motion poster.

### 2. WELCOME TO THE CLUB — directly next to / right after the hero  *(JJ: "next to the hero")*
Outriders story (verbatim) **+ the Vimeo webinar** (`player.vimeo.com/video/1055748426?title=0&byline=0&portrait=0`,
lazy 16:9, chrome glass frame), **no Jeff portrait** — credit **"Jeffrey J. Swenson — Founder & CEO"**
under the video. (Acceptable: a hero/Welcome split where Welcome sits beside the hero; else immediately below.)

### 3. BUILDING PREVIEWS — moved up to section 3  *(JJ: "3rd or 4th section")*  — Luxe "Featured Masterpieces" carousel
Use the **Luxe carousel** pattern: centered section intro ("Our Featured Hubs" / building previews),
then a **peeking-card carousel** — a larger center card with the previous/next cards peeking at the
edges, **circular prev/next arrows**, and a caption row under the active card (name + a small spec line,
e.g. location / spaces). Rounded-corner framed image cards on the dark skin. Pull from `BUILDING
PREVIEWS` / Outriders gallery assets. Drag/swipe on mobile.

### 4. HERE'S A NEW & BETTER OPTION — Core Sales + the MAIN calculator  *(JJ)*
Big centered money statement ("You're paying for 365 days. You're only using about 100." + the revised
money copy). **Place the main OneHome calculator in THIS section — it replaces the blurb "Stop paying
for what you don't use."** **Remove the separate Lifestyle Calculator section** (merged here — no
duplicate calculator). Calculator in a glass card; animated savings count-up; keep the $15k framing.

### 5. FOR A LOT LESS MONEY, A FAR SUPERIOR EXPERIENCE — two columns, equal height  *(JJ)*
- **Left:** "WHAT IS HOME FOR YOU TODAY?" + the three prompts (Renting a Small Basic Apartment? /
  Renting or Owning a Traditional Home? / Random Parking Lots with No Services?).
- **Right:** the Traditional-Housing-vs-OneHome comparison as a **cross-out design** — the Traditional
  items rendered with a **strikethrough** (visually crossing out the old way), the OneHome items clean/
  highlighted. **Left column and right table must be the SAME height** (align content, no lopsided box).

### 6. AMENITIES — Spence-style pinned scroll showcase (NOT a wall of images)  *(JJ: copy spenceltd.co.uk "Our Services")*
Replace the many-image collage with a **pinned, scroll-through showcase**: the section sticks while
scrolling and advances **one amenity at a time** with a **large image swapping on one side** and the
**name + short blurb (+ optional link) on the other**, tracked by an **01–08 counter** (Member's Grill,
Sky Deck, Digital Den, Fitness Studio, Laundry & More, Gear Shop, Resort Pool & Spa, Camp K9). Image
cross-fades on advance; clean vertical fallback on mobile (stacked, no pin). Far fewer images on screen
at once — calmer, premium.

### 7. WE HAVE EVERYTHING YOU NEED — Home Hub + Fleet Services COMBINED  *(JJ: combine, use the Home Hub design)*
Merge **Home Hub / Services** and **Fleet Services** into ONE section using the **"We have EVERYTHING
you need." design**. Headline "We have EVERYTHING you need." Cover both groups in that layout:
Home Hub — **Mail Services • Personal Vehicle • Storage Lockers**; Fleet Services — **repairs •
maintenance • inspections • truck wash** (revised Fleet copy). One section, no separate Fleet band.

### 8. NETWORK / MAP — "Everywhere the road takes you" + the market chips. Keep West Memphis proof here
(scroll-zoom media), once.

### 9. MEMBERSHIP + SPACE — redesign "Nothing To Lose / Everything To Gain" + "Three ways to get Space"  *(JJ: too much info, too dull → make it interactive)*
Both are currently text-heavy and flat. **Condense hard** and make them **interactive with a hover-
reveal effect** modeled on the **"Plus de 300 concessionnaires réalisés" section** of the site JJ
referenced. **`PENDING — JJ to paste that site's URL`** so we match its exact hover. Expected pattern:
a compact **list of items** where **hovering each item reveals a large image/preview** (floating near
the cursor or swapping in a fixed panel), with smooth fade/follow. Apply it to:
- the 3-step membership (Free Membership · Create Profile · Get Others Excited) — as 3 hover items, and
- the 3 ways to get Space (Earn · Request · Purchase) — as 3 hover items.
Trim copy to one tight line each on hover/reveal; no long paragraphs. CTA "Join Free".

### 10. TESTIMONIALS — Luxe "video + quote-cards" pattern  *(supersedes the earlier fluid.glass testimonial choice)*
A **full-width warm photo of a driver** (on the dark skin) with a **center play button** (opens a video),
a caption/name, and a **row of 3 testimonial quote-cards** beneath (quote + name/role each) with a
**circular next arrow** to cycle more. Founding-member / 5.0 badge optional. Driver testimonials.

### 11. FAQ — Luxe accordion  *(new)*
"Frequently Asked Questions" centered, then an **accordion** (first item open, others collapsed with a
± toggle) on elevated dark cards. OneHome-specific Q&A, e.g.: How does "pay only for the days you use"
work? · Is the driver membership really free? · Where are locations / when does West Memphis open? ·
How much could I actually save vs my apartment? · Can I store my vehicle and get mail there? Keep
answers tight, money-first. Final copy `TODO(JJ)` to confirm.

### 12. CLOSING CTA — big type over a full-bleed parallax image; **"Join OneHome"** + **"Schedule a Call"**.

### 13. FOOTER — Luxe footer: large dark architectural image behind a minimal footer with Quick Links /
Explore / Newsletter columns (email input + "Subscribe"), socials, legal, contact, copyright.

---

## Dedupe checklist (impeccable QA — nothing renders twice)
- **One calculator only** (in §4 Core Sales) — no standalone Lifestyle Calculator section.
- **One amenities section** (§6 pinned showcase) — no old Amenities tiles, no "Services To Suit You" list.
- **Fleet Services appears once**, merged into §7 Home Hub — no separate Fleet band.
- **Welcome/webinar video once** (§2). **West Memphis once** (§8). **Comparison table once** (§5).
- Membership steps + Space appear once each (§9), condensed — not restated elsewhere.

## Copy / brand guardrails
- OneHome copy verbatim from the realign brief; no star on "OneHome" in body copy; "Join" not "Sign Up";
  "Home Hub" not "home base"; FlexSpace / Outriders Club casing. CTAs: Join OneHome / Join Free /
  Schedule a Call / Connect With Us. Keep the $15k math + comparison + calculator prominent (money-first).
- Phone/email mismatch (playbook 602-858-8000 / jj@ vs site 602.428.2222 / info@): flag, use `lib/site.ts`.
- Photo TODOs stay marked `TODO(JJ)` (Gear Shop white ¾-zip + real logo; Fleet photos) — no non-LHS stock.

## Verify
New order correct; impeccable dedupe passes (no section/calculator/fleet/amenity duplication); §5 left+
table equal height with strikethrough Traditional column; §6 pins + advances 01–08 and stacks clean on
mobile; §9 hover-reveal works (or flagged PENDING url); testimonials carousel; Vimeo plays; carbon↔off-
white rhythm; parallax + scroll-zoom; no overflow at 390/768/1440; reduced-motion falls back.
`npx tsc --noEmit` clean · `npm run build` passes · browser-checked · committed + pushed.
