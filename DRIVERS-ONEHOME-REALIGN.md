# ⭐⭐ /drivers — realign to the OneHome Copy Playbook (Revised 3‑18‑26)

**This is the authoritative copy + sequence for the `/drivers` (OneHome) page.** It supersedes the
copy/order in DRIVERS-PAGE-JOIN-CONTENT.md and DRIVERS-QA-FIX.md for the OneHome flow. Source of
truth: **`reference/OneHome_Copy_Playbook-Revised-3-18-26.docx`** — pull the long FULL COPY paragraphs
verbatim from there; the headlines/subheads/blurbs are reproduced below.

Branch `redesign-v2`, per `CLAUDE.md`. Instructions only. Apply **frontend-design · ui-ux-pro-max ·
impeccable · brand-voice · accessibility-review**. End: `npx tsc --noEmit` + `npm run build` +
browser pass (390 / 768 / 1440), commit + push.

## Two decisions from JJ (locked)
- **Keep Fuel Orange.** Realign copy + sequence only. **Do NOT repaint** to the playbook's burgundy
  palette — keep the existing carbon/chrome + `#F07820` design system on /drivers.
- **Augment (both).** The OneHome playbook flow is the page spine (top). Then keep the **Outriders
  Club join-block** (Welcome+video · membership steps · Space) as a **secondary section** below,
  before the final form. Two offers, kept distinct: **OneHome = paid** ("pay only for days you use"),
  **Outriders Club membership = free** ("Join Free").

## Playbook voice + copy rules (enforce everywhere on this page)
- **Lead with money first**, always — connect to *save $15,000+/year*, stop paying for an empty home.
- **"OneHome"** in body/paragraph copy has **NO star** (the One★Home star is logo-only — OK in the
  hero logo lockup, never in sentences).
- Use **"Join"**, never "Sign Up." Use **"Home Hub"**, never "home base / crash pad / bunkhouse."
- Voice: confident, modern, premium, warm, grounded, slightly visionary. Not corporate/cold, not
  salesy, not militaristic. Terms to avoid: home base, crash pad, bunkhouse, RV-park comparisons.
- Present as **"OneHome by LineHaul Station"** — OneHome is a program, never a standalone company.

---

# SECTION SEQUENCE (top → bottom)

### 1. HERO / Opening  *(image, poetic — the ONE place poetic tone is allowed)*
- **Headline:** *I need One★Home at both ends of a long road.*  (star OK here — logo lockup)
- **Subhead (keep the verse):** "Truck doesn't fit in the driveway. / Can't live out of some truck
  stop lot. / What if there was a new way for truckers / to make the most of what they've got?"
- **Blurb:** "A smarter way to live on the road—built exclusively for professional drivers."
- Full copy: playbook §3 (3 short paragraphs). Keep the dark photo overlay for white text.

### 2. CORE SALES BLOCK  *(white — the money engine; lead with money)*
- **Headline:** **HERE'S A NEW & BETTER OPTION** (the Revised headline). Carry the hook as the kicker/
  subhead: *"You're paying for 365 days. You're only using about 100."*
- **Subhead:** "Most drivers are paying for a home they barely live in."
- **Blurb:** "Stop paying for what you don't use."
- **Body = the REVISED COPY** (playbook §4, "REVISED COPY" block): "Housing is expensive – rent/
  mortgage, taxes, insurance, utilities, maintenance – and we pay for it 365 DAYS A YEAR whether
  we're home or not…. UNTIL NOW. OneHome eliminates the financial waste… you ONLY PAY FOR THE DAYS
  YOU USE IT… SAVE $15,000 or more per year…". (No star on OneHome.)
- Optional: render **Jeff's Sales Flow** (Relate → Expose → Contrast → Introduce → Add upside →
  Close) as a quiet 6-step strip if it fits; otherwise omit. Don't pad.

### 3. VALUE STATEMENT + comparison table  *(ink)*
- **Headline:** "For a lot less money, a far superior experience."
- **Subhead (Revised):** **WHAT IS HOME FOR YOU TODAY?** "How often are you there? Where do you park
  your truck?" — with the three prompts: *Renting a Small Basic Apartment? · Renting or Owning a
  Traditional Home? · Random Parking Lots with No Services?*
- **Blurb:** "Upgrade your lifestyle on the road—often while spending less."
- **Comparison table — Traditional Housing vs OneHome** (build as a clean 2-col matrix, chrome rules):
  | Traditional Housing | OneHome |
  |---|---|
  | Pay for 365 days | Pay only for days you use |
  | Use maybe 60–120 days | Start at 60 days, grow anytime |
  | Mortgage + interest | No mortgage, no interest |
  | Full utilities year-round | No utility burden |
  | Maintenance and repairs | Zero maintenance |
  | Can't park your truck | Secure truck parking included |
  | Truck stop when on the road | Resort-style network nationwide |

### 4. AMENITIES  *(the canonical club section — REPLACES the old "Services To Suit You" list AND the
generic Amenities tiles; dedupe against the gallery — fold gallery photos in here)*
- **Section headline (Revised):** "Absolutely Amazing Amenities" (no period).
- **Subhead:** "Everything you need—built for life on the road." · **Blurb:** "Designed to elevate
  every part of your day." · Section full copy: playbook §6 intro.
- **8 amenity cards** (use the **Replacement** subheads; FULL COPY per card from the playbook; one
  photo each — pull from `public/assets/outriders/gallery-*`):
  1. **Member's Grill** *(was Craft Kitchen)* — great food • entertainment • relax
  2. **Sky Deck** *(two words, drop "The")* — outdoor firepits • water features • star gazing
  3. **Digital Den** — gamer's center • billiards • trap & skeet
  4. **Fitness Studio** — cardio • weights • showers • lockers
  5. **Laundry & More** — washers • dryers • daily essentials
  6. **Gear Shop** — logo apparel • accessories • sundries  *(photo TODO(JJ): white ¾-zip + real LHS logo)*
  7. **Resort Pool & Spa** — outdoor pool • hot tubs • sun & fun
  8. **Camp K9** — dog park • relief stations • driver-friendly
- Photo notes for JJ live in the playbook (pool/dog-park backgrounds) — leave `TODO(JJ)` where the
  exact asset isn't in the repo; don't ship non-LHS stock.

### 5. FLEET SERVICES  *(ink — image cards; this is the old "An Ounce of Prevention")*
- **Headline:** "Fleet Services" (keep the ★ flourish lockup if desired). **Subhead (Replacement):**
  repairs • maintenance • inspections • truck wash.
- **Body = the REVISED COPY** (playbook 6.8 Fleet Services "REVISED COPY"): "It's no secret that
  preventive maintenance is critically important for truckers… one-stop shop solution with super
  convenient access while you're relaxing at your new home. It doesn't get any better than this!"
- Render as **image cards** per service (Repairs · Maintenance · Inspections · Truck Wash · Fair
  Labor Rates). `TODO(JJ): supply Fleet Services photos` where assets are missing — icons/placeholder
  until then.

### 6. NETWORK / MAP  *(image/blueprint — folds into the existing One Network connector)*
- **Headline:** "Everywhere the Road Takes You" · **Subhead:** "A growing nationwide network of
  LineHaul Station locations." · **Blurb:** "Home isn't one place. It's a system."
- **Body = Revised Copy** (playbook §7). Then list the **planning markets** (small caps / chips):
  San Antonio, El Paso, Houston, Dallas, Mobile, Jackson, Memphis, Knoxville, Charlotte, Atlanta,
  Wilmington, Richmond, Carlisle, Cleveland, Detroit, Chicago, Kansas City, Omaha, Oklahoma City,
  Albuquerque, Denver, Salt Lake City, Phoenix, Los Angeles, Kingman, Las Vegas, San Francisco,
  Portland, Seattle, Butte, Dickinson, Minneapolis, Indianapolis, Philadelphia, Savannah, Tampa,
  Nashville, St. Louis.
- Keep the **West Memphis** "open now / first Home Hub" proof here or adjacent (don't duplicate it).

### 7. HOME HUB / SERVICES  *(white)*
- **Headline:** "We have EVERYTHING you need." · **Subhead (Replacement):** Mail Services • Personal
  Vehicle • Storage Lockers. · **Blurb:** "Your Home Hub anchors your life on the road."
- **Body:** playbook §8 FULL COPY (Home Hub = mailbox, secure personal-vehicle parking, storage; the
  whole network is your home). Use **"Home Hub"** throughout.

### 8. LIFESTYLE CALCULATOR  *(ink — the existing OneHome calculator)*
- **Headline:** "The math might surprise you." · **Subhead:** "You could save $15,000–$20,000 per year."
- **Blurb:** "See how your current housing costs compare to a OneHome membership."
- Keep the interactive **OneHome calculator** here (left), playbook §9 copy as the lead-in (right):
  the $2,000–$2,500/mo → save ~$1,200/mo on a 60-day membership framing. *(This replaces the old
  "numbers beside the calculator" — the empty-home story now lives in §2 Core Sales Block, so don't
  repeat it here.)*

---

# SECONDARY — Outriders Club (free membership) block  *(kept per "augment: both")*
Place **after the calculator, before the final form.** This is the FREE club membership — distinct
from paid OneHome. Apply the DRIVERS-QA-FIX treatment, condensed:
- **Welcome To The Club** — Outriders story (verbatim) **+ the Vimeo webinar video merged in**
  (`https://player.vimeo.com/video/1055748426?title=0&byline=0&portrait=0`, lazy 16:9, chrome frame),
  **no Jeff portrait** — credit **"Jeffrey J. Swenson — Founder & CEO"** under the video.
- **Nothing To Lose / Everything To Gain** — 3-step free-membership **process** (01 Free Membership →
  02 Create Profile → 03 Get Others Excited!). Step 03 = one-line teaser only.
- **Space** — Earn → Request → Purchase as a creative process (don't restate it in step 03).
- CTA here is **"Join Free"** (Code of Conduct). Keep "The LineHaul List", "anyone with a steering
  wheel in their hand" → FlexSpace, EARN FREE / PURCHASE / REQUEST emphasis.

# 9. JOIN ONEHOME — interest form  *(gradient — last)*
- **Headline:** "Join OneHome" · **Subhead:** "This is a limited early-access program." · **Blurb:**
  "Join the interest list to learn more." · Body: playbook §10 (pre-launch, no contracts/payments).
- **CTA button text: "Join OneHome"** — never "Sign Up."
- **Contact / phone — FLAG:** the playbook's follow-up email lists Membership Director **J.J. Swenson,
  602-858-8000, jj@linehaulstation.com**, but the site footer uses **602.428.2222 / info@**. Don't
  guess — surface the mismatch for JJ and use the site's canonical `lib/site.ts` value until resolved.

---

## Dedupe + remove (prime directive: nothing renders twice)
- **Remove** the old "Services To Suit You" list and the generic Amenities tiles → replaced by §4
  Amenities. Fold the Tour gallery photos into §4; no standalone duplicate club section.
- The **empty-home cost** copy appears **once** (§2 Core Sales Block) — not also beside the calculator.
- **West Memphis** proof appears once (with §6 Network). **Webinar video** appears once (Outriders block).
- "How It Works" / relay content: drop on /drivers if it doesn't serve the OneHome story — this page
  is OneHome, not relay.

## Verify
- Page follows the playbook order: Hero → Core Sales → Value+table → Amenities(8) → Fleet → Network/
  Map → Home Hub → Calculator → [Outriders free-membership block] → Join OneHome form.
- "OneHome" has no star in body copy; CTAs are "Join OneHome" / "Join Free" (never "Sign Up");
  "Home Hub" used throughout; Fuel Orange retained.
- No duplicated section; comparison table + markets list render; Vimeo plays; one `<h1>`, clean `<h2>`s;
  no overflow at 390/768/1440.
- `npx tsc --noEmit` clean · `npm run build` passes · browser-checked · committed + pushed.
