import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { DestinationExplorer } from "@/components/services/destination-explorer";

export function DestinationsGrid() {
  return (
    <section id="destinations" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Study Destinations"
          title="Fourteen countries, compared honestly."
          description="Select a country to see why it's worth considering. Goals and budget first — not a sales pitch for one over another."
        />

        <div className="mt-10">
          <DestinationExplorer />
        </div>
      </Container>
    </section>
  );
}
