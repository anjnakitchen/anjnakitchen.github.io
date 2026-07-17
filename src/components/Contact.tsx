"use client";

import { motion } from "framer-motion";
import { business } from "@/data/menu";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-16 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[1.75rem] border border-white/10 px-5 py-10 sm:rounded-[2.5rem] sm:px-14 sm:py-20"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,77,154,0.22)_0%,rgba(40,16,70,0.55)_45%,rgba(255,138,61,0.18)_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,140,80,0.35),transparent_70%)] blur-2xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12">
            <div>
              <p className="font-body text-xs tracking-[0.3em] text-[#ffc4a8] uppercase">
                Let&apos;s cook together
              </p>
              <h2 className="mt-3 font-display text-[2rem] leading-tight text-white sm:mt-4 sm:text-5xl lg:text-6xl">
                Ready to plan your next feast?
              </h2>
              <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
                Reach out with your date, guest count, and favorite dishes —
                Anjna will help you build a menu that feels abundant and true
                to home.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <a
                href={business.phoneHref}
                className="group flex min-h-14 flex-col justify-center rounded-2xl border border-white/15 bg-black/25 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-black/35 sm:px-6 sm:py-5"
              >
                <span className="font-body text-xs tracking-[0.22em] text-white/45 uppercase">
                  Call / Text
                </span>
                <span className="mt-1 font-display text-xl text-white transition-colors group-hover:text-[#ffb08a] sm:mt-2 sm:text-2xl">
                  {business.phone}
                </span>
              </a>
              <a
                href={business.emailHref}
                className="group flex min-h-14 flex-col justify-center rounded-2xl border border-white/15 bg-black/25 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-black/35 sm:px-6 sm:py-5"
              >
                <span className="font-body text-xs tracking-[0.22em] text-white/45 uppercase">
                  Email
                </span>
                <span className="mt-1 break-all font-display text-lg text-white transition-colors group-hover:text-[#ffb08a] sm:mt-2 sm:text-2xl">
                  {business.email}
                </span>
              </a>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-14 flex-col justify-center rounded-2xl border border-white/15 bg-black/25 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-black/35 sm:px-6 sm:py-5"
              >
                <span className="font-body text-xs tracking-[0.22em] text-white/45 uppercase">
                  Facebook
                </span>
                <span className="mt-1 font-display text-lg text-white transition-colors group-hover:text-[#ffb08a] sm:mt-2 sm:text-2xl">
                  Anjna&apos;s Kitchen LLC
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
