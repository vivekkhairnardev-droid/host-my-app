"use client";

import React from "react";
import { Check } from "@phosphor-icons/react";

interface ComparisonRow {
  feature: string;
  nexora: string;
  traditional: string;
  enterprise: string;
}

const rows: ComparisonRow[] = [
  {
    feature: "Compute Architecture",
    nexora: "AMD EPYC™ Gen4 @ 4.2 GHz Turbo",
    traditional: "Legacy multi-tenant hardware",
    enterprise: "Modern (billed per CPU-second)",
  },
  {
    feature: "Storage Technology",
    nexora: "Enterprise Gen4 NVMe RAID-10",
    traditional: "Slow SATA SSDs or legacy HDDs",
    enterprise: "Network EBS / SAN (extra IOPS fee)",
  },
  {
    feature: "Automated Offsite Backups",
    nexora: "Included on all core plans",
    traditional: "Expensive monthly add-on fee",
    enterprise: "Complex manual snapshot rules",
  },
  {
    feature: "Technical Support",
    nexora: "24/7/365 Tier-3 Linux Engineers",
    traditional: "Outsourced script readers",
    enterprise: "Paid support tier ($100+/mo min)",
  },
  {
    feature: "DDoS Attack Mitigation",
    nexora: "Up to 3.2 Tbps L3/L4/L7 (Free)",
    traditional: "Null-routing on large attacks",
    enterprise: "Shield Advanced ($3,000/mo)",
  },
  {
    feature: "Assisted Migration Service",
    nexora: "100% Free with zero downtime",
    traditional: "Self-service or paid service",
    enterprise: "DIY or certified partner fees",
  },
  {
    feature: "Full Root & Custom ISOs",
    nexora: "Available across all VPS tiers",
    traditional: "Strict shared hosting jail",
    enterprise: "Full control but high complexity",
  },
  {
    feature: "Vertical Scalability",
    nexora: "1-Click instant resource resize",
    traditional: "Requires manual server rebuild",
    enterprise: "Autoscaling with complex policies",
  },
  {
    feature: "Pricing Transparency",
    nexora: "Fixed predictable pricing, no gotchas",
    traditional: "3x price surge on renewal",
    enterprise: "Bandwidth egress invoices",
  },
];

export function ComparisonSection() {
  return (
    <section className="relative py-16 lg:py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            See what you get with us.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            High performance without enterprise complexity. Compare how NEXORA delivers more speed and value than budget web hosts and legacy hyperscalers.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto rounded-lg border border-border bg-card p-4 sm:p-6 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 px-4 font-semibold text-foreground w-1/4">Feature / Capability</th>
                <th className="py-3 px-4 font-semibold text-primary bg-primary/5 w-1/3">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-primary" />
                    <span>NEXORA Cloud</span>
                  </div>
                </th>
                <th className="py-3 px-4 font-semibold text-muted-foreground w-1/5">Budget Hosts</th>
                <th className="py-3 px-4 font-semibold text-muted-foreground w-1/5">Hyperscalers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr key={row.feature} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="py-3 px-4 font-medium text-foreground bg-primary/5">
                    <div className="flex items-center gap-2">
                      <Check className="size-3.5 text-primary shrink-0 font-bold" />
                      <span>{row.nexora}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">
                    {row.traditional}
                  </td>
                  <td className="py-3 px-4 text-muted-foreground text-xs">
                    {row.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
