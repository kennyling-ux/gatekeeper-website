import Image from "next/image";
import { cn } from "@/lib/cn";

export function Photo({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 40vw, 90vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-[1.75rem] bg-light-azure", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
