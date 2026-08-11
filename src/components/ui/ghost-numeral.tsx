import { cn } from "@/lib/cn";

export function GhostNumeral({
  value,
  className,
}: {
  value: number | string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "select-none font-accent text-7xl font-semibold leading-none text-navy/10 sm:text-8xl",
        className,
      )}
    >
      {String(value).padStart(2, "0")}
    </span>
  );
}
