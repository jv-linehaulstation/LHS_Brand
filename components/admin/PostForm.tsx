import Link from "next/link";
import { savePost, deletePost } from "@/app/admin/actions";
import type { AdminPost } from "@/app/admin/data";

const label = "block font-label text-[11px] uppercase tracking-[0.16em] text-chrome";
const input =
  "mt-2 w-full rounded-lg border border-white/12 bg-carbon px-3.5 py-2.5 font-body text-[15px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-fuel";
const hint = "mt-1.5 font-body text-[12px] leading-relaxed text-white/40";

export default function PostForm({ post }: { post?: AdminPost }) {
  const editing = Boolean(post);
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="space-y-8">
      <form action={savePost} className="space-y-7">
        {editing && <input type="hidden" name="id" value={post!.id} />}

        <div className="grid gap-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className={label} htmlFor="title">
              Title *
            </label>
            <input
              id="title"
              name="title"
              required
              defaultValue={post?.title}
              className={input}
              placeholder="Why We're Building the “Rig Carlton”"
            />
          </div>

          <div>
            <label className={label} htmlFor="slug">
              Slug
            </label>
            <input
              id="slug"
              name="slug"
              defaultValue={post?.slug}
              className={input}
              placeholder="auto-generated from title"
            />
            <p className={hint}>URL path: /blog/&lt;slug&gt;. Leave blank to auto-generate.</p>
          </div>

          <div>
            <label className={label} htmlFor="kicker">
              Kicker
            </label>
            <input
              id="kicker"
              name="kicker"
              defaultValue={post?.kicker}
              className={input}
              placeholder="From the Founder"
            />
          </div>

          <div>
            <label className={label} htmlFor="byline">
              Byline
            </label>
            <input
              id="byline"
              name="byline"
              defaultValue={post?.byline ?? "LineHaul Station"}
              className={input}
            />
          </div>

          <div>
            <label className={label} htmlFor="date">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              defaultValue={post?.date ?? today}
              className={input}
            />
            <p className={hint}>Display date &amp; read time are derived automatically.</p>
          </div>
        </div>

        <div>
          <label className={label} htmlFor="excerpt">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            name="excerpt"
            rows={2}
            defaultValue={post?.excerpt}
            className={input}
            placeholder="One- or two-sentence summary shown on cards and in search results."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className={label} htmlFor="hero">
              Hero image path
            </label>
            <input
              id="hero"
              name="hero"
              defaultValue={post?.hero}
              className={input}
              placeholder="/assets/blog/your-slug.png"
            />
            <p className={hint}>
              Put the 1600×900 image in public/assets/blog/ and reference it here.
            </p>
          </div>
          <div>
            <label className={label} htmlFor="heroAlt">
              Hero alt text
            </label>
            <input
              id="heroAlt"
              name="heroAlt"
              defaultValue={post?.heroAlt}
              className={input}
              placeholder="Describe the image for accessibility"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className={label} htmlFor="seoTitle">
              SEO title
            </label>
            <input
              id="seoTitle"
              name="seoTitle"
              defaultValue={post?.seoTitle}
              className={input}
              placeholder="auto: “Title | LineHaul Station”"
            />
          </div>
          <div>
            <label className={label} htmlFor="keywords">
              Keywords
            </label>
            <input
              id="keywords"
              name="keywords"
              defaultValue={post?.keywords.join(", ")}
              className={input}
              placeholder="comma, separated, keywords"
            />
          </div>
        </div>

        <div>
          <label className={label} htmlFor="body">
            Body (Markdown)
          </label>
          <textarea
            id="body"
            name="body"
            rows={22}
            defaultValue={post?.body}
            className={`${input} font-mono text-[13.5px] leading-relaxed`}
            placeholder={"## A heading\n\nA paragraph with **bold** and a [link](/drivers).\n\n- A list item\n- Another item"}
          />
          <p className={hint}>
            Markdown: ## / ### headings, **bold**, *italic*, - lists, 1. numbered,
            [text](/internal-or-https-link), &gt; quotes.
          </p>
        </div>

        <label className="flex w-fit items-center gap-3 font-body text-[15px] text-white">
          <input
            type="checkbox"
            name="published"
            defaultChecked={post?.published ?? true}
            className="h-4 w-4 accent-fuel"
          />
          Published (visible on the site)
        </label>

        <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-7">
          <button
            type="submit"
            className="rounded-btn bg-fuel px-7 py-3 font-label text-[11px] uppercase tracking-[0.16em] text-ink transition hover:brightness-110"
          >
            {editing ? "Save changes" : "Create post"}
          </button>
          <Link
            href="/admin"
            className="rounded-btn border border-white/15 px-7 py-3 font-label text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:border-white/40"
          >
            Cancel
          </Link>
        </div>
      </form>

      {editing && (
        <form
          action={deletePost}
          className="flex items-center justify-between rounded-card border border-red-500/25 bg-red-500/5 px-5 py-4"
        >
          <input type="hidden" name="id" value={post!.id} />
          <div>
            <div className="font-label text-[11px] uppercase tracking-[0.16em] text-red-300">
              Delete post
            </div>
            <div className={hint}>This permanently removes the post. There is no undo.</div>
          </div>
          <button
            type="submit"
            className="rounded-btn border border-red-500/40 px-5 py-2.5 font-label text-[11px] uppercase tracking-[0.16em] text-red-300 transition-colors hover:bg-red-500/15"
          >
            Delete
          </button>
        </form>
      )}
    </div>
  );
}
