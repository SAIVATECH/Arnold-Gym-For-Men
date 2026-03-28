"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Phone, User, Target, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", goal: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message with line breaks (%0A)
    const text = `Hi Arnold Gym! 👋%0A%0A*New Website Enquiry*%0A-------------------%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Goal:* ${form.goal || "General Fitness"}%0A-------------------%0A_Sent from Arnold Gym Website_`;
    
    const whatsappUrl = `https://wa.me/919789336993?text=${text}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", phone: "", goal: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="section-container" ref={ref}>
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Request A <span className="text-gradient">Callback</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            தொடர்பு கொள்ளுங்கள் – நாங்கள் உங்களுக்கு அழைப்பு விடுவோம்
          </motion.p>
        </div>

        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-dark-border bg-dark-card p-6 sm:p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                <h3
                  className="mb-2 text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Opening WhatsApp...
                </h3>
                <p className="text-neutral-400">
                  Please send the pre-filled message to us. நன்றி!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-neutral-300">
                    <User className="h-4 w-4 text-primary" />
                    Your Name
                    <span className="text-xs text-neutral-500">
                      (உங்கள் பெயர்)
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-dark-border bg-dark px-4 py-3 text-white placeholder-neutral-500 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/50"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-neutral-300">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number
                    <span className="text-xs text-neutral-500">
                      (தொலைபேசி எண்)
                    </span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-dark-border bg-dark px-4 py-3 text-white placeholder-neutral-500 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/50"
                  />
                </div>

                {/* Goal */}
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-neutral-300">
                    <Target className="h-4 w-4 text-primary" />
                    Fitness Goal
                    <span className="text-xs text-neutral-500">
                      (உடற்பயிற்சி இலக்கு)
                    </span>
                  </label>
                  <select
                    value={form.goal}
                    onChange={(e) =>
                      setForm({ ...form, goal: e.target.value })
                    }
                    className="w-full rounded-xl border border-dark-border bg-dark px-4 py-3 text-white outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary/50"
                  >
                    <option value="">Select your goal</option>
                    <option value="muscle">Muscle Building</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="fitness">General Fitness</option>
                    <option value="strength">Strength Training</option>
                    <option value="beginner">Just Starting Out</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  Send via WhatsApp
                </button>

                <p className="text-center text-xs text-neutral-500">
                  Or call us directly:{" "}
                  <a
                    href="tel:09789336993"
                    className="font-semibold text-primary hover:underline"
                  >
                    09789336993
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
