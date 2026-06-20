import Image from "next/image";
import Link from "next/link";
import { audiences, AUDIENCE_ORDER } from "@/lib/audiences";
import { site } from "@/lib/site";

/**
 * Sticky top bar. `accent` underlines the active audience tab on sub-pages;
 * `active` marks which route is current. On the homepage no tab is active.
 */
export default function Nav({
  accent = "#F07820",
  active,
}: {
  accent?: string;
  active?: string;
}) {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-chrome/15 bg-ink/90 px-5 py-3 backdrop-blur-md sm:px-7">
      <Link href="/" className="flex flex-none items-center" aria-label="LineHaul Station home">
        <Image
          src="/assets/logo-horz-light.png"
          alt="LineHaul Station"
          width={170}
          height={30}
          priority
          className="h-[26px] w-auto"
        />
      </Link>

      <nav className="flex flex-wrap gap-x-1">
        {AUDIENCE_ORDER.map((key) => {
          const a = audiences[key];
          const isActive = active === key;
          return (
            <Link
              key={key}
              href={`/${key}`}
              className="whitespace-nowrap border-b-2 px-4 py-2.5 font-label text-[10px] uppercase tracking-[0.14em] transition-colors"
              style={{
                color: isActive ? "#ffffff" : "#9a9a9a",
                borderColor: isActive ? accent : "transparent",
              }}
            >
              {a.navLabel}
            </Link>
          );
        })}
      </nav>

      <a
        href={site.connectHref}
        className="flex-none rounded-btn px-5 py-[11px] font-label text-[10px] uppercase tracking-[0.14em] text-ink"
        style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
      >
        Connect With Us
      </a>
    </header>
  );
}
