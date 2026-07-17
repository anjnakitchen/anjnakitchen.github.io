import Image from "next/image";
import Link from "next/link";
import { business } from "@/data/menu";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt=""
            width={64}
            height={46}
            className="h-11 w-auto opacity-90"
          />
          <div>
            <p className="font-display text-lg text-white">{business.name}</p>
            <p className="font-body text-sm text-white/45">{business.tagline}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 sm:items-end">
          <div className="flex flex-wrap items-center justify-center gap-4 font-body text-sm text-white/50">
            <Link href="/about/" className="transition-colors hover:text-white">
              About
            </Link>
            <a
              href={business.phoneHref}
              className="transition-colors hover:text-white"
            >
              {business.phone}
            </a>
            <a
              href={business.emailHref}
              className="transition-colors hover:text-white"
            >
              {business.email}
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Facebook
            </a>
          </div>
          <p className="font-body text-center text-sm text-white/40 sm:text-right">
            © {new Date().getFullYear()} {business.legalName}
            <br />
            Authentic Indian catering by {business.owner}
          </p>
        </div>
      </div>
    </footer>
  );
}
