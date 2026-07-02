import type { CollectionConfig } from "payload";

// "Alex Rivera" -> "AR"; "Founding Member" -> "FM". First letter of the first
// two words, uppercased. Mirrors the slugify pattern in Posts.ts.
const initialsFrom = (value: string): string =>
  value
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

// Driver testimonials shown in the "In their words" carousel on /drivers
// (components/onehome/TestimonialCarousel.tsx via lib/testimonials.ts).
// Published-only filtering + ordering happen in the data layer, same as Posts.
export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: { singular: "Testimonial", plural: "Testimonials" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role", "order", "published"],
    group: "Content",
  },
  access: {
    read: () => true, // published-only filtering happens in lib/testimonials.ts
  },
  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
      admin: { description: "The testimonial itself. Keep it honest and specific." },
    },
    {
      name: "name",
      type: "text",
      required: true,
      admin: { description: 'Attribution, e.g. a driver name or "Founding Member".' },
    },
    {
      name: "role",
      type: "text",
      required: true,
      admin: { description: 'Small line under the name, e.g. "OneHome Driver Program".' },
    },
    {
      name: "initials",
      type: "text",
      admin: {
        position: "sidebar",
        description: "Avatar initials. Auto-filled from the name; override if needed.",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) =>
            value ? value : data?.name ? initialsFrom(data.name) : value,
        ],
      },
    },
    {
      name: "badge",
      type: "text",
      admin: {
        description: 'Optional pill, e.g. "Founding Member" or "Illustrative".',
      },
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Optional headshot. The initials avatar is the fallback when empty.",
      },
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
        description: "Unpublish to hide from /drivers without deleting.",
        components: {
          Cell: "/components/payload/StatusCell.tsx#StatusCell",
        },
      },
    },
    {
      name: "order",
      type: "number",
      admin: {
        position: "sidebar",
        description: "Manual sort — lower shows first. Defaults to creation order if unset.",
      },
    },
  ],
};
