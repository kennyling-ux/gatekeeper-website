import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { WorkflowIcon } from "@/components/ui/workflow-icon";
import { workflowSteps } from "@/lib/data/workflow";

export function WorkflowGrid() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-warm-alabaster py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Six steps, one point of contact."
          description="From consultation to pre-departure, you always know what happens next."
        />

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workflowSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="h-full rounded-2xl border border-navy/10 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-light-azure text-navy">
                  <WorkflowIcon name={step.icon} size={20} weight="light" />
                </div>
                <p className="mt-5 font-heading text-xs font-semibold uppercase tracking-wide text-champagne">
                  Step {step.step}
                </p>
                <h3 className="mt-1 font-heading text-lg font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-blue">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
