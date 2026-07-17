"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/data/menu";

const links = [
  { href: "/about/", label: "About", match: "/about" },
  { href: "/#menu", label: "Food Menu", match: null },
  { href: "/gallery/", label: "Gallery", match: "/gallery" },
  { href: "/#reviews", label: "Reviews", match: null },
  { href: "/#contact", label: "Contact", match: null },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const homeHref = pathname === "/" ? "#top" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-[rgba(8,4,18,0.96)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href={homeHref}
          className="group flex min-w-0 items-center"
          onClick={() => setOpen(false)}
          aria-label={business.name}
        >
          <Image
            src="/logo.png"
            alt=""
            width={72}
            height={52}
            className="h-9 w-auto shrink-0 drop-shadow-[0_0_14px_rgba(255,80,140,0.3)] transition-transform duration-500 group-hover:scale-105 sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => {
            const isActive =
              link.match !== null && pathname.startsWith(link.match);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-xs tracking-[0.14em] uppercase transition-colors duration-300 xl:text-sm ${
                  isActive ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={business.phoneHref}
            className="rounded-full bg-[linear-gradient(135deg,#ff4d9a_0%,#ff8a3d_100%)] px-5 py-2.5 font-body text-sm font-medium tracking-wide text-white shadow-[0_10px_30px_rgba(255,77,154,0.28)] transition-transform duration-300 hover:scale-[1.03]"
          >
            Call
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-nav-drawer"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/90 lg:hidden"
        >
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

      {open ? (
        <div
          id="site-nav-drawer"
          className="max-h-[calc(100svh-3.5rem)] overflow-y-auto border-t border-white/10 px-4 py-5 lg:hidden"
        >
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-xl px-3 font-body text-sm tracking-[0.12em] text-white/90 uppercase transition-colors hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 space-y-3 border-t border-white/10 pt-5">
            <a
              href={business.phoneHref}
              className="flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff4d9a_0%,#ff8a3d_100%)] px-5 font-body text-sm font-medium text-white"
            >
              Call {business.phone}
            </a>
            <a
              href={business.emailHref}
              className="flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 font-body text-sm text-white/85"
            >
              Email
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
