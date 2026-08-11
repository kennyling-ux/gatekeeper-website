import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageHero } from "@/components/ui/page-hero";
import { ServiceList } from "@/components/services/service-list";
import { DestinationsGrid } from "@/components/services/destinations-grid";
import { CtaBanner } from "@/components/home/cta-banner";
import { studentServices, schoolServices } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end education consulting for students and schools — consultations, applications, scholarships, visas, and study destination comparisons across 14 countries.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need, from first consultation to landing day."
        description="For individual students, and for schools."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="For Students" title="Guidance at every step." />
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
