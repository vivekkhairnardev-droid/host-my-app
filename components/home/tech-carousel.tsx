"use client";

import React, { useRef, useState, useEffect } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface TechItem {
  name: string;
  icon: string;
}

interface TechCarouselProps {
  items: TechItem[];
}

export function TechCarousel({ items }: TechCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll loop using requestAnimationFrame
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let lastTime = performance.now();
    const speed = 0.05; // pixels per ms (~50px per second)

    const step = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isPaused && el) {
        el.scrollLeft += delta * speed;
        // Seamlessly loop when reaching half of the duplicated scrollWidth
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 260;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  // Triple items for seamless loop and wide displays
  const displayItems = [...items, ...items, ...items];

  return (
    <div
      className="relative mt-6 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Left Navigation Chevron */}
      <button
        type="button"
        onClick={() => handleScroll("left")}
        aria-label="Scroll technologies left"
        className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-20 flex size-8 items-center justify-center rounded-full border border-border bg-card/95 text-foreground shadow-md transition-all hover:bg-muted hover:scale-105 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
      >
        <CaretLeft weight="bold" className="size-4" />
      </button>

      {/* Right Navigation Chevron */}
      <button
        type="button"
        onClick={() => handleScroll("right")}
        aria-label="Scroll technologies right"
        className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-20 flex size-8 items-center justify-center rounded-full border border-border bg-card/95 text-foreground shadow-md transition-all hover:bg-muted hover:scale-105 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
      >
        <CaretRight weight="bold" className="size-4" />
      </button>

      {/* Left & Right Edge Fade Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Scrollable Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto py-2.5 px-2 select-none cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {displayItems.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex shrink-0 items-center gap-2 rounded-md border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground shadow-xs transition-colors hover:border-primary/50 hover:bg-muted/70"
          >
            <span className="text-sm">{tech.icon}</span>
            <span className="whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
