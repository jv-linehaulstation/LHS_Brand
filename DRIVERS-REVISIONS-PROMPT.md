# ▶ Claude Code — /drivers revisions (consolidated pass)

Branch `redesign-v2`, per `CLAUDE.md`. **Source of truth: `DRIVERS-DESIGN-SYSTEM.md` (read §3b–§3g + §3c
+ §9).** Instructions only — no HTML mockups. Run the **impeccable** skill as a dedupe/QA pass. Apply
**review-animations · emil-design-eng · frontend-design · ui-ux-pro-max · brand-voice · accessibility-review**.

**DO NOT TOUCH:** the **homepage** and the **"Welcome to the Club"** section — both approved as-is.

## Final section order (after this pass)
1. Hero · 2. **Welcome to the Club** (+ video, untouched) · 3. **Join Free register** (free Outriders
membership) · 4. **Here's A New & Better Option** (calculator) · 5. **For a lot less money** (comparison) ·
6. **Nothing To Lose / Everything To Gain** (free-membership steps) · 7. **Amenities** (carousel +
everything-included list) · 8. **Home Hub + Fleet Services** (tiles) · 9. **Network / Map** (+ West Memphis) ·
10. **Space** (3 ways) · 11. **Testimonials** · 12. **FAQ** · 13. **Closing CTA** (buttons only) · 14. **Footer**.

## Changes
1. **"Here's A New & Better Option" (§3g):** stacked single column — **headline + 365‑vs‑100 hook → WIDE
   glass calculator (focal, near content-width) → body copy below.** **Remove** the sub-labels "Run Your
   Own Numbers" and "What OneHome Puts Back In Your Pocket". Body = the playbook's revised Core Sales copy
   ("Housing is expensive … SAVE $15,000 or more per year …", already in `lib/audiences.ts`; don't rewrite).
2. **"For a lot less money" comparison (§3b#3):** make it interactive — rows **reveal on scroll**, the
   **strikethrough on the Traditional column draws in**, **row hover** highlights the OneHome win; left
   prompts + right table **equal height**.
3. **Reorder (§3f):** move **"Nothing To Lose / Everything To Gain"** to **immediately after** the
   comparison section (before Amenities).
4. **Membership + Space hover (§9):** rebuild "Nothing To Lose" (3 steps) and "Space" (3 ways) as a
   **hover-reveal list** (ref: vincentetdussault.com "Plus de 300 concessionnaires réalisés") — hover an
   item → its **large image reveals** (clip/mask wipe + fade + scale 1→1.05) **tracking the cursor**;
   non-hovered items **dim**; active = Fuel‑Orange marker; easing ~`cubic-bezier(.2,.7,.2,1)` ~450–600ms.
   **Touch:** stack item + image (tap to expand). **Reduced-motion:** static, no follow. Condense copy to
   tight one-liners — the image carries it. `TODO(JJ)`: one image per item if not in assets.
5. **Amenities = the approved carousel (§3d):** reuse the **peeking-card Building-Previews carousel**
   design (big center rounded card, peeking neighbor, eyebrow → big title → sub, caption row + `01/N`
   counter + circular arrows) populated with the **8 amenities** (Member's Grill, Sky Deck, Digital Den,
   Fitness Studio, Laundry & More, Gear Shop, Resort Pool & Spa, Camp K9; images: clubDining, skydeck,
   gamerDen1, fitness, laundry, gearShop, waterFeature, clubPatio). Eyebrow "THE OUTRIDERS CLUB", title
   "Absolutely Amazing Amenities". **Remove the standalone Building Previews section** (its slot becomes
   Amenities) **and** the old Spence pinned-showcase / leftover amenities grid → amenities render once.
   Keep this carousel's rounded frame (the earlier "square the images" note is void). `TODO(JJ)`: ≥2400px
   amenity photos. **Below the carousel** add an **"Everything included" 3-column list** (reveal on scroll):
   - Food & Drink: Member's Grill & Bar · Coffee & Juice Bar · Grab-and-Go Market · Snacks & Provisions
   - Entertainment: Digital Den & Gaming · Billiards & Game Tables · Trap & Skeet · Sky Deck & Firepits
   - Amenities: Fitness Studio · Resort Pool & Spa · Sauna & Wellness · Barbershop · Laundry & More · Gear
     Shop · Conference Center · Camp K9
6. **Home Hub + Fleet Services (§3b#5 + §3c):** ONE section in the "We have EVERYTHING you need." design,
   rendered as **image tiles / boxes** — Home Hub: Mail Services / Personal Vehicle / Storage Lockers;
   Fleet: Repairs / Maintenance / Inspections / Truck Wash / **Cross Dock** (+ optional detail: Tire
   Pressure Management, Pre & Post-Trip Inspection, DOT Annual Inspection, Tractor/Trailer Service,
   Routine PM Repairs).
7. **One form only (§3e):** keep the **register/contact form ABOVE**; **remove the second form before the
   footer.** Closing CTA band before the footer = **buttons only** ("Join Free" / "Schedule a Call") that
   scroll to the single form. Footer unchanged.
8. **Join Free register up top (§3c):** a prominent **free Outriders "Join Free"** register near the top
   (after Welcome to the Club), distinct from "Join OneHome". Form collects **Member Type** (Company Driver
   / Owner Operator / Fleet or Carrier / Freight Broker / Private Fleet) + **Truck Count**, plus First/Last
   name, Company, Phone, Email + consent. Add a **"Join Free"** anchor in the nav.
9. **Cleanup (impeccable dedupe):** exactly one calculator, one amenities section, one form; Fleet merged
   once; remove half-merged leftovers in `AudiencePage.tsx`. No section renders twice.

## Keep / guardrails
Dark-luxury skin · brand fonts (no serif) · Fuel Orange accent · all Fluid Glass motion (Lenis, parallax,
scroll-zoom) · `prefers-reduced-motion` safe. Don't regress our wins (calculator, comparison, network map,
Home Hub, FAQ, testimonials). CTAs: Join Free / Join OneHome / Schedule a Call / Connect With Us. Contact
uses `lib/site.ts`.

## Verify
Final order correct; wide calculator with copy below (no "Run Your Own Numbers" / "What OneHome Puts
Back…"); comparison animates + equal height; membership moved up; membership/Space hover-reveal works
(static on touch/reduced-motion); amenities = carousel + everything-included list (no standalone Building
Previews, no duplicate grid); Home Hub + Fleet merged tiles incl. Cross Dock; **exactly one form**; Join
Free register has Member Type + Truck Count; impeccable dedupe passes; no overflow at 390/768/1440.
`npx tsc --noEmit` clean · `npm run build` passes · browser-checked · committed + pushed.

## Open items (JJ to supply — not blockers)
≥2400px amenity photos · one image per membership/Space hover item · Gear Shop white ¾-zip + real logo ·
dedicated Fleet/Home-Hub tile photos · FAQ answers · testimonial video.
