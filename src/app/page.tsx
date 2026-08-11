import { Hero } from "@/components/home/hero";
import { MarqueeTicker } from "@/components/home/marquee-ticker";
import { BentoServices } from "@/components/home/bento-services";
import { StatsSplit } from "@/components/home/stats-split";
import { WorkflowGrid } from "@/components/home/workflow-grid";
import { DestinationsStrip } from "@/components/home/destinations-strip";
import { CredentialsStrip } from "@/components/home/credentials-strip";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FaqPreview } from "@/components/home/faq-preview";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeTicker />
      <BentoServices />
      <StatsSplit />
      <WorkflowGrid />
      <DestinationsStrip />
      <CredentialsStrip />
      <TestimonialsSection />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
