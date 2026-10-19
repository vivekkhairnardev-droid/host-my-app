"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Users,
  Briefcase,
  ArrowsClockwise,
  ShieldCheck,
  ArrowRight,
  FolderUser,
  DeviceRotate,
} from "@phosphor-icons/react";

const agencyFeatures = [
  {
    title: "Multi-Client Isolation",
    description: "Keep each client's website in an isolated container with custom resource quotas and separate billing profiles.",
    icon: FolderUser,
  },
  {
    title: "100% White-Label Controls",
    description: "Brand the client control panel, support URLs, and nameservers with your agency's logo and custom domain.",
    icon: Briefcase,
  },
  {
    title: "1-Click Staging & Cloning",
    description: "Develop client revisions on test subdomains, run client approvals, and push changes to production with zero downtime.",
    icon: DeviceRotate,
  },
  {
    title: "Automated Client Invoicing",
    description: "Integrated WHMCS / Blesta billing automation allowing you to bundle maintenance retainers and hosting charges effortlessly.",
    icon: ArrowsClockwise,
  },
  {
    title: "Granular Team Permissions",
    description: "Assign role-based access to your front-end designers, WordPress developers, and account managers safely.",
    icon: Users,
  },
  {
    title: "Centralized Backup Vaults",
    description: "Automated snapshots stored offsite with 1-click disaster rollback across all client accounts simultaneously.",
    icon: ShieldCheck,
  },
];

export function BusinessAgencySection() {
  return (
    <section id="agency-section" className="relative py-16 lg:py-24 border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            One infrastructure partner for every client.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Say goodbye to logging into a dozen different hosting dashboards. Manage all your client websites, staging servers, and billing from a unified high-speed control pane.
          </p>
        </div>

        {/* Agency Management Dashboard Preview Mockup */}
        <div className="mt-12 rounded-lg border border-border bg-card p-6 shadow-xs lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary font-bold text-sm">
                BC
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">Bhartiya Cloud Agency Suite · Apex Digital</div>
                <div className="text-xs text-muted-foreground">38 Active Client Accounts · 100% Health Score</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground">
                Monthly Retainers Active
              </span>
            </div>
          </div>

          {/* Client Table Mockup */}
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/30 text-muted-foreground">
                  <th className="py-2.5 px-3 font-semibold">Client Project</th>
                  <th className="py-2.5 px-3 font-semibold">Environment</th>
                  <th className="py-2.5 px-3 font-semibold">Resource Quota</th>
                  <th className="py-2.5 px-3 font-semibold">SSL & Backups</th>
                  <th className="py-2.5 px-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground">
                <tr>
                  <td className="py-3 px-3 font-medium">Acme eCommerce Store</td>
                  <td className="py-3 px-3 text-muted-foreground">Cloud VPS (Dedicated)</td>
                  <td className="py-3 px-3">4 vCPU / 8 GB RAM</td>
                  <td className="py-3 px-3 text-muted-foreground font-medium">✓ Wildcard SSL / Daily 03:00</td>
                  <td className="py-3 px-3"><span className="size-1.5 inline-block rounded-full bg-emerald-600 dark:bg-emerald-500 mr-1.5" />Live</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">Vertex SaaS Landing</td>
                  <td className="py-3 px-3 text-muted-foreground">Next.js Edge Cluster</td>
                  <td className="py-3 px-3">2 vCPU / 4 GB RAM</td>
                  <td className="py-3 px-3 text-muted-foreground font-medium">✓ AutoSSL / Real-time</td>
                  <td className="py-3 px-3"><span className="size-1.5 inline-block rounded-full bg-emerald-600 dark:bg-emerald-500 mr-1.5" />Live</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium">Staging: Nexus Revamp v2</td>
                  <td className="py-3 px-3 text-muted-foreground">Staging Container (Pass Protected)</td>
                  <td className="py-3 px-3">1 vCPU / 2 GB RAM</td>
                  <td className="py-3 px-3 text-muted-foreground font-medium">✓ Staging Certificate</td>
                  <td className="py-3 px-3"><span className="size-1.5 inline-block rounded-full bg-primary mr-1.5" />Review Ready</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 6 Agency Capabilities Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agencyFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-border/80"
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-muted text-primary">
                  <Icon weight="bold" className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
            nativeButton={false}
            render={<Link href="/#pricing" />}
            className="gap-2"
          >
            <span>Explore Agency Hosting Plans</span>
            <ArrowRight weight="bold" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
