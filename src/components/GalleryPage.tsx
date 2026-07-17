"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryPhotos } from "@/data/social";
import { business } from "@/data/menu";

export function GalleryPage() {
  return (
    <>
      <section className="relative px-4 pb-10 pt-24 sm:px-8 sm:pb-14 sm:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,70,140,0.18),transparent_55%)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative mx-auto max-w-6xl text-center"
        >
          <p className="font-body text-xs tracking-[0.3em] text-[#ff7aa8] uppercase">
            From the table
          </p>
          <h1 className="mt-3 font-display text-[2.25rem] leading-tight text-white sm:text-5xl lg:text-6xl">
            Moments from Anjna&apos;s kitchen.
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-white/60 sm:text-lg">
            A peek at the food she prepares for celebrations — pulled from her{" "}
            <a
              href={business.facebookPhotos}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffb08a] underline decoration-[#ffb08a]/35 underline-offset-4 hover:text-white"
            >
              Facebook photos
            </a>
            .
          </p>
        </motion.div>
      </section>

      <section className="relative px-3 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto columns-2 gap-2 sm:columns-3 sm:gap-3 lg:max-w-6xl lg:gap-4">
          {galleryPhotos.map((photo, index) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: Math.min(index * 0.03, 0.18), duration: 0.4 }}
              className="mb-2 break-inside-avoid overflow-hidden rounded-xl sm:mb-3 sm:rounded-2xl lg:mb-4"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={800}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 360px"
              />
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 px-4 text-center sm:mt-16">
          <Link
            href="/#menu"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff4d9a_0%,#ff8a3d_100%)] px-8 font-body text-sm font-semibold tracking-[0.08em] text-white uppercase"
          >
            Explore the Menu
          </Link>
          <a
            href={business.facebookPhotos}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm tracking-[0.12em] text-white/50 uppercase transition-colors hover:text-white"
          >
            More on Facebook →
          </a>
        </div>
      </section>
    </>
  );
}
