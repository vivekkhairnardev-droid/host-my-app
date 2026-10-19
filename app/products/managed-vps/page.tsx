"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InnerHero } from "@/components/inner-hero";
import { VpsConfigPreview } from "@/components/hero-previews/vps-config-preview";
import {
  ShieldCheck,
  Headset,
  Cpu,
  HardDrives,
  Lightning,
  Check,
  ArrowRight,
  Clock,
  Terminal,
  ArrowsClockwise,
  Wrench,
  Gauge,
  LockKey,
  CaretDown,
  X,
} from "@phosphor-icons/react";

interface ManagedPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  vCpu: number;
  ramGb: number;
  diskGb: number;
  bandwidthTb: number;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  features: string[];
}

const managedPlans: ManagedPlan[] = [
  {
    id: "mvps-1",
    name: "Managed VPS Essential",
    vCpu: 2,
    ramGb: 4,
    diskGb: 80,
    bandwidthTb: 10,
    monthlyPrice: 34.0,
    annualMonthlyPrice: 28.0,
    features: [
      "2 Dedicated AMD EPYC™ vCPUs",
      "4 GB DDR5 ECC Memory",
      "80 GB PCIe 4.0 NVMe SSD",
      "10 TB Traffic @ 2.5 Gbps Port",
      "24/7/365 Proactive Sysadmin Monitoring",
      "Free cPanel/WHM Solo or Plesk",
      "Automated OS & Kernel Livepatching",
      "Automated Daily Offsite Backups",
    ],
  },
  {
    id: "mvps-2",
    name: "Managed VPS Pro",
    badge: "Recommended",
    isPopular: true,
    vCpu: 4,
    ramGb: 8,
    diskGb: 160,
    bandwidthTb: 20,
    monthlyPrice: 58.0,
    annualMonthlyPrice: 48.0,
    features: [
      "4 Dedicated AMD EPYC™ vCPUs",
      "8 GB High-Speed DDR5 RAM",
      "160 GB Enterprise NVMe Array",
      "20 TB Traffic @ 5 Gbps Port",
      "Sub-15 Minute Ticket Response SLA",
      "Server Hardening & Web Application Firewall",
      "Free cPanel Admin Suite (5 Accounts)",
      "Daily Snapshot Retention (14 Days)",
      "Dedicated Technical Account Manager",
    ],
  },
  {
    id: "mvps-3",
    name: "Managed VPS Enterprise",
    vCpu: 8,
    ramGb: 16,
    diskGb: 320,
    bandwidthTb: 30,
    monthlyPrice: 108.0,
    annualMonthlyPrice: 88.0,
    features: [
      "8 Dedicated AMD EPYC™ vCPUs",
      "16 GB High-Speed DDR5 RAM",
      "320 GB Enterprise NVMe Array",
      "30 TB Traffic @ 10 Gbps Port",
      "Sub-10 Minute Priority Sysadmin SLA",
      "Custom Database Tuning (MySQL/PostgreSQL)",
      "Unlimited Accounts Control Panel",
      "Inline DDoS Mitigation (3.2 Tbps)",
      "Emergency Escalation & Direct Phone Support",
    ],
  },
];

const comparisonTable = [
  { feature: "24/7/365 Proactive Uptime Monitoring", unmanaged: false, managed: true },
  { feature: "Operating System & Kernel Hardening", unmanaged: false, managed: true },
  { feature: "Automated Daily & Weekly Backups", unmanaged: "Manual add-on", managed: true },
  { feature: "Sub-15 Minute Ticket Response SLA", unmanaged: false, managed: true },
  { feature: "Control Panel Setup (cPanel / Plesk)", unmanaged: "Self-install", managed: true },
  { feature: "MySQL / Redis Database Optimization", unmanaged: "Self-managed", managed: true },
  { feature: "DDoS Mitigation & Edge WAF Rules", unmanaged: "Basic Layer 4", managed: "Full L3-L7 Defense" },
  { feature: "Assisted Migration from Existing Host", unmanaged: false, managed: true },
];

export default function ManagedVPSPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* UNIFIED INNER HERO */}
        <InnerHero
          title="High-Performance Managed VPS"
          titleHighlight="with 24/7 Expert Administration."
          description="Focus on your business while our certified Linux sysadmins handle security hardening, OS livepatching, database optimization, and daily offsite snapshots with a guaranteed 15-minute response SLA."
          primaryCta={{
            text: "View Managed Plans",
            href: "#plans",
            icon: ArrowRight,
          }}
          secondaryCta={{
            text: "Compare Unmanaged VPS",
            href: "/products/cloud-vps",
            variant: "outline",
            icon: Cpu,
          }}
          benefits={[
            "24/7 Proactive Monitoring",
            "Automated OS Hardening",
            "15-Minute Support SLA",
          ]}
          preview={
            <VpsConfigPreview
              title="Managed MVPS-02 Performance"
              badge="Fully Managed"
              vCpu="4 Dedicated vCPU"
              cpuModel="AMD EPYC™ 9654 @ 3.7 GHz"
              ram="8 GB DDR5 ECC"
              ramType="ECC Registered"
              storage="160 GB PCIe 4.0"
              storageType="NVMe RAID-10"
              bandwidth="20 TB @ 10 Gbps"
              monthlyPrice="$19.99"
              hourlyPrice="cPanel / Plesk Ready"
              ctaLink="#plans"
              ctaText="View Managed Plans"
              showManagedBadge={true}
            />
          }
        />

        {/* PRICING PLANS */}
        <section id="plans" className="py-16 sm:py-20 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                Managed VPS Pricing Plans
              </h2>
              <p className="text-sm text-muted-foreground">
                High-frequency AMD EPYC™ processors with dedicated RAM and proactive engineering management.
              </p>

              {/* Billing Toggle (Segmented control) */}
              <div className="pt-2 inline-flex items-center rounded-md border border-border bg-muted p-1">
                <button
                  type="button"
                  onClick={() => setIsAnnual(false)}
                  className={cn(
                    "rounded px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                    !isAnnual ? "bg-background text-foreground shadow-xs font-semibold" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Monthly Billing
                </button>
                <button
                  type="button"
                  onClick={() => setIsAnnual(true)}
                  className={cn(
                    "flex items-center gap-1.5 rounded px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                    isAnnual ? "bg-background text-foreground shadow-xs font-semibold" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span>Annual Billing</span>
                  <span className="rounded bg-primary/10 px-1.5 py-0.2 text-[10px] font-semibold text-primary">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {managedPlans.map((plan) => {
                const price = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;
                return (
                  <div
                    key={plan.id}
                    className={cn(
                      "relative flex flex-col rounded-lg border bg-card p-6 shadow-xs transition-colors",
                      plan.isPopular ? "border-primary" : "border-border hover:border-border/80"
                    )}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                        {plan.badge}
                      </div>
                    )}

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                      <p className="text-xs text-muted-foreground font-mono">
                        {plan.vCpu} vCPU · {plan.ramGb} GB RAM · {plan.diskGb} GB NVMe
                      </p>
                    </div>

                    <div className="my-5 border-y border-border py-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                          ${price.toFixed(2)}
                        </span>
                        <span className="text-xs text-muted-foreground">/ month</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-1 font-mono">
                        {isAnnual ? `Billed $${(price * 12).toFixed(2)} annually` : "Billed month-to-month"}
                      </p>
                    </div>

                    <ul className="flex-1 space-y-2 text-xs text-muted-foreground mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check weight="bold" className="size-3.5 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.isPopular ? "default" : "outline"}
                      className="w-full font-medium"
                    >
                      <span>Deploy {plan.name}</span>
                      <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2 mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Unmanaged vs. Fully Managed VPS
              </h2>
              <p className="text-sm text-muted-foreground">
                Understand the difference in responsibilities between unmanaged servers and Bhartiya Cloud Managed VPS.
              </p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border bg-card">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="p-3.5 font-bold text-foreground">Operational Scope</th>
                    <th className="p-3.5 font-bold text-muted-foreground text-center">Unmanaged VPS</th>
                    <th className="p-3.5 font-bold text-primary text-center">Bhartiya Cloud Managed VPS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {comparisonTable.map((row, i) => (
                    <tr key={i} className="hover:bg-muted/20 transition-colors">
                      <td className="p-3.5 font-medium text-foreground">{row.feature}</td>
                      <td className="p-3.5 text-center">
                        {typeof row.unmanaged === "boolean" ? (
                          row.unmanaged ? (
                            <Check weight="bold" className="mx-auto size-4 text-emerald-500" />
                          ) : (
                            <X weight="bold" className="mx-auto size-4 text-muted-foreground/40" />
                          )
                        ) : (
                          <span className="text-muted-foreground">{row.unmanaged}</span>
                        )}
                      </td>
                      <td className="p-3.5 text-center font-semibold text-primary">
                        {typeof row.managed === "boolean" ? (
                          <Check weight="bold" className="mx-auto size-4 text-primary" />
                        ) : (
                          <span>{row.managed}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-muted/40 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Let Our Systems Engineers Manage Your Infrastructure
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Free setup, free site migration, and a financially backed 99.99% uptime guarantee.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a href="#plans" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                Deploy Managed VPS
              </a>
              <Link href="/solutions/migration" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                Free Migration Service
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
