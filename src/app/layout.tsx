import type { Metadata } from "next";
import { Montserrat, Open_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloatButton } from "@/components/layout/whatsapp-float-button";
import { SITE_URL } from "@/lib/constants";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gatekeeper | Education & Study Abroad Consulting in Malaysia",
    template: "%s | Gatekeeper",
  },
  description:
    "Independent education and study abroad consulting in Malaysia. Course, university, and country advice, applications, scholarships, and student visas, from your first consultation to your first day on campus.",
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-light-grey text-navy">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
