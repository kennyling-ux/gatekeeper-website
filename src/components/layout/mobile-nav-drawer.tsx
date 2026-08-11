"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { List, X, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { NAV_LINKS, buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

export function MobileNavDrawer() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const drawer = (
    <AnimatePresence>
      {open ? (
          <motion.div
            key="mobile-nav-overlay"
            className="fixed inset-0 z-50 bg-navy/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              className="ml-auto flex h-full w-[82%] max-w-sm flex-col bg-navy px-7 py-6 text-light-grey"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Image
                  src="/brand/logo-white.png"
                  alt="Gatekeeper"
                  width={140}
                  height={21}
                  className="h-5 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full active:scale-95"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-white/10 py-4 font-heading text-lg font-semibold"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <a
                href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 rounded-full bg-champagne px-6 py-3 font-heading text-sm font-semibold text-navy active:scale-95"
              >
                <WhatsappLogo size={20} weight="fill" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors active:scale-95"
      >
        <List size={26} />
      </button>

      {mounted ? createPortal(drawer, document.body) : null}
    </div>
  );
}
