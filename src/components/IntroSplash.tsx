"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Starfield } from "@/components/Starfield";

const INTRO_KEY = "anjna-intro-seen";
const INTRO_DURATION_MS = 5800;
const FADE_DURATION_MS = 800;

type IntroPhase = "playing" | "fading" | "done";

export function IntroSplash() {
  const [phase, setPhase] = useState<IntroPhase>("playing");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const seen = sessionStorage.getItem(INTRO_KEY);

    if (seen || reducedMotion) {
      setPhase("done");
      return;
    }

    document.body.style.overflow = "hidden";

    const endIntro = window.setTimeout(() => {
      sessionStorage.setItem(INTRO_KEY, "1");
      setPhase("fading");
    }, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(endIntro);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "fading") return;

    const unlock = window.setTimeout(() => {
      document.body.style.overflow = "";
      setPhase("done");
    }, FADE_DURATION_MS);

    return () => window.clearTimeout(unlock);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <motion.div
      className="intro-splash fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "fading" ? 0 : 1 }}
      transition={{ duration: FADE_DURATION_MS / 1000, ease: "easeInOut" }}
      aria-hidden={phase === "fading"}
      aria-label="Loading Anjna's Kitchen"
      role="presentation"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(90,30,120,0.45),transparent_50%),linear-gradient(180deg,#080412_0%,#12081f_35%,#0a0514_70%,#080412_100%)]"
      />
      <Starfield />

      <div className="intro-logo-stage relative z-10 flex flex-col items-center px-6">
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 scale-110 rounded-full bg-[radial-gradient(circle,rgba(255,90,140,0.28),transparent_72%)] blur-xl"
          />
          <div className="intro-logo-tilt">
            <div className="intro-logo-spin relative w-[min(72vw,340px)] sm:w-[400px]">
              <div className="intro-logo-face">
                <Image
                  src="/logo.png"
                  alt=""
                  width={520}
                  height={378}
                  priority
                  className="intro-logo-image h-auto w-full"
                />
              </div>
              <div className="intro-logo-face intro-logo-face-back" aria-hidden>
                <Image
                  src="/logo.png"
                  alt=""
                  width={520}
                  height={378}
                  priority
                  className="intro-logo-image h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{
            opacity: phase === "fading" ? 0 : 1,
            y: phase === "fading" ? 4 : 0,
          }}
          transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
          className="mt-8 font-display text-[1.05rem] tracking-[0.18em] text-white/50 sm:mt-10 sm:text-lg"
        >
          Good things take time
        </motion.p>
      </div>
    </motion.div>
  );
}
