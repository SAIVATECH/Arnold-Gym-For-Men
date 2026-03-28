"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Dumbbell } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Reviews", href: "#reviews" },
  { name: "Gallery", href: "#gallery" },
  { name: "Timings", href: "#timings" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Dumbbell className="h-6 w-6 text-white" />
          </div>
          <div>
            <span
              className="text-xl font-bold tracking-wider text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ARNOLD
            </span>
            <span className="ml-1 text-xs text-neutral-400">GYM</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium uppercase tracking-wider text-neutral-300 transition-colors hover:text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 hover:w-full" />
            </a>
          ))}
          <a href="tel:09789336993" className="btn-primary text-sm">
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-dark-border bg-dark/98 backdrop-blur-lg md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wider text-neutral-300 transition-colors hover:bg-dark-lighter hover:text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="tel:09789336993"
                className="btn-primary mt-4 block w-full text-center text-sm"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="mr-2 inline h-4 w-4" />
                Call Now – 09789336993
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
