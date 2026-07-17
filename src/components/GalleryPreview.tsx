"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { galleryPhotos } from "@/data/social";

export function GalleryPreview() {
  const preview = galleryPhotos.slice(0, 4);

  return (
    <section className="relative px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-body text-xs tracking-[0.3em] text-[#ff7aa8] uppercase">
              Gallery
            </p>
            <h2 className="mt-3 font-display text-[2rem] leading-tight text-white sm:text-4xl">
              A taste of the table.
            </h2>
          </div>
          <Link
            href="/gallery/"
            className="font-body text-sm tracking-[0.14em] text-[#ffb08a] uppercase transition-colors hover:text-white"
          >
            View all photos →
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
          {preview.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.55 }}
              className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
