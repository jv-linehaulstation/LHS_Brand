import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GlassNav from "@/components/GlassNav";
import LuxeFooter from "@/components/LuxeFooter";
import Contact from "@/components/Contact";
import Reveal from "@/components/motion/Reveal";
import { DataTag } from "@/components/Bits";
import { getAllPosts } from "@/lib/blog";

const FUEL = "#F07820";

// Rebuild from Supabase at most once a minute (ISR).
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog | LineHaul Station",
  description:
    "The LineHaul Station blog — stories from the lane on driver quality of life, the shared-use terminal network, and the future of freight, from the team at LineHaul Station.",
  openGraph: {
    title: "Blog | LineHaul Station",
    description:
      "Stories from the lane on driver quality of life, shared-use terminals, and the future of freight.",
    type: "website",
    url: "https://www.linehaulstation.com/blog",
  },
};

export default async function BlogIndex() {
  const allPosts = await getAllPosts();
  const [featured, ...rest] = allPosts;

  if (!featured) {
    return (
      <main className="min-h-screen bg-ink">
        <GlassNav sectionLinks={[]} cta={{ href: "/join", label: "Join Free" }} />
        <section className="gutter pb-24 pt-40">
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-chrome">
            Blog
          </span>
          <h1 className="mt-5 font-display text-[clamp(36px,6vw,72px)] font-black uppercase leading-[0.9] text-white">
            Stories Are On The Way.
          </h1>
          <p className="mt-6 max-w-[52ch] font-body text-[18px] leading-relaxed text-chrome">
            No posts published yet. Check back soon.
          </p>
        </section>
        <LuxeFooter />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ink">
      <GlassNav sectionLinks={[]} cta={{ href: "/join", label: "Join Free" }} />

      {/* HERO */}
      <section className="relative overflow-hidden gutter pb-12 pt-28">
        <div className="blueprint pointer-events-none absolute inset-0 opacity-20" />
        <Reveal className="relative">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[12px] text-fuel">★</span>
            <span className="measure h-px w-10 text-fuel opacity-50" aria-hidden />
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-chrome">
              Blog
            </span>
          </div>
          <h1 className="mt-5 max-w-[18ch] text-balance font-display text-[clamp(40px,7vw,104px)] font-black uppercase leading-[0.88] tracking-[-0.025em] text-white">
            Stories From The Lane.
          </h1>
          <p className="mt-6 max-w-[56ch] text-pretty font-body text-[clamp(18px,1.9vw,22px)] leading-relaxed text-[#dadada]">
            Notes on driver quality of life, the shared-use terminal network, and the
            future of freight — straight from the team building it.
          </p>
        </Reveal>
      </section>

      {/* FEATURED */}
      <section className="gutter pb-6">
        <Reveal>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr]">
              <div className="chrome-frame glint overflow-hidden rounded-card">
                <div className="relative aspect-[16/9] overflow-hidden bg-carbon">
                  <Image
                    src={featured.hero}
                    alt={featured.heroAlt}
                    fill
                    priority
                    className="img-grade object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,11,11,0.55))]" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-fuel">
                    {featured.kicker}
                  </span>
                  <DataTag className="!text-[12px]">
                    {featured.dateLabel} · {featured.readTime}
                  </DataTag>
                </div>
                <h2 className="mt-4 text-balance font-display text-[clamp(28px,3.6vw,46px)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-white transition-colors group-hover:text-fuel">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-[52ch] font-body text-[clamp(16px,1.6vw,19px)] leading-relaxed text-chrome">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-label text-[11px] uppercase tracking-[0.16em] text-white">
                  Read the story
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* GRID */}
      <section className="gutter py-[clamp(40px,6vh,80px)]">
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80} className="lift h-full">
              <Link href={`/blog/${p.slug}`} className="group block h-full">
                <article className="chrome-frame h-full overflow-hidden rounded-card bg-panel">
                  <div className="relative aspect-[16/9] overflow-hidden bg-carbon">
                    <Image
                      src={p.hero}
                      alt={p.heroAlt}
                      fill
                      loading="lazy"
                      className="img-grade object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(11,11,11,0.6))]" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3">
                      <span className="font-label text-[10px] uppercase tracking-[0.18em] text-fuel">
                        {p.kicker}
                      </span>
                      <DataTag className="!text-[12px]">{p.readTime}</DataTag>
                    </div>
                    <h3 className="mt-3 text-balance font-display text-[clamp(22px,2.4vw,30px)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-white transition-colors group-hover:text-fuel">
                      {p.title}
                    </h3>
                    <p className="mt-3 font-body text-[16px] leading-relaxed text-chrome">
                      {p.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Contact
        headline="Want This At Your Terminals?"
        body="Whether you're a driver, carrier, broker, or partner, the LineHaul Station team would like to hear from you."
      />
      <LuxeFooter />
    </main>
  );
}
