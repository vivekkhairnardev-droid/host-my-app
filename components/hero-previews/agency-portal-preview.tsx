"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Check, ArrowRight, ShieldCheck, TreeStructure, Browsers } from "@phosphor-icons/react";

export function AgencyPortalPreview() {
  return (
    <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-6 shadow-xs">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Agency Capabilities
          </div>
          <div className="text-base font-bold text-foreground mt-0.5">
            Client Management Hub
          </div>
        </div>
        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          Agency Partner Tier
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
        <div className="rounded-md border border-border bg-muted/30 p-2.5">
          <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
            <Users className="size-3.5 text-primary" />
            <span>Multi-Tenant Access</span>
          </div>
          <div className="font-semibold text-foreground mt-1">Granular Client RBAC</div>
          <div className="text-[11px] text-muted-foreground">Sub-user roles &amp; isolation</div>
        </div>

        <div className="rounded-md border border-border bg-muted/30 p-2.5">
          <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
            <Browsers className="size-3.5 text-primary" />
            <span>Staging Environments</span>
          </div>
          <div className="font-semibold text-foreground mt-1">1-Click Staging &amp; Push</div>
          <div className="text-[11px] text-muted-foreground">Zero-downtime deployments</div>
        </div>

        <div className="rounded-md border border-border bg-muted/30 p-2.5">
          <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
            <TreeStructure className="size-3.5 text-primary" />
            <span>White-Label Branding</span>
          </div>
          <div className="font-semibold text-foreground mt-1">Custom Nameservers</div>
          <div className="text-[11px] text-muted-foreground">Wholesaler control panel</div>
        </div>

        <div className="rounded-md border border-border bg-muted/30 p-2.5">
          <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
            <ShieldCheck className="size-3.5 text-primary" />
            <span>Billing Automation</span>
          </div>
          <div className="font-semibold text-foreground mt-1">WHMCS &amp; Stripe Sync</div>
          <div className="text-[11px] text-muted-foreground">Automated client billing</div>
        </div>
      </div>

      <div className="mt-4 border-t border-border pt-3">
        <ul className="space-y-1.5 text-xs">
          <li className="flex items-center gap-2 text-foreground/90">
            <Check weight="bold" className="size-3.5 text-primary shrink-0" />
            <span>Volume discounts starting at 10+ client websites</span>
          </li>
          <li className="flex items-center gap-2 text-foreground/90">
            <Check weight="bold" className="size-3.5 text-primary shrink-0" />
            <span>Complimentary white-glove site migrations for all client accounts</span>
          </li>
        </ul>
      </div>

      <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-foreground">Agency Program</div>
          <div className="text-[11px] text-muted-foreground">Margins up to 60% on hosting</div>
        </div>

        <Button
          size="sm"
          nativeButton={false}
          render={<Link href="/products/reseller-hosting" />}
          className="gap-1.5 font-medium"
        >
          <span>Explore Agency Plans</span>
          <ArrowRight weight="bold" className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
