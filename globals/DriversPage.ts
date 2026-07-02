import type { GlobalConfig } from "payload";

// Site origin for the Live Preview iframe. localhost in dev; set
// NEXT_PUBLIC_SERVER_URL to the deployed Vercel domain in production.
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

// Full editable copy of the /drivers page, one tab per rendered section
// (mirrors the numbered section comments in components/OneHomePage.tsx).
// Read via lib/driversPage.ts (Local API + fallback to the current hardcoded
// copy in lib/onehome.ts ONEHOME + lib/audiences.ts audiences.drivers).
// The live /drivers page does NOT read this — it is wired only into the
// /drivers-cms-test review route via components/OneHomePageCmsTest.tsx.
//
// Two-tone headline convention: fields noted "split on /" render the text
// before the slash in white and the text after it in the accent colour, e.g.
// "Nothing To Lose / Everything To Gain". Keep the slash.
export const DriversPage: GlobalConfig = {
  slug: "drivers-page",
  label: "Drivers Page",
  admin: {
    group: "Drivers Page",
    // Live Preview: render /drivers-cms-test in an iframe next to the form and
    // update it in real time as fields change (no save). This global is a single
    // instance, so the URL is static — no dynamic slug needed.
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
      type: "tabs",
      tabs: [
        // ---- 1. Hero ------------------------------------------------------
        {
          label: "1 · Hero",
          fields: [
            { name: "heroVideoUrl", type: "text", admin: { description: "Full-bleed background video (mp4 URL)." } },
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
        // ---- 2. Welcome / Story ------------------------------------------
        {
          label: "2 · Welcome",
          fields: [
            { name: "coinImage", type: "upload", relationTo: "media", admin: { description: "Outriders coin (optional). Falls back to /assets/coin-outriders.png." } },
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
        // ---- 3. Membership Steps -----------------------------------------
        {
          label: "3 · Membership Steps",
          fields: [
            {
              name: "membershipSteps",
              type: "array",
              minRows: 3,
              maxRows: 3,
              admin: { description: "The 3 free-membership steps." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "line", type: "text", required: true },
                { name: "image", type: "upload", relationTo: "media" },
              ],
            },
          ],
        },
        // ---- 4. Join Free band -------------------------------------------
        {
          label: "4 · Join Free",
          fields: [
            {
              name: "joinFreeHeadline",
              type: "text",
              admin: { description: 'Two-tone, split on "/": e.g. "Claim Your Free / Driver Membership.".' },
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
        // ---- 5. Core / The Math ------------------------------------------
        {
          label: "5 · Core / Math",
          fields: [
            { name: "coreKicker", type: "text" },
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
          label: "6 · Amenities",
          fields: [
            { name: "amenitiesHeadline", type: "text" },
            { name: "amenitiesIntro", type: "textarea" },
            {
              name: "amenitySlides",
              type: "array",
              minRows: 8,
              maxRows: 8,
              admin: { description: "The 8 club amenities carousel slides." },
              fields: [
                { name: "image", type: "upload", relationTo: "media" },
                { name: "name", type: "text", required: true },
                { name: "spec", type: "text", required: true },
              ],
            },
            { name: "amenitiesFootnote", type: "text", admin: { description: 'e.g. Members call the 25,000 sq ft private drivers club "The Rig Carlton."' } },
          ],
        },
        // ---- 7. Value Comparison -----------------------------------------
        {
          label: "7 · Value",
          fields: [
            { name: "valueHeadline", type: "text" },
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
          label: "8 · Space",
          fields: [
            {
              name: "spaceHeadline",
              type: "text",
              admin: { description: 'Two-tone, split on "/": e.g. "Three Ways To / Get Space.".' },
            },
            {
              name: "spaceSteps",
              type: "array",
              minRows: 3,
              maxRows: 3,
              admin: { description: "The 3 ways to get Space." },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "line", type: "text", required: true },
                { name: "image", type: "upload", relationTo: "media" },
              ],
            },
          ],
        },
        // ---- 9. Everything / Home Hub ------------------------------------
        {
          label: "9 · Home Hub",
          fields: [
            { name: "homeHubHeadline", type: "text" },
            { name: "homeHubBlurb", type: "text" },
            {
              name: "everythingTiles",
              type: "array",
              minRows: 8,
              maxRows: 8,
              admin: { description: "Home Hub + Fleet Services image tiles." },
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
          label: "10 · Network",
          fields: [
            { name: "networkHeadline", type: "text" },
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
          label: "11 · FAQ",
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
