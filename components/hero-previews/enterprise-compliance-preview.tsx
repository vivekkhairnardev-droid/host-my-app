"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Check, ArrowRight, UserCheck, Headset, HardDrives } from "@phosphor-icons/react";

export function EnterpriseCompliancePreview() {
  return (
    <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-6 shadow-xs">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Enterprise Architecture Scope
          </div>
          <div className="text-base font-bold text-foreground mt-0.5">
            Mission-Critical Infrastructure SLA
          </div>
        </div>
        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          99.99% Guaranteed
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
        <div className="rounded-md border border-border bg-muted/30 p-2.5">
          <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
            <ShieldCheck className="size-3.5 text-primary" />
            <span>Compliance Scope</span>
          </div>
          <div className="font-semibold text-foreground mt-1">SOC 2 &amp; ISO 27001</div>
          <div className="text-[11px] text-muted-foreground">HIPAA &amp; GDPR Ready</div>
        </div>

        <div className="rounded-md border border-border bg-muted/30 p-2.5">
          <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
            <UserCheck className="size-3.5 text-primary" />
            <span>Account Support</span>
          </div>
          <div className="font-semibold text-foreground mt-1">Named Account Engineer</div>
          <div className="text-[11px] text-muted-foreground">Direct Slack &amp; Phone Bridge</div>
        </div>

        <div className="rounded-md border border-border bg-muted/30 p-2.5">
          <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
            <HardDrives className="size-3.5 text-primary" />
            <span>Network Peering</span>
          </div>
          <div className="font-semibold text-foreground mt-1">Private VPC &amp; BGP</div>
          <div className="text-[11px] text-muted-foreground">Multi-homed 10G Transit</div>
        </div>

        <div className="rounded-md border border-border bg-muted/30 p-2.5">
          <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
            <Headset className="size-3.5 text-primary" />
            <span>Emergency Response</span>
          </div>
          <div className="font-semibold text-foreground mt-1">&lt; 15-Minute SLA</div>
          <div className="text-[11px] text-muted-foreground">24/7/365 Tier-3 Engineers</div>
        </div>
      </div>

      <div className="mt-4 border-t border-border pt-3">
        <ul className="space-y-1.5 text-xs">
          <li className="flex items-center gap-2 text-foreground/90">
            <Check weight="bold" className="size-3.5 text-primary shrink-0" />
            <span>Custom Master Services Agreement (MSA) with financial penalties</span>
          </li>
          <li className="flex items-center gap-2 text-foreground/90">
            <Check weight="bold" className="size-3.5 text-primary shrink-0" />
            <span>Invoicing via Net-30 purchase orders and wire transfer</span>
          </li>
        </ul>
      </div>

      <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-foreground">Tailored Architecture</div>
          <div className="text-[11px] text-muted-foreground">Bespoke cluster configurations</div>
        </div>

        <Button
          size="sm"
          nativeButton={false}
          render={<Link href="#consultation" />}
          className="gap-1.5 font-medium"
        >
          <span>Schedule Call</span>
          <ArrowRight weight="bold" className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
