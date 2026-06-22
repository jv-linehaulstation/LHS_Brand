import type { Metadata } from "next";
import AudiencePage from "@/components/AudiencePage";

export const metadata: Metadata = {
  title: "LineHaul Station | For Brokers",
  description:
    "Give the carriers you trust premium staging, cross-dock, and relay access across a national Hub network — without owning a single building.",
};

export default function Page() {
  return <AudiencePage audience="brokers" />;
}
