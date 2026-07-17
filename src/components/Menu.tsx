"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  formatMoney,
  menuCategories,
  type MenuCategory,
} from "@/data/menu";

function shortTitle(title: string) {
  if (title.startsWith("Appetizers -")) return "By the Piece";
  if (title.startsWith("Mithai")) return "Mithai";
  return title;
}

function TrayRow({
  name,
  half,
  medium,
  full,
  note,
}: {
  name: string;
  half: number;
  medium: number;
  full: number;
  note?: string;
}) {
  return (
    <li className="menu-row grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-white/10 py-4 sm:grid-cols-[1.4fr_repeat(3,5rem)]">
      <div className="min-w-0">
        <p className="font-body text-base text-white/90">{name}</p>
        {note ? (
          <p className="mt-0.5 font-body text-sm text-white/40">{note}</p>
        ) : null}
      </div>
      <div className="hidden text-right font-body text-sm text-white/70 sm:block">
        {formatMoney(half)}
      </div>
      <div className="hidden text-right font-body text-sm text-white/70 sm:block">
        {formatMoney(medium)}
      </div>
      <div className="text-right font-body text-sm text-[#ffb08a] sm:text-white/70">
        <span className="text-white/40 sm:hidden">Full </span>
        {formatMoney(full)}
        <span className="mt-1 block font-body text-[11px] text-white/35 sm:hidden">
          Half {formatMoney(half)} / Med {formatMoney(medium)}
        </span>
      </div>
    </li>
  );
}

function PieceRow({
  name,
  price,
  note,
  unit,
}: {
  name: string;
  price: number;
  note?: string;
  unit?: "pc" | "lb";
}) {
  const suffix = unit === "lb" ? "/lb" : unit === "pc" ? "/pc" : "";
  return (
    <li className="menu-row flex items-baseline justify-between gap-6 border-b border-white/10 py-4">
      <div className="min-w-0">
        <p className="font-body text-base text-white/90">{name}</p>
        {note ? (
          <p className="mt-0.5 font-body text-sm text-white/40">{note}</p>
        ) : null}
      </div>
      <p className="shrink-0 font-body text-sm text-[#ffb08a]">
        {formatMoney(price)}
        {suffix}
      </p>
    </li>
  );
}

function CategoryBlock({ category }: { category: MenuCategory }) {
  const showTrayHeaders =
    category.pricing === "tray" ||
    (category.pricing === "combo" && category.trayItems.length > 0);

  return (
    <motion.section
      id={category.id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-40"
    >
      <div className="mb-6 flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-display text-3xl text-white sm:text-4xl">
            {category.title}
          </h3>
          {category.subtitle ? (
            <p className="mt-1 font-body text-sm tracking-wide text-white/45">
              {category.subtitle}
            </p>
          ) : null}
        </div>
        {showTrayHeaders ? (
          <div className="hidden grid-cols-3 gap-6 font-body text-[11px] tracking-[0.18em] text-white/40 uppercase sm:grid">
            <span className="text-right">Half</span>
            <span className="text-right">Medium</span>
            <span className="text-right">Full</span>
          </div>
        ) : null}
        {category.pricing === "piece" && category.minimumNote ? (
          <p className="font-body text-xs tracking-wide text-[#ff7aa8]">
            {category.minimumNote}
          </p>
        ) : null}
      </div>

      {category.pricing === "tray" ? (
        <ul>
          {category.items.map((item) => (
            <TrayRow
              key={item.name}
              name={item.name}
              half={item.prices.half}
              medium={item.prices.medium}
              full={item.prices.full}
              note={item.note}
            />
          ))}
        </ul>
      ) : null}

      {category.pricing === "piece" ? (
        <ul>
          {category.items.map((item) => (
            <PieceRow
              key={item.name}
              name={item.name}
              price={item.price}
              note={item.note}
              unit={item.unit}
            />
          ))}
        </ul>
      ) : null}

      {category.pricing === "combo" ? (
        <>
          {category.trayItems.length > 0 ? (
            <ul className="mb-8">
              {category.trayItems.map((item) => (
                <TrayRow
                  key={item.name}
                  name={item.name}
                  half={item.prices.half}
                  medium={item.prices.medium}
                  full={item.prices.full}
                  note={item.note}
                />
              ))}
            </ul>
          ) : null}
          <ul>
            {category.comboItems.map((item) => (
              <li
                key={item.name}
                className="menu-row flex items-baseline justify-between gap-6 border-b border-white/10 py-4"
              >
                <div>
                  <p className="font-body text-base text-white/90">{item.name}</p>
                  {item.detail ? (
                    <p className="mt-0.5 font-body text-sm text-white/40">
                      {item.detail}
                    </p>
                  ) : null}
                </div>
                <p className="shrink-0 font-body text-sm text-[#ffb08a]">
                  {formatMoney(item.price)}
                </p>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </motion.section>
  );
}

function getActiveCategoryId(markerY: number) {
  let current = menuCategories[0]?.id ?? "";
  for (const category of menuCategories) {
    const el = document.getElementById(category.id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= markerY) {
      current = category.id;
    }
  }
  return current;
}

export function Menu() {
  const [active, setActive] = useState(menuCategories[0]?.id ?? "");
  const lockUntil = useRef(0);
  const pillRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const syncActiveFromScroll = useCallback(() => {
    if (Date.now() < lockUntil.current) return;
    const markerY = Math.min(180, window.innerHeight * 0.28);
    const next = getActiveCategoryId(markerY);
    setActive((prev) => (prev === next ? prev : next));
  }, []);

  useEffect(() => {
    syncActiveFromScroll();
    window.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    window.addEventListener("resize", syncActiveFromScroll);
    return () => {
      window.removeEventListener("scroll", syncActiveFromScroll);
      window.removeEventListener("resize", syncActiveFromScroll);
    };
  }, [syncActiveFromScroll]);

  useEffect(() => {
    const pill = pillRefs.current[active];
    pill?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  const selectCategory = (id: string) => {
    setActive(id);
    lockUntil.current = Date.now() + 900;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <section id="menu" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
          className="mb-12 max-w-2xl"
        >
          <p className="font-body text-xs tracking-[0.3em] text-[#ff7aa8] uppercase">
            Catering menu 2026
          </p>
          <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            A full table of favorites.
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-white/60">
            Browse trays and party packages below, or{" "}
            <a
              href="/menu-2026.pdf"
              className="text-[#ffb08a] underline decoration-[#ffb08a]/40 underline-offset-4 transition-colors hover:text-white"
            >
              download the PDF menu
            </a>
            .
          </p>
        </motion.div>

        <div className="sticky top-16 z-20 -mx-5 mb-10 overflow-x-auto border-y border-white/10 bg-[rgba(8,4,18,0.88)] px-5 py-3 backdrop-blur-xl sm:top-20 sm:mx-0 sm:rounded-full sm:border sm:px-3">
          <div className="flex min-w-max gap-1" role="tablist" aria-label="Menu categories">
            {menuCategories.map((category) => {
              const isActive = active === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  ref={(node) => {
                    pillRefs.current[category.id] = node;
                  }}
                  onClick={() => selectCategory(category.id)}
                  className={
                    isActive
                      ? "rounded-full bg-[linear-gradient(135deg,#ff4d9a_0%,#ff8a3d_100%)] px-4 py-2 font-body text-xs tracking-wide whitespace-nowrap text-white shadow-[0_8px_24px_rgba(255,77,154,0.25)] transition-all duration-300"
                      : "rounded-full px-4 py-2 font-body text-xs tracking-wide whitespace-nowrap text-white/55 transition-all duration-300 hover:bg-white/5 hover:text-white"
                  }
                >
                  {shortTitle(category.title)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {menuCategories.map((category) => (
            <CategoryBlock key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
