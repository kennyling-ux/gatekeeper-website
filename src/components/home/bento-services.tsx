import { ChatCircleText, FileText, Airplane } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { cn } from "@/lib/cn";

const pillars = [
  {
    icon: ChatCircleText,
    title: "Personalised Consultation",
    description:
      "One-on-one, before any recommendation is made. We map your goals and budget first.",
    tone: "dark" as const,
    span: "featured" as const,
  },
  {
    icon: FileText,
    title: "Application Guidance",
    description: "Entry checks and hands-on help, done right.",
    tone: "light" as const,
    span: "compact" as const,
  },
  {
    icon: Airplane,
    title: "Visa & Pre-Departure",
    description: "Step-by-step, until you land overseas.",
    tone: "accent" as const,
    span: "compact" as const,
  },
];

const toneStyles = {
  light: "bg-white border border-navy/10",
  accent: "bg-champagne",
  dark: "bg-navy",
};

const textStyles = {
  light: { title: "text-navy", body: "text-dark-blue", icon: "bg-light-azure text-navy" },
  accent: { title: "text-navy", body: "text-navy/70", icon: "bg-white/70 text-navy" },
  dark: { title: "text-light-grey", body: "text-light-azure", icon: "bg-white/10 text-champagne" },
};

export function BentoServices() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
        <Reveal className="lg:pt-2">
          <SectionHeading eyebrow="What We Do" title="Support built around you." />
          <Button href="/services" variant="secondary" className="mt-8">
            View all services
          </Button>
        </Reveal>

        <StaggerGroup className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const text = textStyles[pillar.tone];
            return (
              <StaggerItem
                key={pillar.title}
                className={cn(pillar.span === "featured" && "sm:row-span-2")}
              >
                <div
                  className={cn(
                    "flex h-full flex-col rounded-[2rem] p-8",
                    pillar.span === "featured" && "sm:justify-center sm:p-10",
                    toneStyles[pillar.tone],
                  )}
                >
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", text.icon)}>
                    <Icon size={22} weight="light" />
                  </div>
                  <h3 className={cn("mt-6 font-heading text-xl font-bold", text.title)}>
                    {pillar.title}
                  </h3>
                  <p className={cn("mt-2 text-sm leading-relaxed", text.body)}>
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
