"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ShieldCheck, HardDrives, Globe } from "@phosphor-icons/react";

interface HostingPlanPreviewProps {
  planName?: string;
  tagline?: string;
  price?: string;
  period?: string;
  badge?: string;
  specs?: { label: string; value: string }[];
  features?: string[];
  ctaLink?: string;
  ctaText?: string;
}

export function HostingPlanPreview({
  planName = "Business Pro",
  tagline = "High-speed NVMe hosting for production websites",
  price = "$2.99",
  period = "/ month",
  badge = "Production Ready",
  specs = [
    { label: "Websites", value: "Unlimited" },
    { label: "Storage", value: "150 GB NVMe" },
    { label: "Bandwidth", value: "Unmetered" },
    { label: "Server Engine", value: "LiteSpeed" },
  ],
  features = [
    "Enterprise LiteSpeed caching built-in",
    "Automated daily offsite backups",
    "Free Wildcard SSL certificates",
    "Isolated cPanel account environments",
  ],
  ctaLink = "#plans",
  ctaText = "View All Plan Tiers",
}: HostingPlanPreviewProps) {
  return (
    <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-6 shadow-xs">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Plan Specification
          </div>
          <div className="text-base font-bold text-foreground mt-0.5">
            {planName}
          </div>
        </div>
        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          {badge}
        </span>
      </div>

      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
        {tagline}
      </p>

      {/* Grid of 4 Key Specs */}
      <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
        {specs.map((s) => (
          <div key={s.label} className="rounded-md border border-border bg-muted/30 p-2.5">
            <span className="text-muted-foreground block text-[11px]">{s.label}</span>
            <span className="font-semibold text-foreground mt-0.5 block">{s.value}</span>
          </div>
        ))}
      </div>

      {/* Features Checklist */}
      <div className="mt-4 border-t border-border pt-3">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          Included Features
        </div>
        <ul className="space-y-1.5 text-xs">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-foreground/90">
              <Check weight="bold" className="size-3.5 text-primary shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price & Action Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-foreground">{price}</span>
            <span className="text-xs text-muted-foreground">{period}</span>
          </div>
          <div className="text-[11px] text-muted-foreground">
            30-day money-back guarantee
          </div>
        </div>

        <Button
          size="sm"
          nativeButton={false}
          render={<Link href={ctaLink} />}
          className="gap-1.5 font-medium"
        >
          <span>{ctaText}</span>
          <ArrowRight weight="bold" className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
