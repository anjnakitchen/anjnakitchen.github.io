"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/data/menu";

const links = [
  { href: "/about/", label: "About", match: "/about" },
  { href: "/#menu", label: "Food Menu", match: null },
  { href: "/#contact", label: "Contact", match: null },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const homeHref = pathname === "/" ? "#top" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-[rgba(8,4,18,0.94)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-8">
        <Link
          href={homeHref}
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
        >
          <Image
            src="/logo.png"
            alt=""
            width={64}
            height={46}
            className="h-8 w-auto shrink-0 drop-shadow-[0_0_18px_rgba(255,80,140,0.35)] transition-transform duration-500 group-hover:scale-105 sm:h-11"
          />
          <span className="truncate font-display text-base tracking-wide text-white/95 sm:text-xl">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive =
              link.match !== null && pathname.startsWith(link.match);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm tracking-[0.14em] uppercase transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="rounded-full bg-[linear-gradient(135deg,#ff4d9a_0%,#ff8a3d_100%)] px-5 py-2.5 font-body text-sm font-medium tracking-wide text-white shadow-[0_10px_30px_rgba(255,77,154,0.28)] transition-transform duration-300 hover:scale-[1.03]"
          >
            Inquire
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <Link
            href="/#menu"
            className="min-h-10 rounded-full bg-[linear-gradient(135deg,#ff4d9a_0%,#ff8a3d_100%)] px-3.5 py-2 font-body text-xs font-medium tracking-wide text-white uppercase"
          >
            Food Menu
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-nav-drawer"
            aria-label={open ? "Close site navigation" : "Open site navigation"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/90"
          >
            <span className="sr-only">Site navigation</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="site-nav-drawer"
          className="border-t border-white/10 px-4 py-4 md:hidden"
        >
          <p className="mb-3 font-body text-[10px] tracking-[0.22em] text-white/40 uppercase">
            Site pages
          </p>
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-xl px-3 font-body text-sm tracking-[0.12em] text-white/85 uppercase transition-colors hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[linear-gradient(135deg,#ff4d9a_0%,#ff8a3d_100%)] px-5 py-3.5 text-center font-body text-sm font-medium text-white"
            >
              Inquire
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
