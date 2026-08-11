import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { BadgeFrame } from "@/components/ui/badge-frame";

const credentialTags = [
  "QEAC #14731",
  "ICEF-Certified",
  "British Council UK-Trained",
];

export function CredentialsStrip() {
  return (
    <section className="bg-light-azure py-14 sm:py-16">
      <Container>
        <Reveal className="flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-center sm:gap-10 sm:text-left">
          <div className="flex shrink-0 items-center gap-4">
            <BadgeFrame className="h-24 w-24 sm:h-28 sm:w-28">
              <Image
                src="/badges/qeac-dark.png"
                alt="ICEF Certified — QEAC #14731"
                width={580}
                height={580}
                className="h-full w-full object-contain"
              />
            </BadgeFrame>
            <BadgeFrame className="h-24 w-24 sm:h-28 sm:w-28">
              <Image
                src="/badges/qeac-light.png"
                alt="ICEF Certified Australia Specialist — QEAC #14731"
                width={580}
                height={580}
                className="h-full w-full object-contain"
              />
            </BadgeFrame>
          </div>

          <div className="hidden h-14 w-px shrink-0 bg-navy/15 sm:block" />

          <div>
            <p className="text-sm leading-relaxed text-dark-blue sm:text-base">
              Certified and trained to the same standard we hold ourselves to.
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-x-2 gap-y-1 sm:justify-start">
              {credentialTags.map((tag, i) => (
                <span key={tag} className="text-xs font-semibold text-navy">
                  {tag}
                  {i < credentialTags.length - 1 ? (
                    <span className="ml-2 text-champagne">&middot;</span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
