import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Light "frame" chip for badge artwork with fixed, non-brand colors
 * (e.g. the QEAC/ICEF certification badges) so it stays legible and
 * on-contrast no matter what section background surrounds it.
 */
export function BadgeFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-2xl border border-navy/10 bg-warm-alabaster p-4 shadow-[0_12px_30px_-18px_rgba(6,30,64,0.4)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
