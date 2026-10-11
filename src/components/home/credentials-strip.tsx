import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { CredentialBadges } from "@/components/ui/credential-badges";

const credentialTags = [
  "QEAC #14731",
  "ICEF Certified",
  "Certified British Council UK Trained Counsellor",
];

export function CredentialsStrip() {
  return (
    <section className="bg-light-azure py-14 sm:py-16">
      <Container>
        <Reveal className="flex flex-col items-center gap-8 text-center sm:flex-row sm:justify-center sm:gap-10 sm:text-left">
          <CredentialBadges />

          <div className="hidden h-14 w-px shrink-0 bg-navy/15 sm:block" />

          <div>
            <p className="text-sm leading-relaxed text-dark-blue sm:text-base">
              Formally trained and certified by the bodies that set the standard for education counselling.
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
