import Image from "next/image";
import { BadgeFrame } from "@/components/ui/badge-frame";
import { cn } from "@/lib/cn";

export function CredentialBadges({ size = "md" }: { size?: "md" | "lg" }) {
  const frame = size === "lg" ? "h-28 w-28 sm:h-32 sm:w-32" : "h-24 w-24 sm:h-28 sm:w-28";

  return (
    <div className="flex shrink-0 items-center gap-4">
      <BadgeFrame className={frame}>
        <Image
          src="/badges/qeac-light.png"
          alt="ICEF Certified Australia Specialist — QEAC #14731"
          width={580}
          height={580}
          className="h-full w-full object-contain"
        />
      </BadgeFrame>
      <BadgeFrame className={cn(frame, "p-3")}>
        <div className="flex flex-col items-center text-center">
          <Image
            src="/badges/british-council.svg"
            alt="British Council"
            width={300}
            height={86}
            className="h-auto w-full"
          />
          <p className="mt-2 text-[8px] font-semibold uppercase leading-tight tracking-wide text-navy sm:text-[9px]">
            Certified UK Trained Counsellor
          </p>
        </div>
      </BadgeFrame>
    </div>
  );
}
