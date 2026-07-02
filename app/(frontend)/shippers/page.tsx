import type { Metadata } from "next";
import AudiencePage from "@/components/AudiencePage";

export const metadata: Metadata = {
  title: "LineHaul Station | For Shippers",
  description:
    "Cross-dock, staging, and relay capacity across a national network of first-class Service Centers — reliable throughput, coast to coast.",
};

export default function Page() {
  return <AudiencePage audience="shippers" />;
}
