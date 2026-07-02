import type { Metadata } from "next";
import OneHomePage from "@/components/OneHomePage";

// ISR: re-render at most once a minute so /admin testimonial edits go live
// without a redeploy (same cadence as the blog + lib/testimonials.ts).
export const revalidate = 60;

export const metadata: Metadata = {
  title: "OneHome by LineHaul Station | For Drivers",
  description:
    "OneHome is a resort-quality, gated community built for tractor-trailers — pay only for the days you use it and keep more of what you earn.",
};

export default function Page() {
  return <OneHomePage />;
}
