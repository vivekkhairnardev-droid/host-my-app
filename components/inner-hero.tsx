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

export interface InnerHeroProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  benefits: (string | HeroBenefit)[];
  preview: React.ReactNode;
  className?: string;
}

export function InnerHero({
  breadcrumbs,
  eyebrow,
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  benefits,
  preview,
  className = "",
}: InnerHeroProps) {
  const PrimaryIcon = primaryCta.icon || ArrowRight;
  const SecondaryIcon = secondaryCta?.icon;

  return (
    <section className={`border-b border-border bg-background py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* A. Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
        >
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={item.label}>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-foreground font-medium" : ""}>
                    {item.label}
                  </span>
                )}
                {!isLast && <span className="text-muted-foreground/60">/</span>}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Description, Actions, Benefits */}
          <div className="space-y-6 lg:col-span-7">
            {/* B. Product Category Eyebrow (Plain Text, Not a Badge) */}
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {eyebrow}
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl sm:leading-[1.15]">
              {title}{" "}
              {titleHighlight && (
                <span className="text-primary">{titleHighlight}</span>
              )}
            </h1>

            {/* C. Supporting Description (~2 sentences, product-specific) */}
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              {description}
            </p>

            {/* D. Primary and Secondary Action CTAs */}
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

            {/* E. Compact Product Benefits (Horizontal List with subtle separators, not cards) */}
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
          </div>

          {/* Right Column: Realistic Product Preview */}
          <div className="lg:col-span-5">
            {preview}
          </div>
        </div>
      </div>
    </section>
  );
}
