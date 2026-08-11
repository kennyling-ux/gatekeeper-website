"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

/**
 * Isolated so the perpetual pulse/glow animation never re-renders the
 * surrounding CTA section.
 */
export function CtaWhatsAppButton() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex rounded-full"
      animate={
        shouldReduceMotion
          ? undefined
          : {
              scale: [1, 1.035, 1],
              boxShadow: [
                "0 0 0px 0px rgba(197,168,128,0)",
                "0 0 22px 7px rgba(197,168,128,0.45)",
                "0 0 0px 0px rgba(197,168,128,0)",
              ],
            }
      }
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <Button href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)} variant="inverse">
        <WhatsappLogo size={18} weight="fill" />
        Chat on WhatsApp
      </Button>
    </motion.div>
  );
}
