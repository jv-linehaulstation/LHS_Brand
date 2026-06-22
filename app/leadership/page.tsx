import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Contact from "@/components/Contact";
import Reveal from "@/components/motion/Reveal";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { PHOTOS } from "@/lib/audiences";

export const metadata: Metadata = {
  title: "Leadership | LineHaul Station",
  description:
    "The team behind LineHaul Station — founder & CEO Jeff Swenson and a board of transportation, finance, and logistics veterans.",
};

const FUEL = "#F07820";

const advisors = [
  {
    name: "John Larkin",
    role: "Board Advisor",
    bio: "35+ years in transportation investment banking — Stifel, Clarendon Capital, Venture 53. Harvard MBA.",
    img: "https://static.wixstatic.com/media/84a10c_19734b4587b14454b1bb56e55e424a49~mv2.jpg/v1/fill/w_240,h_240,al_c,q_85/Bio_LARKIN1.jpg",
  },
  {
    name: "John Wilbur",
    role: "Board Advisor",
    bio: "CEO of Fleet Equipment, the largest U.S. Hyundai trailer dealer. Ex–Goldman Sachs & Citicorp.",
    img: "https://static.wixstatic.com/media/84a10c_e404ec8d771f43ff9413ef9bb6f20419~mv2.png/v1/fill/w_240,h_240,al_c,q_85/Wilbur_HEADSHOT.png",
  },
  {
    name: "Craig Hughes",
    role: "Board Advisor",
    bio: "40-year transportation veteran. Founder & Chairman of Total Transit; founder of Veyo.",
    img: "https://static.wixstatic.com/media/84a10c_f2fb54a6c15643b4b6ea3577a56eb4f9~mv2.png/v1/fill/w_240,h_240,al_c,q_85/Hughes_HEADSHOT.png",
  },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-ink">
      <Nav active="leadership" />

      {/* HERO (image) */}
      <section className="relative flex min-h-[44vh] items-end overflow-hidden px-5 py-20 sm:px-8">
        <ParallaxImage src={PHOTOS.buildingFront} alt="LineHaul Station" priority strength={0.2} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.95)_0%,rgba(11,11,11,0.8)_50%,rgba(11,11,11,0.55)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${FUEL}, transparent)` }} />
        <div className="relative mx-auto w-full max-w-site">
          <Reveal>
            <div className="font-label text-[11px] uppercase tracking-[0.24em] text-fuel">Leadership</div>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-[clamp(34px,5.4vw,68px)] font-black uppercase leading-[0.94] tracking-[-0.015em] text-white">
              Built by people who&apos;ve done it before.
            </h1>
            <p className="mt-5 max-w-2xl font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#d8d8d8]">
              LineHaul Station is led by a founder and a board with decades across
              transportation, finance, real estate, and logistics — and one shared
              standard: never compromise on quality.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER (ink) */}
      <Section variant="ink" className="py-[88px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <div className="frame">
              <div className="relative aspect-[4/5] overflow-hidden bg-carbon">
                <Image
                  src="https://static.wixstatic.com/media/84a10c_7dfa17aed1604937b1d1dd98258ee10a~mv2.png/v1/fill/w_640,h_800,al_c,q_90/Bio_JS-23-1.png"
                  alt="Jeff Swenson, Founder & CEO"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="font-label text-[11px] uppercase tracking-[0.24em] text-fuel">Founder &amp; CEO</div>
            <h2 className="mt-3 font-display text-[clamp(30px,4.4vw,52px)] font-black uppercase leading-none tracking-[-0.01em] text-white">
              Jeff Swenson
            </h2>
            <p className="mt-5 font-body text-[18px] leading-relaxed text-[#d8d8d8]">
              A seasoned entrepreneur, Jeff has held leadership roles in the planning,
              design, sales, and construction of more than <strong className="text-white">$2 billion</strong>{" "}
              of urban residential, commercial, and logistics real estate over the past
              35 years — projects united by one theme: enhancing how people and companies
              live, work, and play. He is the editorial standard behind the brand voice:
              treat the industry&apos;s best truck drivers with dignity and respect, and
              never compromise on quality.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-card border-l-2 bg-panel px-5 py-4" style={{ borderLeftColor: FUEL }}>
              <span className="mt-0.5 font-mono text-[11px] tracking-[0.1em] text-fuel">ETHOS</span>
              <p className="font-body text-[16px] italic leading-relaxed text-[#ededed]">
                “Our CEO is a fantastic chef — and he refuses to compromise on quality.”
                The same standard runs through every terminal, every amenity, and every word.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/jeff-swenson-2744606"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-btn border border-chrome/30 bg-carbon px-5 py-3 font-label text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:border-fuel hover:text-fuel"
              >
                LinkedIn
              </a>
              <a
                href="mailto:js@linehaulstation.com"
                className="rounded-btn border border-chrome/30 bg-carbon px-5 py-3 font-label text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:border-fuel hover:text-fuel"
              >
                js@linehaulstation.com
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* BOARD ADVISORS (carbon) */}
      <Section variant="carbon" className="py-[88px]">
        <Reveal>
          <div className="font-label text-[11px] uppercase tracking-[0.24em] text-fuel">Board Advisors</div>
          <h2 className="mt-3 font-display text-[clamp(26px,3.6vw,44px)] font-black uppercase tracking-[-0.01em] text-white">
            Decades of freight, finance &amp; logistics.
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {advisors.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="rounded-card border border-chrome/15 bg-panel p-6" style={{ borderTopColor: FUEL, borderTopWidth: 2 }}>
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 flex-none overflow-hidden rounded-card border border-chrome/20 bg-carbon">
                  <Image src={p.img} alt={p.name} fill className="object-cover" sizes="64px" />
                </div>
                <div>
                  <div className="font-display text-[18px] font-extrabold uppercase text-white">{p.name}</div>
                  <div className="mt-1 font-label text-[9px] uppercase tracking-[0.16em] text-fuel">{p.role}</div>
                </div>
              </div>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-chrome">{p.bio}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Contact
        headline="Let's Build The Future Of Freight."
        body="Whether you're a driver, carrier, broker, shipper, or partner in the public sector, the LineHaul Station team would like to hear from you."
      />
      <Footer />
    </main>
  );
}
