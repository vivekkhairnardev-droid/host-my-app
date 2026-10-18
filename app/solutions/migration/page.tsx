"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InnerHero } from "@/components/inner-hero";
import { MigrationRoadmapPreview } from "@/components/hero-previews/migration-roadmap-preview";
import {
  ArrowsClockwise,
  ShieldCheck,
  Check,
  ArrowRight,
  Database,
  Globe,
  Clock,
  CheckCircle,
  Headset,
} from "@phosphor-icons/react";

const migrationSteps = [
  {
    step: "01",
    title: "Pre-Flight Technical Audit",
    desc: "Our cloud engineers review your current host configuration, PHP versions, database dependencies, and SSL setups to craft a seamless transfer plan.",
  },
  {
    step: "02",
    title: "Background Data Replication",
    desc: "We clone your files, databases, and mailboxes to your new Nexora server in the background. Your live website remains 100% online without interruption.",
  },
  {
    step: "03",
    title: "Staging Verification & Quality Check",
    desc: "We verify database connections, permalinks, SSL certificates, and application performance via a private staging preview URL before touching DNS.",
  },
  {
    step: "04",
    title: "Final Delta Sync & Cutover",
    desc: "We perform a rapid final delta sync for any new orders or comments, update DNS records with low TTL, and switch traffic with zero dropped requests.",
  },
];

const supportedPlatforms = [
  "cPanel / WHM",
  "WordPress & WooCommerce",
  "Plesk Obsidian",
  "AWS (EC2 / RDS / Lightsail)",
  "DigitalOcean Droplets",
  "Hetzner Cloud",
  "Linode / Akamai",
  "GoDaddy / Bluehost / HostGator",
  "SiteGround / WP Engine",
  "DirectAdmin / CyberPanel",
  "Bare-metal Linux (Ubuntu/Debian)",
  "Custom Docker / MySQL Stacks",
];

export default function MigrationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* UNIFIED INNER HERO */}
        <InnerHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/#migration-section" },
            { label: "Migration Service" },
          ]}
          eyebrow="White-Glove Migration Services"
          title="Zero-Downtime Server &"
          titleHighlight="Website Migration."
          description="Moving from another provider? Our certified Linux sysadmins handle your complete transfer—databases, files, configurations, and mailboxes—100% free with zero downtime."
          primaryCta={{
            text: "Request Free Migration",
            href: "#request-form",
            icon: ArrowRight,
          }}
          secondaryCta={{
            text: "View 4-Step Process",
            href: "#process",
            variant: "outline",
            icon: ArrowsClockwise,
          }}
          benefits={[
            "Zero Downtime Guarantee",
            "cPanel, Plesk & Linux Transfers",
            "Complete DNS Cutover Help",
          ]}
          preview={<MigrationRoadmapPreview />}
        />

        {/* MIGRATION REQUEST INTAKE SECTION */}
        <section id="request-form" className="border-b border-border bg-muted/20 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8 shadow-xs">
              <div className="space-y-1 mb-6 text-center">
                <h2 className="text-xl font-bold text-foreground">Request Your Free Website Migration</h2>
                <p className="text-xs text-muted-foreground max-w-lg mx-auto">
                  Submit your transfer details and our migration engineers will review your setup within 30 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-md border border-border bg-muted/30 p-8 text-center space-y-2">
                  <CheckCircle weight="fill" className="size-8 text-primary mx-auto" />
                  <h3 className="text-base font-bold text-foreground">Migration Ticket Scheduled</h3>
                  <p className="text-xs text-muted-foreground">
                    Our cloud migration specialists will reach out via email shortly to coordinate your zero-downtime schedule.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-medium text-foreground block mb-1">Your Email</label>
                      <input
                        required
                        type="email"
                        placeholder="you@domain.com"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="font-medium text-foreground block mb-1">Current Hosting Provider</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. AWS, GoDaddy, DigitalOcean, SiteGround"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-medium text-foreground block mb-1">Number of Websites to Migrate</label>
                      <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none">
                        <option>1 Website</option>
                        <option>2 - 5 Websites</option>
                        <option>6 - 20 Websites</option>
                        <option>20+ Agency Client Websites</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-medium text-foreground block mb-1">Preferred Migration Window</label>
                      <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none">
                        <option>Next available migration engineer</option>
                        <option>Scheduled weekend off-peak hours</option>
                        <option>Specific late-night maintenance window</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full mt-2 font-medium">
                    Submit Migration Request
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* 4-STEP TIMELINE */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Our Zero-Downtime Migration Process
              </h2>
              <p className="text-sm text-muted-foreground">
                A structured 4-stage protocol ensuring zero lost transactions or broken links.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {migrationSteps.map((item, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-card p-6 space-y-2.5">
                  <span className="text-xs font-bold text-primary font-mono">{item.step}</span>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORTED PLATFORMS */}
        <section className="py-16 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Migration Support for Major Platforms
              </h2>
              <p className="text-xs text-muted-foreground">
                Our technicians routinely migrate environments from all popular control panels and cloud hosts.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {supportedPlatforms.map((plat, i) => (
                <div key={i} className="flex items-center gap-2 rounded-md border border-border bg-card p-3 text-xs font-medium text-foreground">
                  <CheckCircle weight="fill" className="size-3.5 text-primary shrink-0" />
                  <span>{plat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-muted/40 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Upgrade Your Hosting Without the Transfer Hassle
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Our migration specialists are available 24/7 to begin your seamless cloud transfer.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a href="#request-form" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                Start Your Free Migration
              </a>
              <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                Browse Cloud Plans
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
