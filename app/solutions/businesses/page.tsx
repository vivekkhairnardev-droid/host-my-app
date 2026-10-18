"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InnerHero } from "@/components/inner-hero";
import { EnterpriseCompliancePreview } from "@/components/hero-previews/enterprise-compliance-preview";
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
        {/* UNIFIED INNER HERO */}
        <InnerHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/#business-section" },
            { label: "Businesses & Startups" },
          ]}
          eyebrow="Enterprise Cloud Infrastructure"
          title="Enterprise Cloud Infrastructure"
          titleHighlight="Built for Scale."
          description="Support mission-critical applications with a 99.99% financial uptime SLA, compliance-ready security, predictable flat billing, and dedicated systems engineers available 24/7."
          primaryCta={{
            text: "Schedule Technical Consultation",
            href: "#consultation",
            icon: ArrowRight,
          }}
          secondaryCta={{
            text: "Explore Dedicated Solutions",
            href: "/products/dedicated-servers",
            variant: "outline",
            icon: Buildings,
          }}
          benefits={[
            "99.99% Financial SLA",
            "SOC 2 & ISO 27001 Ready",
            "Dedicated Account Engineer",
          ]}
          preview={<EnterpriseCompliancePreview />}
        />

        {/* CONSULTATION INTAKE SECTION */}
        <section id="consultation" className="border-b border-border bg-muted/20 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8 shadow-xs">
              <div className="space-y-1 mb-6 text-center">
                <h2 className="text-xl font-bold text-foreground">Speak with an Enterprise Cloud Architect</h2>
                <p className="text-xs text-muted-foreground max-w-lg mx-auto">
                  Request an architecture assessment, migration roadmap, and custom volume pricing tailored to your workload.
                </p>
              </div>

              {formSubmitted ? (
                <div className="rounded-md border border-border bg-muted/30 p-8 text-center space-y-2">
                  <CheckCircle weight="fill" className="size-8 text-primary mx-auto" />
                  <h3 className="text-base font-bold text-foreground">Consultation Request Received</h3>
                  <p className="text-xs text-muted-foreground">
                    Our enterprise architecture team will review your requirements and reach out within 2 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  </div>

                  <Button type="submit" size="lg" className="w-full mt-2 font-medium">
                    Request Enterprise Consultation
                  </Button>
                </form>
              )}
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
