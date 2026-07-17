"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  formatMoney,
  menuCategories,
  type MenuCategory,
} from "@/data/menu";

function navLabel(title: string) {
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
    <li className="menu-row border-b border-white/10 py-3.5 sm:grid sm:grid-cols-[1.4fr_repeat(3,5rem)] sm:items-baseline sm:gap-x-4 sm:py-4">
      <div className="min-w-0">
        <p className="font-body text-[0.95rem] leading-snug text-white/90 sm:text-base">
          {name}
        </p>
        {note ? (
          <p className="mt-0.5 font-body text-sm text-white/40">{note}</p>
        ) : null}
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 sm:mt-0 sm:contents">
        <div className="rounded-lg bg-white/[0.04] px-2 py-2 text-center sm:bg-transparent sm:px-0 sm:py-0 sm:text-right">
          <p className="font-body text-[10px] tracking-wide text-white/40 uppercase sm:hidden">
            Half
          </p>
          <p className="font-body text-sm text-white/80 sm:text-white/70">
            {formatMoney(half)}
          </p>
        </div>
        <div className="rounded-lg bg-white/[0.04] px-2 py-2 text-center sm:bg-transparent sm:px-0 sm:py-0 sm:text-right">
          <p className="font-body text-[10px] tracking-wide text-white/40 uppercase sm:hidden">
            Med
          </p>
          <p className="font-body text-sm text-white/80 sm:text-white/70">
            {formatMoney(medium)}
          </p>
        </div>
        <div className="rounded-lg bg-white/[0.04] px-2 py-2 text-center sm:bg-transparent sm:px-0 sm:py-0 sm:text-right">
          <p className="font-body text-[10px] tracking-wide text-white/40 uppercase sm:hidden">
            Full
          </p>
          <p className="font-body text-sm text-[#ffb08a] sm:text-white/70">
            {formatMoney(full)}
          </p>
        </div>
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
    <li className="menu-row flex min-h-12 items-baseline justify-between gap-4 border-b border-white/10 py-3.5 sm:gap-6 sm:py-4">
      <div className="min-w-0">
        <p className="font-body text-[0.95rem] leading-snug text-white/90 sm:text-base">
          {name}
        </p>
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

function TrayHeader() {
  return (
    <div className="mb-2 hidden grid-cols-3 gap-6 font-body text-[11px] tracking-[0.18em] text-white/40 uppercase sm:grid sm:grid-cols-[1.4fr_repeat(3,5rem)]">
      <span className="sr-only">Item</span>
      <span className="col-start-2 text-right">Half</span>
      <span className="text-right">Medium</span>
      <span className="text-right">Full</span>
    </div>
  );
}

function CategoryBlock({ category }: { category: MenuCategory }) {
  return (
    <motion.section
      id={category.id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="scroll-mt-36 sm:scroll-mt-40"
    >
      <div className="mb-5 border-b border-white/10 pb-4 sm:mb-6 sm:pb-5">
        <h3 className="font-display text-[1.75rem] leading-tight text-white sm:text-4xl">
          {category.title}
        </h3>
        {"subtitle" in category && category.subtitle ? (
          <p className="mt-1 font-body text-sm tracking-wide text-white/45">
            {category.subtitle}
          </p>
        ) : null}
      </div>

      {category.pricing === "tray" ? (
        <>
          <TrayHeader />
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
        </>
      ) : null}

      {category.pricing === "piece" ? (
        <>
          {category.minimumNote ? (
            <p className="mb-3 font-body text-xs tracking-wide text-[#ff7aa8]">
              {category.minimumNote}
            </p>
          ) : null}
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
        </>
      ) : null}

      {category.pricing === "combo" ? (
        <>
          {category.trayItems.length > 0 ? (
            <>
              <TrayHeader />
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
            </>
          ) : null}
          <ul>
            {category.comboItems.map((item) => (
              <li
                key={item.name}
                className="menu-row flex min-h-12 items-baseline justify-between gap-4 border-b border-white/10 py-3.5 sm:gap-6 sm:py-4"
              >
                <div>
                  <p className="font-body text-[0.95rem] text-white/90 sm:text-base">
                    {item.name}
                  </p>
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

      {category.pricing === "appetizers" ? (
        <>
          <p className="mb-3 font-body text-xs tracking-[0.18em] text-white/45 uppercase">
            {category.traySubtitle}
          </p>
          <TrayHeader />
          <ul className="mb-10">
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
          <div className="mb-4 border-t border-white/10 pt-8">
            <h4 className="font-display text-2xl text-white sm:text-3xl">
              {category.pieceSubtitle}
            </h4>
            <p className="mt-1 font-body text-xs tracking-wide text-[#ff7aa8]">
              {category.pieceMinimumNote}
            </p>
          </div>
          <ul>
            {category.pieceItems.map((item) => (
              <PieceRow
                key={item.name}
                name={item.name}
                price={item.price}
                note={item.note}
                unit={item.unit}
              />
            ))}
          </ul>
        </>
      ) : null}

      {category.pricing === "curries" ? (
        <>
          <p className="mb-3 font-body text-xs tracking-[0.18em] text-white/45 uppercase">
            {category.paneerSubtitle}
          </p>
          <TrayHeader />
          <ul className="mb-10">
            {category.paneerItems.map((item) => (
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
          <div className="mb-4 border-t border-white/10 pt-8">
            <h4 className="font-display text-2xl text-white sm:text-3xl">
              {category.sabjiSubtitle}
            </h4>
            <p className="mt-1 font-body text-xs tracking-[0.18em] text-white/45 uppercase">
              Half · Medium · Full tray
            </p>
          </div>
          <TrayHeader />
          <ul>
            {category.sabjiItems.map((item) => (
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
  const tablistRef = useRef<HTMLDivElement | null>(null);
  const didMountPills = useRef(false);

  const syncActiveFromScroll = useCallback(() => {
    if (Date.now() < lockUntil.current) return;
    const markerY = Math.min(160, window.innerHeight * 0.28);
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

  // Keep the active pill visible inside the horizontal scroller only —
  // never call scrollIntoView on the document (that was jumping the page mid-load).
  useEffect(() => {
    if (!didMountPills.current) {
      didMountPills.current = true;
      return;
    }
    const scroller = tablistRef.current;
    const pill = pillRefs.current[active];
    if (!scroller || !pill) return;
    const scrollerRect = scroller.getBoundingClientRect();
    const pillRect = pill.getBoundingClientRect();
    const nextLeft =
      scroller.scrollLeft +
      (pillRect.left - scrollerRect.left) -
      (scrollerRect.width - pillRect.width) / 2;
    scroller.scrollTo({ left: Math.max(0, nextLeft), behavior: "smooth" });
  }, [active]);

  const selectCategory = (id: string) => {
    setActive(id);
    lockUntil.current = Date.now() + 900;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="menu" className="relative px-4 py-16 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-2xl sm:mb-12"
        >
          <p className="font-body text-xs tracking-[0.3em] text-[#ff7aa8] uppercase">
            Catering menu 2026
          </p>
          <h2 className="mt-3 font-display text-[2rem] leading-tight text-white sm:mt-4 sm:text-5xl lg:text-6xl">
            A full table of favorites.
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-white/60 sm:mt-5 sm:text-lg">
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

        <div className="sticky top-14 z-20 -mx-4 mb-8 border-y border-white/10 bg-[rgba(8,4,18,0.96)] px-3 py-2.5 backdrop-blur-xl sm:top-16 sm:mx-0 sm:mb-10 sm:rounded-full sm:border sm:px-3 sm:py-3 lg:top-20">
          <div
            ref={tablistRef}
            className="flex gap-1 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Food menu categories"
          >
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
                      ? "min-h-10 shrink-0 rounded-full bg-[linear-gradient(135deg,#ff4d9a_0%,#ff8a3d_100%)] px-3.5 py-2 font-body text-xs tracking-wide whitespace-nowrap text-white shadow-[0_8px_24px_rgba(255,77,154,0.25)] transition-all duration-300 sm:px-4"
                      : "min-h-10 shrink-0 rounded-full px-3.5 py-2 font-body text-xs tracking-wide whitespace-nowrap text-white/55 transition-all duration-300 hover:bg-white/5 hover:text-white sm:px-4"
                  }
                >
                  {navLabel(category.title)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-14 sm:space-y-20">
          {menuCategories.map((category) => (
            <CategoryBlock key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
