"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface HeroBenefit {
  text: string;
}

export interface HeroCta {
  text: string;
  href: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  icon?: React.ComponentType<{ className?: string; weight?: "regular" | "bold" | "fill" }>;
  onClick?: () => void;
}

export type HeroVariant = "split" | "centered" | "text-only";

export interface InnerHeroProps {
  breadcrumbs?: BreadcrumbItem[];
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  benefits?: (string | HeroBenefit)[];
  preview?: React.ReactNode;
  variant?: HeroVariant;
  className?: string;
}

export function InnerHero({
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  benefits = [],
  preview,
  variant,
  className = "",
}: InnerHeroProps) {
  const PrimaryIcon = primaryCta.icon || ArrowRight;
  const SecondaryIcon = secondaryCta?.icon;

  // Determine effective layout variant: if explicitly text-only or centered, or if no preview is passed
  const effectiveVariant = variant || (!preview ? "centered" : "split");

  if (effectiveVariant === "centered" || effectiveVariant === "text-only") {
    return (
      <section className={`relative border-b border-border bg-background py-14 sm:py-20 lg:py-24 overflow-hidden ${className}`}>
        {/* Subtle ambient lighting accent */}
        <div className="pointer-events-none absolute inset-0 -top-24 -z-10 flex items-center justify-center">
          <div className="h-64 w-96 rounded-full bg-primary/10 blur-3xl opacity-60" />
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* H1 Heading */}
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.12]">
            {title}{" "}
            {titleHighlight && (
              <span className="text-primary">{titleHighlight}</span>
            )}
          </h1>

          {/* Supporting Description */}
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg lg:text-xl leading-relaxed">
            {description}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              variant={primaryCta.variant || "default"}
              nativeButton={false}
              render={<Link href={primaryCta.href} />}
              className="gap-2 font-medium w-full sm:w-auto"
              onClick={primaryCta.onClick}
            >
              <span>{primaryCta.text}</span>
              <PrimaryIcon weight="bold" className="size-4" />
            </Button>

            {secondaryCta && (
              <Button
                size="lg"
                variant={secondaryCta.variant || "outline"}
                nativeButton={false}
                render={<Link href={secondaryCta.href} />}
                className="gap-2 font-medium w-full sm:w-auto"
                onClick={secondaryCta.onClick}
              >
                <span>{secondaryCta.text}</span>
                {SecondaryIcon && <SecondaryIcon className="size-4 text-muted-foreground" />}
              </Button>
            )}
          </div>

          {/* Compact Product Benefits */}
          {benefits.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 border-t border-border/80 pt-6 text-xs sm:text-sm text-muted-foreground w-full">
              {benefits.map((benefit, i) => {
                const text = typeof benefit === "string" ? benefit : benefit.text;
                return (
                  <span key={text} className="inline-flex items-center gap-2 text-foreground/90 font-medium">
                    <CheckCircle weight="fill" className="size-4 text-primary shrink-0" />
                    <span>{text}</span>
                    {i < benefits.length - 1 && (
                      <span className="ml-4 text-border hidden sm:inline" aria-hidden="true">
                        •
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={`border-b border-border bg-background py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Description, Actions, Benefits */}
          <div className="space-y-6 lg:col-span-7">
            {/* H1 Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl sm:leading-[1.15]">
              {title}{" "}
              {titleHighlight && (
                <span className="text-primary">{titleHighlight}</span>
              )}
            </h1>

            {/* Supporting Description */}
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              {description}
            </p>

            {/* Primary and Secondary Action CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-1">
              <Button
                size="lg"
                variant={primaryCta.variant || "default"}
                nativeButton={false}
                render={<Link href={primaryCta.href} />}
                className="gap-2 font-medium"
                onClick={primaryCta.onClick}
              >
                <span>{primaryCta.text}</span>
                <PrimaryIcon weight="bold" className="size-4" />
              </Button>

              {secondaryCta && (
                <Button
                  size="lg"
                  variant={secondaryCta.variant || "outline"}
                  nativeButton={false}
                  render={<Link href={secondaryCta.href} />}
                  className="gap-2 font-medium"
                  onClick={secondaryCta.onClick}
                >
                  <span>{secondaryCta.text}</span>
                  {SecondaryIcon && <SecondaryIcon className="size-4 text-muted-foreground" />}
                </Button>
              )}
            </div>

            {/* Compact Product Benefits */}
            {benefits.length > 0 && (
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-3 text-xs text-muted-foreground border-t border-border/80">
                {benefits.map((benefit, i) => {
                  const text = typeof benefit === "string" ? benefit : benefit.text;
                  return (
                    <span key={text} className="inline-flex items-center gap-1.5 text-foreground/90">
                      <CheckCircle weight="fill" className="size-4 text-primary shrink-0" />
                      <span>{text}</span>
                      {i < benefits.length - 1 && (
                        <span className="ml-3 text-border hidden sm:inline" aria-hidden="true">
                          •
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Preview Component */}
          {preview && (
            <div className="lg:col-span-5">
              {preview}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
