"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Transition, ViewportOptions } from "framer-motion";
import {
  revealInView,
  revealInitial,
  revealTransition,
  revealViewport,
} from "@/lib/motion";

type IntroContextValue = {
  complete: boolean;
  markComplete: () => void;
};

const IntroContext = createContext<IntroContextValue>({
  complete: true,
  markComplete: () => {},
});

export function IntroProvider({ children }: { children: ReactNode }) {
  const [complete, setComplete] = useState(false);

  return (
    <IntroContext.Provider
      value={{ complete, markComplete: () => setComplete(true) }}
    >
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  return useContext(IntroContext);
}

/** Scroll fade-in that waits until the intro splash has finished. */
export function useScrollReveal(override?: Transition) {
  const { complete } = useIntro();

  return {
    initial: revealInitial,
    animate: complete ? undefined : revealInitial,
    whileInView: complete ? revealInView : undefined,
    viewport: complete ? revealViewport : ({ once: true } satisfies ViewportOptions),
    transition: { ...revealTransition, ...override },
  };
}
