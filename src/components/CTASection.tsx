"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Zap, ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative overflow-hidden bg-dark-card">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Urgency Badge */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-5 py-2"
          >
            <Zap className="h-4 w-4 text-gold" />
            <span
              className="text-sm font-bold uppercase tracking-wider text-gold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Limited Slots Available
            </span>
            <Zap className="h-4 w-4 text-gold" />
          </motion.div>

          <h2
            className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Join Today.
            <br />
            <span className="text-gradient">Transform Forever.</span>
          </h2>

          <p className="mb-2 text-lg text-neutral-300">
            Don&apos;t wait for the perfect time. The perfect time is{" "}
            <strong className="text-white">now.</strong>
          </p>
          <p className="mb-8 text-sm text-neutral-400">
            இன்றே சேருங்கள் – உங்கள் வாழ்க்கையை மாற்றுங்கள்
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:09789336993"
              className="btn-primary w-full px-10 py-5 text-lg shadow-lg shadow-primary/30 sm:w-auto animate-pulse-glow"
            >
              <Phone className="h-6 w-6" />
              Call Now – 09789336993
            </a>
            <a
              href="https://wa.me/919789336993?text=Hi%20Arnold%20Gym!%20I%20want%20to%20join%20the%20gym."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-10 py-5 text-lg font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/30 active:scale-95 sm:w-auto"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500"
          >
            <span className="flex items-center gap-1">
              ✓ No Hidden Charges
            </span>
            <span className="flex items-center gap-1">
              ✓ Beginners Welcome
            </span>
            <span className="flex items-center gap-1">
              ✓ Affordable Plans
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
