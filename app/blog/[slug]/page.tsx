import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GlassNav from "@/components/GlassNav";
import LuxeFooter from "@/components/LuxeFooter";
import Contact from "@/components/Contact";
import Reveal from "@/components/motion/Reveal";
import { DataTag } from "@/components/Bits";
import BlogBody from "@/components/BlogBody";
import { getPost, getRelatedPosts, getAllSlugs } from "@/lib/blog";

const FUEL = "#F07820";

// Rebuild from Supabase at most once a minute; render new slugs on demand.
export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getAllSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Blog | LineHaul Station" };
  const url = `https://www.linehaulstation.com/blog/${post.slug}`;
  return {
    title: post.seoTitle,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.seoTitle,
      description: post.excerpt,
      type: "article",
      url,
      images: [{ url: post.hero, width: 1600, height: 900, alt: post.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.excerpt,
      images: [post.hero],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.slug, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.linehaulstation.com${post.hero}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: "LineHaul Station" },
    publisher: {
      "@type": "Organization",
      name: "LineHaul Station",
      logo: {
        "@type": "ImageObject",
        url: "https://www.linehaulstation.com/assets/logo-horz-light.png",
      },
    },
    mainEntityOfPage: `https://www.linehaulstation.com/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-ink">
      <GlassNav sectionLinks={[]} cta={{ href: "/join", label: "Join Free" }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO — the title-card image carries the headline; no competing
          text overlay sits on top of it, so the title stays readable. */}
      <section className="relative overflow-hidden gutter pb-2 pt-28">
        <div className="blueprint pointer-events-none absolute inset-0 opacity-15" />
        <Reveal className="relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-label text-[10px] uppercase tracking-[0.18em] text-chrome transition-colors hover:text-white"
          >
            <span>←</span> Blog
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-fuel">
              {post.kicker}
            </span>
            <DataTag className="!text-[12px]">
              {post.dateLabel} · {post.readTime}
            </DataTag>
          </div>
          {/* Canonical heading for SEO/accessibility — the headline is
              rendered visually inside the hero image above. */}
          <h1 className="sr-only">{post.title}</h1>
        </Reveal>

        <Reveal className="relative mt-6">
          <figure className="chrome-frame glint overflow-hidden rounded-card">
            <div className="relative aspect-[16/9] overflow-hidden bg-carbon">
              <Image
                src={post.hero}
                alt={post.heroAlt}
                fill
                priority
                className="img-grade object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>
          </figure>
          <figcaption className="mt-4 font-mono text-[12px] uppercase tracking-[0.12em] text-chrome">
            By {post.byline}
          </figcaption>
        </Reveal>
      </section>

      {/* ARTICLE BODY */}
      <section className="gutter py-[clamp(56px,9vh,110px)]">
        <BlogBody markdown={post.body} />

        {/* In-article CTA buttons */}
        <Reveal className="mx-auto mt-12 flex max-w-[68ch] flex-wrap gap-3.5">
          <a
            href="#contact"
            className="rounded-btn bg-white px-7 py-4 font-label text-[11px] uppercase tracking-[0.16em] text-ink transition hover:brightness-95"
          >
            Connect With Us
          </a>
          <Link
            href="/join"
            className="rounded-btn border border-chrome/30 px-7 py-4 font-label text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:border-fuel hover:text-fuel"
          >
            Join Free
          </Link>
        </Reveal>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="gutter pb-[clamp(56px,9vh,110px)]">
          <div className="flex items-center gap-3">
            <span className="measure h-px w-12 text-fuel opacity-60" aria-hidden />
            <span className="font-label text-[11px] uppercase tracking-[0.2em] text-chrome">
              Keep Reading
            </span>
          </div>
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {related.map((p, i) => (
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
                    <div className="p-6">
                      <span className="font-label text-[10px] uppercase tracking-[0.18em] text-fuel">
                        {p.kicker}
                      </span>
                      <h3 className="mt-2.5 text-balance font-display text-[clamp(20px,2.2vw,27px)] font-black uppercase leading-[1.0] tracking-[-0.02em] text-white transition-colors group-hover:text-fuel">
                        {p.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <Contact
        headline="Want This At Your Terminals?"
        body="Whether you're a driver, carrier, broker, or partner, the LineHaul Station team would like to hear from you."
      />
      <LuxeFooter />
    </main>
  );
}
