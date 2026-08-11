import Image from "next/image";
import Link from "next/link";
import { EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { NAV_LINKS, buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy text-light-grey">
      <Container className="relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/logo-white.png"
            alt="Gatekeeper"
            width={176}
            height={26}
            className="h-6 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-light-azure">
            Independent education consulting for students and parents
            navigating university admissions and study-abroad pathways with
            clarity and confidence.
          </p>
        </div>

        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
            Explore
          </p>
          <nav className="mt-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-sm text-light-grey/85 transition-colors hover:text-champagne"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
            Get in Touch
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-heading text-sm text-light-grey/85 transition-colors hover:text-champagne"
            >
              <WhatsappLogo size={18} weight="fill" />
              {WHATSAPP_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 font-heading text-sm text-light-grey/85 transition-colors hover:text-champagne"
            >
              <EnvelopeSimple size={18} />
              Send an enquiry
            </Link>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col-reverse items-center justify-between gap-3 py-6 text-xs text-light-grey/60 sm:flex-row">
          <p>&copy; {year} Gatekeeper. All rights reserved.</p>
          <p>QEAC #14731 &middot; ICEF Certified Counsellor</p>
        </Container>
      </div>
    </footer>
  );
}
