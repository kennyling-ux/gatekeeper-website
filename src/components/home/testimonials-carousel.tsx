"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/lib/data/testimonials";

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 60;

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % items.length) + items.length) % items.length);
    },
    [items.length],
  );

  useEffect(() => {
    if (paused || shouldReduceMotion) return;
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [paused, shouldReduceMotion, items.length]);

  const active = items[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") goTo(index - 1);
        if (event.key === "ArrowRight") goTo(index + 1);
      }}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Student testimonials"
    >
      <div className="overflow-hidden rounded-3xl bg-white p-8 sm:p-10">
        {/* No AnimatePresence/exit here: a stalled exit transition must
            never block the next testimonial from rendering. Key change
            swaps content immediately; only the enter animates. */}
        <motion.div
          key={index}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_event, info) => {
            if (info.offset.x > SWIPE_THRESHOLD) goTo(index - 1);
            else if (info.offset.x < -SWIPE_THRESHOLD) goTo(index + 1);
          }}
          initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 22 }}
          className="cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-light-azure">
              <Image src={active.avatar} alt="" fill sizes="48px" className="object-cover" />
            </div>
            <div>
              <div className="flex gap-0.5 text-champagne">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} weight="fill" />
                ))}
              </div>
              {active.name ? (
                <p className="mt-0.5 font-heading text-sm font-semibold text-navy">
                  {active.name}
                </p>
              ) : null}
            </div>
          </div>
          <p className="mt-5 text-lg leading-relaxed text-navy">
            &ldquo;{active.quote}&rdquo;
          </p>
          <p className="mt-4 text-sm text-dark-blue">{active.outcome}</p>
        </motion.div>
      </div>

      <div className="mt-4 flex items-center justify-center">
        {items.map((item, i) => (
          <button
            key={item.outcome}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            className="flex h-11 w-8 items-center justify-center"
          >
            <span
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-navy" : "w-2 bg-navy/20",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
