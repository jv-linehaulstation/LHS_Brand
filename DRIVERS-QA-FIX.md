# ⭐ Drivers page — QA fix: de-duplicate + put the new join content ON TOP

Branch `redesign-v2`, per `CLAUDE.md`. Instructions only. Apply the design/brand skills you have
(**frontend-design · ui-ux-pro-max · impeccable · brand-voice · accessibility-review**) as you go.
This is an edit to the existing `/drivers` build (`components/AudiencePage.tsx` `outriders` block +
`lib/audiences.ts` drivers entry). tsc + build + browser pass (390 / 768 / 1440), commit + push.

## QA findings (what's wrong now)
1. **Duplicate amenities.** Two sections list the Outriders Club amenities:
   - the generic **AMENITIES** tiles (`a.amenities`, AudiencePage ~L293), and
   - **★ Services To Suit You ★** (`a.outriders.services`, ~L411).
   They're the same content twice. **Services To Suit You is the canonical (new) version — remove
   the standalone AMENITIES section for drivers.**
2. **New content is scattered + buried.** The join-drivers cluster (Welcome story · 3-step
   membership · Services · Fleet · Space · Webinar) is interleaved with the older OneHome/template
   sections, and **"We're Ready To Roll!" (webinar + Vimeo) sits at the very bottom** (after the
   gallery, West Memphis, and One Network) — split off from the rest of the new content.
3. **Minor repetition.** 3-step "Get Others Excited!" pre-lists EARN/PURCHASE/REQUEST, which the
   **Space** section then details in full. Keep step 3 as a one-line teaser; don't repeat all three
   blurbs there (let the Space cards own the detail).

## Fix #1 — remove the duplicate
Drop the standalone **AMENITIES** section render for drivers (the `a.amenities ? … : …` tiles block).
Keep **★ Services To Suit You ★** as the single club-amenities section. If any amenity tile photos
are worth keeping, fold 2–3 of them into the **Take The Tour** gallery; otherwise leave them out.
(You can keep the `amenities` data in `lib/audiences.ts` unused, or delete it — your call — but it
must not render a second amenities section.)

## Fix #2 — reorder so the NEW join content leads
New section order for `/drivers` (new join cluster on top, OneHome value + proof below):

**TOP — Outriders / join-drivers cluster (contiguous):**
1. **HERO** (keep as is). *Optional, flag-only:* the live page hero says "Welcome to the Club" — if
   JJ wants that headline instead of the OneHome punch, that's a one-line swap; leave as-is for now.
2. **Welcome To The Club** — Outriders story + Jeff Swenson lockup (`a.outriders.story`)
3. **Nothing To Lose / Everything To Gain** — 3-step free membership (`a.outriders.join.steps`)
4. **★ Services To Suit You ★** — the single club-amenities section (`a.outriders.services`)
5. **★ An Ounce Of Prevention ★** — LH Fleet Services (`a.outriders.fleet`)
6. **Space** — three ways to get Space (`a.outriders.join.ways`)
7. **We're Ready To Roll!** — monthly webinars + **Vimeo** (`a.outriders.webinar`) ← now sits with
   the cluster, not at the page bottom
8. **Take The Tour** — Outriders Club gallery (visual tour; images only)

**BELOW — OneHome value + proof:**
9. **OneHome calculator + counters** (the dark calc/stat band — move it down here; it's no longer
   "post-hero")
10. **Problem** — the empty-home cost (`a.problem`)
11. **How It Works** (relay steps) — *verify it reads right for a driver audience; if it's really a
    relay/ops story, keep it brief or drop it on drivers.*
12. **Road divider** (`a.road`)
13. **West Memphis** proof (`a.memphis`)
14. **One Network** lane connector
15. **Let's Talk** — contact + lead form (`a.form`) — stays last

Keep the **hero → fade → dark numbers** beat: a quiet stats strip can stay directly under the hero
if it reads well, but the calculator block moves down to the OneHome cluster (#9). The point is the
join content leads.

## Fix #3 — de-dupe the step-3 / Space overlap
Trim `a.outriders.join.steps[2].blurb` ("Get Others Excited!") to a single teaser line (e.g. "Three
ways to get Space — earn it, request it, or purchase it.") and let the **Space** cards carry the
full EARN / REQUEST / PURCHASE detail. Don't state all three blurbs in both places.

## Guardrails (unchanged)
- Verbatim copy stays exact; only brand-casing normalizations (Outriders Club, FlexSpace). Keep
  "Knights of the Highway", "lead, guide, and protect", "The LineHaul List", "anyone with a steering
  wheel in their hand", the EARN FREE / PURCHASE / REQUEST emphasis.
- CTAs only "Join Free" / "Connect With Us" / "Schedule a Call". Accent `#F07820` for kickers/coins/
  rules only. Chrome/steel frames + star flourishes consistent with the homepage.
- White text over photos keeps the dark overlay; bulletproof reveals (headings always show).

## Verify
- **No section appears twice** — one amenities/services section only; webinar appears once, in the
  top cluster; no repeated counter figures across stat blocks.
- New join content is the first thing after the hero; reading order flows
  story → join → services → fleet → space → webinar → tour → (OneHome value) → form.
- Heading hierarchy is clean (one `<h1>` hero, `<h2>` sections), no horizontal overflow at 390/768/
  1440, Vimeo plays, accent correct.
- `npx tsc --noEmit` clean · `npm run build` passes · browser-checked · committed + pushed.
