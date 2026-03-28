"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, Users, MessageSquare } from "lucide-react";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        {/* Red accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-primary-light"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Kovilpatti&apos;s #1 Hardcore Gym
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Build Real Strength.
            <br />
            <span className="text-gradient">Train Like Arnold.</span>
          </motion.h1>

          {/* Tamil Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-2 text-lg text-neutral-300 sm:text-xl"
          >
            உண்மையான வலிமையை உருவாக்குங்கள். அர்னால்டு போல பயிற்சி செய்யுங்கள்.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 max-w-lg text-base text-neutral-400"
          >
            Heavy equipment. Hardcore environment. Affordable pricing. Join
            Kovilpatti&apos;s most trusted gym for serious muscle building.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="tel:09789336993" className="btn-primary px-8 py-4 text-lg">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <a href="#contact" className="btn-outline px-8 py-4 text-lg">
              Join Today
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-6 rounded-2xl border border-dark-border/50 bg-dark/60 p-6 backdrop-blur-sm sm:max-w-lg"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Star className="h-5 w-5 fill-gold text-gold" />
                <span
                  className="text-2xl font-bold text-white sm:text-3xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <AnimatedCounter target={4.1} />
                </span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">Rating</p>
            </div>
            <div className="border-x border-dark-border text-center">
              <div className="flex items-center justify-center">
                <MessageSquare className="mr-1 h-4 w-4 text-primary" />
                <span
                  className="text-2xl font-bold text-white sm:text-3xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <AnimatedCounter target={69} suffix="+" />
                </span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">Reviews</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Users className="mr-1 h-4 w-4 text-primary" />
                <span
                  className="text-2xl font-bold text-white sm:text-3xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <AnimatedCounter target={100} suffix="+" />
                </span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">Members</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-neutral-500 pt-2">
          <motion.div
            className="h-2 w-1 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
