"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Broadcast, ShieldCheck, ArrowRight, Check } from "@phosphor-icons/react";

export function NetworkDiagnosticsPreview() {
  const regions = [
    { city: "Frankfurt", flag: "🇩🇪", ping: "2ms DE-CIX" },
    { city: "London", flag: "🇬🇧", ping: "3ms LINX" },
    { city: "Mumbai", flag: "🇮🇳", ping: "4ms Extreme-IX" },
    { city: "Singapore", flag: "🇸🇬", ping: "5ms Equinix SG" },
  ];

  return (
    <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-6 shadow-xs">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Global Network Fabric
          </div>
          <div className="text-base font-bold text-foreground mt-0.5">
            Tier III+ Datacenter Footprint
          </div>
        </div>
        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          10 Gbps Anycast
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
        {regions.map((r) => (
          <div key={r.city} className="rounded-md border border-border bg-muted/30 p-2.5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground flex items-center gap-1.5">
                <span>{r.flag}</span>
                <span>{r.city}</span>
              </span>
            </div>
            <div className="mt-1 text-[11px] font-mono text-muted-foreground">{r.ping}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-border pt-3">
        <ul className="space-y-1.5 text-xs text-foreground/90">
          <li className="flex items-center gap-2">
            <Check weight="bold" className="size-3.5 text-primary shrink-0" />
            <span>Multi-homed Tier-1 transit: Lumen, Telia, NTT, Cogent</span>
          </li>
          <li className="flex items-center gap-2">
            <Check weight="bold" className="size-3.5 text-primary shrink-0" />
            <span>Redundant 2N UPS power and diesel generator backup</span>
          </li>
        </ul>
      </div>

      <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-foreground">Interactive Diagnostics</div>
          <div className="text-[11px] text-muted-foreground">Run ping, traceroute &amp; speed tests</div>
        </div>

        <Button
          size="sm"
          nativeButton={false}
          render={<Link href="#looking-glass" />}
          className="gap-1.5 font-medium"
        >
          <span>Looking Glass</span>
          <ArrowRight weight="bold" className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
