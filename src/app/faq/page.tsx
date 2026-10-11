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
        title="Your questions, answered."
        description="Every student's situation is different. Here are clear, general answers to the questions we hear most — and we'll go into your specifics during a free consultation."
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
