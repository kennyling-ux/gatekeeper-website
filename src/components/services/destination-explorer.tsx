"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "@phosphor-icons/react/ssr";
import { countryDetails } from "@/lib/data/country-details";
import { cn } from "@/lib/cn";

export function DestinationExplorer() {
  const [selectedSlug, setSelectedSlug] = useState(countryDetails[0].slug);
  const selected = countryDetails.find((c) => c.slug === selectedSlug) ?? countryDetails[0];
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <div className="overflow-hidden rounded-[2rem] bg-white">
        <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
            {/* Not wrapped in AnimatePresence: a stalled exit animation
                (e.g. tab backgrounded mid-transition) must never block the
                next selection from rendering. Key change unmounts/mounts
                immediately; only the enter fade is animated. */}
            <motion.div
              key={selected.slug}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              {selected.image ? (
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  sizes="(min-width: 640px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-dark-blue to-navy">
                  <span className="font-heading text-3xl font-bold text-light-grey/90">
                    {selected.name}
                  </span>
                </div>
              )}
            </motion.div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <div className="flex items-center gap-2 text-champagne">
              <MapPin size={16} weight="fill" />
              <span className="font-heading text-xs font-semibold uppercase tracking-wide text-dark-blue">
                {selected.region}
              </span>
            </div>
            <motion.div
              key={selected.slug}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="mt-2 font-heading text-2xl font-bold text-navy sm:text-3xl">
                {selected.name}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-dark-blue sm:text-base">
                {selected.blurb}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-7">
        {countryDetails.map((country) => {
          const isActive = country.slug === selectedSlug;
          return (
            <button
              key={country.slug}
              type="button"
              onClick={() => setSelectedSlug(country.slug)}
              aria-pressed={isActive}
              className={cn(
                "group relative aspect-[3/4] overflow-hidden rounded-xl ring-2 ring-offset-2 ring-offset-light-grey transition-all active:scale-[0.96]",
                isActive ? "ring-champagne" : "ring-transparent hover:ring-navy/20",
              )}
            >
              {country.image ? (
                <Image
                  src={country.image}
                  alt=""
                  fill
                  sizes="120px"
                  className={cn(
                    "object-cover transition-opacity",
                    isActive ? "opacity-100" : "opacity-70 group-hover:opacity-90",
                  )}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-dark-blue to-navy" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
              <span className="absolute inset-x-1 bottom-1.5 font-heading text-[11px] font-semibold leading-tight text-light-grey sm:text-xs">
                <span className="sm:hidden">{country.shortName ?? country.name}</span>
                <span className="hidden sm:inline">{country.name}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
