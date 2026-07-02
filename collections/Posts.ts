import type { CollectionConfig } from "payload";

// Turns "Why We're Building The Rig Carlton" -> "why-were-building-the-rig-carlton"
const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// The Blog. One row per article. `body` is Markdown (rendered by
// components/BlogBody.tsx via react-markdown) — deliberately kept as Markdown
// so the existing brand-styled rendering is unchanged. `dateLabel` and
// `readTime` are NOT stored here; the public data layer derives them.
export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "Post", plural: "Blog" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "byline", "date", "published"],
    group: "Content",
    components: {
      beforeListTable: ["/components/payload/BlogStats.tsx#BlogStats"],
    },
  },
  access: {
    read: () => true, // published-only filtering happens in lib/blog.ts
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description: "URL path — /blog/<slug>. Auto-filled from the title.",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) =>
            value ? slugify(value) : data?.title ? slugify(data.title) : value,
        ],
      },
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
        description: "Unpublish to hide from /blog without deleting.",
        components: {
          Cell: "/components/payload/StatusCell.tsx#StatusCell",
        },
      },
    },
    {
      name: "date",
      type: "date",
      required: true,
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "dayOnly", displayFormat: "MMMM d, yyyy" },
        description: "Publication date — drives ordering.",
      },
    },
    {
      name: "kicker",
      type: "text",
      admin: { description: "Small eyebrow label above the title." },
    },
    {
      name: "excerpt",
      type: "textarea",
      admin: { description: "Card summary + meta description." },
    },
    {
      name: "byline",
      type: "text",
      defaultValue: "LineHaul Station",
    },
    {
      name: "hero",
      type: "text",
      admin: {
        description:
          "Hero image path, e.g. /assets/blog/my-slug.png (1600×900). Place the file in public/assets/blog/.",
      },
    },
    {
      name: "heroAlt",
      type: "text",
      label: "Hero alt text",
    },
    {
      name: "seoTitle",
      type: "text",
      label: "SEO title",
    },
    {
      name: "keywords",
      type: "text",
      hasMany: true,
      admin: { description: "SEO keywords (press Enter between each)." },
    },
    {
      name: "body",
      type: "textarea",
      required: true,
      admin: {
        rows: 24,
        description:
          "Article body in Markdown. Supports ## / ### headings, - and 1. lists, **bold**, *italic*, [label](/link), and > quotes.",
      },
    },
  ],
};
