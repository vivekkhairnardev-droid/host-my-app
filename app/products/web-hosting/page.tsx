"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InnerHero } from "@/components/inner-hero";
import { HostingPlanPreview } from "@/components/hero-previews/hosting-plan-preview";
import {
  Globe,
  Lightning,
  ShieldCheck,
  Check,
  ArrowRight,
  HardDrives,
  Cpu,
  Envelope,
  LockKey,
  ArrowsClockwise,
  Headset,
  CaretDown,
  MagnifyingGlass,
  CheckCircle,
  Database,
  CloudCheck,
} from "@phosphor-icons/react";

interface HostingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  websites: string;
  storage: string;
  bandwidth: string;
  emailAccounts: string;
  features: string[];
}

const hostingPlans: HostingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Ideal for single personal sites, portfolios, and blogs",
    monthlyPrice: 3.99,
    annualMonthlyPrice: 2.49,
    websites: "1 Website",
    storage: "25 GB Gen4 NVMe",
    bandwidth: "Unmetered",
    emailAccounts: "5 Mailboxes",
    features: [
      "1 Hosted Website",
      "25 GB Gen4 NVMe SSD Storage",
      "Free AutoSSL by Let's Encrypt",
      "Unmetered Monthly Bandwidth",
      "5 Custom Business Email Accounts",
      "cPanel Control Suite",
      "Automated Weekly Backups",
      "HTTP/3 & QUIC Protocol Support",
    ],
  },
  {
    id: "plus",
    name: "Plus",
    tagline: "Recommended for freelancers, side-projects, and growing small businesses",
    badge: "Recommended",
    isPopular: true,
    monthlyPrice: 6.99,
    annualMonthlyPrice: 4.49,
    websites: "10 Websites",
    storage: "75 GB Gen4 NVMe",
    bandwidth: "Unmetered",
    emailAccounts: "Unlimited Mailboxes",
    features: [
      "Up to 10 Hosted Websites",
      "75 GB Gen4 PCIe NVMe Storage",
      "LiteSpeed Enterprise Web Server",
      "LSCache Acceleration Module",
      "Unlimited Professional Emails",
      "Free 1-Year Domain Registration",
      "Daily Automated Cloud Snapshots",
      "Dedicated 2 GB RAM Allocation",
      "Free Assisted Website Migration",
    ],
  },
  {
    id: "pro",
    name: "Business Pro",
    tagline: "Maximum speed and compute power for high-traffic and eCommerce stores",
    monthlyPrice: 12.99,
    annualMonthlyPrice: 8.99,
    websites: "Unlimited Websites",
    storage: "150 GB Gen4 NVMe",
    bandwidth: "Unmetered",
    emailAccounts: "Unlimited Mailboxes",
    features: [
      "Unlimited Hosted Websites",
      "150 GB Pure NVMe RAID 10 Array",
      "4 Dedicated CPU Cores & 4 GB RAM",
      "Free Dedicated IP Address",
      "Imunify360 Security Suite",
      "Free Domain & Wildcard SSL",
      "Daily Automated Backups (30-day retention)",
      "Redis Object Cache Pre-configured",
      "24/7 Priority Support SLA",
    ],
  },
];

const faqs = [
  {
    q: "What makes Nexora NVMe Web Hosting faster than traditional hosts?",
    a: "Unlike legacy hosts utilizing spinning SATA drives or crowded shared environments, Nexora operates on Gen4 PCIe NVMe storage arrays paired with LiteSpeed Enterprise Web Server. This delivers faster time-to-first-byte (TTFB), built-in server-level caching, and HTTP/3 support.",
  },
  {
    q: "Can I migrate my existing websites to Nexora for free?",
    a: "Yes. Our cloud migrations team will transfer your cPanel files, databases, mailboxes, and DNS records with zero downtime. Simply submit a migration request from your client dashboard after signup.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "We offer an unconditional 30-day money-back guarantee on all Web Hosting plans. If you are not satisfied with the speed and reliability, our support team will issue a 100% refund.",
  },
  {
    q: "Can I create custom business email addresses with my domain?",
    a: "Yes. All plans include professional email accounts (such as contact@yourdomain.com) with spam filtering, webmail access, and full IMAP/POP3/SMTP compatibility for Outlook, Apple Mail, and Gmail.",
  },
];

export default function WebHostingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [domainSearch, setDomainSearch] = useState("");
  const [domainResult, setDomainResult] = useState<string | null>(null);

  const handleDomainCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainSearch.trim()) return;
    const cleanDomain = domainSearch.toLowerCase().replace(/https?:\/\//, "").replace(/\/.*$/, "");
    setDomainResult(`${cleanDomain.includes(".") ? cleanDomain : cleanDomain + ".com"} is available ($9.99/yr, included free with annual hosting).`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* UNIFIED INNER HERO */}
        <InnerHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/#hosting-plans" },
            { label: "Web Hosting" },
          ]}
          eyebrow="Managed Web Hosting"
          title="Fast, Reliable Web Hosting"
          titleHighlight="for Business Websites."
          description="High-speed NVMe storage, LiteSpeed caching, and automated daily backups for business websites, portfolios, and blogs. Simple cPanel management backed by 24/7 human engineering support."
          primaryCta={{
            text: "View Hosting Plans",
            href: "#plans",
            icon: ArrowRight,
          }}
          secondaryCta={{
            text: "Check Domain Availability",
            href: "#domain-search",
            variant: "outline",
            icon: MagnifyingGlass,
          }}
          benefits={[
            "Free SSL Certificate",
            "Automated Daily Backups",
            "Free Migration Assistance",
          ]}
          preview={
            <HostingPlanPreview
              planName="Business Pro Plan"
              tagline="High-speed LiteSpeed NVMe hosting with unmetered bandwidth"
              price="$2.99"
              period="/ month"
              badge="Most Popular"
              specs={[
                { label: "Websites", value: "Unlimited" },
                { label: "Storage", value: "150 GB NVMe" },
                { label: "Bandwidth", value: "Unmetered" },
                { label: "Server Engine", value: "LiteSpeed" },
              ]}
              features={[
                "Enterprise LiteSpeed caching built-in",
                "Automated daily offsite backups",
                "Free Wildcard SSL certificates",
                "Isolated cPanel account environments",
              ]}
              ctaLink="#plans"
              ctaText="View All Plans"
            />
          }
        />

        {/* DOMAIN SEARCH SECTION */}
        <section id="domain-search" className="border-b border-border bg-muted/20 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Domain Availability Lookup
              </h2>
              <p className="mt-1 text-base font-bold text-foreground">
                Find and secure your web address with your hosting package
              </p>

              <form onSubmit={handleDomainCheck} className="mt-4 flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <MagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Check domain availability (e.g. mycompany.com)"
                    value={domainSearch}
                    onChange={(e) => setDomainSearch(e.target.value)}
                    className="w-full rounded-md border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
                  />
                </div>
                <Button type="submit" className="font-medium shadow-xs">
                  Check Domain
                </Button>
              </form>

              {domainResult && (
                <div className="mt-3 flex items-center justify-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-xs font-medium text-foreground shadow-xs">
                  <CheckCircle weight="fill" className="size-4 shrink-0 text-primary" />
                  <span>{domainResult}</span>
                </div>
              )}
            </div>
          </div>
        </section>



        {/* PRICING PLANS */}
        <section id="plans" className="py-16 sm:py-20 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                Web Hosting Plans &amp; Pricing
              </h2>
              <p className="text-sm text-muted-foreground">
                Predictable pricing with transparent renewals. Upgrade or downgrade anytime.
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
                    Save 35%
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {hostingPlans.map((plan) => {
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
                      <p className="text-xs text-muted-foreground min-h-[32px]">{plan.tagline}</p>
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

                    <div className="space-y-2 mb-6 text-xs">
                      <div className="flex justify-between py-1 border-b border-border/50">
                        <span className="text-muted-foreground">Websites</span>
                        <span className="font-semibold text-foreground">{plan.websites}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border/50">
                        <span className="text-muted-foreground">NVMe Storage</span>
                        <span className="font-semibold text-foreground">{plan.storage}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border/50">
                        <span className="text-muted-foreground">Bandwidth</span>
                        <span className="font-semibold text-foreground">{plan.bandwidth}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border/50">
                        <span className="text-muted-foreground">Mailboxes</span>
                        <span className="font-semibold text-foreground">{plan.emailAccounts}</span>
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
                      <span>Choose {plan.name}</span>
                      <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURE MATRIX PILLARS */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Engineered for High Reliability
              </h2>
              <p className="text-sm text-muted-foreground">
                Technical standards implemented across our entire shared hosting fleet.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6 space-y-2.5">
                <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary">
                  <Lightning weight="bold" className="size-4.5" />
                </div>
                <h3 className="text-base font-bold text-foreground">LiteSpeed Web Server</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Asynchronous architecture that serves high concurrent visitor volumes with lower memory consumption than traditional web servers.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 space-y-2.5">
                <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary">
                  <ShieldCheck weight="bold" className="size-4.5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Multi-Layer Protection</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Real-time malware scanning, web application firewall (WAF), brute-force defense, and automated patch management.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 space-y-2.5">
                <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary">
                  <Database weight="bold" className="size-4.5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Automated Daily Backups</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Daily backups stored in geographically distributed secondary storage facilities. Restore files, databases, or mailboxes via cPanel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="py-16 sm:py-20 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2 mb-10">
              <h2 className="text-2xl font-bold text-foreground tracking-tight sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-muted-foreground">
                Common questions about our web hosting plans and server specifications.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-lg border border-border bg-card overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-4 text-left text-sm font-semibold text-foreground cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <CaretDown
                        weight="bold"
                        className={cn("size-4 text-muted-foreground transition-transform", isOpen && "rotate-180 text-primary")}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-muted/40 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Launch Your Website on Reliable NVMe Infrastructure
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Setup is immediate. All plans include 24/7 human technical support and a 30-day money-back guarantee.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a href="#plans" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                Select a Plan
              </a>
              <Link href="/locations" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                View Datacenter Locations
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
