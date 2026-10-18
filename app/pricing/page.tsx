"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Cloud,
  Globe,
  HardDrives,
  Cpu,
  CurrencyDollar,
  CheckCircle,
  X,
} from "@phosphor-icons/react";

const currencies = [
  { code: "USD", symbol: "$", rate: 1.0 },
  { code: "EUR", symbol: "€", rate: 0.92 },
  { code: "GBP", symbol: "£", rate: 0.79 },
  { code: "INR", symbol: "₹", rate: 83.5 },
];

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState<"vps" | "web" | "managed" | "dedicated">("vps");
  const [isAnnual, setIsAnnual] = useState(true);
  const [currencyIndex, setCurrencyIndex] = useState(0);

  const curr = currencies[currencyIndex];

  const formatPrice = (usdMonthly: number) => {
    const discounted = isAnnual ? usdMonthly * 0.8 : usdMonthly;
    const converted = discounted * curr.rate;
    return `${curr.symbol}${converted < 10 ? converted.toFixed(2) : Math.round(converted)}`;
  };

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
              <span className="text-foreground font-semibold">Pricing Hub</span>
            </nav>

            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                <span>Transparent &amp; Predictable Cloud Pricing</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.12]">
                Simple Plans. Zero Hidden Egress Fees.
              </h1>

              <p className="text-base text-muted-foreground sm:text-lg leading-relaxed">
                No complex billing formulas, no surprise bandwidth egress invoices, and no renewal price hikes. All products include a 30-day money-back guarantee.
              </p>

              {/* Controls: Billing Toggle & Currency Switcher */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                {/* Billing toggle */}
                <div className="inline-flex items-center rounded-md border border-border bg-muted p-1">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={cn(
                      "rounded px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                      !isAnnual ? "bg-background text-foreground shadow-xs font-semibold" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Monthly Billing
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={cn(
                      "flex items-center gap-1.5 rounded px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                      isAnnual ? "bg-background text-foreground shadow-xs font-semibold" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span>Annual Billing</span>
                    <span className="rounded bg-primary/10 px-1.5 py-0.2 text-[10px] font-semibold text-primary">
                      Save 20%
                    </span>
                  </button>
                </div>

                {/* Currency Switcher */}
                <div className="inline-flex items-center rounded-md border border-border bg-muted p-1">
                  {currencies.map((c, i) => (
                    <button
                      key={c.code}
                      onClick={() => setCurrencyIndex(i)}
                      className={cn(
                        "rounded px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                        currencyIndex === i
                          ? "bg-background text-foreground shadow-xs font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {c.code}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING PLANS BY CATEGORY */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Switcher Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
              {[
                { id: "vps", label: "Cloud VPS (KVM)", icon: Cloud },
                { id: "web", label: "NVMe Web Hosting", icon: Globe },
                { id: "managed", label: "Managed VPS", icon: ShieldCheck },
                { id: "dedicated", label: "Dedicated Servers", icon: HardDrives },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as any)}
                    className={cn(
                      "flex items-center gap-1.5 rounded px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                      activeCategory === tab.id
                        ? "border border-border bg-foreground text-background font-semibold"
                        : "border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon weight="bold" className="size-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Content for Cloud VPS */}
            {activeCategory === "vps" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "CX-21 Sandbox",
                    desc: "Lightweight web services, staging & dev environments",
                    price: 4.5,
                    cpu: "1 AMD vCPU",
                    ram: "2 GB DDR5 ECC",
                    disk: "40 GB Gen4 NVMe",
                    traffic: "20 TB @ 1 Gbps",
                    link: "/products/cloud-vps",
                    features: ["1 Dedicated IPv4 + /64 IPv6", "3.2 Tbps DDoS Shield", "Automated Snapshots", "Full API & CLI Access"],
                  },
                  {
                    name: "CPX-41 Production",
                    desc: "Balanced memory & compute for production services",
                    price: 16.5,
                    badge: "Recommended",
                    isPopular: true,
                    cpu: "4 Dedicated AMD vCPUs",
                    ram: "8 GB DDR5 ECC",
                    disk: "160 GB Gen4 NVMe",
                    traffic: "30 TB @ 5 Gbps",
                    link: "/products/cloud-vps",
                    features: ["Priority Network Allocation", "3 Snapshot Slots Included", "VPC Private Network", "24/7 Human Engineering SLA"],
                  },
                  {
                    name: "CPX-61 Memory Pro",
                    desc: "High IOPS memory compute for PostgreSQL & Redis clusters",
                    price: 64.0,
                    cpu: "16 Dedicated AMD vCPUs",
                    ram: "32 GB DDR5 ECC",
                    disk: "640 GB Gen4 NVMe (1.2M IOPS)",
                    traffic: "40 TB @ 10 Gbps",
                    link: "/products/cloud-vps",
                    features: ["BGP Peering Session Option", "Dedicated Hardware Isolation", "1-Click Cluster Cloning", "Priority Sysadmin Escalation"],
                  },
                ].map((plan, i) => (
                  <div
                    key={i}
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
                      <p className="text-xs text-muted-foreground min-h-[32px]">{plan.desc}</p>
                    </div>

                    <div className="my-5 border-y border-border py-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                          {formatPrice(plan.price)}
                        </span>
                        <span className="text-xs text-muted-foreground">/ month</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-1 font-mono">
                        {isAnnual ? "Billed annually (20% off included)" : "Billed monthly"}
                      </p>
                    </div>

                    <div className="space-y-2 mb-6 text-xs">
                      <div className="flex justify-between py-1 border-b border-border/50">
                        <span className="text-muted-foreground">CPU</span>
                        <span className="font-semibold text-foreground">{plan.cpu}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border/50">
                        <span className="text-muted-foreground">RAM</span>
                        <span className="font-semibold text-foreground">{plan.ram}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border/50">
                        <span className="text-muted-foreground">NVMe SSD</span>
                        <span className="font-semibold text-foreground">{plan.disk}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border/50">
                        <span className="text-muted-foreground">Traffic</span>
                        <span className="font-semibold text-foreground">{plan.traffic}</span>
                      </div>
                    </div>

                    <ul className="flex-1 space-y-2 text-xs text-muted-foreground mb-6">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check weight="bold" className="size-3.5 shrink-0 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={plan.link}
                      className={cn(
                        buttonVariants({ variant: plan.isPopular ? "default" : "outline" }),
                        "w-full font-medium"
                      )}
                    >
                      <span>Deploy Server</span>
                      <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {/* Content for Web Hosting */}
            {activeCategory === "web" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Starter",
                    desc: "For personal websites, blogs & portfolios",
                    price: 3.99,
                    features: ["1 Website", "25 GB Gen4 NVMe", "Free AutoSSL", "cPanel Suite", "Weekly Backups"],
                  },
                  {
                    name: "Plus",
                    desc: "LiteSpeed caching for growing client sites",
                    price: 6.99,
                    badge: "Recommended",
                    isPopular: true,
                    features: ["10 Websites", "75 GB NVMe Storage", "LiteSpeed LSCache", "Free Domain 1st Year", "Daily Automated Backups"],
                  },
                  {
                    name: "Business Pro",
                    desc: "High IOPS & Redis caching for eCommerce stores",
                    price: 12.99,
                    features: ["Unlimited Websites", "150 GB NVMe Storage", "Free Dedicated IP", "Redis Object Cache", "Imunify360 Protection"],
                  },
                ].map((plan, i) => (
                  <div
                    key={i}
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
                    <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 min-h-[32px]">{plan.desc}</p>
                    <div className="my-5 border-y border-border py-4">
                      <span className="text-3xl font-bold text-foreground">{formatPrice(plan.price)}</span>
                      <span className="text-xs text-muted-foreground"> / month</span>
                    </div>
                    <ul className="flex-1 space-y-2 text-xs text-muted-foreground mb-6">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check weight="bold" className="size-3.5 shrink-0 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/products/web-hosting" className={cn(buttonVariants({ variant: plan.isPopular ? "default" : "outline" }), "w-full font-medium")}>
                      <span>Select Plan</span>
                      <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {/* Content for Managed VPS */}
            {activeCategory === "managed" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Managed VPS Essential", price: 34.0, specs: "2 vCPU · 4 GB RAM · 80 GB NVMe" },
                  { name: "Managed VPS Pro", price: 58.0, isPopular: true, badge: "Recommended", specs: "4 vCPU · 8 GB RAM · 160 GB NVMe" },
                  { name: "Managed VPS Enterprise", price: 108.0, specs: "8 vCPU · 16 GB RAM · 320 GB NVMe" },
                ].map((plan, i) => (
                  <div key={i} className={cn("relative flex flex-col rounded-lg border bg-card p-6 shadow-xs", plan.isPopular ? "border-primary" : "border-border hover:border-border/80")}>
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">{plan.badge}</div>
                    )}
                    <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">{plan.specs}</p>
                    <div className="my-5 border-y border-border py-4">
                      <span className="text-3xl font-bold text-foreground">{formatPrice(plan.price)}</span>
                      <span className="text-xs text-muted-foreground"> / month</span>
                    </div>
                    <ul className="flex-1 space-y-2 text-xs text-muted-foreground mb-6">
                      <li className="flex items-center gap-2"><Check weight="bold" className="size-3.5 text-primary" /> 24/7 Proactive Sysadmin Care</li>
                      <li className="flex items-center gap-2"><Check weight="bold" className="size-3.5 text-primary" /> Sub-15 Min Ticket SLA</li>
                      <li className="flex items-center gap-2"><Check weight="bold" className="size-3.5 text-primary" /> Free cPanel/WHM or Plesk</li>
                      <li className="flex items-center gap-2"><Check weight="bold" className="size-3.5 text-primary" /> Automated OS Livepatching</li>
                    </ul>
                    <Link href="/products/managed-vps" className={cn(buttonVariants({ variant: plan.isPopular ? "default" : "outline" }), "w-full font-medium")}>
                      <span>Deploy Managed VPS</span>
                      <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {/* Content for Dedicated Servers */}
            {activeCategory === "dedicated" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "NX-EPYC 9354", price: 199.0, specs: "32 Cores / 64 Threads · 128 GB DDR5 · 2x 1.92TB NVMe" },
                  { name: "NX-EPYC 9654", price: 499.0, isPopular: true, badge: "High Density", specs: "96 Cores / 192 Threads · 384 GB DDR5 · 4x 3.84TB NVMe" },
                  { name: "Dual Xeon Platinum", price: 899.0, specs: "112 Cores / 224 Threads · 512 GB DDR5 · 8x 3.84TB NVMe" },
                ].map((plan, i) => (
                  <div key={i} className={cn("relative flex flex-col rounded-lg border bg-card p-6 shadow-xs", plan.isPopular ? "border-primary" : "border-border hover:border-border/80")}>
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">{plan.badge}</div>
                    )}
                    <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">{plan.specs}</p>
                    <div className="my-5 border-y border-border py-4">
                      <span className="text-3xl font-bold text-foreground">{formatPrice(plan.price)}</span>
                      <span className="text-xs text-muted-foreground"> / month</span>
                    </div>
                    <ul className="flex-1 space-y-2 text-xs text-muted-foreground mb-6">
                      <li className="flex items-center gap-2"><Check weight="bold" className="size-3.5 text-primary" /> 100% Dedicated Bare Metal</li>
                      <li className="flex items-center gap-2"><Check weight="bold" className="size-3.5 text-primary" /> Out-of-Band IPMI / KVM</li>
                      <li className="flex items-center gap-2"><Check weight="bold" className="size-3.5 text-primary" /> Hardware RAID Broadcom</li>
                      <li className="flex items-center gap-2"><Check weight="bold" className="size-3.5 text-primary" /> 10-25 Gbps Dual Uplinks</li>
                    </ul>
                    <Link href="/products/dedicated-servers" className={cn(buttonVariants({ variant: plan.isPopular ? "default" : "outline" }), "w-full font-medium")}>
                      <span>Configure Server</span>
                      <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 30-DAY MONEY BACK GUARANTEE */}
        <section className="py-16 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center gap-6">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
                <ShieldCheck weight="bold" className="size-8" />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <h3 className="text-xl font-bold text-foreground">30-Day Unconditional Money-Back Guarantee</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Test Nexora Cloud with confidence. If you are not satisfied with our server performance, network reliability, or support response times within 30 days, we will issue a full refund without questions asked.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-muted/40 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Need a Custom Enterprise Solution?
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Our enterprise sales and architecture teams will create a custom SLA contract with volume discounts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/solutions/businesses" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                Talk to Enterprise Sales
              </Link>
              <Link href="/locations" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                Datacenter Locations
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
