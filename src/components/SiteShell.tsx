import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Starfield } from "@/components/Starfield";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <Starfield />
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
