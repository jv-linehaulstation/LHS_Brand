import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Section from "@/components/Section";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { PrimaryCTA, GhostCTA } from "@/components/CTA";
import NetworkMap from "@/components/NetworkMap";
import { audiences, AUDIENCE_ORDER, PHOTOS } from "@/lib/audiences";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-label text-[11px] uppercase tracking-[0.24em] text-fuel">{children}</div>
);

const heroStats = [
  { big: "96%", label: "of carriers run fewer than 20 trucks — and will never build a terminal" },
  { big: "$15M", label: "to build a typical 90-space terminal — most sit at 20% occupancy" },
  { big: "$19", label: "per day in member dues — versus $50K+ per occupied space each year" },
  { big: "1st", label: "Hub open now — West Memphis, AR, at the I-40 / I-55 interchange" },
];

const programs = [
  { name: "FlexSpace", tagline: "It's YOUR Terminal Network.", blurb: "Shared-use terminal access sold in increments — Guest Pass, Proprietary Membership, or Dedicated Space. Carrier-facing.", accent: "#4878A8" },
  { name: "OneHome", tagline: "Everywhere The Road Takes You.", blurb: "A private, resort-quality community network built exclusively for American truckers. Driver-facing housing program.", accent: "#F07820" },
  { name: "Outriders Club", tagline: "The Rig Carlton.", blurb: "A 25,000+ sq ft private drivers club — restaurant, fitness, showers, gaming, rooftop sky deck, and more.", accent: "#C8A060" },
];

const laneBlurb: Record<string, string> = {
  drivers: "OneHome & the Outriders Club — keep more of what you earn on the road.",
  carriers: "FlexSpace — buy premium terminal space, not buildings.",
  brokers: "Premium staging, cross-dock, and relay access for the carriers you trust.",
  shippers: "Secure cross-dock and relay capacity across a national Hub network.",
  government: "Freight relay infrastructure — the Modern-Day Pony Express.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Nav />

      {/* ============================ HERO (image) ============================ */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden px-5 py-28 sm:px-8">
        <ParallaxImage src={PHOTOS.terminalDay} alt="LineHaul Station terminal" priority strength={0.22} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.97)_0%,rgba(11,11,11,0.84)_44%,rgba(11,11,11,0.5)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
          <div className="h-[2px] w-full animate-scan bg-[linear-gradient(90deg,transparent,#F07820,transparent)] opacity-60" />
        </div>
        <div className="relative mx-auto w-full max-w-site">
          <div className="max-w-[840px]">
            <Reveal><Eyebrow>America&apos;s Freight Relay Network</Eyebrow></Reveal>
            <Reveal delay={70}>
              <h1 className="mt-5 text-balance font-display text-[clamp(40px,6.4vw,88px)] font-black uppercase leading-[0.9] tracking-[-0.015em] text-white">
                It&apos;s Time To<br />Re-Think Trucking.
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-4 font-script text-[clamp(24px,3.4vw,42px)] font-semibold text-fuel">
                Faster. Better. Cheaper.
              </div>
            </Reveal>
            <Reveal delay={210}>
              <p className="mt-6 max-w-[640px] font-body text-[clamp(16px,1.7vw,21px)] leading-relaxed text-[#d8d8d8]">
                A national network of member-only, shared-use, full-service Private
                Terminals — keeping freight rolling around the clock, improving life for
                drivers, and lowering the total cost of operation. This is{" "}
                <strong className="font-semibold text-white">Your Terminal Network</strong>.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-9 flex flex-wrap gap-3.5">
                <PrimaryCTA />
                <GhostCTA />
              </div>
            </Reveal>
          </div>
        </div>
        <a href="#model" className="absolute inset-x-0 bottom-6 mx-auto w-fit font-label text-[10px] uppercase tracking-[0.2em] text-chrome transition-colors hover:text-white">
          ↓ See the model
        </a>
      </section>

      {/* ========================= STATS (carbon) ========================= */}
      <Section variant="carbon" className="py-0">
        <div className="-mx-5 grid grid-cols-2 sm:-mx-8 md:grid-cols-4">
          {heroStats.map((s, i) => (
            <Reveal key={i} delay={i * 70} className="border-b border-r border-chrome/10 px-6 py-8 md:border-b-0">
              <CountUp value={s.big} style={{ color: "#F07820" }} className="font-display text-[clamp(28px,3.4vw,42px)] font-black leading-none" />
              <div className="mt-2.5 font-body text-[14px] leading-snug text-chrome">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ========================= MODEL (ink) ========================= */}
      <Section variant="ink" id="model" className="py-[92px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <Eyebrow>The Flex-Space Model</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-[clamp(30px,4.4vw,52px)] font-black uppercase leading-[1.02] tracking-[-0.01em] text-white">
              Stop Building Terminals. Start Buying Space.
            </h2>
            <p className="mt-5 font-body text-[19px] leading-relaxed text-[#d8d8d8]">
              A shared-economy model — like a private club for terminal space. You
              wouldn&apos;t build a golf course to play a round; you&apos;d join the best club
              in town. That&apos;s exactly what LineHaul Station does for terminal space:
              first-class Hubs, Private Terminals, and Service Centers, sold one space at a time.
            </p>
          </Reveal>
          <Reveal delay={140} dir="right" className="frame">
            <div className="bg-panel p-[30px]">
              {[
                "Pay a refundable participation fee, pay daily dues, and use the network whenever you need it.",
                "Buy the space you need, where you need it — across a growing national network.",
                "On-site LH Fleet Services, cross-docking, gated parking, and the Outriders Club at every Hub.",
                "A superior terminal at a fraction of the cost of owning or leasing.",
              ].map((pt, i) => (
                <div key={i} className="flex items-start gap-3.5 border-b border-chrome/10 py-3.5 last:border-b-0">
                  <span className="mt-0.5 font-mono text-[15px] text-fuel">→</span>
                  <span className="font-body text-[16px] leading-snug text-[#d8d8d8]">{pt}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ==================== THREE PROGRAMS (panel) ==================== */}
      <Section variant="panel" className="py-[88px]">
        <Reveal><Eyebrow>One Network · Three Programs</Eyebrow></Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="rounded-card border border-chrome/15 bg-ink p-7 transition-colors hover:bg-[#161616]" style={{ borderTopColor: p.accent, borderTopWidth: 2 }}>
              <div className="font-display text-[22px] font-black uppercase text-white">{p.name}</div>
              <div className="mt-0.5 font-script text-[22px] font-semibold" style={{ color: p.accent }}>{p.tagline}</div>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-chrome">{p.blurb}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ==================== FIND YOUR LANE (blueprint) ==================== */}
      <Section variant="blueprint" className="py-[92px]">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[13px] text-fuel">★</span>
            <Eyebrow>Find Your Lane</Eyebrow>
          </div>
          <h2 className="mt-3.5 max-w-3xl font-display text-[clamp(30px,4.4vw,52px)] font-black uppercase leading-none tracking-[-0.01em] text-white">
            One Network. Built For Everyone Who Moves Freight.
          </h2>
          <p className="mt-5 max-w-2xl font-body text-[18px] leading-relaxed text-[#d8d8d8]">
            Whatever your role in the supply chain, there&apos;s a path into the network. Choose your lane.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE_ORDER.map((key, i) => {
            const a = audiences[key];
            return (
              <Reveal key={key} delay={(i % 3) * 80}>
                <Link
                  href={`/${key}`}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-card border border-chrome/15 bg-panel p-7 transition-colors hover:bg-[#181818]"
                  style={{ borderTopColor: a.accent, borderTopWidth: 2 }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[13px]" style={{ color: a.accent }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-label text-[9px] uppercase tracking-[0.16em] text-chrome">{a.eyebrow}</span>
                    </div>
                    <div className="mt-4 font-display text-[26px] font-black uppercase leading-none text-white">{a.navLabel}</div>
                    <p className="mt-3 font-body text-[15px] leading-relaxed text-chrome">{laneBlurb[key]}</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.18em] transition-transform group-hover:translate-x-1" style={{ color: a.accent }}>
                    Enter <span aria-hidden>→</span>
                  </div>
                </Link>
              </Reveal>
            );
          })}

          <Reveal delay={160}>
            <a href="#contact" className="group flex h-full flex-col justify-between rounded-card border border-dashed border-chrome/25 bg-transparent p-7 transition-colors hover:border-fuel">
              <div>
                <span className="font-mono text-[13px] text-fuel">+</span>
                <div className="mt-4 font-display text-[26px] font-black uppercase leading-none text-white">Not Sure?</div>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-chrome">Tell us how you move freight and we&apos;ll point you to the right lane.</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.18em] text-fuel transition-transform group-hover:translate-x-1">
                Connect With Us <span aria-hidden>→</span>
              </div>
            </a>
          </Reveal>
        </div>
      </Section>

      {/* ==================== NATIONAL NETWORK + MAP (carbon) ==================== */}
      <Section variant="carbon" className="py-[96px]">
        <Reveal>
          <Eyebrow>The Network Is Live</Eyebrow>
          <h2 className="mt-3.5 max-w-3xl font-display text-[clamp(30px,4.4vw,52px)] font-black uppercase leading-none tracking-[-0.01em] text-white">
            An Expanding National Hub Network.
          </h2>
          <p className="mt-5 max-w-2xl font-body text-[18px] leading-relaxed text-[#d8d8d8]">
            The first Hub is open in West Memphis — one block from the I-40 / I-55
            interchange, roughly 60,000 trucks a day. Phase-one expansion is underway
            across five key markets, and the largest cities will carry multiple Hubs.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { big: "~1,000", label: "extra-wide truck & trailer spaces per Hub" },
                { big: "24/7", label: "gated, surveilled access" },
                { big: "6", label: "markets in phase one" },
              ].map((f, i) => (
                <Reveal key={i} delay={i * 80} className="rounded-card border border-chrome/15 bg-panel px-4 py-5">
                  <CountUp value={f.big} style={{ color: "#F07820" }} className="font-display text-[24px] font-black leading-none" />
                  <div className="mt-2 font-body text-[13px] leading-snug text-chrome">{f.label}</div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="mt-5 flex flex-wrap gap-2.5">
              {["West Memphis, AR", "Dallas–Fort Worth", "Atlanta", "Indianapolis", "Chicago", "Carlisle"].map((m, i) => (
                <span
                  key={m}
                  className="rounded-btn border px-3.5 py-2 font-mono text-[12px]"
                  style={{
                    borderColor: i === 0 ? "#F07820" : "rgba(176,176,176,0.25)",
                    color: i === 0 ? "#F07820" : "#d8d8d8",
                    background: i === 0 ? "rgba(240,120,32,0.10)" : "rgba(11,11,11,0.5)",
                  }}
                >
                  {i === 0 ? "● " : ""}{m}
                </span>
              ))}
            </Reveal>

            <Reveal delay={160} className="mt-5 flex items-center gap-6 font-mono text-[12px] text-chrome">
              <span className="flex items-center gap-2">
                <i className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: "#F07820" }} /> Open now
              </span>
              <span className="flex items-center gap-2">
                <i className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: "#7EC8E3" }} /> Phase one
              </span>
            </Reveal>
          </div>

          <Reveal delay={120} dir="right">
            <NetworkMap />
          </Reveal>
        </div>
      </Section>

      {/* ==================== CONTACT (gradient) ==================== */}
      <Contact
        headline="Something BIG Is Coming To Trucking."
        body="West Memphis is open and phase-one expansion is underway. Wherever you sit in the supply chain, let's talk about how the network works for you."
      />
      <Footer />
    </main>
  );
}
