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

## Sections to add to /drivers (verbatim copy — keep it, just restyle)

### 1. Welcome to the Club — the Outriders story
> Trucking is a great story of entrepreneurship and perseverance.
>
> There is a long legacy of immense pride by truckers that wanted to be the best version of
> themselves while serving the needs of America with great dignity. LineHaul Station celebrates
> their independence and success by embracing the very essence of what made trucking appealing to
> all "Knights of the Highway."
>
> That's why we've created the Outriders Club — a place for great drivers to relax, unwind, reward
> themselves, and rejuvenate, all in the interest of better health and happiness. The exclusive
> drivers club represents our commitment to reinvigorate the spirit of the American truck driver as
> hard-working patriots who deserve our support and respect.
>
> The name "Outriders" is synonymous with a mission to **lead, guide, and protect** the people we
> work with and the companies that depend on us each and every day.

### 2. Nothing To Lose — Free Membership in 3 steps
- **Step 1 — Free Driver Membership.** The Driver Membership at LineHaul Station is always **100%
  free** to all drivers — you simply agree to the **Code of Conduct** and you're cleared to use any
  Hub across the network.
- **Step 2 — Create Your Profile.** Take advantage of your Driver Profile and start to unlock the
  many features that come with your free membership. We'll give you special access to
  career-changing information.
- **Step 3 — Get Others Excited.** Three ways drivers can gain access to Space: **earn** free Space
  with our referral program, **purchase** Space directly, or **request** passes from your carrier
  or broker.

### 3. Three Ways To Get Space (detail cards)
- **Earn Your Space.** Earn a **lifetime of free Space** simply by sponsoring the membership of ten
  great drivers, who then each sponsor ten drivers of their own. (Conditions apply.)
- **Request Your Space.** We give you the tools to get your current carrier to support you with
  Space, or to access **"The LineHaul List"** to find a carrier, fleet, or brokerage looking for a
  driver like you.
- **Purchase Your Space.** Special pricing for "anyone with a steering wheel in their hand." Contact
  your Membership Director and we'll guide you through purchasing FlexSpace.

### 4. Services To Suit You — Outriders Services Menu
Recreate the "Services to Suit You" menu as a styled list/grid (restaurant, fitness, showers,
gaming, sky deck, barbershop, gear shop, laundry, etc. — pull from the drivers amenities in
`lib/audiences.ts`). Source image: `Outriders-Services-Menu.png`.

### 5. An Ounce Of Prevention — LH Fleet Services
Recreate the "LH Fleet Services" list (on-site maintenance, inspection, preventive maintenance,
repair, state-of-the-art truck wash, fair labor rates). Source image: `Fleet-Services-List.png`.

### 6. We're Ready To Roll — Monthly Webinars
> Every new member of LineHaul Station has the opportunity to join the **monthly webinars** —
> quick meetings with Founder & CEO **Jeff Swenson** about the latest news and what drivers can do
> to get the most out of their **free membership** as we get close to the network launch.

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
