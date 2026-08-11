"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

export function WhatsAppFloatButton() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Gatekeeper on WhatsApp"
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-light-grey shadow-[0_12px_30px_-10px_rgba(6,30,64,0.5)] sm:bottom-8 sm:right-8"
      animate={
        shouldReduceMotion
          ? undefined
          : { scale: [1, 1.06, 1] }
      }
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsappLogo size={28} weight="fill" />
    </motion.a>
  );
}
