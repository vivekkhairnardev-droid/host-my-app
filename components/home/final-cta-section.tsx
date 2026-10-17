"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Headset, CheckCircle, Sparkle } from "@phosphor-icons/react";

export function FinalCtaSection() {
  return (
    <section className="relative py-16 lg:py-24 border-t border-border/60 bg-muted/30">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Indicator */}

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Ready to build on better infrastructure?
        </h2>

        {/* Supporting Copy */}
        <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground sm:text-lg leading-relaxed">
          Launch your website, application, or business infrastructure today. Enjoy pure NVMe performance, root control, and real human engineering support.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/#pricing" />}
            className="w-full sm:w-auto gap-2"
          >
            <span>Get Started</span>
            <ArrowRight weight="bold" className="size-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<Link href="#contact" />}
            className="w-full sm:w-auto gap-2"
          >
            <Headset className="size-4 text-muted-foreground" />
            <span>Talk to an Expert</span>
          </Button>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle weight="fill" className="size-4 text-muted-foreground" />
            Instant automated server setup
          </span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle weight="fill" className="size-4 text-muted-foreground" />
            30-day money-back guarantee
          </span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle weight="fill" className="size-4 text-muted-foreground" />
            Zero-downtime free migration
          </span>
        </div>
      </div>
    </section>
  );
}
