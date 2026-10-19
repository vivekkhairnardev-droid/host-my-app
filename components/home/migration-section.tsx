"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowsLeftRight,
  Database,
  EnvelopeSimple,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react";

export function MigrationSection() {
  return (
    <section id="migration-section" className="relative py-16 lg:py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-border bg-card p-8 sm:p-12 shadow-xs">
          {/* Top Pill */}

          <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left side text */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                Moving from another host?
              </h2>
              <p className="text-sm text-muted-foreground sm:text-base leading-relaxed">
                Bring your websites and applications with complete confidence. Our migration team moves your data, databases, domains, email mailboxes, SSL certificates, and custom configurations with zero downtime.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-medium text-foreground">
                <span className="flex items-center gap-2">
                  <CheckCircle weight="fill" className="size-4 text-muted-foreground" />
                  WordPress & WooCommerce
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle weight="fill" className="size-4 text-muted-foreground" />
                  cPanel / Plesk Backups
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle weight="fill" className="size-4 text-muted-foreground" />
                  Custom Linux VPS Data
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle weight="fill" className="size-4 text-muted-foreground" />
                  Zero Downtime Guarantee
                </span>
              </div>

              <div className="pt-4">
                <Button
                  nativeButton={false}
                  render={<Link href="#contact" />}
                  className="gap-2"
                >
                  <span>Get Free Migration Help</span>
                  <ArrowRight weight="bold" className="size-4" />
                </Button>
              </div>
            </div>

            {/* Right side: Migration Pipeline Graphic OLD HOST -> MIGRATION -> NEW INFRASTRUCTURE */}
            <div className="lg:col-span-6">
              <div className="rounded-lg border border-border bg-muted/20 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between text-center sm:text-left">
                  {/* Stage 1: Old Host */}
                  <div className="rounded-md border border-border bg-card p-4 text-center">
                    <div className="text-xs font-mono uppercase text-muted-foreground">Source</div>
                    <div className="mt-1 text-sm font-bold text-foreground">Previous Host</div>
                    <div className="mt-1 text-[11px] text-muted-foreground">Files, DBs & Emails</div>
                  </div>

                  {/* Flow Arrow with Assisted Badge */}
                  <div className="flex flex-col items-center justify-center">
                    <span className="rounded border border-border bg-muted px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                      Zero Downtime
                    </span>
                    <span className="text-muted-foreground text-lg">➔</span>
                  </div>

                  {/* Stage 2: New Infrastructure */}
                  <div className="rounded-md border border-primary/40 bg-primary/5 p-4 text-center">
                    <div className="text-xs font-mono uppercase text-primary font-semibold">Destination</div>
                    <div className="mt-1 text-sm font-bold text-foreground">Bhartiya Cloud</div>
                    <div className="mt-1 text-[11px] text-muted-foreground font-medium">Fast NVMe Deployment</div>
                  </div>
                </div>

                {/* Migration Checklist details */}
                <div className="mt-5 border-t border-border pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Database className="size-3.5 text-foreground" /> MariaDB / MySQL Replicas
                  </span>
                  <span className="flex items-center gap-1.5">
                    <EnvelopeSimple className="size-3.5 text-foreground" /> IMAP/POP3 Mail Sync
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5 text-foreground" /> SSL Auto-verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
