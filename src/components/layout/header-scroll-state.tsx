"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Detects whether the page has scrolled past the top using an
 * IntersectionObserver sentinel instead of a window scroll listener,
 * and applies the resulting background/shadow state to the header itself.
 * (Server-rendered nav content is passed as plain `children`, not a
 * render-prop function, since functions can't cross the RSC boundary.)
 */
export function HeaderScrollState({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="pointer-events-none absolute left-0 top-0 h-px w-px" />
      <header
        className={cn(
          "sticky top-0 z-30 transition-colors duration-300",
          scrolled
            ? "bg-light-grey/90 shadow-[0_1px_0_rgba(6,30,64,0.08)] backdrop-blur-sm"
            : "bg-transparent",
        )}
      >
        {children}
      </header>
    </>
  );
}
