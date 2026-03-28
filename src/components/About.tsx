"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Flame, Users, Phone } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden bg-dark-card">
      {/* Decorative accent */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="section-container">
        <div ref={ref} className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                alt="Arnold Gym interior"
                className="h-[400px] w-full object-cover lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 rounded-xl border border-dark-border bg-dark-card p-4 shadow-2xl sm:right-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    5+ Years
                  </p>
                  <p className="text-xs text-neutral-400">Training Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span
              className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About Us
            </span>
            <h2 className="section-title">
              More Than A Gym.
              <br />
              <span className="text-gradient">A Brotherhood.</span>
            </h2>

            <p className="mb-4 leading-relaxed text-neutral-300">
              Arnold Gym For Men isn&apos;t your typical fancy gym – it&apos;s a hardcore
              training ground built for serious lifters. Located in the heart of
              Kovilpatti, we provide heavy-duty equipment, expert guidance, and
              an environment that pushes you to your limits.
            </p>

            <p className="mb-6 text-sm leading-relaxed text-neutral-400">
              அர்னால்ட் ஜிம் போர் மென் – கோவில்பட்டியின் மையத்தில் அமைந்துள்ள
              இந்த உடற்பயிற்சி கூடம், ஆரம்ப நிலை முதல் மேம்பட்ட நிலை வரை
              அனைவருக்கும் ஏற்ற பயிற்சி வசதிகளை மிகக் குறைந்த கட்டணத்தில்
              வழங்குகிறது.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Affordable",
                  desc: "Budget-friendly plans",
                },
                {
                  icon: Flame,
                  title: "Hardcore",
                  desc: "Real training zone",
                },
                {
                  icon: Users,
                  title: "All Levels",
                  desc: "Beginners welcome",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-dark-border bg-dark/50 p-4 text-center"
                >
                  <item.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-xs text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <a href="tel:09789336993" className="btn-primary">
              <Phone className="h-4 w-4" />
              Talk to Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
