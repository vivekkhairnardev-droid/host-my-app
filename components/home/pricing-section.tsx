"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Cpu,
  HardDrives,
  Lightning,
} from "@phosphor-icons/react";
import { useCurrency } from "@/lib/currency-context";

interface PlanSpec {
  name: string;
  badge?: string;
  isRecommended?: boolean;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  websites: string;
  backup: string;
  ssl: string;
  support: string;
  features: string[];
}

const plans: PlanSpec[] = [
  {
    name: "Starter",
    tagline: "Ideal for personal blogs, portfolios & small business sites.",
    monthlyPrice: 4.99,
    annualPrice: 3.49,
    cpu: "1 Core AMD EPYC",
    ram: "2 GB ECC DDR5",
    storage: "25 GB NVMe Gen4",
    bandwidth: "1 TB High-Speed",
    websites: "1 Website",
    backup: "Weekly Automated",
    ssl: "Free AutoSSL",
    support: "24/7 Standard",
    features: [
      "Free Domain (1st Year)",
      "Standard Caching Engine",
      "5 Business Email Accounts",
      "Git & SSH Access",
      "DDoS Protection (1 Tbps)",
    ],
  },
  {
    name: "Business",
    tagline: "Built for growing companies, high-traffic blogs & WooCommerce.",
    monthlyPrice: 9.99,
    annualPrice: 7.99,
    cpu: "2 Cores AMD EPYC",
    ram: "4 GB ECC DDR5",
    storage: "60 GB NVMe Gen4",
    bandwidth: "3 TB High-Speed",
    websites: "Up to 5 Websites",
    backup: "Daily Automated",
    ssl: "Free Wildcard SSL",
    support: "24/7 Priority",
    features: [
      "Free Domain + Privacy",
      "Redis Object Caching",
      "Unlimited Business Email",
      "Staging Environment",
      "Advanced DDoS Shield (2 Tbps)",
      "Web Application Firewall (WAF)",
    ],
  },
  {
    name: "Performance",
    badge: "Recommended",
    isRecommended: true,
    tagline: "Designed for SaaS applications, busy stores & agencies.",
    monthlyPrice: 19.99,
    annualPrice: 15.99,
    cpu: "4 Cores AMD EPYC",
    ram: "8 GB ECC DDR5",
    storage: "160 GB NVMe Gen4",
    bandwidth: "6 TB High-Speed",
    websites: "Unlimited Websites",
    backup: "Real-time & Daily Snapshot",
    ssl: "Free Multi-Domain SSL",
    support: "24/7 Dedicated Tier-3",
    features: [
      "Dedicated vCPU Allocation",
      "Ultra-Low Latency Anycast DNS",
      "NVMe IOPS Boost (60K IOPS)",
      "Automated Malware Removal",
      "Priority Support (< 10 min SLA)",
      "White-Glove Migration Included",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Maximum power for mission-critical apps & high concurrency.",
    monthlyPrice: 49.99,
    annualPrice: 39.99,
    cpu: "8 Cores AMD EPYC",
    ram: "16 GB ECC DDR5",
    storage: "320 GB NVMe Gen4",
    bandwidth: "12 TB High-Speed",
    websites: "Unlimited Websites",
    backup: "Hourly & Daily Offsite",
    ssl: "Free Custom EV/OV SSL",
    support: "Dedicated Account Manager",
    features: [
      "Single-Tenant Isolation",
      "Custom Network Routing & BGP",
      "Dedicated Database Cache",
      "SOC 2 / HIPAA Ready Config",
      "99.99% Financial SLA",
      "Custom Private VPC Link",
    ],
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { formatPrice } = useCurrency();

  return (
    <section id="pricing" className="relative py-16 lg:py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Predictable plans. No surprises.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Choose the right power tier for your project. All plans include NVMe storage, automated backups, and 24/7 expert human support.
          </p>

          {/* Billing Interval Toggle */}
          <div className="mt-8 inline-flex items-center rounded-md border border-border bg-muted p-1">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`rounded px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer ${!isAnnual
                  ? "bg-background text-foreground shadow-xs font-semibold"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-1.5 rounded px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer ${isAnnual
                  ? "bg-background text-foreground shadow-xs font-semibold"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <span>Annual Billing</span>
              <span className="rounded bg-primary/10 px-1.5 py-0.2 text-[10px] font-semibold text-primary">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-lg border bg-card p-6 transition-colors ${plan.isRecommended
                    ? "border-primary shadow-xs"
                    : "border-border hover:border-border/80"
                  }`}
              >
                {/* Recommended Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">
                      {formatPrice(price)}
                    </span>
                    <span className="text-xs text-muted-foreground">/ month</span>
                  </div>
                  {isAnnual && (
                    <div className="mt-1 text-[11px] font-medium text-muted-foreground">
                      Billed annually (Save {formatPrice(plan.monthlyPrice * 12 - plan.annualPrice * 12, { round: true })}/yr)
                    </div>
                  )}

                  {/* Hardware & Spec Table */}
                  <div className="mt-5 space-y-2 border-y border-border py-4 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Compute</span>
                      <span className="font-medium text-foreground">{plan.cpu}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Memory</span>
                      <span className="font-medium text-foreground">{plan.ram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">NVMe Disk</span>
                      <span className="font-medium text-foreground">{plan.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bandwidth</span>
                      <span className="font-medium text-foreground">{plan.bandwidth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Websites</span>
                      <span className="font-medium text-foreground">{plan.websites}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Backups</span>
                      <span className="font-medium text-foreground">{plan.backup}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">SSL</span>
                      <span className="font-medium text-foreground">{plan.ssl}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Support</span>
                      <span className="font-medium text-foreground">{plan.support}</span>
                    </div>
                  </div>

                  {/* Key Feature Bullets */}
                  <div className="mt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Plan Highlights:
                    </p>
                    <ul className="mt-2.5 space-y-2 text-xs">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-foreground/90">
                          <Check className="size-3.5 shrink-0 text-primary font-bold" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-2">
                  <Button
                    variant={plan.isRecommended ? "default" : "outline"}
                    className="w-full justify-center gap-1.5"
                    nativeButton={false}
                    render={
                      <Link
                        href={`/deploy?plan=${plan.name.toLowerCase()}&billing=${isAnnual ? "annual" : "monthly"}`}
                      />
                    }
                  >
                    <span>Deploy {plan.name}</span>
                    <ArrowRight weight="bold" className="size-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compare All Specifications Link */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowModal(!showModal)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline cursor-pointer"
          >
            <span>{showModal ? "Hide detailed specifications" : "Compare all specifications"}</span>
            <ArrowRight weight="bold" className="size-3.5" />
          </button>
        </div>

        {/* Expandable Specifications Comparison Table */}
        {showModal && (
          <div className="mt-8 overflow-x-auto rounded-lg border border-border bg-card p-6 shadow-sm animate-in fade-in slide-in-from-top-4 duration-200">
            <h3 className="text-base font-bold text-foreground mb-4">Detailed Hardware & Platform Matrix</h3>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="py-3 px-4 font-semibold text-foreground">Specification</th>
                  <th className="py-3 px-4 font-semibold text-foreground">Starter</th>
                  <th className="py-3 px-4 font-semibold text-foreground">Business</th>
                  <th className="py-3 px-4 font-semibold text-primary">Performance</th>
                  <th className="py-3 px-4 font-semibold text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">Processor Architecture</td>
                  <td className="py-3 px-4 text-muted-foreground">AMD EPYC Gen 4</td>
                  <td className="py-3 px-4 text-muted-foreground">AMD EPYC Gen 4</td>
                  <td className="py-3 px-4 font-medium text-foreground">AMD EPYC Gen 4 Dedicated</td>
                  <td className="py-3 px-4 font-medium text-foreground">Dual Socket AMD EPYC</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">Storage Technology</td>
                  <td className="py-3 px-4 text-muted-foreground">PCIe 4.0 NVMe</td>
                  <td className="py-3 px-4 text-muted-foreground">PCIe 4.0 NVMe RAID-10</td>
                  <td className="py-3 px-4 font-medium text-foreground">PCIe 4.0 Enterprise NVMe</td>
                  <td className="py-3 px-4 font-medium text-foreground">PCIe 5.0 Direct Attached NVMe</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">Network Port Speed</td>
                  <td className="py-3 px-4 text-muted-foreground">1 Gbps Shared</td>
                  <td className="py-3 px-4 text-muted-foreground">1 Gbps Burst</td>
                  <td className="py-3 px-4 font-medium text-foreground">2.5 Gbps Dedicated Port</td>
                  <td className="py-3 px-4 font-medium text-foreground">10 Gbps Unmetered Link</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">DDoS Mitigation</td>
                  <td className="py-3 px-4 text-muted-foreground">1 Tbps Always-On</td>
                  <td className="py-3 px-4 text-muted-foreground">2 Tbps Always-On</td>
                  <td className="py-3 px-4 font-medium text-foreground">3.2 Tbps L3/L4/L7 Anycast</td>
                  <td className="py-3 px-4 font-medium text-foreground">Custom Scrubbing & Rules</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">Root Access & Custom ISO</td>
                  <td className="py-3 px-4 text-muted-foreground">No (Managed CPanel)</td>
                  <td className="py-3 px-4 text-muted-foreground">No (Managed CPanel)</td>
                  <td className="py-3 px-4 font-semibold text-primary">Yes (Full KVM Root)</td>
                  <td className="py-3 px-4 font-semibold text-primary">Yes (IPMI / Console)</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
