import Image from "next/image";
import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { serviceFeatureImages } from "@/lib/data/images";
import {
  AUTHORITY_STATS,
  buildWhatsAppUrl,
  WHATSAPP_DEFAULT_MESSAGE,
} from "@/lib/constants";

export function ServicesHero() {
  return (
    <section className="border-b border-navy/10 pb-16 pt-16 sm:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Education & Study Abroad Services"
              title="Everything you need, from your first consultation to your first day on campus."
              description="One-on-one support for students and parents, plus talks and university fairs for schools."
              className="max-w-2xl"
            />
            <Button href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)} className="mt-8">
              <WhatsappLogo size={18} weight="fill" />
              Book a Free Consultation
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-light-azure">
              <Image
                src={serviceFeatureImages.consultation}
                alt="Student in a one-on-one consultation"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 rounded-3xl bg-navy p-8 sm:p-10 lg:grid-cols-4">
          {AUTHORITY_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl font-bold text-light-grey sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-light-azure">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
