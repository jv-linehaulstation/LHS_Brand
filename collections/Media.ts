import path from "path";

import type { CollectionConfig } from "payload";

// Uploaded images for the CMS (testimonial headshots today, any collection later).
// Local disk storage under public/assets/uploads — no S3/cloud setup. Payload
// serves each file and stores its public `url` on the doc, which the data layer
// reads (see lib/testimonials.ts). Add cloud storage later if needed.
export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Media", plural: "Media" },
  admin: {
    group: "Content",
  },
  access: {
    read: () => true, // images are public assets
  },
  upload: {
    staticDir: path.resolve(process.cwd(), "public/assets/uploads"),
    mimeTypes: ["image/*"],
    imageSizes: [
      { name: "thumbnail", width: 400 },
      { name: "card", width: 768 },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      admin: { description: "Alt text for accessibility and SEO." },
    },
  ],
};
