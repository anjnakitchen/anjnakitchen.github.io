import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { SiteShell } from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Menu />
      <Contact />
    </SiteShell>
  );
}
