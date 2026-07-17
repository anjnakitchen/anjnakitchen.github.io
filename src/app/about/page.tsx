import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "About Anjna | Anjna's Kitchen",
  description:
    "Meet Anjna Verma, the heart of Anjna's Kitchen. Authentic vegetarian Indian catering for celebrations across Rhode Island.",
};

export default function About() {
  return (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  );
}
