"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Karthik",
    rating: 5,
    text: "A nice place for heavy workout. Best equipment I've found in Kovilpatti. The trainer is very supportive.",
    date: "2 months ago",
  },
  {
    name: "Surya",
    rating: 5,
    text: "Very good and finest gym in the area. Clean, spacious, and the owner is very friendly. Highly recommended!",
    date: "3 months ago",
  },
  {
    name: "Praveen",
    rating: 4,
    text: "Good for muscle growth. Affordable pricing and great atmosphere. Best gym for serious bodybuilding.",
    date: "1 month ago",
  },
  {
    name: "Dinesh",
    rating: 5,
    text: "Excellent gym! Heavy dumbbells, barbells, and all machines you need. Perfect for power training.",
    date: "5 months ago",
  },
  {
    name: "Murugan",
    rating: 4,
    text: "Great place to workout. Good environment and helpful people. I've been coming here for 2 years.",
    date: "4 months ago",
  },
  {
    name: "Arun",
    rating: 5,
    text: "Best gym in Kovilpatti for men. Strong equipment, affordable pricing. Arnold Gym is the real deal!",
    date: "6 months ago",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-gold text-gold" : "text-neutral-600"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const [itemsPerView, setItemsPerView] = useState(1);
  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 3 : 1);
    };
    
    // Set initial value on mount
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [autoPlay, maxIndex]);

  return (
    <section id="reviews" className="relative overflow-hidden">
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="section-container" ref={ref}>
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            What Our Members <span className="text-gradient">Say</span>
          </motion.h2>

          {/* Overall Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 inline-flex items-center gap-3 rounded-full border border-dark-border bg-dark-card px-6 py-3"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < 4 ? "fill-gold text-gold" : "fill-gold/50 text-gold/50"
                  }`}
                />
              ))}
            </div>
            <span
              className="text-xl font-bold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              4.1
            </span>
            <span className="text-sm text-neutral-400">
              ({reviews.length}9+ reviews on Google)
            </span>
          </motion.div>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${current * (100 / itemsPerView + 2)}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  className="w-full shrink-0 md:w-[calc(33.333%-16px)]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="h-full rounded-2xl border border-dark-border bg-dark-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                    <Quote className="mb-3 h-8 w-8 text-primary/30" />
                    <p className="mb-4 text-sm leading-relaxed text-neutral-300">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-dark-border pt-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                            <span
                              className="text-sm font-bold text-primary"
                              style={{ fontFamily: "var(--font-heading)" }}
                            >
                              {review.name[0]}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-white">
                            {review.name}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <StarRating rating={review.rating} />
                        <p className="mt-1 text-xs text-neutral-500">
                          {review.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-border bg-dark-card text-white transition-all hover:border-primary hover:text-primary"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {[...Array(maxIndex + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-neutral-600 hover:bg-neutral-500"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent(Math.min(maxIndex, current + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-border bg-dark-card text-white transition-all hover:border-primary hover:text-primary"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
