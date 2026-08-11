import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-light-azure px-3 py-1 text-xs font-semibold uppercase tracking-wide text-dark-blue",
        className,
      )}
    >
      {children}
    </span>
  );
}
