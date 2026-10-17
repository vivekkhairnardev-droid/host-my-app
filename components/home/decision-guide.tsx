"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Cloud,
  HardDrives,
  ArrowRight,
  CheckCircle,
} from "@phosphor-icons/react";

const guides = [
  {
    stage: "START",
    title: "Shared Hosting",
    subtitle: "Turnkey simplicity without system administration hassles",
    price: "$2.99/mo",
    bestFor: [
      "Small business websites & local stores",
      "WordPress blogs & corporate portfolios",
      "Creators launching their first online identity",
      "Marketing landing pages & lead generation",
    ],
    management: "Fully managed with intuitive cPanel & 1-click app installer",
    ctaText: "Launch Shared Hosting",
    ctaLink: "#pricing",
    icon: Globe,
    isRecommended: false,
  },
  {
    stage: "SCALE",
    title: "Cloud VPS",
    subtitle: "Isolated compute resources with vertical scalability on demand",
    price: "$6.99/mo",
    bestFor: [
      "Custom web applications & microservices",
      "REST APIs, GraphQL backends & worker queues",
      "Docker containers & modern Git-based CI/CD",
      "High-traffic ecommerce with sudden spikes",
      "Custom databases (PostgreSQL, MongoDB, Redis)",
    ],
    management: "Full root SSH access or optional managed sysadmin care",
    ctaText: "Deploy Cloud VPS",
    ctaLink: "/products/cloud-vps",
    icon: Cloud,
    isRecommended: true,
  },
  {
    stage: "CONTROL",
    title: "Dedicated Servers",
    subtitle: "Dedicated physical hardware with 100% tenant isolation",
    price: "$89.00/mo",
    bestFor: [
      "High-concurrency database clusters (PB scale)",
      "High-frequency trading & fintech operations",
      "Complex SaaS platforms with strict compliance",
      "Virtualization hypervisors & custom private clouds",
      "Heavy sustained machine learning & AI inference",
    ],
    management: "IPMI remote console with dedicated BGP routing policies",
    ctaText: "Provision Dedicated",
    ctaLink: "#pricing",
    icon: HardDrives,
    isRecommended: false,
  },
];

export function DecisionGuideSection() {
  return (
    <section id="decision-guide" className="relative py-16 lg:py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Not sure what you need? Start here.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Choose the hosting tier that matches your current workload requirements, with effortless upgrade paths as your traffic expands.
          </p>

          {/* Visual Progression Path: START -> SCALE -> CONTROL */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-4 text-xs font-mono font-medium tracking-wider">
            <span className="rounded border border-border bg-muted/50 px-2.5 py-1 text-foreground">
              START
            </span>
            <span className="text-muted-foreground">──→</span>
            <span className="rounded border border-primary/30 bg-primary/10 px-2.5 py-1 text-primary font-semibold">
              SCALE
            </span>
            <span className="text-muted-foreground">──→</span>
            <span className="rounded border border-border bg-muted/50 px-2.5 py-1 text-foreground">
              CONTROL
            </span>
          </div>
        </div>

        {/* 3 Large Progression Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {guides.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.stage}
                className={`flex flex-col justify-between rounded-lg border bg-card p-6 transition-colors ${item.isRecommended
                    ? "border-primary shadow-xs"
                    : "border-border hover:border-border/80"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded border border-border bg-muted/50 px-2.5 py-0.5 text-xs font-mono font-semibold text-foreground">
                      {item.stage}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      From {item.price}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-md bg-muted text-primary">
                      <Icon weight="bold" className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </div>

                  {/* Best for */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Best For:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {item.bestFor.map((useCase) => (
                        <li key={useCase} className="flex items-start gap-2 text-xs text-foreground/90">
                          <CheckCircle weight="fill" className="size-4 text-muted-foreground shrink-0 mt-0.5" />
                          <span>{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Management note */}
                  <div className="mt-6 rounded-md bg-muted/30 p-3 text-xs text-muted-foreground border border-border/60">
                    <span className="font-semibold text-foreground">Control Level: </span>
                    {item.management}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-2">
                  <Button
                    variant={item.isRecommended ? "default" : "outline"}
                    className="w-full justify-center gap-1.5"
                    nativeButton={false}
                    render={<Link href={item.ctaLink} />}
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight weight="bold" className="size-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
