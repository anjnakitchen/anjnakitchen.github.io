"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { business } from "@/data/menu";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pb-16 pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(255,70,140,0.22),transparent_55%),radial-gradient(ellipse_at_70%_80%,rgba(255,120,50,0.14),transparent_50%),radial-gradient(ellipse_at_20%_70%,rgba(90,40,160,0.35),transparent_45%)]"
      />
      <div
        aria-hidden
        className="hero-aurora pointer-events-none absolute -left-1/4 top-1/4 h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(255,90,150,0.18),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden
        className="hero-aurora-delay pointer-events-none absolute -right-1/4 bottom-0 h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(255,140,60,0.14),transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 scale-110 rounded-full bg-[radial-gradient(circle,rgba(255,90,140,0.35),transparent_65%)] blur-2xl" />
          <Image
            src="/logo.png"
            alt="Anjna's Kitchen — Serves Authentic Indian Food"
            width={520}
            height={378}
            priority
            className="relative mx-auto h-auto w-[min(88vw,460px)] drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:w-[500px]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl font-display text-2xl leading-snug text-white/90 sm:text-3xl"
        >
          Homestyle Indian catering, crafted with care by {business.owner}.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.85 }}
          className="mt-4 max-w-md font-body text-base leading-relaxed text-white/60 sm:text-lg"
        >
          From festive trays to full celebrations — authentic flavors for every
          gathering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.85 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="rounded-full bg-[linear-gradient(135deg,#ff4d9a_0%,#ff8a3d_100%)] px-8 py-3.5 font-body text-sm font-semibold tracking-[0.08em] text-white uppercase shadow-[0_14px_40px_rgba(255,77,154,0.35)] transition-transform duration-300 hover:scale-[1.04]"
          >
            Explore the Menu
          </a>
          <Link
            href="/about/"
            className="rounded-full border border-white/25 bg-white/5 px-8 py-3.5 font-body text-sm tracking-[0.08em] text-white/90 uppercase backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
          >
            Meet Anjna
          </Link>
        </motion.div>

        <motion.a
          href="#menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70"
          aria-label="Scroll to menu"
        >
          <span className="font-body text-[11px] tracking-[0.28em] uppercase">
            Scroll
          </span>
          <span className="scroll-cue h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </motion.a>
      </div>
    </section>
  );
}
