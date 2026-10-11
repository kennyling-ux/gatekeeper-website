import { WhatsappLogo, Clock } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/constants";

export function WhatsAppCtaCard() {
  return (
    <div className="rounded-3xl bg-navy p-8 text-light-grey sm:p-10">
      <WhatsappLogo size={36} weight="fill" className="text-champagne" />
      <h3 className="mt-4 font-heading text-xl font-semibold">
        Prefer to chat now?
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-light-azure">
        Message directly on WhatsApp for the fastest response &mdash; usually
        within a few hours during the day.
      </p>
      <p className="mt-4 text-sm font-semibold text-champagne">{WHATSAPP_DISPLAY}</p>
      <Button
        href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
        variant="inverse"
        className="mt-6"
      >
        <WhatsappLogo size={18} weight="fill" />
        Chat on WhatsApp
      </Button>
      <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-6 text-xs text-light-azure/80">
        <Clock size={16} />
        Enquiry form messages are answered within one business day
      </div>
    </div>
  );
}
