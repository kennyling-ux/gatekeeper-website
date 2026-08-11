import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Photo } from "@/components/ui/photo";
import { founderPortrait } from "@/lib/data/images";

export function FounderBio() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <Photo
            src={founderPortrait}
            alt="Gatekeeper founder"
            className="aspect-[4/5] w-full max-w-sm"
            priority
          />
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>The Person Behind Gatekeeper</Eyebrow>
          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
            An independent consultant, not a call centre.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-dark-blue">
            Every student has unique gifts and potential. My goal isn&rsquo;t
            just admission — it&rsquo;s finding the programme and institution
            that actually fits who you are.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
