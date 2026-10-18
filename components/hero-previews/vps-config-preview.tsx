"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cpu, HardDrives, Lightning, Globe, ArrowRight } from "@phosphor-icons/react";

interface VpsConfigPreviewProps {
  title?: string;
  badge?: string;
  vCpu?: string;
  cpuModel?: string;
  ram?: string;
  ramType?: string;
  storage?: string;
  storageType?: string;
  bandwidth?: string;
  monthlyPrice?: string;
  hourlyPrice?: string;
  ctaLink?: string;
  ctaText?: string;
  showManagedBadge?: boolean;
}

const regions = [
  { id: "fra", label: "Frankfurt", flag: "🇩🇪" },
  { id: "bom", label: "Mumbai", flag: "🇮🇳" },
  { id: "sin", label: "Singapore", flag: "🇸🇬" },
  { id: "lon", label: "London", flag: "🇬🇧" },
  { id: "iad", label: "Virginia", flag: "🇺🇸" },
];

const operatingSystems = [
  { id: "ubuntu", name: "Ubuntu 24.04" },
  { id: "debian", name: "Debian 12" },
  { id: "almalinux", name: "AlmaLinux 9" },
  { id: "docker", name: "Docker CE" },
];

export function VpsConfigPreview({
  title = "Standard Instance · Gen 4 KVM",
  badge = "Ready to deploy",
  vCpu = "4 Dedicated vCPU",
  cpuModel = "AMD EPYC™ 9654",
  ram = "8 GB DDR5 ECC",
  ramType = "4800 MHz Registered",
  storage = "160 GB PCIe 4.0",
  storageType = "NVMe RAID-10",
  bandwidth = "20 TB @ 10 Gbps",
  monthlyPrice = "$12.00",
  hourlyPrice = "$0.016/hr",
  ctaLink = "#configurator",
  ctaText = "Configure VPS",
  showManagedBadge = false,
}: VpsConfigPreviewProps) {
  const [activeRegion, setActiveRegion] = useState("fra");
  const [selectedOs, setSelectedOs] = useState("ubuntu");

  return (
    <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-6 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {showManagedBadge ? "Managed VPS Configuration" : "Cloud VPS Specification"}
          </div>
          <div className="text-base font-bold text-foreground mt-0.5">
            {title}
          </div>
        </div>
        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          {badge}
        </span>
      </div>

      {/* Hardware Specs Grid */}
      <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
        <div className="rounded-md border border-border bg-muted/30 p-2.5">
          <div className="text-muted-foreground flex items-center gap-1.5">
            <Cpu className="size-3.5 text-primary" />
            <span>Compute</span>
          </div>
          <div className="font-semibold text-foreground mt-1">{vCpu}</div>
          <div className="text-[11px] text-muted-foreground">{cpuModel}</div>
        </div>

        <div className="rounded-md border border-border bg-muted/30 p-2.5">
          <div className="text-muted-foreground flex items-center gap-1.5">
            <Lightning className="size-3.5 text-primary" />
            <span>Memory</span>
          </div>
          <div className="font-semibold text-foreground mt-1">{ram}</div>
          <div className="text-[11px] text-muted-foreground">{ramType}</div>
        </div>

        <div className="rounded-md border border-border bg-muted/30 p-2.5">
          <div className="text-muted-foreground flex items-center gap-1.5">
            <HardDrives className="size-3.5 text-primary" />
            <span>NVMe Storage</span>
          </div>
          <div className="font-semibold text-foreground mt-1">{storage}</div>
          <div className="text-[11px] text-muted-foreground">{storageType}</div>
        </div>

        <div className="rounded-md border border-border bg-muted/30 p-2.5">
          <div className="text-muted-foreground flex items-center gap-1.5">
            <Globe className="size-3.5 text-primary" />
            <span>Bandwidth</span>
          </div>
          <div className="font-semibold text-foreground mt-1">{bandwidth}</div>
          <div className="text-[11px] text-muted-foreground">IPv4 + /64 IPv6</div>
        </div>
      </div>

      {/* OS Selector */}
      <div className="mt-4">
        <div className="text-xs font-medium text-muted-foreground mb-2">
          Operating System Choice
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {operatingSystems.map((os) => (
            <button
              key={os.id}
              type="button"
              onClick={() => setSelectedOs(os.id)}
              className={`rounded border px-2 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                selectedOs === os.id
                  ? "border-primary bg-primary/10 text-primary font-semibold"
                  : "border-border bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              {os.name}
            </button>
          ))}
        </div>
      </div>

      {/* Deploy Location */}
      <div className="mt-4">
        <div className="text-xs font-medium text-muted-foreground mb-2">
          Deploy Location
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
          {regions.map((region) => (
            <button
              key={region.id}
              type="button"
              onClick={() => setActiveRegion(region.id)}
              className={`flex flex-col items-center justify-center rounded border p-1.5 text-xs transition-colors cursor-pointer ${
                activeRegion === region.id
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
            <span className="text-2xl font-bold text-foreground">{monthlyPrice}</span>
            <span className="text-xs text-muted-foreground">/ month</span>
          </div>
          <div className="text-[11px] text-muted-foreground font-mono mt-0.5">
            {hourlyPrice} · Instant Provisioning
          </div>
        </div>

        <Button
          size="sm"
          nativeButton={false}
          render={<Link href={ctaLink} />}
          className="gap-1.5 font-medium"
        >
          <span>{ctaText}</span>
          <ArrowRight weight="bold" className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
