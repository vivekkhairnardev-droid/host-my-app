"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowsClockwise,
  Users,
  HardDrives,
  CurrencyDollar,
  Check,
  ArrowRight,
  ShieldCheck,
  Globe,
  Sliders,
  CaretDown,
  CheckCircle,
} from "@phosphor-icons/react";

interface ResellerPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  cPanelAccounts: number;
  nvmeStorageGb: number;
  bandwidthTb: string;
  monthlyPrice: number;
  features: string[];
}

const resellerPlans: ResellerPlan[] = [
  {
    id: "reseller-starter",
    name: "Reseller Silver",
    cPanelAccounts: 25,
    nvmeStorageGb: 100,
    bandwidthTb: "2 TB",
    monthlyPrice: 19.95,
    features: [
      "25 cPanel Client Accounts",
      "100 GB Gen4 NVMe Storage",
      "2 TB High-Speed Bandwidth",
      "100% White-Label Private Nameservers",
      "Softaculous 1-Click Script Installer",
      "Free AutoSSL for All Client Domains",
      "Automated Offsite Backups",
    ],
  },
  {
    id: "reseller-pro",
    name: "Reseller Gold",
    badge: "Recommended",
    isPopular: true,
    cPanelAccounts: 60,
    nvmeStorageGb: 250,
    bandwidthTb: "5 TB",
    monthlyPrice: 34.95,
    features: [
      "60 cPanel Client Accounts",
      "250 GB Gen4 NVMe Storage",
      "5 TB High-Speed Bandwidth",
      "WHMCS Starter License Included",
      "100% White-Label Branding & DNS",
      "Overselling Enabled on All Accounts",
      "Free Dedicated IP Address",
      "24/7 Priority Reseller Support",
    ],
  },
  {
    id: "reseller-platinum",
    name: "Reseller Platinum",
    badge: "Agency Fleet",
    cPanelAccounts: 150,
    nvmeStorageGb: 500,
    bandwidthTb: "10 TB",
    monthlyPrice: 59.95,
    features: [
      "150 cPanel Client Accounts",
      "500 GB Pure NVMe RAID 10 Array",
      "10 TB High-Speed Bandwidth",
      "WHMCS Pro License Included",
      "Overselling Enabled",
      "2 Free Dedicated IP Addresses",
      "Redis Object Cache for Client Sites",
      "Assisted White-Glove Client Migrations",
    ],
  },
];

export default function ResellerHostingPage() {
  const [clientCount, setClientCount] = useState<number>(30);
  const [clientFee, setClientFee] = useState<number>(25);

  const estimatedRevenue = clientCount * clientFee;
  const resellerCost = 34.95; // gold plan
  const estimatedProfit = Math.max(0, estimatedRevenue - resellerCost);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="border-b border-border bg-background py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span>Products</span>
              <span>/</span>
              <span className="text-foreground font-semibold">Reseller Hosting</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 rounded border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  <span>100% White-Label · cPanel/WHM · WHMCS Billing</span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.12]">
                  White-Label Reseller Hosting for Agencies &amp; Developers.
                </h1>

                <p className="max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
                  Host client websites under your own brand with Web Host Manager (WHM), custom private nameservers, automated client invoicing via WHMCS, and Gen4 NVMe storage arrays with overselling enabled.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a href="#plans" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                    <span>View Reseller Packages</span>
                    <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                  </a>
                  <a href="#calculator" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                    <span>Profit Calculator</span>
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">100%</p>
                    <p className="text-xs text-muted-foreground">White-Label Branding</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">WHMCS</p>
                    <p className="text-xs text-muted-foreground">Automated Billing</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">Enabled</p>
                    <p className="text-xs text-muted-foreground">Overselling Allowed</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Reseller Infrastructure Specifications */}
              <div className="lg:col-span-5">
                <div className="rounded-lg border border-border bg-card p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <h2 className="text-sm font-bold text-foreground">Reseller Architecture Scope</h2>
                    <span className="rounded border border-border bg-muted px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                      cPanel / WHM
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between rounded-md border border-border bg-muted/20 p-2.5">
                      <span className="text-muted-foreground">Account Management:</span>
                      <span className="font-semibold text-foreground">WHM Root Suite (Create &amp; Manage Accounts)</span>
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-border bg-muted/20 p-2.5">
                      <span className="text-muted-foreground">Custom Nameservers:</span>
                      <span className="font-semibold text-foreground">ns1.yourdomain.com / ns2.yourdomain.com</span>
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-border bg-muted/20 p-2.5">
                      <span className="text-muted-foreground">Billing Automation:</span>
                      <span className="font-semibold text-foreground">WHMCS integration for invoicing &amp; provisioning</span>
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-border bg-muted/20 p-2.5">
                      <span className="text-muted-foreground">Resource Allocation:</span>
                      <span className="font-semibold text-foreground">Overselling enabled to maximize agency margins</span>
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-border bg-muted/20 p-2.5">
                      <span className="text-muted-foreground">Client Security:</span>
                      <span className="font-semibold text-foreground">Isolated cPanel environments with AutoSSL</span>
                    </div>
                  </div>

                  <div className="rounded-md border border-border bg-muted/40 p-3 text-center">
                    <span className="text-xs font-medium text-muted-foreground">
                      Zero mention of Nexora on any client-facing interfaces
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE PROFIT CALCULATOR */}
        <section id="calculator" className="py-16 sm:py-20 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Agency Hosting Margin Calculator
              </h2>
              <p className="text-sm text-muted-foreground">
                Estimate your monthly recurring hosting income based on active client accounts.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 shadow-xs space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-foreground">Active Hosted Clients:</span>
                  <span className="font-mono text-foreground font-bold">{clientCount} clients</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={clientCount}
                  onChange={(e) => setClientCount(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-muted rounded cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-foreground">Average Monthly Hosting Fee Charged per Client:</span>
                  <span className="font-mono text-foreground font-bold">${clientFee} / mo</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={clientFee}
                  onChange={(e) => setClientFee(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-muted rounded cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-border text-center">
                <div className="rounded border border-border bg-muted/20 p-3">
                  <span className="text-[11px] text-muted-foreground block">Client Invoicing</span>
                  <span className="text-lg font-bold text-foreground">${estimatedRevenue.toFixed(2)}</span>
                </div>
                <div className="rounded border border-border bg-muted/20 p-3">
                  <span className="text-[11px] text-muted-foreground block">Nexora Plan Cost</span>
                  <span className="text-lg font-medium text-muted-foreground">-${resellerCost.toFixed(2)}</span>
                </div>
                <div className="rounded border border-primary/40 bg-primary/5 p-3">
                  <span className="text-[11px] text-primary font-semibold block">Net Monthly Margin</span>
                  <span className="text-lg font-bold text-primary">${estimatedProfit.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING PLANS */}
        <section id="plans" className="py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Reseller Hosting Packages
              </h2>
              <p className="text-sm text-muted-foreground">
                All plans include WHM access, overselling privileges, and 24/7 technical support.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {resellerPlans.map((plan) => (
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
                      {plan.cPanelAccounts} cPanel Accounts · {plan.nvmeStorageGb} GB NVMe
                    </p>
                  </div>

                  <div className="my-5 border-y border-border py-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        ${plan.monthlyPrice.toFixed(2)}
                      </span>
                      <span className="text-xs text-muted-foreground">/ month</span>
                    </div>
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
                    <span>Start Reselling</span>
                    <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-muted/40 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Start Offering Web Hosting Under Your Brand
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Setup is automated. Private nameservers and WHM credentials are delivered immediately upon order.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a href="#plans" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                Deploy Reseller Plan
              </a>
              <Link href="/solutions/agencies" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                Agency Solutions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
