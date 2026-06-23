# JOIN PAGE — Build Brief (Outriders / Drivers "Join Free")

Build a branded `/join` page for the LineHaul Station site and wire it into the nav and
the Drivers "Join Free" CTA. Work autonomously per CLAUDE.md (no yes/no questions; make
on-brand choices). Commit to `redesign-v2` and push when done. Finish with
`npx tsc --noEmit` and `npm run build`.

The source is the live GoHighLevel (LeadConnector) funnel at
`https://membership.linehaulstation.com/join`. We are recreating it on-brand and keeping
leads flowing to GoHighLevel.

---

## Step 1 — Download the media into the repo

Create `public/assets/outriders/` and download these files with `curl` (or `wget`).
Rename to the readable names shown. After download, optimize images: resize to ~1600px
wide max, keep them web-friendly (webp/jpg), and **check the mp4 file sizes** — if either
video is heavy (say >8–10 MB), compress it or keep it as a remote `<video>` source rather
than committing a huge binary.

**Logos**
- `header-logo.png` → https://assets.cdn.filesafe.space/vFbdhIphhRpcrSlf4VJF/media/69611c712b4f0f4f03c76906.png
- `footer-logo.png` → https://assets.cdn.filesafe.space/vFbdhIphhRpcrSlf4VJF/media/6955801aedb8a29a8d0e1cff.png

**Section art**
- `form-art.png` → https://assets.cdn.filesafe.space/vFbdhIphhRpcrSlf4VJF/media/695830e1397a315080ae1fa5.png
- `section-art.png` → https://assets.cdn.filesafe.space/vFbdhIphhRpcrSlf4VJF/media/695833924aa6694e58e85fb7.png

**Videos**
- `hero.mp4` → https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/69554d56cb5b716ba310c3dd.mp4
- `story.mp4` → https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/69580319748303b6b9a8c33e.mp4

**Gallery (8 photos)** — base `https://storage.googleapis.com/msgsndr/vFbdhIphhRpcrSlf4VJF/media/` + `<ID>.jpg`,
save as `gallery-1.jpg` … `gallery-8.jpg`:
- `69583d82748303c352b0d54a`
- `6939ade2f6cae936a0e1e49f`
- `6939c84c751b340e5543cc01`
- `69583501edb8a2b9584d71d1`
- `695835cc035c3a5f40592c0c`
- `695835167483030a6cafa7d9`
- `69583d637483036d6db0d1ba`
- `69583c8805b511d5afa7764a`

> Rights note: these live on LineHaul's own GoHighLevel storage, so we can use them. If any
> turn out to be licensed stock, drop those and use our own building/amenity renders instead.

---

## Step 2 — Build the `/join` page

Create `app/join/page.tsx` using the existing design system (Nav, Footer, Section with
alternating variants, Reveal, ParallaxImage, CountUp, SectionHead/DataTag from Bits).
Drivers accent = Fuel Orange `#F07820`. Keep every brand rule from CLAUDE.md (casing:
LineHaul Station / FlexSpace / OneHome / Outriders Club; Hubs/Terminals/Service Centers,
never "nodes"; CTAs only "Connect With Us" / "Schedule a Call" / "Join Free").

Suggested sections (match the funnel's intent, redesigned bold + on-brand):
1. **Hero** — full-bleed `hero.mp4` background (muted, autoplay, loop, playsInline, poster
   fallback), dark overlay for legibility, big headline (the Outriders / "Join Free" hook),
   subhead, and a primary "Join Free" button that scrolls to the form.
2. **Why join / story** — `story.mp4` or `section-art.png`, short value copy (quality of
   life, home more often, cost savings, the Outriders Club).
3. **Gallery** — responsive grid of `gallery-1..8.jpg` with the existing lightbox/hover
   treatment, captioned to amenities/terminals.
4. **The form** (see Step 3) paired with `form-art.png`.
5. **FAQ** — accordion using the verbatim copy below.
6. **Contact band + Footer** (reuse `<Contact>` and `<Footer>`).

---

## Step 3 — The form (keep leads in GoHighLevel)

**Recommended: embed the live GHL form** so submissions keep flowing to GoHighLevel with no
backend work. Embed the funnel form via responsive iframe:
`https://membership.linehaulstation.com/join` (or the form's direct embed URL if the iframe
shows the whole funnel — inspect and use the `/widget/form/...` embed src if available).
Wrap it so it's responsive (no fixed height jump) and sits inside our branded section
chrome with `form-art.png` alongside.

If a clean native form is preferred later, these are the fields (so a custom build posts the
same data): First Name*, Last Name, Company, Phone*, Email*, Member Type* (Company Driver /
Owner Operator / For-Hire Carrier / Freight Broker / Private Fleet), Truck Count,
Trailer Count, SMS consent checkbox, terms checkbox. Submit label: **"Join Free."**
Contact phone on the funnel: **(602) 898-8000**.

---

## Step 4 — Wire it in

- Add **Join** (or "Join Free") to the main `Nav` and to the footer links.
- Point the Drivers page "Join Free" CTA at `/join`.
- Make sure `/join` uses the same Loader, alternating section backgrounds, and
  reduced-motion-safe motion as the rest of the site.

---

## Done checklist
- [ ] Media downloaded + optimized into `public/assets/outriders/`
- [ ] `app/join/page.tsx` built with all sections
- [ ] GHL form embedded responsively (leads still reach GoHighLevel)
- [ ] FAQ accordion with verbatim copy
- [ ] Nav + footer + Drivers CTA link to `/join`
- [ ] `npx tsc --noEmit` clean, `npm run build` passes
- [ ] Committed + pushed to `redesign-v2`

---

## FAQ — verbatim copy
> NOTE TO BUILDER: paste the exact Q&A text from the live funnel here. Pull it from
> `https://membership.linehaulstation.com/join` (FAQ/accordion section) and reproduce it
> word-for-word. Do not paraphrase. If a question references "nodes," correct it to
> Hubs/Terminals/Service Centers per brand rules.
