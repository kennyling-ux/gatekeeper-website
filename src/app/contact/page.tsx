import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { WhatsAppCtaCard } from "@/components/contact/whatsapp-cta-card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation with Gatekeeper — message on WhatsApp for a fast reply, or send an enquiry through the form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your next step."
        description="Free consultation, no obligation. Reach out on WhatsApp for the fastest reply, or send a message below."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <ContactForm />
          <WhatsAppCtaCard />
        </Container>
      </section>
    </>
  );
}
