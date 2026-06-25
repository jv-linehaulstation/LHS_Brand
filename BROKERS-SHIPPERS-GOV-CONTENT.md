# Brokers · Shippers · Government — deck-sourced content to enrich the pages ⭐

Improve the **Brokers, Shippers, and Government** landing pages with real content pulled from the
LineHaul Station decks (Government deck, Shippers deck v2; Brokers synthesized from the
Carriers/Government decks since there's no dedicated Brokers deck). For each page, strengthen the
**Problem → Solution → What LineHaul Station Offers** arc. Put the copy into `lib/audiences.ts`
(per-audience fields the `AudiencePage` template renders) and add/expand sections as needed.
Use every relevant skill (`frontend-design`, `ui-ux-pro-max`, `impeccable`, brand-voice). Keep the
"Jeff Swenson filter": no jargon, never "nodes" (use Hubs/Terminals/Service Centers), exact casing
(LineHaul Station / FlexSpace / OneHome / Outriders Club), CTAs only "Connect With Us" /
"Schedule a Call". Keep each page's accent. End with tsc + build + browser pass; commit + push.

---

## GOVERNMENT  (accent #C8A060) — macro infrastructure
**Problem (the big problems):**
- **Illegal truck parking epidemic** — only **312,962** public + private spaces for **1,000,000+**
  over-the-road trucks daily. (Build more parking — or revamp the system?)
- **Qualified-driver shortage** — average driver age **54**, only **7%** of drivers are female,
  most young people reject the lifestyle, and the pool is retiring.
- **Congestion** — trucking's annual congestion costs top **$94.6 billion** (West +45%, South
  Central +32.3%, Midwest +20.9%, Northeast +18.4%, Southeast +12.9%).
- Surging **freight theft**, rising insurance claims & cost, excessive **deadhead / carbon
  emissions**, shipper detention & delay, increasing accidents.

**Solution:** A **National, Flex-Space, Shared-Use Truck Terminal Network** that enables a
**Freight Relay System** — a Modern-Day Pony Express. Relay needs **less parking**, runs slip-seat
two-shift trucks on a hub-&-spoke model, increases night moves, cuts peak traffic, and
significantly reduces Hours-of-Service violations. **Relay infrastructure solves the big problems:
Safer Roads · Better Jobs · Decarbonization.**

**What LineHaul Station offers (everyone wins):** drivers home daily, more alert drivers, fewer
accidents, mitigated freight theft, less deadhead, reduced idling/emissions (enables electric
trucks), faster delivery, lower turnover, more equitable pay, decreased dwell & detention.
**Reduces operating cost up to 30% · increases asset utilization 3×–4×.** Cost per mile: Private
**$3.62** · For-Hire **$2.91** · **Relay $2.41**. Each Hub: **50-acre regional**, **1,035
tractor/trailer/flex spaces**, high security & surveillance, cross-dock, full-service repair shop,
truck wash, private drivers club. **Connecting major markets with 50+ Hubs.** Strengthens
supply-chain resilience and American manufacturing. *(Keep any PENDING JEFF markers on figures.)*

---

## SHIPPERS  (accent #18A848)
**Problem:** Overcrowded yards from on-site trailer-parking limits; **detention & dwell** costs;
carriers arriving early/late — *"Don't be early. Don't be late. On time? Please wait."* Hard to run
**just-in-time** arrival.

**Solution:** A **Secured, National, Shared-Space Terminal Network** with **in-route, secure
trailer staging** in dozens of locations (**33 major markets, 50+ Hubs**) — so shippers can build
**just-in-time arrival programs** for their carriers while cutting detention and dwell, and relieve
on-site overcrowding.

**What LineHaul Station offers:** in-route secure trailer staging · truck & trailer parking options
· gated, private, high-security access & surveillance · reduced driver detention & dwell · faster
speed of delivery · expanded supply-chain infrastructure · sustainability & scalability. **Simple
objectives — FASTER** (speed of delivery), **BETTER** (service to shippers, conditions for
drivers), **CHEAPER** (cost of trucking). 50-acre Hubs, 1,035 spaces.

---

## BROKERS  (accent #7EC8E3) — synthesized from Carriers + Government decks
**Problem:** Capacity is unpredictable and carriers churn; **detention/dwell** wreck margins and
make pickup/delivery windows hard to promise; **96% of carriers run fewer than 20 trucks** and have
no terminal infrastructure of their own.

**Solution:** LineHaul Station's national **shared-use terminal & relay network** gives brokers
**reliable capacity and relay points on the major corridors** — secure drop/hook, cross-dock, fleet
services, and amenities that keep the best carriers (and their drivers) hauling your freight.

**What LineHaul Station offers:** **cross-dock at every Hub** (transfers/staging) · **digital pass
distribution** (issue terminal access to any carrier, book up to 30 days out) · **national Hub
network on key corridors** (West Memphis now; Dallas-Fort Worth, Atlanta, Indianapolis, Chicago,
Carlisle next) · **carrier-grade amenities (Outriders Club)** that lift carrier retention · faster,
more reliable delivery · fewer detention surprises · real-time yard/asset visibility. Relay
economics: **$2.41/mile** vs for-hire **$2.91**, **3×–4×** asset utilization.

---

## How to apply
- Map the above into `lib/audiences.ts` for each audience: `problem` (kicker/headline/body +
  counters), the `solution`/`features` or `amenities` blocks, `stats`, `memphis`, `road`, etc.
- Where a page is currently thin, **add a clear Problem section, a Solution section, and a
  "What We Offer" capabilities block** (the `AudiencePage` template already has slots: Problem,
  Features/Capabilities, How It Works, Memphis). Use deck stats as count-up figures.
- Keep it scannable: short lead lines + the figures as counters/tables, not walls of text.
- Brokers/Shippers/Government have **no calculator** — lead them with the problem stats + the relay
  cost-savings story instead.

## Done checklist
- [ ] Government: parking/driver/congestion problem + relay solution + 30%/3-4×/cost-per-mile offer
- [ ] Shippers: detention-&-dwell problem + secure staging solution + FASTER/BETTER/CHEAPER offer
- [ ] Brokers: capacity/margin problem + reliable-relay solution + cross-dock/digital-pass offer
- [ ] Copy in brand voice (no "nodes", correct casing, approved CTAs); accents kept
- [ ] tsc clean · build passes · browser-checked · committed + pushed
