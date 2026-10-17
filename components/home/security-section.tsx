"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  LockKey,
  Bug,
  Eye,
  ArrowsClockwise,
  Wall,
  ArrowRight,
  CheckCircle,
  WarningOctagon,
} from "@phosphor-icons/react";

const securityFeatures = [
  {
    title: "Always-On DDoS Scrubbing",
    description: "Inline mitigation filtering up to 3.2 Tbps of SYN flood, UDP amplification, and Layer 7 HTTP attacks in under 3 seconds.",
    icon: ShieldCheck,
  },
  {
    title: "Edge Web Application Firewall",
    description: "Deep inspection blocking SQL injection, Cross-Site Scripting (XSS), zero-day CVE exploits, and automated malicious scrapers.",
    icon: Wall,
  },
  {
    title: "Isolated Tenant VPCs",
    description: "Kernel-level KVM virtualization ensures strict hypervisor isolation with zero noisy-neighbor data leakage risks.",
    icon: LockKey,
  },
  {
    title: "Real-Time Malware Heuristics",
    description: "Continuous filesystem scanning that automatically quarantines infected web files, backdoors, and rootkits.",
    icon: Bug,
  },
  {
    title: "Automated Offsite Snapshots",
    description: "Nightly encrypted block-level backups transferred securely to geographically distant secondary datacenters.",
    icon: ArrowsClockwise,
  },
  {
    title: "24/7 Security Operations (SOC)",
    description: "Continuous network telemetry tracking anomalies, BGP route hijacking attempts, and port scan surges.",
    icon: Eye,
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="relative py-16 lg:py-24 border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Your infrastructure deserves more than a basic firewall.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Proactive, multi-layered threat mitigation defending your web properties at the global edge before malicious requests ever hit your server cores.
          </p>
        </div>

        {/* Visual Edge Mitigation Flow Diagram */}
        <div className="mt-12 rounded-lg border border-border bg-card p-6 sm:p-8 shadow-xs">
          <div className="text-center font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6">
            Network Edge Threat Mitigation Architecture
          </div>

          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-11 text-center">
            {/* Step 1: Incoming Traffic */}
            <div className="lg:col-span-3 rounded-md border border-border bg-muted/30 p-4">
              <div className="flex items-center justify-center gap-2 text-foreground text-xs font-semibold">
                <WarningOctagon weight="fill" className="size-4 text-destructive" />
                <span>Global Public Internet</span>
              </div>
              <div className="mt-2 text-sm font-bold text-foreground">Inbound Edge Traffic</div>
              <div className="mt-2 flex flex-col gap-1 text-[11px] font-mono text-muted-foreground">
                <span className="text-destructive font-medium">Volumetric SYN / UDP Floods</span>
                <span className="text-destructive font-medium">Scrapers & Exploit Probes</span>
                <span className="text-foreground">Legitimate User Requests</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="lg:col-span-1 flex justify-center text-muted-foreground font-bold">
              <span className="text-xl">➔</span>
            </div>

            {/* Step 2: The NEXORA Edge Scrubbing Shield */}
            <div className="lg:col-span-3 rounded-md border border-primary/40 bg-primary/5 p-4">
              <div className="flex items-center justify-center gap-2 text-primary text-xs font-bold">
                <ShieldCheck weight="fill" className="size-4.5" />
                <span>NEXORA Anycast Edge Scrub</span>
              </div>
              <div className="mt-2 text-sm font-bold text-foreground">Inline BGP Filtering & WAF Engine</div>
              <div className="mt-2 flex flex-col gap-1 text-[11px] text-muted-foreground">
                <span>• Sub-second attack packet drop</span>
                <span>• L3/L4 Rate Limiting</span>
                <span>• L7 Application Rule Verification</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-[10px] font-semibold text-foreground">
                Threats Filtered at Edge
              </div>
            </div>

            {/* Arrow */}
            <div className="lg:col-span-1 flex justify-center text-muted-foreground font-bold">
              <span className="text-xl">➔</span>
            </div>

            {/* Step 3: Pure Clean Traffic to Your Server */}
            <div className="lg:col-span-3 rounded-md border border-border bg-muted/30 p-4">
              <div className="flex items-center justify-center gap-2 text-foreground text-xs font-semibold">
                <CheckCircle weight="fill" className="size-4 text-primary" />
                <span>Your Production Server</span>
              </div>
              <div className="mt-2 text-sm font-bold text-foreground">Clean, Verified Requests</div>
              <div className="mt-2 flex flex-col gap-1 text-[11px] font-mono text-muted-foreground">
                <span className="text-foreground">✓ 100% Genuine User Traffic</span>
                <span className="text-foreground">✓ Zero CPU spikes from bad bots</span>
                <span className="text-foreground">✓ Continuous 99.99% Uptime</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Security Capability Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.title}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-border/80"
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-muted text-primary">
                  <Icon weight="bold" className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {sec.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {sec.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
            nativeButton={false}
            render={<Link href="/#pricing" />}
            className="gap-2"
          >
            <span>Explore Security Specifications</span>
            <ArrowRight weight="bold" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
