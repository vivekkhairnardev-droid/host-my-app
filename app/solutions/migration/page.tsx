"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
        {/* HERO SECTION */}
        <section className="border-b border-border bg-background py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span>Solutions</span>
              <span>/</span>
              <span className="text-foreground font-semibold">Infrastructure Migration</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 rounded border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  <span>Zero Downtime · Assisted by Cloud Engineers · 100% Free</span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.12]">
                  Switch to Nexora Cloud with Zero Downtime.
                </h1>

                <p className="max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
                  Moving from another provider? Our cloud migration engineers handle your full transfer—databases, configurations, mailboxes, and SSL certificates—completely free with zero lost traffic.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a href="#request-form" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                    <span>Request Free Migration</span>
                    <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                  </a>
                  <Link href="/products/cloud-vps" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                    <span>Select Target Plan First</span>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">0 min</p>
                    <p className="text-xs text-muted-foreground">Recorded Downtime</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">100% Free</p>
                    <p className="text-xs text-muted-foreground">Included with Any Plan</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">2,500+</p>
                    <p className="text-xs text-muted-foreground">Transfers Completed</p>
                  </div>
                </div>
              </div>

              {/* Migration Form Card */}
              <div id="request-form" className="lg:col-span-5">
                <div className="rounded-lg border border-border bg-card p-6 shadow-xs">
                  <div className="space-y-1 mb-5">
                    <h3 className="text-base font-bold text-foreground">Request Your Free Migration</h3>
                    <p className="text-xs text-muted-foreground">
                      Submit your transfer details and our migration engineers will review your setup within 30 minutes.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="rounded-md border border-border bg-muted/30 p-6 text-center space-y-2">
                      <CheckCircle weight="fill" className="size-8 text-primary mx-auto" />
                      <h4 className="text-sm font-bold text-foreground">Migration Ticket Scheduled</h4>
                      <p className="text-xs text-muted-foreground">
                        Our cloud migration specialists will reach out via email shortly to coordinate your zero-downtime schedule.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3 text-xs">
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

                      <Button type="submit" className="w-full mt-2 font-medium">
                        Submit Migration Request
                      </Button>
                    </form>
                  )}
                </div>
              </div>
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
