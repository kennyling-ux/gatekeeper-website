import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-warm-alabaster py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Real Outcomes"
          title="Students who found their fit."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-2xl">
          <TestimonialsCarousel items={testimonials} />
        </div>
      </Container>
    </section>
  );
}
