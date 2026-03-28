"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function StickyMobileBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-dark-border bg-dark/95 backdrop-blur-md md:hidden"
    >
      <div className="grid grid-cols-2 gap-0">
        <a
          href="tel:09789336993"
          className="flex items-center justify-center gap-2 bg-primary py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-dark"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
        <a
          href="https://wa.me/919789336993?text=Hi%20Arnold%20Gym!%20I%20want%20to%20know%20about%20membership."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-green-700"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
