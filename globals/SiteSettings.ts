import type { GlobalConfig } from "payload";

// Single-instance homepage content, editable at /admin under "Homepage".
// Read via lib/siteSettings.ts (Local API + ISR + fallback to the hardcoded
// values in app/(frontend)/page.tsx / AudienceScroll / lib/site.ts).
export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  admin: {
    group: "Homepage",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "heroStats",
      type: "array",
      label: "Hero Stats",
      admin: {
        description: "The count-up ribbon directly under the homepage hero.",
      },
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          admin: { description: 'e.g. "Spaces · West Memphis".' },
        },
        {
          name: "value",
          type: "number",
          required: true,
          admin: { description: "The number that counts up, e.g. 1800." },
        },
        {
          name: "prefix",
          type: "text",
          admin: { description: 'Optional, shown before the number, e.g. "$".' },
        },
        {
          name: "suffix",
          type: "text",
          admin: { description: 'Optional, shown after the number, e.g. "+" or "K".' },
        },
      ],
    },
    {
      name: "audienceCards",
      type: "array",
      label: "Audience Cards (Find Your Lane)",
      admin: {
        description:
          "The five lanes on the homepage. Only the card title, blurb, and link live here, not the full per-audience page.",
      },
      fields: [
        { name: "title", type: "text", required: true },
        {
          name: "blurb",
          type: "textarea",
          required: true,
          admin: { description: "Short one-line description under the title." },
        },
        {
          name: "href",
          type: "text",
          required: true,
          admin: { description: "Internal path, e.g. /drivers." },
        },
      ],
    },
    {
      name: "contact",
      type: "group",
      admin: { description: "Canonical contact details. The one source of truth going forward." },
      fields: [
        { name: "phone", type: "text" },
        { name: "email", type: "text" },
        { name: "address", type: "text" },
      ],
    },
  ],
};
