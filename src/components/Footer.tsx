"use client";

import { Phone, MessageCircle, MapPin, Clock, Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-card pb-24 md:pb-8">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span
                className="text-2xl font-bold tracking-wider text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                ARNOLD GYM
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              Kovilpatti&apos;s hardcore gym for real muscle building. Affordable
              training for beginners to advanced lifters.
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              கோவில்பட்டியின் உண்மையான உடற்பயிற்சி கூடம்
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="mb-4 text-sm font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Home", href: "#hero" },
                { name: "About", href: "#about" },
                { name: "Features", href: "#features" },
                { name: "Reviews", href: "#reviews" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-neutral-400 transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="mb-4 text-sm font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:09789336993"
                className="flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                09789336993
              </a>
              <a
                href="https://wa.me/919789336993"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-green-500"
              >
                <MessageCircle className="h-4 w-4 text-green-500" />
                WhatsApp Us
              </a>
              <div className="flex items-start gap-3 text-sm text-neutral-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Manthithoppu Rd, Thirumangai Nagar, Kovilpatti, Tamil Nadu
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <Clock className="h-4 w-4 text-primary" />
                Open from 5:00 PM onwards
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-dark-border pt-8 text-center">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Arnold Gym For Men. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
