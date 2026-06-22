import type { Metadata } from "next";
import AudiencePage from "@/components/AudiencePage";

export const metadata: Metadata = {
  title: "OneHome by LineHaul Station | For Drivers",
  description:
    "OneHome is a resort-quality, gated community built for tractor-trailers — pay only for the days you use it and keep more of what you earn.",
};

export default function Page() {
  return <AudiencePage audience="drivers" />;
}
