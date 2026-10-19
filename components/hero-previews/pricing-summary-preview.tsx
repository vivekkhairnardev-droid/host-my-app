"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ShieldCheck, CurrencyDollar, CreditCard } from "@phosphor-icons/react";

export function PricingSummaryPreview() {
  const commitments = [
    { label: "Transparent Rates", desc: "No renewal price spikes or hidden egress surcharges" },
    { label: "Billed Hourly or Monthly", desc: "Pay strictly for what you provision with no contracts" },
    { label: "30-Day Money-Back", desc: "Full refund guarantee on all shared & VPS hosting plans" },
    { label: "Multi-Currency Ready", desc: "Checkout in INR (₹), USD ($), EUR (€), or GBP (£)" },
  ];

  return (
    <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-6 shadow-xs">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Billing Guarantees
          </div>
          <div className="text-base font-bold text-foreground mt-0.5">
            Transparent Cloud Pricing
          </div>
        </div>
        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          Zero Hidden Fees
        </span>
      </div>

      <div className="mt-4 space-y-2.5 text-xs">
        {commitments.map((c) => (
          <div key={c.label} className="rounded-md border border-border bg-muted/30 p-2.5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground">{c.label}</span>
              <Check weight="bold" className="size-3.5 text-primary" />
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5">{c.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-foreground">Need enterprise billing?</div>
          <div className="text-[11px] text-muted-foreground">Custom invoicing &amp; POs available</div>
        </div>

        <Button
          size="sm"
          nativeButton={false}
          render={<Link href="#plans" />}
          className="gap-1.5 font-medium"
        >
          <span>Compare All Plans</span>
          <ArrowRight weight="bold" className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
