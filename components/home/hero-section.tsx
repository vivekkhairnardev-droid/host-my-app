"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TechCarousel } from "./tech-carousel";
import {
  Cloud,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Cpu,
  HardDrives,
  Globe,
  Lightning,
  Terminal,
} from "@phosphor-icons/react";

const techStack = [
  { name: "Linux", icon: "🐧" },
  { name: "Ubuntu", icon: "🟠" },
  { name: "Debian", icon: "🔴" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Go", icon: "🐹" },
  { name: "Rust", icon: "🦀" },
  { name: "PHP", icon: "🐘" },
  { name: "WordPress", icon: "🌐" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🐬" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Redis", icon: "⚡" },
  { name: "Nginx", icon: "🟩" },
  { name: "Git", icon: "🐙" },
  { name: "Terraform", icon: "🟣" },
  { name: "Cloudflare", icon: "🛡️" },
];

const serverRegions = [
  { id: "in-bom", label: "Mumbai", flag: "🇮🇳" },
  { id: "sg-sin", label: "Singapore", flag: "🇸🇬" },
  { id: "de-fra", label: "Frankfurt", flag: "🇩🇪" },
  { id: "uk-lon", label: "London", flag: "🇬🇧" },
  { id: "us-iad", label: "Virginia", flag: "🇺🇸" },
];

const osOptions = [
  { id: "ubuntu", name: "Ubuntu 24.04" },
  { id: "debian", name: "Debian 12" },
  { id: "almalinux", name: "AlmaLinux 9" },
  { id: "docker", name: "Docker CE" },
];

export function HeroSection() {
  const [activeRegion, setActiveRegion] = useState("in-bom");
  const [selectedOs, setSelectedOs] = useState("ubuntu");

  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Headline, Copy, CTAs, Trust Statement */}
          <div className="space-y-6 text-left lg:col-span-7">


            {/* Main H1 Title */}
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.12]">
              Hosting built for websites, applications, and{" "}
              <span className="text-primary">everything you scale next.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              Fast, secure infrastructure for businesses, developers, agencies, and growing teams. Launch on reliable hosting, VPS, and dedicated servers with transparent pricing and real human support.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <Button
                size="lg"
                nativeButton={false}
                render={<Link href="#pricing" />}
                className="gap-2"
              >
                <span>Explore Hosting</span>
                <ArrowRight weight="bold" className="size-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                nativeButton={false}
                render={<Link href="/products/cloud-vps" />}
                className="gap-2"
              >
                <span>Compare VPS</span>
                <Cpu className="size-4 text-muted-foreground" />
              </Button>
            </div>

            {/* Trust statement */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5 text-foreground/80">
                <CheckCircle weight="fill" className="size-4 text-muted-foreground" />
                30-day money-back guarantee
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1.5 text-foreground/80">
                <CheckCircle weight="fill" className="size-4 text-muted-foreground" />
                Free migration assistance
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1.5 text-foreground/80">
                <CheckCircle weight="fill" className="size-4 text-muted-foreground" />
                24/7 human engineering support
              </span>
            </div>
          </div>

          {/* Right Column: Authentic Cloud Server Configuration Interface */}
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Cloud VPS Specification
                  </div>
                  <div className="text-base font-bold text-foreground mt-0.5">
                    Standard Instance · Gen 4 KVM
                  </div>
                </div>
                <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                  Ready to deploy
                </span>
              </div>

              {/* Hardware specifications list */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-md border border-border bg-muted/30 p-2.5">
                  <div className="text-muted-foreground flex items-center gap-1.5">
                    <Cpu className="size-3.5 text-primary" />
                    <span>Compute</span>
                  </div>
                  <div className="font-semibold text-foreground mt-1">4 Dedicated vCPU</div>
                  <div className="text-[11px] text-muted-foreground">AMD EPYC™ 9654</div>
                </div>

                <div className="rounded-md border border-border bg-muted/30 p-2.5">
                  <div className="text-muted-foreground flex items-center gap-1.5">
                    <Lightning className="size-3.5 text-primary" />
                    <span>Memory</span>
                  </div>
                  <div className="font-semibold text-foreground mt-1">8 GB DDR5 ECC</div>
                  <div className="text-[11px] text-muted-foreground">4800 MHz Registered</div>
                </div>

                <div className="rounded-md border border-border bg-muted/30 p-2.5">
                  <div className="text-muted-foreground flex items-center gap-1.5">
                    <HardDrives className="size-3.5 text-primary" />
                    <span>NVMe Storage</span>
                  </div>
                  <div className="font-semibold text-foreground mt-1">160 GB PCIe 4.0</div>
                  <div className="text-[11px] text-muted-foreground">RAID-10 Protected</div>
                </div>

                <div className="rounded-md border border-border bg-muted/30 p-2.5">
                  <div className="text-muted-foreground flex items-center gap-1.5">
                    <Globe className="size-3.5 text-primary" />
                    <span>Bandwidth</span>
                  </div>
                  <div className="font-semibold text-foreground mt-1">20 TB @ 10 Gbps</div>
                  <div className="text-[11px] text-muted-foreground">IPv4 + /64 IPv6</div>
                </div>
              </div>

              {/* Operating System Selector */}
              <div className="mt-4">
                <div className="text-xs font-medium text-muted-foreground mb-2">Operating System</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {osOptions.map((os) => (
                    <button
                      key={os.id}
                      type="button"
                      onClick={() => setSelectedOs(os.id)}
                      className={`rounded border px-2 py-1.5 text-xs font-medium transition-colors cursor-pointer ${selectedOs === os.id
                          ? "border-primary bg-primary/10 text-primary font-semibold"
                          : "border-border bg-card text-muted-foreground hover:bg-muted"
                        }`}
                    >
                      {os.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Datacenter Region Selector */}
              <div className="mt-4">
                <div className="text-xs font-medium text-muted-foreground mb-2">Deploy Location</div>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                  {serverRegions.map((region) => (
                    <button
                      key={region.id}
                      type="button"
                      onClick={() => setActiveRegion(region.id)}
                      className={`flex flex-col items-center justify-center rounded border p-1.5 text-xs transition-colors cursor-pointer ${activeRegion === region.id
                          ? "border-primary bg-primary/10 text-primary font-semibold"
                          : "border-border bg-card text-muted-foreground hover:bg-muted"
                        }`}
                    >
                      <span className="text-sm">{region.flag}</span>
                      <span className="text-[11px] mt-0.5">{region.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-foreground">$12.00</span>
                    <span className="text-xs text-muted-foreground">/ month</span>
                  </div>
                  <div className="text-[11px] text-muted-foreground font-mono mt-0.5">
                    $0.016/hr · Hourly billing
                  </div>
                </div>

                <Button
                  size="default"
                  nativeButton={false}
                  render={<Link href="/products/cloud-vps" />}
                  className="gap-1.5"
                >
                  <span>Deploy Instance</span>
                  <ArrowRight weight="bold" className="size-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Below Hero: Technology Compatibility Carousel */}
        <div className="mt-14 pt-8 border-t border-border">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Fully compatible with the modern developer & cloud ecosystem
          </p>

          <TechCarousel items={techStack} />
        </div>
      </div>
    </section>
  );
}
