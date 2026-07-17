"use client";

import { motion } from "framer-motion";
import { business } from "@/data/menu";
import {
  revealInView,
  revealInitial,
  revealTransition,
  revealViewport,
} from "@/lib/motion";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-16 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={revealInitial}
          whileInView={revealInView}
          viewport={revealViewport}
          transition={revealTransition}
          className="text-center"
        >
          <p className="font-body text-xs tracking-[0.3em] text-[#ff7aa8] uppercase">
            Get in touch
          </p>
          <h2 className="mt-3 font-display text-[2rem] leading-tight text-white sm:text-5xl">
            Let&apos;s plan your next feast.
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-base leading-relaxed text-white/60 sm:text-lg">
            Share your date, guest count, and favorite dishes — Anjna will help
            you build a menu that feels like home.
          </p>
        </motion.div>

        <motion.div
          initial={revealInitial}
          whileInView={revealInView}
          viewport={revealViewport}
          transition={{ ...revealTransition, delay: 0.06 }}
          className="mt-12 space-y-8 sm:mt-16"
        >
          <div className="text-center">
            <p className="font-body text-[11px] tracking-[0.28em] text-white/40 uppercase">
              Call or text
            </p>
            <a
              href={business.phoneHref}
              className="mt-2 inline-block font-display text-3xl text-white transition-colors hover:text-[#ffb08a] sm:text-5xl"
            >
              {business.phone}
            </a>
          </div>

          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="text-center">
            <p className="font-body text-[11px] tracking-[0.28em] text-white/40 uppercase">
              Email
            </p>
            <a
              href={business.emailHref}
              className="mt-2 inline-block break-all font-display text-xl text-white/90 transition-colors hover:text-[#ffb08a] sm:text-3xl"
            >
              {business.email}
            </a>
          </div>

          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="text-center">
            <p className="font-body text-[11px] tracking-[0.28em] text-white/40 uppercase">
              Follow
            </p>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-display text-xl text-white/90 transition-colors hover:text-[#ffb08a] sm:text-3xl"
            >
              Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
