"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin, Phone, Navigation } from "lucide-react";

export default function Timings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="timings" className="relative overflow-hidden">
      <div className="section-container" ref={ref}>
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Location & Hours
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Find Us <span className="text-gradient">Here</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            எங்களை இங்கே காணுங்கள்
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Timing Card */}
            <div className="rounded-2xl border border-dark-border bg-dark-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    GYM TIMINGS
                  </h3>
                  <p className="text-xs text-neutral-400">
                    ஜிம் நேரம்
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-dark/50 px-4 py-3">
                  <span className="text-sm text-neutral-300">Monday – Saturday</span>
                  <span
                    className="text-sm font-bold text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    5:00 PM Onwards
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-dark/50 px-4 py-3">
                  <span className="text-sm text-neutral-300">Sunday</span>
                  <span
                    className="text-sm font-bold text-neutral-500"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Holiday
                  </span>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="rounded-2xl border border-dark-border bg-dark-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    OUR ADDRESS
                  </h3>
                  <p className="text-xs text-neutral-400">
                    எங்கள் முகவரி
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-neutral-300">
                Arnold Gym For Men,
                <br />
                Manthithoppu Rd, Thirumangai Nagar,
                <br />
                Kovilpatti, Tamil Nadu
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/search/Arnold+Gym+For+Men+Kovilpatti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
                <a href="tel:09789336993" className="btn-primary text-sm">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-dark-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.7!2d77.8694!3d9.1724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMTAnMjAuNiJOIDc3wrA1MicxMC4wIkU!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="min-h-[400px] lg:min-h-full"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arnold Gym Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
