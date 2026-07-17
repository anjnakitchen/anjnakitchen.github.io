"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/data/menu";

const links = [
  { href: "/about/", label: "About", match: "/about" },
  { href: "/#menu", label: "Menu", match: null },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-[rgba(8,4,18,0.9)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link href={homeHref} className="group flex items-center gap-3">
          <Image
            src="/logo.png"
            alt=""
            width={64}
            height={46}
            className="h-9 w-auto drop-shadow-[0_0_18px_rgba(255,80,140,0.35)] transition-transform duration-500 group-hover:scale-105 sm:h-11"
          />
          <span className="font-display text-lg tracking-wide text-white/95 sm:text-xl">
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

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/about/"
            className="rounded-full border border-white/20 px-3 py-1.5 font-body text-xs tracking-wide text-white/85 uppercase"
          >
            About
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-white/20 px-3 py-1.5 font-body text-xs tracking-wide text-white/85 uppercase"
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm tracking-[0.14em] text-white/80 uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[linear-gradient(135deg,#ff4d9a_0%,#ff8a3d_100%)] px-5 py-2.5 text-center font-body text-sm font-medium text-white"
            >
              Inquire
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
