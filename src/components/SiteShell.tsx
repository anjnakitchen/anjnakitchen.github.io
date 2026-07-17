"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IntroProvider, useIntro } from "@/components/IntroContext";
import { IntroSplash } from "@/components/IntroSplash";
import { ScrollReset } from "@/components/ScrollReset";
import { Starfield } from "@/components/Starfield";
import { revealTransition } from "@/lib/motion";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={revealTransition}>
      <IntroProvider>
        <SiteShellInner>{children}</SiteShellInner>
      </IntroProvider>
    </MotionConfig>
  );
}

function SiteShellInner({ children }: { children: ReactNode }) {
  const { markComplete } = useIntro();

  return (
    <div className="site-shell">
      <ScrollReset />
      <IntroSplash onComplete={markComplete} />
      <Starfield />
      <div className="relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
