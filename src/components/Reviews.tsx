"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews, reviewsSummary } from "@/data/social";
import { business } from "@/data/menu";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const total = reviews.length;
  const review = reviews[index];

  useEffect(() => {
    if (total <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 8000);
    return () => window.clearInterval(id);
  }, [total]);

  return (
    <section id="reviews" className="relative px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-[0.3em] text-[#ff7aa8] uppercase">
            From Facebook
          </p>
          <h2 className="mt-3 font-display text-[2rem] leading-tight text-white sm:text-5xl">
            Loved by the people she cooks for.
          </h2>
          <p className="mt-4 font-body text-sm tracking-wide text-white/50 sm:text-base">
            {reviewsSummary.recommendRate} recommend · {reviewsSummary.reviewCount}{" "}
            reviews
          </p>
        </motion.div>

        <div className="relative mt-10 min-h-[220px] sm:mt-14 sm:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="px-1"
            >
              <p className="font-display text-xl leading-relaxed text-white/90 sm:text-2xl md:text-[1.7rem]">
                “{review.quote}”
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <span className="block font-body text-sm tracking-wide text-[#ffb08a]">
                    {review.name}
                  </span>
                  {review.date ? (
                    <span className="mt-1 block font-body text-xs text-white/40">
                      {review.date}
                    </span>
                  ) : null}
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {total > 1 ? (
          <div className="mt-8 flex items-center justify-center gap-2">
            {reviews.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show review ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-7 bg-[linear-gradient(135deg,#ff4d9a_0%,#ff8a3d_100%)]"
                    : "w-2 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        ) : null}

        <a
          href={business.facebookReviews}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex min-h-11 items-center font-body text-sm tracking-[0.12em] text-white/55 uppercase transition-colors hover:text-[#ffb08a]"
        >
          Read all reviews on Facebook →
        </a>
      </div>
    </section>
  );
}
