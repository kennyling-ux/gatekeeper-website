import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { CtaBanner } from "@/components/home/cta-banner";
import { faqItems } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the questions students and parents ask most about programmes, fees, scholarships, visas, and the application process.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers, tailored to you."
        description="It depends on your background, goals, and budget — but here's the general shape of it."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <FaqAccordion items={faqItems} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
