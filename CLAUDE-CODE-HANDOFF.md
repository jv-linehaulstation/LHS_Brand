# ▶ CLAUDE CODE — START HERE (Drivers page refresh)

**Branch:** `redesign-v2`. Work autonomously per `CLAUDE.md`. Instructions only — no HTML mockups.
End every task with `npx tsc --noEmit` + `npm run build` + a browser pass, then commit + push.

## What's already done (don't redo)
The backlog from the last session is committed: homepage R8 + stats ribbon, inner-page parity
(Section full-width, B/W rhythm, Find-Your-Lane How-It-Works), Brand v2 chrome/steel, Brokers /
Shippers / Government deck copy, and a first pass of the Drivers join-content (`ceb6208`).

## ⭐ The one task: refresh the Drivers page from the UPDATED brief
The Drivers page (`components/AudiencePage.tsx` `outriders` block + `lib/audiences.ts`) was built
from an **earlier** version of `DRIVERS-PAGE-JOIN-CONTENT.md`. That brief has since changed in **three**
ways. Apply only these deltas — re-read **`DRIVERS-PAGE-JOIN-CONTENT.md`** as the source of truth:

### 1. Wire in the real Vimeo video (was a PENDING placeholder)
In the **"We're Ready To Roll"** webinar band, add a responsive **16:9 iframe** after the body copy:

```
https://player.vimeo.com/video/1055748426?title=0&byline=0&portrait=0
```
- `loading="lazy"`, `allow="fullscreen; picture-in-picture"`, no autoplay-with-sound, reduced-motion safe.
- Wrap it in our **chrome/steel frame** (ChromeFrame), matching the homepage media treatment.
- **Poster:** `LHS-Webinar2.png` is NOT in the repo — Vimeo serves its own thumbnail, so a poster is
  optional. If you want the branded still, that's a TODO for JJ; don't block on it.

### 2. Swap paraphrased copy → EXACT verbatim copy
Replace the current `outriders` strings in `lib/audiences.ts` with the **word-for-word** copy in the
brief (sections 1–3 + 6). Notable swaps from what's there now:
- Webinar `headline` is currently "Monthly Webinars With Jeff Swenson." → make it **"WE'RE READY TO ROLL!"**
  with the exact body ("Every new member of LineHaul Station will have the opportunity to join the
  Monthly Webinars…network launch!").
- Outriders story, the 3 steps (**STEP #1 / #2 / #3**), and EARN / REQUEST / PURCHASE cards → exact.
- **Only** brand-casing normalizations allowed: "Outrider's Club" → **Outriders Club**, "Flexible
  Space" → **FlexSpace**. Keep "Knights of the Highway", "lead, guide, and protect", "The LineHaul
  List", "anyone with a steering wheel in their hand", and the EARN FREE / PURCHASE / REQUEST emphasis.

### 3. Apply the layout-beat headlines
Use the brief's **"Layout beat"** section so /drivers mirrors the live page order: Welcome to the
Club → Jeff story lockup → **NOTHING TO LOSE / EVERYTHING TO GAIN** → ★ SERVICES TO SUIT YOU ★ →
★ AN OUNCE OF PREVENTION ★ → **SPACE** badge → **WE'RE READY TO ROLL!**. Don't invent headlines —
restyle the live ones (our type scale, accent `#F07820` kickers, reveals, chrome star flourishes).

## Verify
- Vimeo player renders + plays; correct aspect ratio at mobile/tablet/desktop; no overflow.
- Copy matches the brief verbatim (incl. the two casing normalizations); CTAs only "Join Free" /
  "Connect With Us" / "Schedule a Call".
- Reconcile contact (602.428.2222 · info@LineHaulStation.com) against `lib/site.ts`; flag any mismatch.
- `npx tsc --noEmit` clean · `npm run build` passes · browser-checked · committed + pushed.

---
### Paste into Claude Code
> Read `CLAUDE-CODE-HANDOFF.md` then `DRIVERS-PAGE-JOIN-CONTENT.md`. Apply the three Drivers-page
> deltas (real Vimeo embed `1055748426`, exact verbatim copy, layout-beat headlines). tsc + build +
> browser pass, then commit + push on `redesign-v2`. Instructions only — don't add HTML files.
