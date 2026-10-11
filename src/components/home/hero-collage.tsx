import Image from "next/image";
import { ShieldCheck } from "@phosphor-icons/react/ssr";
import { heroImage, serviceFeatureImages, founderHeadshot } from "@/lib/data/images";

export function HeroCollage() {
  return (
    <div className="relative grid h-[380px] grid-cols-2 grid-rows-2 gap-3 sm:h-[460px] lg:h-full lg:min-h-[540px]">
      <div className="relative row-span-2 overflow-hidden rounded-[2.5rem] rounded-br-lg bg-light-azure">
        <Image
          src={heroImage}
          alt="Student on a university campus"
          fill
          sizes="(min-width: 1024px) 24vw, 45vw"
          priority
          className="object-cover"
        />
      </div>
      <div className="relative overflow-hidden rounded-[2rem] rounded-bl-lg bg-light-azure">
        <Image
          src={serviceFeatureImages.application}
          alt="Student studying"
          fill
          sizes="(min-width: 1024px) 16vw, 30vw"
          className="object-cover"
        />
      </div>
      <div className="relative overflow-hidden rounded-[2rem] rounded-tl-lg bg-light-azure">
        <Image
          src={founderHeadshot}
          alt="Gatekeeper's founder"
          fill
          sizes="(min-width: 1024px) 16vw, 30vw"
          className="object-cover"
        />
      </div>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-[0_16px_40px_-12px_rgba(6,30,64,0.35)]">
        <ShieldCheck size={18} weight="fill" className="shrink-0 text-champagne" />
        <span className="whitespace-nowrap font-heading text-xs font-semibold text-navy">
          QEAC Certified
        </span>
      </div>
    </div>
  );
}
