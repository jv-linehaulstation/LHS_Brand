import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static.wixstatic.com" },
    ],
  },
  async rewrites() {
    return [
      // Serve the self-contained LineHaul Station Brand System bundle
      // (public/brand-system/index.html) at a clean /brand-system URL.
      { source: "/brand-system", destination: "/brand-system/index.html" },
    ];
  },
};

export default withPayload(nextConfig);
