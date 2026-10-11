import { Star, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { HeroCollage } from "@/components/home/hero-collage";
import { buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="pb-16 pt-10 sm:pt-14 lg:pb-24">
      <Container className="grid items-center gap-10 lg:min-h-[78dvh] lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-1.5">
            <div className="flex gap-0.5 text-champagne">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} weight="fill" />
              ))}
            </div>
            <span className="font-heading text-xs font-semibold text-navy">
              1,000+ students guided
              <span className="hidden sm:inline"> &middot; nearly 10 years</span>
            </span>
          </div>

          <Eyebrow className="mt-6 block">Education &amp; Study Abroad Consulting</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-heading text-5xl font-bold leading-[1.02] tracking-tight text-navy sm:text-6xl lg:text-[3.5rem]">
            Explore with clarity.{" "}
            <span className="text-dark-blue lg:block">Decide with purpose.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-dark-blue">
            Independent advice on choosing the right course, university, and
            country &mdash; in Malaysia or abroad &mdash; with support from
            your first consultation to your first day on campus.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}>
              <WhatsappLogo size={18} weight="fill" />
              Book a Free Consultation
            </Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <HeroCollage />
        </Reveal>
      </Container>
    </section>
  );
}
