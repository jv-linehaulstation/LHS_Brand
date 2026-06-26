import Link from "next/link";
import type { Block } from "@/lib/blog";

/**
 * Renders The Dispatch article blocks. Server-safe. Supports a tiny inline
 * subset — **bold** and [text](href) — so copy can carry emphasis and internal
 * links without a markdown dependency. Internal links (href starting with "/")
 * use next/link; external links open in a new tab.
 */

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Split on **bold** or [text](href); keep delimiters via capture groups.
  const re = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(re);
  parts.forEach((part, i) => {
    if (!part) return;
    if (part.startsWith("**") && part.endsWith("**")) {
      nodes.push(
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
      return;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith("/")) {
        nodes.push(
          <Link
            key={i}
            href={href}
            className="font-medium text-fuel underline decoration-fuel/40 underline-offset-4 transition-colors hover:decoration-fuel"
          >
            {label}
          </Link>
        );
      } else {
        nodes.push(
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-fuel underline decoration-fuel/40 underline-offset-4 transition-colors hover:decoration-fuel"
          >
            {label}
          </a>
        );
      }
      return;
    }
    nodes.push(part);
  });
  return nodes;
}

export default function BlogBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mx-auto max-w-[68ch]">
      {blocks.map((b, i) => {
        if (b.k === "h2") {
          return (
            <h2
              key={i}
              className="mt-12 font-display text-[clamp(26px,3.4vw,38px)] font-black uppercase leading-[1.04] tracking-[-0.02em] text-white"
            >
              {b.t}
            </h2>
          );
        }
        if (b.k === "h3") {
          return (
            <h3
              key={i}
              className="mt-9 font-label text-[15px] uppercase tracking-[0.14em] text-fuel"
            >
              {b.t}
            </h3>
          );
        }
        if (b.k === "ul") {
          return (
            <ul key={i} className="mt-6 space-y-3">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-3.5 font-body text-[clamp(17px,1.55vw,20px)] leading-relaxed text-[#cfcfcf]">
                  <span className="mt-[0.7em] h-1.5 w-1.5 flex-none rounded-full bg-fuel" aria-hidden />
                  <span>{renderInline(it)}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p
            key={i}
            className="mt-6 font-body text-[clamp(17px,1.55vw,20px)] leading-[1.75] text-[#cfcfcf]"
          >
            {renderInline(b.t)}
          </p>
        );
      })}
    </div>
  );
}
