"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IntroSplash } from "@/components/IntroSplash";
import { ScrollReset } from "@/components/ScrollReset";
import { Starfield } from "@/components/Starfield";
import { revealTransition } from "@/lib/motion";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={revealTransition}>
      <div className="site-shell">
        <ScrollReset />
        <IntroSplash />
        <Starfield />
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
