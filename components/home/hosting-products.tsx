"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Sparkle,
  Cloud,
  ShieldCheck,
  HardDrives,
  ArrowsClockwise,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";

interface ProductCardProps {
  title: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  price: string;
  period: string;
  features: string[];
  ctaLink: string;
  ctaText: string;
  icon: React.ComponentType<{ className?: string; weight?: "regular" | "bold" | "fill" }>;
}

const products: ProductCardProps[] = [
  {
    title: "Web Hosting",
    description: "For business websites, portfolios, blogs and simple PHP/HTML web applications.",
    price: "$2.99",
    period: "/mo",
    features: [
      "Ultra-fast NVMe SSD storage",
      "Free SSL certificates for all domains",
      "Unlimited business email mailboxes",
      "Automated daily offsite backups",
      "1-Click installer (300+ applications)",
      "Unmetered monthly bandwidth",
    ],
    ctaLink: "#pricing",
    ctaText: "View Plans",
    icon: Globe,
  },
  {
    title: "WordPress Hosting",
    description: "Optimized for high-speed WordPress websites and WooCommerce ecommerce storefronts.",
    price: "$4.99",
    period: "/mo",
    features: [
      "Server-level LiteSpeed / Redis caching",
      "Automatic core & plugin security updates",
      "1-Click staging environment & clone",
      "Built-in WP-CLI & Git integration",
      "Malware scanning & automated cleanup",
      "Free migration of existing WP sites",
    ],
    ctaLink: "#pricing",
    ctaText: "View Plans",
    icon: Sparkle,
  },
  {
    title: "Cloud VPS",
    badge: "Most Popular",
    isPopular: true,
    description: "Dedicated resources, full root SSH access and scalable compute on pure NVMe KVM.",
    price: "$6.99",
    period: "/mo",
    features: [
      "100% Dedicated vCPU & RAM allocation",
      "Root SSH access & custom ISO install",
      "Instant vertical scaling in 1-click",
      "Integrated automated snapshot backups",
      "Up to 3.2 Tbps DDoS protection",
      "Private VPC networking & IPv6 ready",
    ],
    ctaLink: "/products/cloud-vps",
    ctaText: "Configure VPS",
    icon: Cloud,
  },
  {
    title: "Managed VPS",
    description: "High-performance VPS with proactive server management, monitoring, and updates included.",
    price: "$19.99",
    period: "/mo",
    features: [
      "Proactive 24/7 server health monitoring",
      "OS patching, firewall hardening & tuning",
      "cPanel / Plesk or CyberPanel license ready",
      "Priority assistance under 10 minutes",
      "Free performance & database optimization",
      "Managed weekly disaster recovery backups",
    ],
    ctaLink: "#pricing",
    ctaText: "View Managed Plans",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Servers",
    description: "Single-tenant bare-metal hardware with raw compute throughput for demanding workloads.",
    price: "$89.00",
    period: "/mo",
    features: [
      "Single-tenant AMD EPYC / Intel Xeon CPUs",
      "Up to 1.5 TB ECC DDR5 memory capacity",
      "Hardware RAID-10 NVMe enterprise drives",
      "Unmetered 1 Gbps or 10 Gbps uplinks",
      "IPMI / KVM console remote power control",
      "Custom network routing & BGP announcements",
    ],
    ctaLink: "#decision-guide",
    ctaText: "Explore Bare Metal",
    icon: HardDrives,
  },
  {
    title: "Reseller Hosting",
    description: "Infrastructure for agencies and hosting entrepreneurs to sell under their own brand.",
    price: "$14.99",
    period: "/mo",
    features: [
      "100% White-label with custom nameservers",
      "WHM / cPanel accounts management",
      "Free automated WHMCS billing integration",
      "Isolated accounts for maximum security",
      "Free website migrations for your clients",
      "Tier-1 24/7 backend support team",
    ],
    ctaLink: "#agency-section",
    ctaText: "Start Reselling",
    icon: ArrowsClockwise,
  },
];

export function HostingProductsSection() {
  return (
    <section id="hosting-plans" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything you need to run online.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Start simple and move to powerful infrastructure without changing providers. From personal projects to multi-region enterprise clusters.
          </p>
        </div>

        {/* 6 Products Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className={`relative flex flex-col justify-between rounded-lg border bg-card p-6 transition-colors ${product.isPopular
                    ? "border-primary shadow-xs"
                    : "border-border hover:border-border/80"
                  }`}
              >
                {/* Popular Pill */}
                {product.badge && (
                  <div className="absolute -top-3 right-5 rounded bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                    {product.badge}
                  </div>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-md bg-muted text-primary">
                      <Icon weight="bold" className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {product.title}
                      </h3>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-xs text-muted-foreground">Starting at</span>
                        <span className="text-lg font-bold text-foreground">{product.price}</span>
                        <span className="text-xs text-muted-foreground">{product.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* Feature list */}
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Included with every plan:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <CheckCircle weight="fill" className="size-4 shrink-0 text-muted-foreground mt-0.5" />
                          <span className="leading-tight text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 pt-2">
                  <Button
                    variant={product.isPopular ? "default" : "outline"}
                    className="w-full justify-center gap-2"
                    nativeButton={false}
                    render={<Link href={product.ctaLink} />}
                  >
                    <span>{product.ctaText}</span>
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
