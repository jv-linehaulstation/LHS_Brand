# ⭐ Drivers page — restructure + de-duplicate (JJ revision)

Branch `redesign-v2`, per `CLAUDE.md`. Instructions only. Apply the design/brand skills you have
(**frontend-design · ui-ux-pro-max · impeccable · brand-voice · accessibility-review**). Edits to the
existing `/drivers` build (`components/AudiencePage.tsx` `outriders`/drivers blocks + `lib/audiences.ts`
drivers entry). End with tsc + build + browser pass (390 / 768 / 1440), commit + push.

**Prime directive: NO duplicated content.** The Outriders Club must be represented by ONE visual
section, the membership steps by ONE process, the webinar video by ONE section. Audit the whole
drivers page and make sure nothing renders twice.

---

## Target section order (new join content on top, deduped)

**TOP — Outriders / join cluster**
1. **HERO** — keep as is (OneHome punch).
2. **Welcome To The Club** — Outriders story **+ the Vimeo video merged in** (see §1). This section
   absorbs the old "We're Ready To Roll" webinar band.
3. **Nothing To Lose / Everything To Gain** — 3-step membership as a **process / stepper** (see §2).
4. **Tour The Outriders Club** — the gallery, now the SINGLE club-amenities visual (see §3).
5. **An Ounce Of Prevention** — LH Fleet Services as **image cards** (see §4).
6. **Space** — redesigned as a **creative process** (Earn → Request → Purchase) (see §5).

**BELOW — OneHome value + proof**
7. **OneHome calculator band** — calculator left, **empty-home cost story right** (replaces the stat
   numbers; absorbs the Problem section) (see §6).
8. **How It Works** (relay) — *verify it's driver-relevant; if it overlaps "One Network," keep only
   one. Flag for JJ if unsure.*
9. **Road divider** → **West Memphis** proof → **One Network** lane connector.
10. **Let's Talk** — contact + lead form (stays last).

**DELETE these sections (dupes):** generic **AMENITIES** tiles · **Services To Suit You** list ·
standalone **Problem** · standalone **We're Ready To Roll**. Their content is absorbed or replaced below.

---

## §1 — Welcome To The Club + video (merge)
- Combine the Outriders story copy and the **webinar Vimeo** into one section
  (`https://player.vimeo.com/video/1055748426?title=0&byline=0&portrait=0`, lazy, 16:9, chrome frame,
  fullscreen+PiP, no autoplay-sound).
- **Remove the Jeff Swenson portrait image.** Put his name as a credit line **below the video**:
  **"Jeffrey J. Swenson — Founder & CEO"** (with the LinkedIn + Facebook icons if kept).
- Fold the webinar invite line in as the video's lead-in (e.g. "Every new member gets a seat at our
  Monthly Webinars with Jeff Swenson…"). Keep the story paragraphs verbatim.
- Net result: story → invite line → video → Jeff credit. One section. No separate webinar band.

## §2 — Nothing To Lose / Everything To Gain → step-by-step process
Redesign the 3-step free membership as a clear **process / stepper** (numbered 01 → 02 → 03 with
connectors, not three static cards): **01 Free Driver Membership → 02 Create Your Profile → 03 Get
Others Excited!** Keep the verbatim blurbs, but trim step 03 to a one-line teaser so it doesn't
restate the three Space ways (those live in §5). Make the progression read as a path.

## §3 — Outriders Club: ONE visual section only
- **Delete** the generic **AMENITIES** tiles AND the **Services To Suit You** list — both duplicate
  the club tour.
- Keep **Tour The Outriders Club** (the gallery) as the single club-amenities representation; title
  it so it reads as the club's services/amenities (e.g. "Tour The Outriders Club" or "Services To
  Suit You"). Pull the best club photos in; this section carries the amenities visually.

## §4 — An Ounce Of Prevention → image cards
Rebuild LH Fleet Services as an **image card grid** — one image per service:
On-Site Maintenance · Inspection · Preventive Maintenance · Repair · State-Of-The-Art Truck Wash ·
Fair Labor Rates. Keep the verbatim item names + notes. **Assets:** use real shop/maintenance/wash
photos if present in `public/assets`; if not available, use on-brand iconography or a clean
placeholder per card and leave a **`TODO(JJ): supply Fleet Services photos`** — do not ship stock that
isn't ours.

## §5 — Space → creative process
Redesign the three ways to get Space (**Earn → Request → Purchase**) as a **process / how-it-works**
flow (numbered path or image-led cards with the fuel/steel/gold coin tones), not three plain text
cards. Keep the verbatim blurbs ("Lifetime of FREE Space…", "The LineHaul List", "anyone with a
steering wheel in their hand" → FlexSpace). Make it visually distinct from the §2 membership stepper
so the two "process" sections don't look identical (different layout/treatment).

## §6 — Calculator band: replace numbers with the empty-home story
In the OneHome calculator band, **replace the stat-number column (right side) with the "empty home"
cost narrative** — the Problem content ("You're home ~60 days a year. You're paying for 365." + the
$15k savings framing). Layout: **calculator left · empty-home cost story right.** Then **delete the
standalone Problem section** so that copy appears only once, beside the calculator.

---

## Guardrails
- Verbatim copy stays exact; only brand-casing normalizations (Outriders Club, FlexSpace). Keep
  "Knights of the Highway", "lead, guide, and protect", "The LineHaul List", "anyone with a steering
  wheel in their hand", the EARN FREE / PURCHASE / REQUEST emphasis.
- CTAs only "Join Free" / "Connect With Us" / "Schedule a Call". Accent `#F07820` = kickers/coins/
  rules only. Chrome/steel frames + star flourishes consistent with the homepage. White-on-photo keeps
  the dark overlay. Bulletproof reveals (headings always show).

## Verify (the dedupe check)
- The Outriders Club appears as **one** visual section (Tour) — no AMENITIES tiles, no Services list.
- The membership steps appear **once** (§2); the three Space ways appear **once** (§5); step 03 does
  not restate them.
- The webinar **video appears once**, inside Welcome To The Club; no standalone webinar band.
- The empty-home cost copy appears **once**, beside the calculator; no standalone Problem section.
- "How It Works" and "One Network" don't say the same thing — keep one if they overlap.
- Reading order: hero → welcome+video → membership process → club tour → fleet (images) → space
  (process) → calculator+empty-home → proof → form. New join content leads.
- One `<h1>`, clean `<h2>` order; no overflow at 390/768/1440; Vimeo plays; accent correct.
- `npx tsc --noEmit` clean · `npm run build` passes · browser-checked · committed + pushed.
