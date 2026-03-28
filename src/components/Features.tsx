"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Dumbbell,
  Maximize,
  Heart,
  IndianRupee,
  Flame,
  Phone,
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Heavy Equipment",
    titleTa: "கனரக உபகரணங்கள்",
    desc: "Professional-grade heavy workout equipment for serious muscle building and strength training.",
  },
  {
    icon: Maximize,
    title: "Large Space",
    titleTa: "பரந்த இடவசதி",
    desc: "Spacious training area with dedicated ground space for warmups, stretching, and functional exercises.",
  },
  {
    icon: Heart,
    title: "Friendly Environment",
    titleTa: "நட்புறவான சூழல்",
    desc: "Supportive community of like-minded lifters. Everyone helps each other achieve their goals.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    titleTa: "மலிவான கட்டணம்",
    desc: "Best value gym membership in Kovilpatti. Premium training without the premium price tag.",
  },
  {
    icon: Flame,
    title: "Real Results",
    titleTa: "உண்மையான முடிவுகள்",
    desc: "No fancy gimmicks – just raw, effective training that delivers real muscle-building results.",
  },
];

function TiltCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      style={{ transform, transition: "transform 0.15s ease-out" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="features" className="relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="section-container" ref={ref}>
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            What Makes Us <span className="text-gradient">Different</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            எங்களை ஏன் தேர்வு செய்ய வேண்டும்?
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <TiltCard key={i} index={i}>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3
                className="mb-1 text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {feature.title}
              </h3>
              <p className="mb-2 text-xs text-primary/70">{feature.titleTa}</p>
              <p className="text-sm leading-relaxed text-neutral-400">
                {feature.desc}
              </p>
            </TiltCard>
          ))}

          {/* CTA Card */}
          <TiltCard index={5}>
            <div className="flex h-full flex-col items-center justify-center py-4 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary animate-pulse-glow">
                <Phone className="h-7 w-7 text-white" />
              </div>
              <h3
                className="mb-2 text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to Start?
              </h3>
              <p className="mb-4 text-sm text-neutral-400">
                உடனே தொடங்குங்கள்!
              </p>
              <a href="tel:09789336993" className="btn-primary text-sm">
                Call 09789336993
              </a>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
