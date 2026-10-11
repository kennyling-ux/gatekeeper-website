import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServicesHero } from "@/components/services/services-hero";
import { ServiceList } from "@/components/services/service-list";
import { DestinationsGrid } from "@/components/services/destinations-grid";
import { CtaBanner } from "@/components/home/cta-banner";
import { studentServices, schoolServices } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Education and study abroad consulting for students and schools — consultations, applications, scholarships, student visas, and destination comparisons across 14 countries.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="For Students & Parents"
            title="Guidance at every step."
            description="Studying in Malaysia or abroad, you get the same consultant from your first conversation to your first week on campus."
          />
          <div className="mt-10">
            <ServiceList items={studentServices} />
          </div>
        </Container>
      </section>

      <section className="bg-warm-alabaster py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="For Schools" title="Bringing pathways to your students." />
          <div className="mt-10">
            <ServiceList items={schoolServices} />
          </div>
        </Container>
      </section>

      <DestinationsGrid />

      <CtaBanner />
    </>
  );
}
