export const WHATSAPP_NUMBER = "60189016227";
export const WHATSAPP_DISPLAY = "+60 18-901 6227";

export function buildWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Gatekeeper, I'd like to book a free consultation.";

export const CONTACT_EMAIL_SUBJECT = "Website enquiry";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const SITE_URL = "https://gatekeeper.example.com";
