"use client";

import React from "react";
import {
  ClockCountdown,
  UsersThree,
  GlobeHemisphereWest,
  ShieldCheck,
  Headset,
} from "@phosphor-icons/react";

const metrics = [
  {
    value: "10+ Years",
    label: "Infrastructure Experience",
    subtext: "Operating mission-critical bare-metal and KVM nodes since 2016",
    icon: ClockCountdown,
  },
  {
    value: "25K+",
    label: "Active Customers",
    subtext: "From lean technical startups to enterprise SaaS companies",
    icon: UsersThree,
  },
  {
    value: "100K+",
    label: "Websites & Apps",
    subtext: "Production web applications running globally on our network",
    icon: GlobeHemisphereWest,
  },
  {
    value: "99.99%",
    label: "Network SLA Uptime",
    subtext: "Financially-backed high availability multi-homed BGP mesh",
    icon: ShieldCheck,
  },
  {
    value: "<30 Min",
    label: "Support Response",
    subtext: "Direct access to Tier-3 Linux systems engineers 24/7/365",
    icon: Headset,
  },
];

export function TrustMetricsSection() {
  return (
    <section className="relative border-b border-border bg-card/50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col justify-between rounded-md border border-border bg-card p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary">
                    <Icon weight="bold" className="size-4.5" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-foreground">
                    {item.label}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
