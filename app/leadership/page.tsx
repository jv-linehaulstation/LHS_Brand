import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Contact from "@/components/Contact";
import Reveal from "@/components/motion/Reveal";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { SectionHead, DataTag } from "@/components/Bits";
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
    cred: "Transportation Investment Banking",
    bio: "35+ years in transportation investment banking — Stifel, Clarendon Capital, Venture 53. Harvard MBA.",
    img: "https://static.wixstatic.com/media/84a10c_19734b4587b14454b1bb56e55e424a49~mv2.jpg/v1/fill/w_240,h_240,al_c,q_85/Bio_LARKIN1.jpg",
  },
  {
    name: "John Wilbur",
    role: "Board Advisor",
    cred: "Equipment & Capital Markets",
    bio: "CEO of Fleet Equipment, the largest U.S. Hyundai trailer dealer. Ex–Goldman Sachs & Citicorp.",
    img: "https://static.wixstatic.com/media/84a10c_e404ec8d771f43ff9413ef9bb6f20419~mv2.png/v1/fill/w_240,h_240,al_c,q_85/Wilbur_HEADSHOT.png",
  },
  {
    name: "Craig Hughes",
    role: "Board Advisor",
    cred: "Transportation Operations",
    bio: "40-year transportation veteran. Founder & Chairman of Total Transit; founder of Veyo.",
    img: "https://static.wixstatic.com/media/84a10c_f2fb54a6c15643b4b6ea3577a56eb4f9~mv2.png/v1/fill/w_240,h_240,al_c,q_85/Hughes_HEADSHOT.png",
  },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-ink">
      <Nav active="leadership" />

      {/* HERO (image) */}
      <section className="relative flex min-h-[56vh] items-end overflow-hidden px-5 py-24 sm:px-8">
        <ParallaxImage src={PHOTOS.buildingFront} alt="LineHaul Station headquarters" priority strength={0.2} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,11,0.96)_0%,rgba(11,11,11,0.8)_50%,rgba(11,11,11,0.5)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,11,0.85),transparent_45%)]" />
        <div className="blueprint pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden">
          <div className="scan-once h-full w-full" style={{ ["--ac" as string]: FUEL }} />
        </div>
        <div className="relative mx-auto w-full max-w-site">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[12px] text-fuel">★</span>
              <span className="measure h-px w-10 text-fuel opacity-50" aria-hidden />
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-chrome">Leadership</span>
            </div>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-[clamp(34px,5.4vw,68px)] font-black uppercase leading-[0.94] tracking-[-0.02em] text-white">
              Built by people who&apos;ve done it before.
            </h1>
            <p className="mt-5 max-w-2xl text-pretty font-body text-[clamp(16px,1.7vw,20px)] leading-relaxed text-[#dadada]">
              LineHaul Station is led by a founder and a board with decades across
              transportation, finance, real estate, and logistics — and one shared
              standard: never compromise on quality.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER (ink) — founder's letter */}
      <Section variant="ink" className="py-[clamp(72px,10vw,112px)]">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal>
            <div className="frame">
              <div className="relative aspect-[4/5] overflow-hidden bg-carbon">
                <Image
                  src="https://static.wixstatic.com/media/84a10c_7dfa17aed1604937b1d1dd98258ee10a~mv2.png/v1/fill/w_640,h_800,al_c,q_90/Bio_JS-23-1.png"
                  alt="Jeff Swenson, Founder & CEO"
                  fill
                  className="img-grade object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(11,11,11,0.85))] p-4">
                  <DataTag accent={FUEL}>FOUNDER · CEO</DataTag>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHead index="01" kicker="Founder & CEO" title="Jeff Swenson" accent={FUEL} />
            <p className="mt-5 text-pretty font-body text-[18px] leading-relaxed text-[#dadada]">
              A seasoned entrepreneur, Jeff has held leadership roles in the planning,
              design, sales, and construction of more than <strong className="text-white">$2 billion</strong>{" "}
              of urban residential, commercial, and logistics real estate over the past
              35 years — projects united by one theme: enhancing how people and companies
              live, work, and play. He is the editorial standard behind the brand voice:
              treat the industry&apos;s best truck drivers with dignity and respect, and
              never compromise on quality.
            </p>

            {/* Pull-quote (full panel, no side stripe) */}
            <figure className="mt-7 rounded-card border border-chrome/15 bg-panel p-7">
              <div className="font-display text-[44px] font-black leading-none text-fuel" aria-hidden>
                &ldquo;
              </div>
              <blockquote className="-mt-3 font-body text-[19px] italic leading-relaxed text-[#ededed]">
                Our CEO is a fantastic chef — and he refuses to compromise on quality. The
                same standard runs through every terminal, every amenity, and every word.
              </blockquote>
              <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-fuel">
                The LineHaul Station ethos
              </figcaption>
            </figure>

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
      <Section variant="carbon" className="py-[clamp(72px,9vw,108px)]">
        <SectionHead index="02" kicker="Board Advisors" title="Decades Of Freight, Finance & Logistics." accent={FUEL} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {advisors.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="lift group overflow-hidden rounded-card border border-chrome/15 bg-panel">
              <div className="relative aspect-[5/4] overflow-hidden bg-carbon">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="img-grade object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,11,11,0.85))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-display text-[20px] font-black uppercase leading-none text-white">{p.name}</div>
                  <div className="mt-1.5 font-mono text-[11px] text-fuel">{p.cred}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="font-body text-[15px] leading-relaxed text-chrome">{p.bio}</p>
              </div>
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
