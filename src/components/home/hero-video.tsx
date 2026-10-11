"use client";

import { useReducedMotion } from "framer-motion";

const VIDEO_SRC = "/video/hero.mp4";
const POSTER_SRC = "/video/hero-poster.jpg";

export function HeroVideo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <video
      // Re-mount when the preference resolves so autoplay is applied correctly.
      key={shouldReduceMotion ? "still" : "motion"}
      className="absolute inset-0 h-full w-full object-cover"
      src={VIDEO_SRC}
      poster={POSTER_SRC}
      autoPlay={!shouldReduceMotion}
      muted
      loop
      playsInline
      preload={shouldReduceMotion ? "none" : "auto"}
      aria-hidden="true"
    />
  );
}
