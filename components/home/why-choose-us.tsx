"use client";

import React from "react";
import {
  Lightning,
  ShieldCheck,
  Cpu,
  ArrowsLeftRight,
  CurrencyCircleDollar,
  Headset,
  CheckCircle,
  HardDrives,
} from "@phosphor-icons/react";

const features = [
  {
    title: "Uncompromising Performance",
    description: "Modern AMD EPYC™ Gen 4 processors and enterprise NVMe SSD arrays deliver sub-millisecond database queries and blazing page loads.",
    icon: Lightning,
    metric: "3.8 GB/s Read Speed",
    detail: "PCIe Gen 4 Direct Attached NVMe",
  },
  {
    title: "Engineered Reliability",
    description: "Production-ready Tier III+ datacenters with redundant N+1 power generators, dual-routed fiber backbones, and 99.99% financial uptime SLA.",
    icon: HardDrives,
    metric: "99.99% SLA Uptime",
    detail: "BGP-4 Multi-homed Anycast Mesh",
  },
  {
    title: "Proactive Security Shield",
    description: "Multi-layered defense with up to 3.2 Tbps DDoS mitigation, automated web application firewall (WAF), and real-time malware scrubbing.",
    icon: ShieldCheck,
    metric: "3.2 Tbps Mitigation",
    detail: "Edge WAF & Zero-Day Isolation",
  },
  {
    title: "100% Transparent Pricing",
    description: "Clear, predictable invoicing without sudden renewal jumps, hidden bandwidth throttles, or confusing hardware restrictions.",
    icon: CurrencyCircleDollar,
    metric: "Zero Hidden Fees",
    detail: "Predictable monthly or annual billing",
  },
  {
    title: "Engineers on Support",
    description: "Skip Tier-1 script readers. Speak directly with experienced Linux systems engineers and DevOps practitioners around the clock.",
    icon: Headset,
    metric: "< 15 Min Response",
    detail: "24/7/365 Live Chat, Ticket & Phone",
  },
  {
    title: "Zero-Downtime Migration",
    description: "Our dedicated migration engineers move your websites, databases, mailboxes, and SSL certificates seamlessly with zero downtime.",
    icon: ArrowsLeftRight,
    metric: "100% Free Migration",
    detail: "Handled by senior cloud technicians",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="relative py-16 lg:py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Infrastructure that works as hard as your business.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Built from the ground up to eliminate the compromises of traditional budget web hosts and the astronomical bills of legacy enterprise hyperscalers.
          </p>
        </div>

        {/* 6 Feature Blocks with Technical Visuals */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-colors hover:border-border/80"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-10 items-center justify-center rounded-md bg-muted text-primary">
                      <Icon weight="bold" className="size-5" />
                    </div>
                    <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                      {feat.metric}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-foreground">
                    {feat.title}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Technical Spec Highlight */}
                <div className="mt-6 border-t border-border pt-3.5 flex items-center gap-2 text-xs font-medium text-foreground/80">
                  <CheckCircle weight="fill" className="size-3.5 text-primary shrink-0" />
                  <span>{feat.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
