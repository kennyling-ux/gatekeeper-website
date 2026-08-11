import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { faqItems } from "@/lib/data/faq";

export function FaqPreview() {
  const preview = faqItems.slice(0, 4);

  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Common Questions"
          title="Straight answers, tailored to you."
          description="It depends on your background, goals, and budget. Here's what comes up most."
        />

        <StaggerGroup className="divide-y divide-navy/10">
          {preview.map((item) => (
            <StaggerItem key={item.question} className="py-5">
              <h3 className="font-heading text-base font-semibold text-navy">
                {item.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dark-blue">
                {item.answer}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>

      <Container>
        <Link
          href="/faq"
          className="mt-4 inline-flex items-center gap-2 font-heading text-sm font-semibold text-navy hover:text-dark-blue"
        >
          Read the full FAQ
          <ArrowRight size={16} />
        </Link>
      </Container>
    </section>
  );
}
