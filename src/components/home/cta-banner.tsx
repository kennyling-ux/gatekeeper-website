import Image from "next/image";
import { EnvelopeSimple } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { CtaWhatsAppButton } from "@/components/home/cta-whatsapp-button";
import { ctaImage } from "@/lib/data/images";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
      <Image
        src={ctaImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/85 to-navy" />

      <Container className="relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-champagne opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-champagne" />
            </span>
            <span className="font-heading text-xs font-semibold text-light-grey">
              Free &middot; No Obligation
            </span>
          </div>

          <Eyebrow tone="dark" className="mt-6 block">
            Free Consultation
          </Eyebrow>
          <h2 className="mt-4 font-heading text-3xl font-bold text-light-grey sm:text-4xl">
            Let&rsquo;s find the path that fits you.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-light-azure">
            No obligation, no cost — just a clear next step.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <CtaWhatsAppButton />
            <Button href="/contact" variant="secondary-dark">
              <EnvelopeSimple size={18} />
              Send an Enquiry
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
