"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Zap, Trophy, ArrowRight } from "lucide-react";

const quotes = [
  {
    text: "The last three or four reps is what makes the muscle grow.",
    author: "Arnold Schwarzenegger",
  },
  {
    text: "Strength does not come from winning. Your struggles develop your strengths.",
    author: "Arnold Schwarzenegger",
  },
  {
    text: "The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it.",
    author: "Arnold Schwarzenegger",
  },
];

export default function Transformation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-dark-card">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(220, 38, 38, 0.1) 35px,
              rgba(220, 38, 38, 0.1) 36px
            )`,
          }}
        />
      </div>

      <div className="section-container" ref={ref}>
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Transformation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Your Journey <span className="text-gradient">Starts Here</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            உங்கள் மாற்றப் பயணம் இங்கே தொடங்குகிறது
          </motion.p>
        </div>

        {/* Before / After Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Flame,
              stage: "Month 1",
              title: "Foundation",
              titleTa: "அடித்தளம்",
              desc: "Build proper form, develop consistency, and establish your training routine.",
              img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80",
            },
            {
              icon: Zap,
              stage: "Month 3",
              title: "Growth",
              titleTa: "வளர்ச்சி",
              desc: "See visible changes in strength and muscle. Progressive overload kicks in.",
              img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80",
            },
            {
              icon: Trophy,
              stage: "Month 6",
              title: "Beast Mode",
              titleTa: "வலிமை நிலை",
              desc: "Full transformation. Stronger, bigger, and more confident than ever before.",
              img: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=500&q=80",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-dark-border"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1">
                  <span
                    className="text-xs font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.stage}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-primary" />
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="mb-1 text-xs text-primary/70">{item.titleTa}</p>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Motivational Quotes */}
        <div className="space-y-6">
          {quotes.map((quote, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border-l-4 border-primary bg-dark/50 p-6"
            >
              <p className="mb-2 text-lg italic text-neutral-200">
                &ldquo;{quote.text}&rdquo;
              </p>
              <cite className="text-sm not-italic text-primary">
                — {quote.author}
              </cite>
            </motion.blockquote>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="btn-primary px-8 py-4 text-lg">
            Start Your Transformation
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
