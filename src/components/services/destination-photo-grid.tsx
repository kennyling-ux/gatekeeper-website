import Image from "next/image";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { destinationRegions } from "@/lib/data/countries";
import { destinationRegionImages } from "@/lib/data/images";
import { cn } from "@/lib/cn";

export function DestinationPhotoGrid({
  showCountries = true,
}: {
  showCountries?: boolean;
}) {
  return (
    <StaggerGroup className="grid grid-cols-1 gap-4 lg:grid-cols-4">
      {destinationRegions.map((region, index) => (
        <StaggerItem
          key={region.region}
          className={cn(
            "relative aspect-[16/9] overflow-hidden rounded-[1.75rem] lg:aspect-[4/5]",
            index > 0 && "hidden lg:block",
          )}
        >
          <Image
            src={destinationRegionImages[region.region]}
            alt={region.region}
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-heading text-lg font-bold text-light-grey">
              {region.region}
            </p>
            {showCountries ? (
              <p className="mt-0.5 text-xs text-light-azure">
                {region.countries.join(" · ")}
              </p>
            ) : null}
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
