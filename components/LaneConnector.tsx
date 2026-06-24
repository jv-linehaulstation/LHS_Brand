import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { SectionHead } from "@/components/Bits";
import { audiences, AUDIENCE_ORDER, type AudienceKey } from "@/lib/audiences";

/**
 * "One Network" cross-link band — the Four-Stones "Connections" pattern. Threads
 * the single-network narrative through every subpage: a compact router to all
 * audience lanes, with the current lane marked. Server component (links only);
 * reduced-motion safe via Reveal.
 */
const BLURB: Record<string, string> = {
  drivers: "OneHome & the Outriders Club.",
  carriers: "FlexSpace — buy space, not buildings.",
  brokers: "Capacity behind every carrier you trust.",
  shippers: "Secure cross-dock & relay, 24/7.",
  government: "Freight relay that strengthens America.",
};

export default function LaneConnector({
  current,
  accent = "#F07820",
  showJoin = true,
}: {
  current?: AudienceKey;
  accent?: string;
  showJoin?: boolean;
}) {
  return (
    <>
      <SectionHead kicker="One Network" size="xl" title="Find Your Lane." accent={accent} />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {AUDIENCE_ORDER.map((key, i) => {
          const a = audiences[key];
          const isCurrent = key === current;
          return (
            <Reveal key={key} delay={(i % 3) * 70}>
              <Link
                href={`/${key}`}
                aria-current={isCurrent ? "page" : undefined}
                className="lift group flex h-full items-center justify-between gap-4 rounded-card border border-chrome/15 bg-panel p-5 transition-colors hover:border-[var(--ac)] sm:p-6"
                style={{ ["--ac" as string]: a.accent }}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 flex-none rounded-full" style={{ background: a.accent }} aria-hidden />
                    <span className="font-display text-[clamp(20px,2.2vw,28px)] font-black uppercase leading-none text-white">
                      {a.navLabel}
                    </span>
                  </div>
                  <p className="mt-2 font-body text-[13px] leading-snug text-chrome">
                    {isCurrent ? "You're here — explore the rest of the network." : BLURB[key]}
                  </p>
                </div>
                <span
                  className="flex-none font-display text-[22px] transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: a.accent }}
                  aria-hidden
                >
                  {isCurrent ? "•" : "→"}
                </span>
              </Link>
            </Reveal>
          );
        })}
        {showJoin && (
        <Reveal delay={140}>
          <Link
            href="/join"
            className="lift group flex h-full items-center justify-between gap-4 rounded-card border p-5 transition-colors sm:p-6"
            style={{ borderColor: `${accent}66`, background: `${accent}14` }}
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 flex-none rounded-full" style={{ background: accent }} aria-hidden />
                <span className="font-display text-[clamp(20px,2.2vw,28px)] font-black uppercase leading-none text-white">
                  Join Free
                </span>
              </div>
              <p className="mt-2 font-body text-[13px] leading-snug text-chrome">
                The Outriders Club — free driver membership.
              </p>
            </div>
            <span
              className="flex-none font-display text-[22px] transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: accent }}
              aria-hidden
            >
              →
            </span>
          </Link>
        </Reveal>
        )}
      </div>
    </>
  );
}
