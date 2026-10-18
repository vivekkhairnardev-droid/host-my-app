"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ShieldCheck, Clock, ArrowsClockwise } from "@phosphor-icons/react";

export function MigrationRoadmapPreview() {
  const steps = [
    { step: "01", title: "Source Audit", desc: "cPanel, Plesk, or Linux config review" },
    { step: "02", title: "Data Transfer", desc: "Background sync of files & databases" },
    { step: "03", title: "Staging Test", desc: "Preview site functionality before DNS cutover" },
    { step: "04", title: "DNS Cutover", desc: "Zero downtime traffic switch & SSL issuance" },
  ];

  return (
    <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-6 shadow-xs">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Zero-Downtime Transfer Assurance
          </div>
          <div className="text-base font-bold text-foreground mt-0.5">
            4-Stage Migration Workflow
          </div>
        </div>
        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          100% Free Service
        </span>
      </div>

      <div className="mt-4 space-y-2.5 text-xs">
        {steps.map((s) => (
          <div
            key={s.step}
            className="flex items-start gap-3 rounded-md border border-border bg-muted/30 p-2.5"
          >
            <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs font-bold text-primary shrink-0">
              {s.step}
            </span>
            <div className="min-w-0 flex-1">
              <div className="font-semibold text-foreground">{s.title}</div>
              <div className="text-[11px] text-muted-foreground">{s.desc}</div>
            </div>
            <Check weight="bold" className="size-4 text-primary shrink-0 mt-0.5" />
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-border pt-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="size-4 text-primary shrink-0" />
          <span>Average migration completed in under 4 hours by Tier-3 Linux engineers</span>
        </div>
      </div>

      <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-foreground">Zero Interruption</div>
          <div className="text-[11px] text-muted-foreground">Emails, databases &amp; SSL included</div>
        </div>

        <Button
          size="sm"
          nativeButton={false}
          render={<Link href="#migration-form" />}
          className="gap-1.5 font-medium"
        >
          <span>Start Migration</span>
          <ArrowRight weight="bold" className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
