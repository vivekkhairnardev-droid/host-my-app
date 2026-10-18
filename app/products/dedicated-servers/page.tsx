"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InnerHero } from "@/components/inner-hero";
import { DedicatedConfigPreview } from "@/components/hero-previews/dedicated-config-preview";
import {
  HardDrives,
  Cpu,
  Lightning,
  ShieldCheck,
  Check,
  ArrowRight,
  Globe,
  Sliders,
  Terminal,
  Database,
  CaretDown,
} from "@phosphor-icons/react";

interface DedicatedServer {
  id: string;
  name: string;
  cpu: string;
  cores: string;
  ram: string;
  storage: string;
  uplink: string;
  traffic: string;
  location: string;
  priceMonthly: number;
  category: "all" | "compute" | "memory" | "storage";
  badge?: string;
}

const servers: DedicatedServer[] = [
  {
    id: "ds-epyc-1",
    name: "NX-EPYC 9354",
    cpu: "AMD EPYC™ 9354 (Genoa)",
    cores: "32 Cores / 64 Threads @ 3.8 GHz",
    ram: "128 GB DDR5 ECC (4800MHz)",
    storage: "2x 1.92 TB NVMe PCIe 4.0 (Hardware RAID-1)",
    uplink: "10 Gbps Redundant",
    traffic: "50 TB / month",
    location: "Frankfurt / New York",
    priceMonthly: 199.0,
    category: "compute",
    badge: "Available Now",
  },
  {
    id: "ds-epyc-2",
    name: "NX-EPYC 9654 High-Density",
    cpu: "AMD EPYC™ 9654 (96 Cores)",
    cores: "96 Cores / 192 Threads @ 3.7 GHz",
    ram: "384 GB DDR5 ECC Reg",
    storage: "4x 3.84 TB Enterprise NVMe (U.3)",
    uplink: "25 Gbps Dual Uplink",
    traffic: "100 TB / month",
    location: "Frankfurt / New York / London",
    priceMonthly: 499.0,
    category: "compute",
    badge: "High Density",
  },
  {
    id: "ds-xeon-max",
    name: "NX-Xeon Platinum 8480+",
    cpu: "Dual Intel® Xeon® Platinum 8480+",
    cores: "112 Cores / 224 Threads",
    ram: "512 GB DDR5 ECC (Octa-Channel)",
    storage: "8x 3.84 TB NVMe Gen5 (Hardware RAID-10)",
    uplink: "40 Gbps QSFP28",
    traffic: "Unmetered 10 Gbps Dedicated",
    location: "Frankfurt / Silicon Valley",
    priceMonthly: 899.0,
    category: "memory",
    badge: "Enterprise",
  },
  {
    id: "ds-storage-vault",
    name: "NX-Vault Storage Server",
    cpu: "AMD EPYC™ 7302P",
    cores: "16 Cores / 32 Threads @ 3.3 GHz",
    ram: "64 GB DDR4 ECC",
    storage: "12x 18 TB Enterprise SATA HDD + 2x 1TB NVMe Cache",
    uplink: "10 Gbps Uplink",
    traffic: "100 TB / month",
    location: "Frankfurt / London",
    priceMonthly: 349.0,
    category: "storage",
    badge: "216 TB Raw Storage",
  },
];

export default function DedicatedServersPage() {
  const [filter, setFilter] = useState<"all" | "compute" | "memory" | "storage">("all");

  const filteredServers = filter === "all" ? servers : servers.filter((s) => s.category === filter);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* UNIFIED INNER HERO */}
        <InnerHero
          title="Dedicated Server Performance"
          titleHighlight="Without Compromise."
          description="Single-tenant bare-metal AMD EPYC and Intel Xeon servers with ECC DDR5 memory, hardware NVMe RAID arrays, and dedicated 10 Gbps unmetered uplinks. Full out-of-band IPMI remote management included."
          primaryCta={{
            text: "Explore Server Configurations",
            href: "#inventory",
            icon: ArrowRight,
          }}
          secondaryCta={{
            text: "Contact Sales",
            href: "/solutions/businesses",
            variant: "outline",
            icon: Globe,
          }}
          benefits={[
            "Single-Tenant Bare Metal",
            "Hardware RAID-10 NVMe",
            "Out-of-Band IPMI Console",
          ]}
          preview={
            <DedicatedConfigPreview
              modelName="AMD EPYC™ 9354 Dedicated"
              badge="Single-Tenant Bare Metal"
              cpu="AMD EPYC™ 9354 (Genoa)"
              cpuCores="32 Cores / 64 Threads @ 3.8 GHz"
              ram="128 GB DDR5 ECC 4800 MHz"
              storage="2x 1.92 TB PCIe 4.0 NVMe RAID-1"
              network="10 Gbps Dedicated Uplink (Unmetered)"
              remoteConsole="Dedicated IPMI / KVM over IP"
              price="$89.00"
              period="/ month"
              ctaLink="#inventory"
              ctaText="View Server Fleet"
            />
          }
        />

        {/* INVENTORY LIST */}
        <section id="inventory" className="py-16 sm:py-20 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Dedicated Server Inventory
                </h2>
                <p className="text-sm text-muted-foreground">
                  Select a server configuration. Custom hardware and rack suites available on request.
                </p>
              </div>

              {/* Segmented Category Filter */}
              <div className="inline-flex items-center rounded-md border border-border bg-muted p-1">
                {(["all", "compute", "memory", "storage"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={cn(
                      "rounded px-3 py-1.5 text-xs font-medium capitalize transition-colors cursor-pointer",
                      filter === cat ? "bg-background text-foreground font-semibold shadow-xs" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {filteredServers.map((srv) => (
                <div
                  key={srv.id}
                  className="rounded-lg border border-border bg-card p-6 shadow-xs hover:border-border/80 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  <div className="lg:col-span-4 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-foreground">{srv.name}</h3>
                      {srv.badge && (
                        <span className="rounded border border-border bg-muted px-2 py-0.5 text-[10px] font-semibold text-foreground">
                          {srv.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-primary flex items-center gap-1.5">
                      <Cpu className="size-3.5" /> {srv.cpu}
                    </p>
                    <p className="text-xs text-muted-foreground">{srv.cores}</p>
                    <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground pt-0.5">
                      <Globe className="size-3.5" />
                      <span>{srv.location}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded border border-border bg-muted/20 p-2">
                      <span className="text-[10px] text-muted-foreground block">Memory</span>
                      <span className="font-semibold text-foreground">{srv.ram}</span>
                    </div>
                    <div className="rounded border border-border bg-muted/20 p-2">
                      <span className="text-[10px] text-muted-foreground block">Storage</span>
                      <span className="font-semibold text-foreground">{srv.storage}</span>
                    </div>
                    <div className="rounded border border-border bg-muted/20 p-2">
                      <span className="text-[10px] text-muted-foreground block">Uplink</span>
                      <span className="font-semibold text-foreground">{srv.uplink}</span>
                    </div>
                    <div className="rounded border border-border bg-muted/20 p-2">
                      <span className="text-[10px] text-muted-foreground block">Bandwidth</span>
                      <span className="font-semibold text-foreground">{srv.traffic}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-3 flex flex-col sm:items-end justify-center border-t lg:border-t-0 lg:border-l border-border pt-4 lg:pt-0 lg:pl-6 space-y-3">
                    <div className="text-left sm:text-right">
                      <span className="text-2xl font-bold text-foreground">
                        ${srv.priceMonthly.toFixed(2)}
                      </span>
                      <span className="text-xs text-muted-foreground"> / month</span>
                      <p className="text-[11px] text-muted-foreground">Free setup &amp; IPMI included</p>
                    </div>

                    <Button className="w-full sm:w-auto font-medium">
                      <span>Configure Server</span>
                      <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-muted/40 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Need Custom Hardware or Private Cage Suites?
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              We design custom enterprise deployments, GPU compute nodes, and private storage clusters with rapid deployment.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/solutions/businesses" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                Speak with Enterprise Architect
              </Link>
              <Link href="/locations" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                View Datacenter Specs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
