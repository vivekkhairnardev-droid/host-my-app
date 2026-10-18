"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Buildings,
  ShieldCheck,
  Check,
  ArrowRight,
  Headset,
  LockKey,
  Globe,
  ChartLineUp,
  Handshake,
  FileText,
  Clock,
  CheckCircle,
} from "@phosphor-icons/react";

const enterpriseFeatures = [
  {
    icon: ShieldCheck,
    title: "99.99% Financially-Backed SLA",
    desc: "Redundant N+1 power generators, carrier-diverse fiber uplinks, and automated failover guarantee strict enterprise uptime.",
  },
  {
    icon: LockKey,
    title: "SOC 2 Type II & ISO 27001 Certified",
    desc: "Rigorous annual security audits, strict RBAC protocols, encrypted at-rest NVMe arrays, and full GDPR compliance readiness.",
  },
  {
    icon: Handshake,
    title: "Dedicated Solutions Architect",
    desc: "Direct access to senior cloud architects for infrastructure reviews, migration planning, and continuous cost optimization.",
  },
  {
    icon: Headset,
    title: "Sub-15 Minute Priority Support SLA",
    desc: "Direct Slack or Microsoft Teams channel with senior systems engineers and 24/7 emergency phone escalation.",
  },
  {
    icon: Globe,
    title: "Isolated Private VPC Networks",
    desc: "Build secure multi-tier database and compute clusters interconnected across private 40 Gbps inter-datacenter links.",
  },
  {
    icon: ChartLineUp,
    title: "Predictable Transparent Invoicing",
    desc: "No surprise egress bandwidth bills or convoluted cloud calculators. Straightforward flat pricing with volume enterprise discounts.",
  },
];

export default function BusinessesPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
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
              <span>Solutions</span>
              <span>/</span>
              <span className="text-foreground font-semibold">Businesses &amp; Startups</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 rounded border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  <span>99.99% SLA · SOC 2 Type II · Dedicated Support Channel</span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.12]">
                  Enterprise Cloud Infrastructure Built for Scale.
                </h1>

                <p className="max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
                  Support mission-critical applications with a 99.99% uptime guarantee, compliance-ready security, predictable flat billing, and dedicated systems engineers available 24/7.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a href="#consultation" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                    <span>Schedule Technical Consultation</span>
                    <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                  </a>
                  <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                    <span>View Transparent Pricing</span>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">99.99%</p>
                    <p className="text-xs text-muted-foreground">Uptime Guarantee SLA</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">SOC 2</p>
                    <p className="text-xs text-muted-foreground">Type II Certified</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">Flat Rate</p>
                    <p className="text-xs text-muted-foreground">Predictable Invoicing</p>
                  </div>
                </div>
              </div>

              {/* Consultation form card */}
              <div id="consultation" className="lg:col-span-5">
                <div className="rounded-lg border border-border bg-card p-6 shadow-xs">
                  <div className="space-y-1 mb-5">
                    <h3 className="text-base font-bold text-foreground">Speak with an Enterprise Architect</h3>
                    <p className="text-xs text-muted-foreground">
                      Request an architecture assessment, migration review, and volume pricing.
                    </p>
                  </div>

                  {formSubmitted ? (
                    <div className="rounded-md border border-border bg-muted/30 p-6 text-center space-y-2">
                      <CheckCircle weight="fill" className="size-8 text-primary mx-auto" />
                      <h4 className="text-sm font-bold text-foreground">Consultation Request Received</h4>
                      <p className="text-xs text-muted-foreground">
                        Our cloud architecture team will review your specifications and contact you within 2 business hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                      <div>
                        <label className="font-medium text-foreground block mb-1">Work Email</label>
                        <input
                          required
                          type="email"
                          placeholder="alex@company.com"
                          className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-medium text-foreground block mb-1">Company Name</label>
                        <input
                          required
                          type="text"
                          placeholder="Acme Technologies Inc."
                          className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="font-medium text-foreground block mb-1">Estimated Monthly Cloud Budget</label>
                        <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none">
                          <option>$500 - $2,500 / month</option>
                          <option>$2,500 - $10,000 / month</option>
                          <option>$10,000+ / month</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-medium text-foreground block mb-1">Primary Infrastructure Requirement</label>
                        <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none">
                          <option>High-Availability Multi-Region Web Cluster</option>
                          <option>Cloud Migration from AWS / GCP / Azure</option>
                          <option>High-IOPS Database Servers (PostgreSQL / MySQL)</option>
                          <option>Dedicated Bare-Metal Server Deployment</option>
                        </select>
                      </div>

                      <Button type="submit" className="w-full mt-2 font-medium">
                        Request Enterprise Consultation
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS GRID */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Enterprise Standards at Every Layer
              </h2>
              <p className="text-sm text-muted-foreground">
                Engineered for security compliance, financial predictability, and 24/7 human technical reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="rounded-lg border border-border bg-card p-6 space-y-2.5">
                    <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary">
                      <Icon weight="bold" className="size-4.5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
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
              Upgrade Your Business Infrastructure
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Schedule a technical discovery session today with our senior cloud solutions architects.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a href="#consultation" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                Talk to Sales
              </a>
              <Link href="/solutions/migration" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                Zero-Downtime Migration
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
