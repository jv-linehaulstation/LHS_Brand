import type { GlobalConfig } from "payload";

// Site origin for the Live Preview iframe. localhost in dev; set
// NEXT_PUBLIC_SERVER_URL to the deployed Vercel domain in production.
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

// Full editable copy of the /drivers page as a Payload `blocks` field — a native
// block editor (Add Block picker, drag-to-reorder, per-block delete/duplicate).
// Each block = one rendered section; block `slug` values match the SectionType
// slugs the resolver + renderer key on (lib/driversPageShape.ts,
// components/OneHomePageCmsTest.tsx). Field names inside each block are unchanged
// from the previous tabs version — the resolver depends on them.
//
// Read via lib/driversPage.ts. Only /drivers-cms-test reads this; the live
// /drivers page is untouched.
//
// Two-tone headline convention: fields noted "split on /" render the text before
// the slash in white and the text after it in the accent colour. Keep the slash.
export const DriversPage: GlobalConfig = {
  slug: "drivers-page",
  label: "Drivers Page",
  admin: {
    group: "Drivers Page",
    // Live Preview: render /drivers-cms-test in an iframe next to the form and
    // update it in real time as fields change (no save).
    livePreview: {
      url: () => `${SERVER_URL}/drivers-cms-test`,
      breakpoints: [
        { name: "mobile", label: "Mobile", width: 375, height: 667 },
        { name: "tablet", label: "Tablet", width: 768, height: 1024 },
        { name: "desktop", label: "Desktop", width: 1440, height: 900 },
      ],
    },
  },
  access: { read: () => true },
  fields: [
    {
      name: "sections",
      type: "blocks",
      minRows: 1,
      admin: {
        description:
          "Sections render in the order shown here — drag to reorder. Removing a block hides that entire section from the live page. Each section is designed to appear once; adding duplicates of a block may look odd since sections have unique styling.",
      },
      blocks: [
        // ---- 1. Hero -------------------------------------------------------
        {
          slug: "hero",
          labels: { singular: "Hero", plural: "Hero" },
          admin: {
            images: { thumbnail: "/assets/admin-previews/hero.png" },
            components: {
              Label: {
                path: "/components/payload/SectionRowLabel.tsx",
                exportName: "SectionRowLabel",
                clientProps: { blockType: "hero", label: "Hero" },
              },
            },
          },
          fields: [
            { name: "heroVideoUrl", type: "text", admin: { description: "The full-bleed top section (H1, verse, video). Background video mp4 URL." } },
            { name: "eyebrow", type: "text" },
            { name: "heroPunch", type: "text", admin: { description: "The H1." } },
            {
              name: "verseLines",
              type: "array",
              minRows: 4,
              maxRows: 4,
              admin: { description: 'The 4-line "Truck doesn\'t fit in the driveway..." verse.' },
              fields: [{ name: "line", type: "text", required: true }],
            },
            { name: "heroBlurb", type: "text" },
            { name: "heroNote", type: "text" },
            { name: "scrollHint", type: "text" },
          ],
        },
        // ---- 2. Welcome / Story -------------------------------------------
        {
          slug: "welcome",
          labels: { singular: "Welcome / Story", plural: "Welcome / Story" },
          admin: {
            images: { thumbnail: "/assets/admin-previews/welcome.png" },
            components: {
              Label: {
                path: "/components/payload/SectionRowLabel.tsx",
                exportName: "SectionRowLabel",
                clientProps: { blockType: "welcome", label: "Welcome / Story" },
              },
            },
          },
          fields: [
            { name: "coinImage", type: "upload", relationTo: "media", admin: { description: "The story + webinar section. Outriders coin (optional); falls back to /assets/coin-outriders.png." } },
            { name: "storyEyebrow", type: "text" },
            { name: "storyHeadline", type: "text", admin: { description: 'e.g. "Welcome to the Club".' } },
            {
              name: "storyParas",
              type: "array",
              admin: { description: "The rendered story paragraphs (first one is the large lead)." },
              fields: [{ name: "paragraph", type: "textarea", required: true }],
            },
            { name: "webinarBody", type: "textarea" },
            { name: "webinarVideoUrl", type: "text", admin: { description: "Vimeo player URL." } },
            { name: "founderName", type: "text", defaultValue: "Jeffrey J. Swenson" },
            { name: "founderTitle", type: "text", defaultValue: "Founder & CEO" },
            {
              name: "joinHeadline",
              type: "text",
              admin: { description: 'Two-tone, split on "/": e.g. "Nothing To Lose / Everything To Gain".' },
            },
          ],
        },
        // ---- 3. Membership Steps ------------------------------------------
        {
          slug: "membershipSteps",
          labels: { singular: "Membership Steps", plural: "Membership Steps" },
          admin: {
            images: { thumbnail: "/assets/admin-previews/membershipSteps.png" },
            components: {
              Label: {
                path: "/components/payload/SectionRowLabel.tsx",
                exportName: "SectionRowLabel",
                clientProps: { blockType: "membershipSteps", label: "Membership Steps" },
              },
            },
          },
          fields: [
            {
              name: "membershipSteps",
              type: "array",
              minRows: 3,
              maxRows: 3,
              admin: { description: "The 3 free-membership steps (image boxes).", components: { RowLabel: "/components/payload/ImageRowLabel.tsx#ImageRowLabel" } },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "line", type: "text", required: true },
                { name: "image", type: "upload", relationTo: "media" },
              ],
            },
          ],
        },
        // ---- 4. Join Free band --------------------------------------------
        {
          slug: "joinFree",
          labels: { singular: "Join Free band", plural: "Join Free band" },
          admin: {
            images: { thumbnail: "/assets/admin-previews/joinFree.png" },
            components: {
              Label: {
                path: "/components/payload/SectionRowLabel.tsx",
                exportName: "SectionRowLabel",
                clientProps: { blockType: "joinFree", label: "Join Free band" },
              },
            },
          },
          fields: [
            {
              name: "joinFreeHeadline",
              type: "text",
              admin: { description: 'The register band. Two-tone, split on "/": e.g. "Claim Your Free / Driver Membership.".' },
            },
            { name: "joinFreeBody", type: "textarea" },
            {
              name: "joinFreeBullets",
              type: "array",
              minRows: 3,
              maxRows: 3,
              fields: [{ name: "bullet", type: "text", required: true }],
            },
          ],
        },
        // ---- 5. Core / The Math -------------------------------------------
        {
          slug: "core",
          labels: { singular: "Core / The Math", plural: "Core / The Math" },
          admin: {
            images: { thumbnail: "/assets/admin-previews/core.png" },
            components: {
              Label: {
                path: "/components/payload/SectionRowLabel.tsx",
                exportName: "SectionRowLabel",
                clientProps: { blockType: "core", label: "Core / The Math" },
              },
            },
          },
          fields: [
            { name: "coreKicker", type: "text", admin: { description: "The hook + savings calculator section (calculator math stays in code)." } },
            {
              name: "coreHeadline",
              type: "text",
              admin: { description: 'Two-tone, split on "/": e.g. "Here\'s A New & / Better Option.".' },
            },
            { name: "coreSubhead", type: "text" },
            {
              name: "coreParas",
              type: "array",
              fields: [{ name: "paragraph", type: "textarea", required: true }],
            },
            { name: "coreBlurb", type: "text" },
          ],
        },
        // ---- 6. Amenities -------------------------------------------------
        {
          slug: "amenities",
          labels: { singular: "Amenities", plural: "Amenities" },
          admin: {
            images: { thumbnail: "/assets/admin-previews/amenities.png" },
            components: {
              Label: {
                path: "/components/payload/SectionRowLabel.tsx",
                exportName: "SectionRowLabel",
                clientProps: { blockType: "amenities", label: "Amenities" },
              },
            },
          },
          fields: [
            { name: "amenitiesHeadline", type: "text", admin: { description: "The Outriders Club amenities carousel." } },
            { name: "amenitiesIntro", type: "textarea" },
            {
              name: "amenitySlides",
              type: "array",
              minRows: 8,
              maxRows: 8,
              admin: { description: "The 8 club amenities carousel slides.", components: { RowLabel: "/components/payload/ImageRowLabel.tsx#ImageRowLabel" } },
              fields: [
                { name: "image", type: "upload", relationTo: "media" },
                { name: "name", type: "text", required: true },
                { name: "spec", type: "text", required: true },
              ],
            },
            { name: "amenitiesFootnote", type: "text", admin: { description: 'e.g. Members call the 25,000 sq ft private drivers club "The Rig Carlton."' } },
          ],
        },
        // ---- 7. Value Comparison ------------------------------------------
        {
          slug: "value",
          labels: { singular: "Value Comparison", plural: "Value Comparison" },
          admin: {
            images: { thumbnail: "/assets/admin-previews/value.png" },
            components: {
              Label: {
                path: "/components/payload/SectionRowLabel.tsx",
                exportName: "SectionRowLabel",
                clientProps: { blockType: "value", label: "Value Comparison" },
              },
            },
          },
          fields: [
            { name: "valueHeadline", type: "text", admin: { description: "Prompts + Traditional-vs-OneHome comparison." } },
            { name: "valueSubhead", type: "text" },
            { name: "valuePrompt", type: "text" },
            {
              name: "valuePrompts",
              type: "array",
              minRows: 3,
              maxRows: 3,
              fields: [{ name: "question", type: "text", required: true }],
            },
            { name: "valueBlurb", type: "text" },
            {
              name: "comparisonRows",
              type: "array",
              minRows: 7,
              maxRows: 7,
              admin: { description: "Feeds ComparisonTable — Traditional vs OneHome." },
              fields: [
                { name: "traditional", type: "text", required: true },
                { name: "oneHome", type: "text", required: true },
              ],
            },
          ],
        },
        // ---- 8. Space -----------------------------------------------------
        {
          slug: "space",
          labels: { singular: "Space (3 ways)", plural: "Space (3 ways)" },
          admin: {
            images: { thumbnail: "/assets/admin-previews/space.png" },
            components: {
              Label: {
                path: "/components/payload/SectionRowLabel.tsx",
                exportName: "SectionRowLabel",
                clientProps: { blockType: "space", label: "Space (3 ways)" },
              },
            },
          },
          fields: [
            {
              name: "spaceHeadline",
              type: "text",
              admin: { description: 'The 3-ways-to-get-Space section. Two-tone, split on "/": e.g. "Three Ways To / Get Space.".' },
            },
            {
              name: "spaceSteps",
              type: "array",
              minRows: 3,
              maxRows: 3,
              admin: { description: "The 3 ways to get Space.", components: { RowLabel: "/components/payload/ImageRowLabel.tsx#ImageRowLabel" } },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "line", type: "text", required: true },
                { name: "image", type: "upload", relationTo: "media" },
              ],
            },
          ],
        },
        // ---- 9. Everything / Home Hub -------------------------------------
        {
          slug: "homeHub",
          labels: { singular: "Home Hub + Fleet", plural: "Home Hub + Fleet" },
          admin: {
            images: { thumbnail: "/assets/admin-previews/homeHub.png" },
            components: {
              Label: {
                path: "/components/payload/SectionRowLabel.tsx",
                exportName: "SectionRowLabel",
                clientProps: { blockType: "homeHub", label: "Home Hub + Fleet" },
              },
            },
          },
          fields: [
            { name: "homeHubHeadline", type: "text", admin: { description: "Home Hub + Fleet Services tiles + the included menu." } },
            { name: "homeHubBlurb", type: "text" },
            {
              name: "everythingTiles",
              type: "array",
              minRows: 8,
              maxRows: 8,
              admin: { description: "Home Hub + Fleet Services image tiles.", components: { RowLabel: "/components/payload/ImageRowLabel.tsx#ImageRowLabel" } },
              fields: [
                { name: "group", type: "select", required: true, options: ["Home Hub", "Fleet Services"] },
                { name: "label", type: "text", required: true },
                { name: "line", type: "text", required: true },
                { name: "image", type: "upload", relationTo: "media" },
              ],
            },
            { name: "fleetDetail", type: "text", admin: { description: 'The "Also: Tire Pressure Management ..." line.' } },
            {
              name: "clubMenu",
              type: "array",
              minRows: 3,
              maxRows: 3,
              admin: { description: 'The "Everything included" categorized menu.' },
              fields: [
                { name: "category", type: "text", required: true },
                { name: "items", type: "array", fields: [{ name: "item", type: "text", required: true }] },
              ],
            },
          ],
        },
        // ---- 10. Network --------------------------------------------------
        {
          slug: "network",
          labels: { singular: "Network / Map", plural: "Network / Map" },
          admin: {
            images: { thumbnail: "/assets/admin-previews/network.png" },
            components: {
              Label: {
                path: "/components/payload/SectionRowLabel.tsx",
                exportName: "SectionRowLabel",
                clientProps: { blockType: "network", label: "Network / Map" },
              },
            },
          },
          fields: [
            { name: "networkHeadline", type: "text", admin: { description: "Network copy + Memphis map (map rendering stays in code)." } },
            { name: "networkSubhead", type: "text" },
            {
              name: "networkParas",
              type: "array",
              fields: [{ name: "paragraph", type: "textarea", required: true }],
            },
            { name: "networkBlurb", type: "text" },
            {
              name: "planningMarkets",
              type: "array",
              admin: { description: "The city names shown as pills." },
              fields: [{ name: "market", type: "text", required: true }],
            },
            { name: "hubAddress", type: "text", admin: { description: 'e.g. "1212 MLK Dr".' } },
            { name: "hubAddressSub", type: "text", admin: { description: 'e.g. "West Memphis, AR — I-40 / I-55".' } },
            { name: "hubBody", type: "textarea" },
          ],
        },
        // ---- 11. FAQ ------------------------------------------------------
        {
          slug: "faq",
          labels: { singular: "FAQ", plural: "FAQ" },
          admin: {
            images: { thumbnail: "/assets/admin-previews/faq.png" },
            components: {
              Label: {
                path: "/components/payload/SectionRowLabel.tsx",
                exportName: "SectionRowLabel",
                clientProps: { blockType: "faq", label: "FAQ" },
              },
            },
          },
          fields: [
            {
              name: "faqItems",
              type: "array",
              minRows: 5,
              maxRows: 5,
              fields: [
                { name: "question", type: "text", required: true },
                { name: "answer", type: "textarea", required: true },
              ],
            },
          ],
        },
      ],
    },
  ],
};
