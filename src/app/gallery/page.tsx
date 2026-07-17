import type { Metadata } from "next";
import { GalleryPage } from "@/components/GalleryPage";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Gallery | Anjna's Kitchen",
  description:
    "Photos from Anjna's Kitchen. Authentic Indian catering for celebrations.",
};

export default function Gallery() {
  return (
    <SiteShell>
      <GalleryPage />
    </SiteShell>
  );
}
