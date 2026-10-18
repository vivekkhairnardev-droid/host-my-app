"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cpu, HardDrives, Lightning, Globe, Terminal, ArrowRight } from "@phosphor-icons/react";

interface DedicatedConfigPreviewProps {
  modelName?: string;
  badge?: string;
  cpu?: string;
  cpuCores?: string;
  ram?: string;
  storage?: string;
  network?: string;
  remoteConsole?: string;
  price?: string;
  period?: string;
  ctaLink?: string;
  ctaText?: string;
}

export function DedicatedConfigPreview({
  modelName = "AMD EPYC™ 9354 Dedicated",
  badge = "Single-Tenant Bare Metal",
  cpu = "AMD EPYC™ 9354 (Genoa)",
  cpuCores = "32 Cores / 64 Threads @ 3.8 GHz",
  ram = "128 GB DDR5 ECC 4800 MHz",
  storage = "2x 1.92 TB PCIe 4.0 NVMe RAID-1",
  network = "10 Gbps Dedicated Uplink (Unmetered)",
  remoteConsole = "Dedicated IPMI / KVM over IP",
  price = "$89.00",
  period = "/ month",
  ctaLink = "#configurations",
  ctaText = "Configure Bare Metal",
}: DedicatedConfigPreviewProps) {
  return (
    <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-6 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Hardware Configuration Preview
          </div>
          <div className="text-base font-bold text-foreground mt-0.5">
            {modelName}
          </div>
        </div>
        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          {badge}
        </span>
      </div>

      {/* Hardware Specs Grid */}
      <div className="mt-4 space-y-2.5 text-xs">
        <div className="rounded-md border border-border bg-muted/30 p-2.5 flex items-start gap-3">
          <Cpu className="size-4 text-primary shrink-0 mt-0.5" />
          <div className="min-w-0 flex-1">
            <span className="text-[11px] text-muted-foreground block">Processor</span>
            <div className="font-semibold text-foreground">{cpu}</div>
            <div className="text-[11px] text-muted-foreground">{cpuCores}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-md border border-border bg-muted/30 p-2.5">
            <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
              <Lightning className="size-3.5 text-primary" />
              <span>Memory</span>
            </div>
            <div className="font-semibold text-foreground mt-1">{ram}</div>
          </div>

          <div className="rounded-md border border-border bg-muted/30 p-2.5">
            <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
              <HardDrives className="size-3.5 text-primary" />
              <span>Storage Array</span>
            </div>
            <div className="font-semibold text-foreground mt-1">{storage}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-md border border-border bg-muted/30 p-2.5">
            <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
              <Globe className="size-3.5 text-primary" />
              <span>Uplink & Bandwidth</span>
            </div>
            <div className="font-semibold text-foreground mt-1">{network}</div>
          </div>

          <div className="rounded-md border border-border bg-muted/30 p-2.5">
            <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
              <Terminal className="size-3.5 text-primary" />
              <span>Out-of-Band Control</span>
            </div>
            <div className="font-semibold text-foreground mt-1">{remoteConsole}</div>
          </div>
        </div>
      </div>

      {/* Bottom Locations & Price */}
      <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-foreground">{price}</span>
            <span className="text-xs text-muted-foreground">{period}</span>
          </div>
          <div className="text-[11px] text-muted-foreground mt-0.5">
            Frankfurt · London · Mumbai · Virginia
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
