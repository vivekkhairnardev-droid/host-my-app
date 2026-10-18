"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Users,
  Check,
  ArrowRight,
  ShieldCheck,
  Globe,
  Browsers,
  CreditCard,
  LockKey,
  ArrowsClockwise,
  Rocket,
  CheckCircle,
} from "@phosphor-icons/react";

const agencyWorkflows = [
  {
    step: "01",
    title: "1-Click Client Sandboxes",
    desc: "Launch isolated staging environments in seconds. Share password-protected staging preview links with your clients for immediate review.",
  },
  {
    step: "02",
    title: "Push-to-Production Sync",
    desc: "Once client approvals are received, promote staging to production with one click. Databases, configuration files, and assets sync cleanly.",
  },
  {
    step: "03",
    title: "Granular Team Access Control",
    desc: "Assign developers, designers, and project managers access only to specific client projects without sharing master infrastructure credentials.",
  },
  {
    step: "04",
    title: "White-Label Client Billing",
    desc: "Bill clients directly through automated recurring invoices or forward server billing directly to client accounts with your agency markup.",
  },
];

const partnerTiers = [
  {
    tier: "Silver Agency",
    clients: "5 - 15 Websites",
    discount: "15% Ongoing Discount",
    perks: [
      "Dedicated account manager",
      "Free white-glove website migrations",
      "Staging and cloning toolkits",
      "Standard priority support",
    ],
  },
  {
    tier: "Gold Agency",
    badge: "Recommended",
    isPopular: true,
    clients: "16 - 50 Websites",
    discount: "25% Ongoing Discount",
    perks: [
      "Custom branded client portal option",
      "WHMCS billing automation license",
      "Unlimited free staging slots",
      "Sub-15 min priority ticket SLA",
      "Direct engineer Slack/Teams channel",
    ],
  },
  {
    tier: "Platinum Elite",
    clients: "50+ Websites",
    discount: "35% Ongoing Discount",
    perks: [
      "Dedicated bare-metal cluster options",
      "Custom SLA guarantees (99.99%)",
      "Dedicated DevOps engineer support",
      "Co-marketing & partner directory listing",
      "Quarterly architecture reviews",
    ],
  },
];

export default function AgenciesPage() {
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
              <span>Solutions</span>
              <span>/</span>
              <span className="text-foreground font-semibold">Agencies</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 rounded border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  <span>Multi-Tenant Management · Staging Workflows · Partner Margins</span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.12]">
                  Cloud Infrastructure Engineered for Digital Agencies.
                </h1>

                <p className="max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
                  Consolidate client hosting in one unified hub. Deliver client projects faster with 1-click staging, granular team permissions, automated client billing handoff, and partner discounts up to 35%.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a href="#partner-tiers" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                    <span>View Partner Tiers</span>
                    <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                  </a>
                  <Link href="/products/reseller-hosting" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                    <span>Reseller Hosting</span>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">Up to 35%</p>
                    <p className="text-xs text-muted-foreground">Partner Margin</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">1-Click</p>
                    <p className="text-xs text-muted-foreground">Staging to Live Sync</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">100% Free</p>
                    <p className="text-xs text-muted-foreground">Client Migrations</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Multi-Tenant Architecture Overview */}
              <div className="lg:col-span-5">
                <div className="rounded-lg border border-border bg-card p-6 shadow-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <h2 className="text-sm font-bold text-foreground">Agency Hub Capabilities</h2>
                    <span className="rounded border border-border bg-muted px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                      Multi-Tenant
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between rounded-md border border-border bg-muted/20 p-2.5">
                      <span className="text-muted-foreground">Staging Environments:</span>
                      <span className="font-semibold text-foreground">Automated password-protected previews</span>
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-border bg-muted/20 p-2.5">
                      <span className="text-muted-foreground">Team Role-Based Access:</span>
                      <span className="font-semibold text-foreground">Admin, Developer, and Billing-only roles</span>
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-border bg-muted/20 p-2.5">
                      <span className="text-muted-foreground">Client Billing Transfer:</span>
                      <span className="font-semibold text-foreground">Pass-through credit card billing or agency invoicing</span>
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-border bg-muted/20 p-2.5">
                      <span className="text-muted-foreground">White-Label Branding:</span>
                      <span className="font-semibold text-foreground">Custom logos, nameservers, and login portals</span>
                    </div>

                    <div className="flex items-center justify-between rounded-md border border-border bg-muted/20 p-2.5">
                      <span className="text-muted-foreground">Bulk Migration Team:</span>
                      <span className="font-semibold text-foreground">Assisted transfers for complete client rosters</span>
                    </div>
                  </div>

                  <div className="rounded-md border border-border bg-muted/40 p-3 text-center">
                    <span className="text-xs font-medium text-muted-foreground">
                      Volume billing discounts automatically applied as you add clients
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW PIPELINE */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                The Agency Production Workflow
              </h2>
              <p className="text-sm text-muted-foreground">
                How modern digital agencies deliver client websites faster with zero downtime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {agencyWorkflows.map((step, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-6 space-y-2.5">
                  <span className="text-xs font-bold text-primary font-mono">{step.step}</span>
                  <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNER TIERS */}
        <section id="partner-tiers" className="py-16 sm:py-20 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Agency Partner Program Tiers
              </h2>
              <p className="text-sm text-muted-foreground">
                Grow your recurring agency profits with exclusive tier discounts and dedicated support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerTiers.map((p, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "relative flex flex-col rounded-lg border bg-card p-6 shadow-xs transition-colors",
                    p.isPopular ? "border-primary" : "border-border hover:border-border/80"
                  )}
                >
                  {p.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                      {p.badge}
                    </div>
                  )}

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">{p.tier}</h3>
                    <p className="text-xs text-muted-foreground font-mono">{p.clients}</p>
                  </div>

                  <div className="my-5 border-y border-border py-4">
                    <span className="text-2xl font-bold text-foreground">{p.discount}</span>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Applied to all server &amp; hosting products</p>
                  </div>

                  <ul className="flex-1 space-y-2 text-xs text-muted-foreground mb-6">
                    {p.perks.map((perk, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check weight="bold" className="size-3.5 shrink-0 text-primary" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant={p.isPopular ? "default" : "outline"} className="w-full font-medium">
                    <span>Apply for {p.tier}</span>
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
              Consolidate Your Client Infrastructure
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Schedule an agency onboarding call with our team to migrate your existing client sites without downtime.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button size="default" className="font-medium shadow-xs">
                Join Agency Partner Program
              </Button>
              <Link href="/solutions/migration" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                Free Bulk Client Migration
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
