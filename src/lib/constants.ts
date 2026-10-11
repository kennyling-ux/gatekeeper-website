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
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

// Set NEXT_PUBLIC_SITE_URL to the custom domain once it is connected.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gatekeeper-website-nine.vercel.app";

// Leave a URL empty to hide that icon in the footer.
export const SOCIAL_LINKS = {
  linkedin: "",
  instagram: "",
};

export const AUTHORITY_STATS = [
  { value: "1,000+", label: "Students guided" },
  { value: "Nearly 10", label: "Years of experience" },
  { value: "100%", label: "University offer success rate" },
  { value: "99%", label: "Student visa approval rate" },
] as const;
