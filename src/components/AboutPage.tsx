"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { business } from "@/data/menu";

const moments = [
  {
    label: "The cook",
    title: "Recipes carried from home",
    body: "Anjna Verma grew up in a kitchen where every occasion had its own aroma — fresh spices toasted by hand, dough rolled for a crowd, sweets simmered until they tasted like celebration. That same instinct shapes every tray she prepares today.",
  },
  {
    label: "The craft",
    title: "Made to order, never rushed",
    body: "Whether it is a quiet family puja or a wedding feast, Anjna builds menus around your guests and your traditions. Dishes are cooked fresh for your date — layered with the comfort of home and the polish of a catered table.",
  },
  {
    label: "The table",
    title: "Gatherings across Rhode Island",
    body: "From birthdays and office lunches to festive weekends, Anjna's Kitchen brings authentic vegetarian Indian food to the celebrations that matter. Tell her the occasion — she will help you fill the table.",
  },
];

export function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,70,140,0.2),transparent_50%),radial-gradient(ellipse_at_80%_60%,rgba(255,120,50,0.12),transparent_45%)]"
        />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <Image
              src="/logo.png"
              alt="Anjna's Kitchen logo"
              width={480}
              height={348}
              priority
              className="h-auto w-[min(85vw,420px)] drop-shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-xs tracking-[0.3em] text-[#ff7aa8] uppercase">
              About Anjna
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              A mother&apos;s kitchen, opened for your celebration.
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-white/65">
              Behind every tray from {business.name} is {business.owner} —
              cooking the way she always has for the people she loves, now
              shared with families and friends who want food that tastes like
              home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#menu"
                className="rounded-full bg-[linear-gradient(135deg,#ff4d9a_0%,#ff8a3d_100%)] px-7 py-3 font-body text-sm font-semibold tracking-[0.08em] text-white uppercase shadow-[0_14px_40px_rgba(255,77,154,0.3)] transition-transform duration-300 hover:scale-[1.03]"
              >
                View the Menu
              </Link>
              <a
                href={business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/25 bg-white/5 px-7 py-3 font-body text-sm tracking-[0.08em] text-white/90 uppercase backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
              >
                Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl space-y-16 sm:space-y-24">
          {moments.map((moment, index) => (
            <motion.article
              key={moment.label}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.05,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-4 border-t border-white/10 pt-12 sm:gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
            >
              <div>
                <p className="font-body text-xs tracking-[0.28em] text-[#ff7aa8] uppercase">
                  {moment.label}
                </p>
                <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                  {moment.title}
                </h2>
              </div>
              <p className="font-body text-lg leading-relaxed text-white/60">
                {moment.body}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative px-4 pb-20 sm:px-8 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <h2 className="mt-10 font-display text-3xl text-white sm:text-4xl">
            Say hello
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-base leading-relaxed text-white/60">
            Planning an event? Reach out — Anjna would love to cook for you.
          </p>
          <div className="mt-8 space-y-6">
            <a
              href={business.phoneHref}
              className="block font-display text-2xl text-white transition-colors hover:text-[#ffb08a] sm:text-3xl"
            >
              {business.phone}
            </a>
            <a
              href={business.emailHref}
              className="block break-all font-display text-lg text-white/85 transition-colors hover:text-[#ffb08a] sm:text-2xl"
            >
              {business.email}
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-sm tracking-[0.14em] text-[#ffb08a] uppercase transition-colors hover:text-white"
            >
              Facebook →
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
