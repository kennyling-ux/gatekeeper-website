import { ShieldCheck, Star, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { HeroVideo } from "@/components/home/hero-video";
import { buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <HeroVideo />
      {/* Dark overlay keeps the copy readable over any frame of the video. */}
      <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/30 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[78dvh] items-center py-20 sm:py-24">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <div className="flex gap-0.5 text-champagne">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} weight="fill" />
              ))}
            </div>
            <span className="font-heading text-xs font-semibold text-light-grey">
              1,000+ students guided
              <span className="hidden sm:inline"> &middot; nearly 10 years</span>
            </span>
          </div>

          <p className="mt-6 font-heading text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
            Education &amp; Study Abroad Consulting
          </p>
          <h1 className="mt-4 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-light-grey sm:text-6xl lg:text-[4rem]">
            Explore with clarity.{" "}
            <span className="text-champagne lg:block">Decide with purpose.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-light-azure">
            Independent advice on choosing the right course, university, and
            country &mdash; in Malaysia or abroad &mdash; with support from
            your first consultation to your first day on campus.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)} variant="inverse">
              <WhatsappLogo size={18} weight="fill" />
              Book a Free Consultation
            </Button>
            <Button href="/services" variant="secondary-dark">
              Explore Services
            </Button>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-light-azure">
            <ShieldCheck size={18} weight="fill" className="shrink-0 text-champagne" />
            QEAC #14731 &middot; ICEF Certified &middot; British Council UK Trained
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
