import Image from "next/image";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { HeaderScrollState } from "@/components/layout/header-scroll-state";
import { MobileNavDrawer } from "@/components/layout/mobile-nav-drawer";
import { NAV_LINKS, buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

export function SiteHeader() {
  return (
    <HeaderScrollState>
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Gatekeeper home">
          <Image
            src="/brand/logo-navy.png"
            alt="Gatekeeper"
            width={168}
            height={25}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 font-heading text-sm font-semibold text-light-grey transition-transform active:scale-[0.97] lg:inline-flex"
          >
            <WhatsappLogo size={18} weight="fill" />
            WhatsApp Us
          </a>
          <MobileNavDrawer />
        </div>
      </Container>
    </HeaderScrollState>
  );
}
