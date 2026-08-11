"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Asterisk } from "@phosphor-icons/react/ssr";
import { allDestinations } from "@/lib/data/countries";

function TickerContent() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {allDestinations.map((country) => (
        <span key={country} className="flex items-center gap-8">
          <span className="font-heading text-lg font-semibold uppercase tracking-wide text-light-grey">
            {country}
          </span>
          <Asterisk size={16} className="text-champagne" />
        </span>
      ))}
    </div>
  );
}

export function MarqueeTicker() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden bg-navy py-4">
      <motion.div
        className="flex w-max"
        animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        <TickerContent />
        <TickerContent />
      </motion.div>
    </div>
  );
}
