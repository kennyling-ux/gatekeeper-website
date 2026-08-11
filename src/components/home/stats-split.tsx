import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { Button } from "@/components/ui/button";
import { serviceFeatureImages, founderPortrait } from "@/lib/data/images";

const stats = [
  { value: "14", label: "Countries Covered" },
  { value: "6", label: "Step Process" },
  { value: "QEAC", label: "#14731 Certified" },
  { value: "100%", label: "Free Consultation" },
];

export function StatsSplit() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="absolute -inset-4 -z-10 hidden rounded-[3rem] border border-champagne/30 lg:block" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-light-azure sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={serviceFeatureImages.visa}
              alt="Student prepared for departure"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_20px_45px_-15px_rgba(6,30,64,0.35)] sm:right-2">
            <CheckCircle size={28} weight="fill" className="shrink-0 text-champagne" />
            <div>
              <p className="font-heading text-sm font-bold text-navy">No Obligation</p>
              <p className="text-xs text-dark-blue">Free consultation, always</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Who We Are"
            title="An independent consultant, not a call centre."
            description="Every student has unique gifts and potential. The goal isn't just admission — it's the right fit."
          />

          <div className="mt-6 flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-light-azure">
              <Image
                src={founderPortrait}
                alt="Gatekeeper founder"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <p className="text-sm text-dark-blue">
              <span className="font-heading font-semibold text-navy">Founder</span> &middot;
              Qualified Education Agent Counsellor
            </p>
          </div>

          <Button href="/about" variant="secondary" className="mt-8">
            About Gatekeeper
          </Button>

          <StaggerGroup className="mt-10 grid grid-cols-2 gap-6 border-t border-navy/10 pt-8 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="font-heading text-2xl font-bold text-navy">{stat.value}</p>
                <p className="mt-1 text-xs text-dark-blue">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </Container>
    </section>
  );
}
