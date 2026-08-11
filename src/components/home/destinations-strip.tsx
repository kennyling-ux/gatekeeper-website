import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { DestinationPhotoGrid } from "@/components/services/destination-photo-grid";

export function DestinationsStrip() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Study Destinations"
            title="Fourteen countries, honestly compared."
          />
          <Link
            href="/services#destinations"
            className="inline-flex shrink-0 items-center gap-2 font-heading text-sm font-semibold text-navy hover:text-dark-blue"
          >
            See all 14 destinations
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10">
          <DestinationPhotoGrid showCountries={false} />
        </div>
      </Container>
    </section>
  );
}
