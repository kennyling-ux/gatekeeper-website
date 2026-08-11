import type { Metadata } from "next";
import { FounderBio } from "@/components/about/founder-bio";
import { CredentialsBadges } from "@/components/about/credentials-badges";
import { CtaBanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the independent education consultant behind Gatekeeper — QEAC-certified, ICEF-trained, and focused on finding the right fit, not just an admission.",
};

export default function AboutPage() {
  return (
    <>
      <FounderBio />
      <CredentialsBadges />
      <CtaBanner />
    </>
  );
}
