"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Star, CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    rating: 5,
    quote:
      "We migrated 14 client WooCommerce stores over a weekend. Page speed jumped from 2.8s to sub-500ms on the Bhartiya Cloud NVMe clusters. Their support engineer even tuned our Redis object cache.",
    name: "Vikram Malhotra",
    initials: "VM",
    role: "Head of Engineering",
    company: "StudioPulse Agency",
    country: "🇮🇳 India",
  },
  {
    rating: 5,
    quote:
      "During our Black Friday flash sale, our previous VPS provider throttled our CPU and went down. Bhartiya Cloud absorbed 42,000 concurrent shopping cart sessions without breaking a sweat.",
    name: "Elena Rostova",
    initials: "ER",
    role: "Co-founder & CTO",
    company: "Nordic Goods Co.",
    country: "🇩🇪 Germany",
  },
  {
    rating: 5,
    quote:
      "Bhartiya Cloud's transparent pricing saved our startup over $1,800/month compared to AWS. The KVM instances are genuinely dedicated with zero CPU steal, and the London edge latency is unmatched.",
    name: "Marcus Vance",
    initials: "MV",
    role: "Lead DevOps Architect",
    company: "Synapse Financial",
    country: "🇬🇧 United Kingdom",
  },
  {
    rating: 5,
    quote:
      "Managing 8 client production apps with automated offsite snapshots, instant staging clones, and root access with friendly Tier-3 engineers available 24/7 has been a total game-changer.",
    name: "Sarah Chen",
    initials: "SC",
    role: "Principal Consultant",
    company: "Chen Interactive",
    country: "🇸🇬 Singapore",
  },
  {
    rating: 5,
    quote:
      "Our API microservices handle over 4 million webhooks daily. The Anycast network and Gen4 AMD EPYC hardware have given us 100% uninterrupted uptime across the past 14 months.",
    name: "David Kalu",
    initials: "DK",
    role: "Infrastructure Lead",
    company: "Paystack Logistics",
    country: "🇳🇬 Nigeria",
  },
  {
    rating: 5,
    quote:
      "Server provisioning takes literally under 30 seconds. The native Docker and Node.js performance on their NVMe storage arrays drastically cut our Next.js build and SSR times.",
    name: "Mateo Rossi",
    initials: "MR",
    role: "Founder & Lead Developer",
    company: "Horizon Media",
    country: "🇮🇹 Italy",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visible card count on viewport resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  // Ensure index stays in bounds if visibleCount changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-running carousel timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section className="relative py-16 lg:py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Trusted by teams that need their infrastructure to simply work.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Read how engineering leads, ecommerce founders, and digital agencies power their mission-critical websites on Bhartiya Cloud.
          </p>

          {/* Trust Score Pill */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground shadow-xs">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} weight="fill" className="size-3.5" />
              ))}
            </div>
            <span className="font-semibold">4.8 / 5 Rating</span>
            <span className="text-muted-foreground">across 1,200+ verified customer reviews</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Controls Bar */}
          <div className="mb-4 flex items-center justify-end">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="flex size-9 items-center justify-center rounded-md border border-border bg-card text-foreground shadow-xs hover:bg-muted transition-colors cursor-pointer"
              >
                <CaretLeft weight="bold" className="size-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="flex size-9 items-center justify-center rounded-md border border-border bg-card text-foreground shadow-xs hover:bg-muted transition-colors cursor-pointer"
              >
                <CaretRight weight="bold" className="size-4" />
              </button>
            </div>
          </div>

          {/* Sliding Track Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out -mx-3"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={`${t.name}-${idx}`}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3"
                >
                  <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-xs transition-colors hover:border-border/80">
                    <div>
                      {/* Top Bar: 5 Stars + Quote Icon */}
                      <div className="flex items-center justify-between">
                        <div className="flex text-primary gap-0.5">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} weight="fill" className="size-3.5" />
                          ))}
                        </div>
                        <Quotes weight="fill" className="size-5 text-muted-foreground/30" />
                      </div>

                      {/* Quote Text */}
                      <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Author & Company Footer */}
                    <div className="mt-6 border-t border-border pt-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xs">
                          {t.initials}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-foreground truncate">{t.name}</div>
                          <div className="text-xs text-muted-foreground truncate">{t.role}</div>
                        </div>
                      </div>

                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-muted-foreground border-t border-border/40 pt-2">
                        <span className="font-medium text-foreground truncate">{t.company}</span>
                        <span className="shrink-0">{t.country}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Pagination Dots */}
          <div className="mt-8 flex items-center justify-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
