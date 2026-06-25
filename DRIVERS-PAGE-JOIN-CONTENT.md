# Drivers page — incorporate the live "Join Drivers" content ⭐

Bring everything from `linehaulstation.com/join-drivers` into our **`/drivers`** page, rebuilt in
our design system (full-width, alternating B/W, drivers accent `#F07820`, reveals, chrome/coin
treatments). Brand voice + rules (Outriders Club / OneHome / FlexSpace / LineHaul Station casing;
Hubs/Terminals/Service Centers; CTAs only "Connect With Us" / "Schedule a Call" / "Join Free").
Put copy into `lib/audiences.ts` (drivers) + new sections in `AudiencePage` (gated to drivers) or a
drivers-specific block. tsc + build + browser pass; commit + push.

> Two menus on the live page are **images**, not text: "Outriders Services Menu"
> (`Outriders-Services-Menu.png`) and the "LH Fleet Services" list (`Fleet-Services-List.png`).
> Recreate them as styled on-brand lists/cards. Source the line-items from `lib/audiences.ts`
> (amenities tiles + carrier features already list the Outriders Club amenities and LH Fleet
> Services) and the decks. If exact items are missing, leave a clearly-marked TODO for JJ.

## Layout beat — exact on-page headlines, in order (mirror the live page)
Use these as the section banners so /drivers tracks the live layout beat-for-beat. Set each as the
section `<h2>`/eyebrow in our type scale + bulletproof reveal; accent `#F07820` drives the kickers.

1. **Hero band:** Outriders coin badge + script headline **"Welcome to the Club"** (over the
   membership/registration block). Keep our cowboy/hero treatment with the dark overlay.
2. **Outriders story band:** lead line **"Trucking is a great story of entrepreneurship and
   perseverance."** (set the two italicized words as the emphasis), Jeff Swenson portrait + the
   LineHaul mark / **Jeffrey J. Swenson — Founder & CEO** signature lockup with LinkedIn + Facebook.
3. **Membership band headline:** **"NOTHING TO LOSE / EVERYTHING TO GAIN"** — two-line display lockup
   ("EVERYTHING" in accent), sitting above the 3 step cards.
4. **Services band:** ★ **"SERVICES TO SUIT YOU"** ★ (white display over photo, star flourishes),
   with the Outriders coin/crest above it.
5. **Fleet band:** LH Fleet Services mark + ★ **"AN OUNCE OF PREVENTION"** ★ over the Fleet
   Services list.
6. **Space band:** the **"SPACE"** pin/badge headline above the EARN / REQUEST / PURCHASE cards.
7. **Webinar band:** **"WE'RE READY TO ROLL!"** display headline → webinar paragraph → Vimeo player
   (poster `LHS-Webinar2.png`) → "HELLO AMERICA'S TRUCK DRIVERS" laptop visual treatment.

Keep the star/flourish dividers (★ ★ ★) as on the live page where they frame headlines, rendered in
our chrome/steel style. Don't invent new headlines — these are the live ones; just restyle.

## Sections to add to /drivers (verbatim copy — keep it, just restyle)

> **Verbatim copy below is exact from the live page** — use it word-for-word. The ONLY changes
> allowed are brand-casing normalizations per our rules: **"Outrider's Club" → Outriders Club**,
> **"Flexible Space" → FlexSpace**. Keep "Knights of the Highway", "lead, guide, and protect",
> "The LineHaul List", "anyone with a steering wheel in their hand", and the EARN/PURCHASE/REQUEST
> emphasis exactly as written.

### 1. Welcome to the Club — the Outriders story
> Trucking is a great story of entrepreneurship and perseverance.
>
> There is a long legacy of immense pride by truckers that wanted to be the best version of
> themselves while serving the needs of America with great dignity. LineHaul Station celebrates
> their independence and success by embracing the very essence of what made trucking appealing to
> all "Knights of the Highway".
>
> That's why we've created the Outriders Club, a place for great drivers to relax, unwind, reward
> themselves and rejuvenate – all in the interest of better health and happiness. The exclusive
> driver's club is representative of our commitment to reinvigorate the spirit of the American truck
> driver as hard-working patriots that deserve our support and respect.
>
> The name "Outriders" is synonymous with a mission to help **"lead, guide, and protect"** the
> people we work with and the companies that depend on us each and every day.

### 2. Nothing To Lose — Free Membership in 3 steps
- **STEP #1: FREE DRIVER MEMBERSHIP.** The Driver Membership at LineHaul Station is always **100%
  Free** to all drivers, you simply need to agree to the **Code of Conduct** (link `/code`) and
  you'll be cleared to use any Hub across the network.
- **STEP #2: CREATE YOUR PROFILE.** The first step is to take advantage of your Driver Profile and
  start to unlock the many features that come with your free membership. We'll give you special
  access to career-changing information.
- **STEP #3: GET OTHERS EXCITED!** We have three ways that drivers can gain access to Space. Drivers
  can **EARN FREE** Space with our referral program, **PURCHASE** Space directly, or **REQUEST**
  passes from your carrier or broker.

### 3. Three Ways To Get Space (detail cards)
- **EARN YOUR SPACE.** We are offering Drivers a fantastic way to earn a **Lifetime of FREE Space**
  simply by sponsoring the membership of Ten great drivers, who then sponsor Ten drivers of their
  own. (conditions apply)
- **REQUEST YOUR SPACE.** We give you all the tools you need to either get your current carrier to
  support you with space, or access **'The LineHaul List'** to find a carrier, fleet, or brokerage
  looking for a driver like you!
- **PURCHASE YOUR SPACE.** We're offering special pricing to **'anyone with a steering wheel in
  their hand'**! Just contact your Membership Director and we can guide you in purchasing
  **FlexSpace**.

### 4. Services To Suit You — Outriders Services Menu
Recreate the "Services to Suit You" menu as a styled list/grid (restaurant, fitness, showers,
gaming, sky deck, barbershop, gear shop, laundry, etc. — pull from the drivers amenities in
`lib/audiences.ts`). Source image: `Outriders-Services-Menu.png`.

### 5. An Ounce Of Prevention — LH Fleet Services
Recreate the "LH Fleet Services" list (on-site maintenance, inspection, preventive maintenance,
repair, state-of-the-art truck wash, fair labor rates). Source image: `Fleet-Services-List.png`.

### 6. We're Ready To Roll — Monthly Webinars + Vimeo video
> Every new member of LineHaul Station will have the opportunity to join the **Monthly Webinars**
> that will be quick meetings with Founder & CEO **Jeff Swenson** about the latest news, and what
> drivers can do to get the most out of their **FREE MEMBERSHIP** as we get close to the network
> launch!

**Vimeo video:** embed the page's Vimeo video here as a **responsive 16:9 iframe**, lazy-loaded
(`loading="lazy"`), with `LHS-Webinar2.png` as the poster/placeholder until played. Wrap it in our
chrome/steel frame. **Vimeo ID: `1055748426`** (source: `https://vimeo.com/1055748426`). Use the
standard player embed **`https://player.vimeo.com/video/1055748426?title=0&byline=0&portrait=0`**
(allow `fullscreen; picture-in-picture`). Keep it reduced-motion friendly (no autoplay with sound).

### 7. Contact
Phone **602.428.2222** · **info@LineHaulStation.com** · "Change is coming to logistics."
(Reconcile with `lib/site.ts` — use the site's canonical phone/email if they differ; flag the
mismatch for JJ rather than guessing.)

## Placement
Fit these into the existing /drivers flow without duplicating: the **Outriders story** pairs with
the amenities/Outriders Club section; the **3-step membership + three ways to get Space** become a
new "Join Free" band; **Services / Fleet Services** extend the capabilities; **Webinars** sits near
the lead form / Let's Talk. Keep the OneHome calculator. Lead CTAs to **Join Free** (`/join`).

## Done checklist
- [ ] Outriders story · 3-step membership · 3 ways to get Space · Services menu · Fleet Services · Webinars · contact
- [ ] Restyled in our system (B/W, accent, reveals, coins); image-menus recreated as styled lists
- [ ] Brand voice/rules; site.ts phone/email reconciled (flag mismatch)
- [ ] tsc clean · build passes · browser-checked · committed + pushed
