"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    alt: "Gym equipment area",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
    alt: "Training zone",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=600&q=80",
    alt: "Free weights section",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
    alt: "Workout session",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
    alt: "Dumbbell rack",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=600&q=80",
    alt: "Strength training",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80",
    alt: "Cable machines",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
    alt: "Gym interior",
    span: "md:col-span-2",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((prev) =>
      prev !== null ? (prev === 0 ? galleryImages.length - 1 : prev - 1) : null
    );
  const nextImage = () =>
    setLightbox((prev) =>
      prev !== null ? (prev === galleryImages.length - 1 ? 0 : prev + 1) : null
    );

  return (
    <section id="gallery" className="relative overflow-hidden bg-dark-card">
      <div className="section-container" ref={ref}>
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Inside <span className="text-gradient">Arnold Gym</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            எங்கள் ஜிம்மின் உள்ளே ஒரு பார்வை
          </motion.p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${img.span}`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-48 w-full object-cover transition-all duration-500 group-hover:scale-110 sm:h-56 md:h-64"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-primary/90 p-3">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 rounded-full bg-dark-card p-2 text-white transition-colors hover:bg-primary"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 z-10 rounded-full bg-dark-card p-2 text-white transition-colors hover:bg-primary"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[lightbox].src.replace("w=600", "w=1200")}
              alt={galleryImages[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 z-10 rounded-full bg-dark-card p-2 text-white transition-colors hover:bg-primary"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 text-sm text-neutral-400">
              {lightbox + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
