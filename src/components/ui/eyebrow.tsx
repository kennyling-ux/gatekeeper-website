import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-heading text-xs font-semibold uppercase tracking-[0.24em]",
        tone === "dark" ? "text-champagne" : "text-dark-blue",
        className,
      )}
    >
      {children}
    </span>
  );
}
