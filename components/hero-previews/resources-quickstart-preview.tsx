"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Terminal, ShieldCheck, HardDrives, ArrowRight, Check } from "@phosphor-icons/react";

export function ResourcesQuickstartPreview() {
  const categories = [
    { name: "VPS & Server Guides", count: "48 docs", icon: HardDrives },
    { name: "API & Terraform Docs", count: "32 guides", icon: Terminal },
    { name: "DNS & Nameservers", count: "18 docs", icon: BookOpen },
    { name: "Security & DDoS", count: "24 docs", icon: ShieldCheck },
  ];

  return (
    <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-6 shadow-xs">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Knowledge Base Quickstart
          </div>
          <div className="text-base font-bold text-foreground mt-0.5">
            Technical Documentation Hub
          </div>
        </div>
        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          Verified Guides
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5 text-xs">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.name} className="rounded-md border border-border bg-muted/30 p-2.5">
              <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
                <Icon className="size-3.5 text-primary" />
                <span className="truncate">{c.name}</span>
              </div>
              <div className="font-semibold text-foreground mt-1">{c.count}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 border-t border-border pt-3">
        <ul className="space-y-1.5 text-xs text-foreground/90">
          <li className="flex items-center gap-2">
            <Check weight="bold" className="size-3.5 text-primary shrink-0" />
            <span>Step-by-step cPanel, Docker, and Linux setup tutorials</span>
          </li>
          <li className="flex items-center gap-2">
            <Check weight="bold" className="size-3.5 text-primary shrink-0" />
            <span>Complete REST API endpoint schemas and code examples</span>
          </li>
        </ul>
      </div>

      <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-foreground">Need 1-on-1 assistance?</div>
          <div className="text-[11px] text-muted-foreground">24/7 technical engineering team</div>
        </div>

        <Button
          size="sm"
          nativeButton={false}
          render={<Link href="#categories" />}
          className="gap-1.5 font-medium"
        >
          <span>Explore Articles</span>
          <ArrowRight weight="bold" className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
