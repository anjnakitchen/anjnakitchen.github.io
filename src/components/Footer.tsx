import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/menu";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt=""
            width={64}
            height={46}
            className="h-10 w-auto opacity-90"
          />
          <div>
            <p className="font-display text-base text-white sm:text-lg">
              {business.name}
            </p>
            <p className="font-body text-xs text-white/45 sm:text-sm">
              {business.tagline}
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-body text-sm text-white/45">
          <Link href="/about/" className="transition-colors hover:text-white">
            About
          </Link>
          <Link href="/#menu" className="transition-colors hover:text-white">
            Menu
          </Link>
          <Link href="/gallery/" className="transition-colors hover:text-white">
            Gallery
          </Link>
          <Link href="/#reviews" className="transition-colors hover:text-white">
            Reviews
          </Link>
          <a
            href={business.phoneHref}
            className="transition-colors hover:text-white"
          >
            {business.phone}
          </a>
        </nav>

        <p className="text-center font-body text-xs text-white/35 sm:text-right sm:text-sm">
          © {new Date().getFullYear()} {business.legalName}
        </p>
      </div>
    </footer>
  );
}
