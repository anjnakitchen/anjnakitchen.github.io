import { Contact } from "@/components/Contact";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { SiteShell } from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Menu />
      <GalleryPreview />
      <Reviews />
      <Contact />
    </SiteShell>
  );
}
