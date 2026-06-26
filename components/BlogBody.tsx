import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

/**
 * Renders a Markdown post body with the brand's editorial styling. Headings,
 * lists, links (internal → next/link), bold/italic, blockquotes, and code are
 * mapped to on-brand classes. Authored in /admin as plain Markdown.
 */

const linkCls =
  "font-medium text-fuel underline decoration-fuel/40 underline-offset-4 transition-colors hover:decoration-fuel";

const h2Cls =
  "mt-12 font-display text-[clamp(26px,3.4vw,38px)] font-black uppercase leading-[1.04] tracking-[-0.02em] text-white";
const bodyText = "font-body text-[clamp(17px,1.55vw,20px)] leading-relaxed text-[#cfcfcf]";

const components: Components = {
  h1: ({ children }) => <h2 className={h2Cls}>{children}</h2>,
  h2: ({ children }) => <h2 className={h2Cls}>{children}</h2>,
  h3: ({ children }) => (
    <h3 className="mt-9 font-label text-[15px] uppercase tracking-[0.14em] text-fuel">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-8 font-label text-[13px] uppercase tracking-[0.14em] text-chrome">
      {children}
    </h4>
  ),
  p: ({ children }) => <p className={`mt-6 ${bodyText} leading-[1.75]`}>{children}</p>,
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => {
    const url = href ?? "#";
    return url.startsWith("/") ? (
      <Link href={url} className={linkCls}>
        {children}
      </Link>
    ) : (
      <a href={url} target="_blank" rel="noopener noreferrer" className={linkCls}>
        {children}
      </a>
    );
  },
  ul: ({ children }) => (
    <ul className={`mt-6 list-disc space-y-3 pl-5 marker:text-fuel ${bodyText}`}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className={`mt-6 list-decimal space-y-3 pl-5 marker:text-fuel ${bodyText}`}>
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1.5">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mt-7 border-l-2 border-fuel/60 pl-5 font-body text-[clamp(17px,1.6vw,21px)] italic leading-relaxed text-chrome">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="mt-10 border-white/10" />,
  code: ({ children }) => (
    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-white">
      {children}
    </code>
  ),
};

export default function BlogBody({ markdown }: { markdown: string }) {
  return (
    <div className="mx-auto max-w-[68ch]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
