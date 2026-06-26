import Image from "next/image";
import Link from "next/link";
import { audiences, AUDIENCE_ORDER } from "@/lib/audiences";
import { site } from "@/lib/site";

/**
 * Sticky wayfinding bar. `accent` drives the active lane's underline + index
 * and the Connect button on sub-pages; `active` marks the current route.
 * Tabs flex-wrap on small screens (no JS toggle to preserve).
 */
export default function Nav({
  accent = "#F07820",
  active,
}: {
  accent?: string;
  active?: string;
}) {
  // R1: audience lanes only — no index numbers, and Leadership is dropped from
  // the nav (the /leadership page stays reachable directly).
  const tabs: { key: string; href: string; label: string }[] = AUDIENCE_ORDER.map((key) => ({
    key,
    href: `/${key}`,
    label: audiences[key].navLabel,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-chrome/15 bg-ink/85 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-[clamp(20px,6vw,100px)] py-3">
        <Link
          href="/"
          className="flex flex-none items-center gap-3"
          aria-label="LineHaul Station home"
        >
          <Image
            src="/assets/logo-horz-light.png"
            alt="LineHaul Station"
            width={210}
            height={37}
            priority
            className="h-[36px] w-auto"
          />
        </Link>

        <nav className="no-scrollbar order-3 -mx-2 flex w-full flex-nowrap items-center overflow-x-auto [mask-image:linear-gradient(to_right,#000_84%,transparent)] sm:order-none sm:mx-0 sm:w-auto sm:flex-wrap sm:overflow-visible sm:[mask-image:none]">
          {tabs.map((t) => {
            const isActive = active === t.key;
            return (
              <Link
                key={t.key}
                href={t.href}
                aria-current={isActive ? "page" : undefined}
                className="group relative flex shrink-0 items-center whitespace-nowrap px-3 py-2.5 font-label text-[11px] uppercase tracking-[0.14em] transition-colors lg:px-3.5"
                style={{ color: isActive ? "#ffffff" : "#9a9a9a" }}
              >
                <span className="transition-colors group-hover:text-white">{t.label}</span>
                <span
                  className="absolute inset-x-3 -bottom-px h-0.5 origin-left transition-transform duration-300 lg:inset-x-3.5"
                  style={{
                    background: accent,
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-none items-center gap-2.5 sm:gap-3.5">
          <Link
            href="/join"
            aria-current={active === "join" ? "page" : undefined}
            className="hidden rounded-btn border px-4 py-[10px] font-label text-[10px] uppercase tracking-[0.14em] transition-colors hover:text-white sm:inline-flex"
            style={{
              borderColor: active === "join" ? accent : "rgba(176,176,176,0.3)",
              color: active === "join" ? "#ffffff" : "#cfcfcf",
            }}
          >
            Join Free
          </Link>
          <a
            href={site.connectHref}
            className="rounded-btn px-5 py-[11px] font-label text-[10px] uppercase tracking-[0.14em] text-ink shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:brightness-110 active:scale-[0.97]"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
          >
            Connect With Us
          </a>
        </div>
      </div>
    </header>
  );
}
