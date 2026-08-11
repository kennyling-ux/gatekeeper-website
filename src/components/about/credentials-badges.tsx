import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BadgeFrame } from "@/components/ui/badge-frame";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";

const credentials = [
  "Qualified Education Agent Counsellor (QEAC #14731)",
  "ICEF-Certified Education Counsellor",
  "ICEF Australia Specialist",
  "British Council UK Knowledge-Trained Counsellor",
];

export function CredentialsBadges() {
  return (
    <section className="bg-navy py-20 sm:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Credentials"
            title="Trained, tested, and accountable."
            tone="dark"
          />
          <StaggerGroup className="mt-8 flex flex-col gap-4">
            {credentials.map((item) => (
              <StaggerItem key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={22}
                  weight="fill"
                  className="mt-0.5 shrink-0 text-champagne"
                />
                <span className="text-sm text-light-azure sm:text-base">{item}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <BadgeFrame className="h-28 w-28 sm:h-32 sm:w-32">
            <Image
              src="/badges/qeac-dark.png"
              alt="ICEF Certified — QEAC #14731"
              width={580}
              height={580}
              className="h-full w-full object-contain"
            />
          </BadgeFrame>
          <BadgeFrame className="h-28 w-28 sm:h-32 sm:w-32">
            <Image
              src="/badges/qeac-light.png"
              alt="ICEF Certified Australia Specialist — QEAC #14731"
              width={580}
              height={580}
              className="h-full w-full object-contain"
            />
          </BadgeFrame>
        </div>
      </Container>
    </section>
  );
}
