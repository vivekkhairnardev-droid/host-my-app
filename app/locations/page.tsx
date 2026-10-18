"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InnerHero } from "@/components/inner-hero";
import { NetworkDiagnosticsPreview } from "@/components/hero-previews/network-diagnostics-preview";
import {
  Globe,
  Lightning,
  ShieldCheck,
  Check,
  ArrowRight,
  HardDrives,
  Cpu,
  ArrowsClockwise,
  CheckCircle,
  MagnifyingGlass,
  DownloadSimple,
} from "@phosphor-icons/react";

interface Datacenter {
  id: string;
  code: string;
  city: string;
  country: string;
  flag: string;
  region: "europe" | "north-america" | "asia-pacific";
  tier: string;
  testIp: string;
  pingMs: number;
  features: string[];
}

const datacenters: Datacenter[] = [
  {
    id: "fra1",
    code: "FRA-01",
    city: "Frankfurt",
    country: "Germany",
    flag: "🇩🇪",
    region: "europe",
    tier: "Tier III+ (Equinix FR5)",
    testIp: "193.148.248.10",
    pingMs: 14,
    features: ["DE-CIX Peering", "100% Green Energy", "DDoS Shield 3.2 Tbps", "AMD EPYC Fleet"],
  },
  {
    id: "lon1",
    code: "LON-01",
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    region: "europe",
    tier: "Tier III+ (Telehouse North Two)",
    testIp: "185.198.112.15",
    pingMs: 22,
    features: ["LINX & LONAP Peering", "Dual 40G Uplinks", "ISO 27001 Certified", "Transatlantic Routes"],
  },
  {
    id: "nyc1",
    code: "NYC-01",
    city: "New York",
    country: "United States",
    flag: "🇺🇸",
    region: "north-america",
    tier: "Tier IV (60 Hudson Street)",
    testIp: "199.195.250.20",
    pingMs: 38,
    features: ["NYIIX Peering", "Direct Transatlantic Fiber", "Carrier-Diverse MMR", "Gen4 NVMe Fleet"],
  },
  {
    id: "sjc1",
    code: "SJC-01",
    city: "San Jose (Silicon Valley)",
    country: "United States",
    flag: "🇺🇸",
    region: "north-america",
    tier: "Tier III+ (CoreSite SV2)",
    testIp: "207.244.75.12",
    pingMs: 65,
    features: ["Any2 California IX", "West Coast Latency", "Direct Transpacific Routes", "DDoS Protected"],
  },
  {
    id: "sin1",
    code: "SIN-01",
    city: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    region: "asia-pacific",
    tier: "Tier III+ (Telstra Data Center)",
    testIp: "103.152.114.8",
    pingMs: 84,
    features: ["SGIX Peering Hub", "South-East Asia Mesh", "Redundant 2N Power", "Enterprise Hardware"],
  },
  {
    id: "tyo1",
    code: "TYO-01",
    city: "Tokyo",
    country: "Japan",
    flag: "🇯🇵",
    region: "asia-pacific",
    tier: "Tier III+ (Equinix TY2)",
    testIp: "160.251.10.33",
    pingMs: 112,
    features: ["JPIX & BBIX Connected", "Seismic Base Isolation", "Subsea Cable Ring", "High IOPS Storage"],
  },
  {
    id: "bom1",
    code: "BOM-01",
    city: "Mumbai",
    country: "India",
    flag: "🇮🇳",
    region: "asia-pacific",
    tier: "Tier IV (Yotta NM1)",
    testIp: "103.212.42.5",
    pingMs: 92,
    features: ["Extreme IX & NIXI Peering", "India Domestic Routing", "Zero Throttling", "Carrier Neutral"],
  },
  {
    id: "syd1",
    code: "SYD-01",
    city: "Sydney",
    country: "Australia",
    flag: "🇦🇺",
    region: "asia-pacific",
    tier: "Tier III+ (NextDC S1)",
    testIp: "139.99.144.18",
    pingMs: 146,
    features: ["MegaPort & NSW-IX Peering", "Oceania Gateway", "N+2 Redundancy", "10 Gbps Uplinks"],
  },
];

export default function LocationsPage() {
  const [filter, setFilter] = useState<"all" | "europe" | "north-america" | "asia-pacific">("all");
  const [selectedDc, setSelectedDc] = useState<Datacenter>(datacenters[0]);
  const [pingRunning, setPingRunning] = useState(false);
  const [pingLog, setPingLog] = useState<string[]>([]);

  const filteredDcs = filter === "all" ? datacenters : datacenters.filter((d) => d.region === filter);

  const runLookingGlassTest = (dc: Datacenter) => {
    setSelectedDc(dc);
    setPingRunning(true);
    setPingLog([`Initiating ICMP probe to ${dc.testIp} (${dc.city})...`]);

    setTimeout(() => {
      setPingLog((prev) => [
        ...prev,
        `64 bytes from ${dc.testIp}: icmp_seq=1 ttl=56 time=${(dc.pingMs + (Math.random() * 4 - 2)).toFixed(1)} ms`,
      ]);
    }, 400);

    setTimeout(() => {
      setPingLog((prev) => [
        ...prev,
        `64 bytes from ${dc.testIp}: icmp_seq=2 ttl=56 time=${(dc.pingMs + (Math.random() * 4 - 2)).toFixed(1)} ms`,
      ]);
    }, 800);

    setTimeout(() => {
      setPingLog((prev) => [
        ...prev,
        `64 bytes from ${dc.testIp}: icmp_seq=3 ttl=56 time=${(dc.pingMs + (Math.random() * 4 - 2)).toFixed(1)} ms`,
        `--- ${dc.testIp} ping statistics: 3 packets transmitted, 3 received, 0% packet loss ---`,
      ]);
      setPingRunning(false);
    }, 1200);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* UNIFIED INNER HERO */}
        <InnerHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Locations & Network" },
          ]}
          eyebrow="Global Datacenter Network"
          title="Global Datacenter Network &"
          titleHighlight="Anycast Edge Infrastructure."
          description="Interconnected across North America, Europe, and Asia-Pacific via redundant 40 Gbps carrier-diverse backbones. Low-latency edge transit paired with 3.2 Tbps DDoS scrubbing."
          primaryCta={{
            text: "Test Looking Glass",
            href: "#looking-glass",
            icon: ArrowRight,
          }}
          secondaryCta={{
            text: "Explore Facilities",
            href: "#facilities",
            variant: "outline",
            icon: Globe,
          }}
          benefits={[
            "Tier III+ Certified Facilities",
            "Multi-Homed Tier-1 Carriers",
            "Sub-15ms Regional Latency",
          ]}
          preview={<NetworkDiagnosticsPreview />}
        />

        {/* INTERACTIVE LOOKING GLASS & REGIONS SECTION */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Datacenter Locations &amp; Looking Glass
                </h2>
                <p className="text-sm text-muted-foreground">
                  Select a facility to inspect carrier feeds and test latency from your local connection.
                </p>
              </div>

              {/* Segmented Filter */}
              <div className="inline-flex items-center rounded-md border border-border bg-muted p-1">
                {(["all", "europe", "north-america", "asia-pacific"] as const).map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setFilter(reg)}
                    className={cn(
                      "rounded px-3 py-1.5 text-xs font-medium capitalize transition-colors cursor-pointer",
                      filter === reg ? "bg-background text-foreground font-semibold shadow-xs" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {reg.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Datacenter Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {filteredDcs.map((dc) => (
                  <div
                    key={dc.id}
                    onClick={() => runLookingGlassTest(dc)}
                    className={cn(
                      "rounded-lg border p-4 cursor-pointer transition-colors space-y-2.5",
                      selectedDc.id === dc.id
                        ? "border-primary bg-primary/5 shadow-xs"
                        : "border-border bg-card hover:border-border/80"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{dc.flag}</span>
                        <div>
                          <h3 className="text-sm font-bold text-foreground">{dc.city}</h3>
                          <span className="text-[11px] text-muted-foreground font-mono">{dc.code} · {dc.country}</span>
                        </div>
                      </div>
                      <span className="rounded border border-border bg-muted px-2 py-0.5 text-xs font-mono font-medium text-foreground">
                        ~{dc.pingMs}ms
                      </span>
                    </div>

                    <p className="text-[11px] text-muted-foreground">{dc.tier}</p>

                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {dc.features.slice(0, 2).map((f, i) => (
                        <span key={i} className="rounded border border-border/60 bg-muted/30 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border/50 text-[11px]">
                      <span className="font-mono text-muted-foreground">{dc.testIp}</span>
                      <span className="text-primary font-medium flex items-center gap-1">
                        Test Probe <ArrowRight weight="bold" className="size-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Looking Glass Test Panel */}
              <div className="lg:col-span-5 sticky top-24">
                <div className="rounded-lg border border-border bg-card text-foreground shadow-xs overflow-hidden">
                  <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{selectedDc.flag}</span>
                      <span className="text-xs font-bold text-foreground">{selectedDc.city} Looking Glass</span>
                    </div>
                    <span className="rounded border border-border bg-background px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                      BGP AS209418
                    </span>
                  </div>

                  <div className="p-4 space-y-3.5">
                    <div className="rounded border border-border bg-muted/20 p-3 space-y-1 text-xs font-mono">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Facility:</span>
                        <span className="text-foreground">{selectedDc.tier}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>IPv4 Target:</span>
                        <span className="text-foreground font-bold">{selectedDc.testIp}</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Transit Routes:</span>
                        <span className="text-foreground">Lumen, Telia, NTT, Cogent</span>
                      </div>
                    </div>

                    {/* Output Box */}
                    <div className="rounded border border-border bg-background p-3 font-mono text-[11px] text-foreground min-h-[140px] max-h-[180px] overflow-y-auto leading-relaxed">
                      {pingLog.length === 0 ? (
                        <p className="text-muted-foreground">Click &quot;Test Probe&quot; or select any facility card to execute an ICMP ping trace.</p>
                      ) : (
                        pingLog.map((line, i) => <div key={i}>{line}</div>)
                      )}
                    </div>

                    {/* Speed Test Download Buttons */}
                    <div className="space-y-1.5 pt-1 border-t border-border">
                      <span className="text-xs text-muted-foreground font-medium block">Benchmark Test Files:</span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => alert(`Initiating 100MB download benchmark from ${selectedDc.city}...`)}
                          className="flex items-center justify-center gap-1.5 rounded border border-border bg-muted/30 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
                        >
                          <DownloadSimple weight="bold" className="size-3.5 text-muted-foreground" />
                          <span>100 MB File</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => alert(`Initiating 1GB download benchmark from ${selectedDc.city}...`)}
                          className="flex items-center justify-center gap-1.5 rounded border border-border bg-muted/30 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
                        >
                          <DownloadSimple weight="bold" className="size-3.5 text-muted-foreground" />
                          <span>1 GB File</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border bg-muted/20 p-3">
                    <Button
                      onClick={() => runLookingGlassTest(selectedDc)}
                      disabled={pingRunning}
                      className="w-full text-xs font-medium"
                    >
                      <Lightning weight="bold" className="mr-1.5 size-3.5" />
                      <span>{pingRunning ? "Pinging..." : `Run Latency Probe (${selectedDc.city})`}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSIT & PEERING PARTNERS */}
        <section className="py-16 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
            <h3 className="text-lg font-bold text-foreground">Tier-1 Transit Upstream &amp; Exchange Peering</h3>
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              Our network peers directly with over 4,000 public and private networks through global internet exchanges.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs font-medium text-muted-foreground">
              <span>Lumen (CenturyLink)</span>
              <span>·</span>
              <span>Arelion (Telia)</span>
              <span>·</span>
              <span>NTT Communications</span>
              <span>·</span>
              <span>DE-CIX Frankfurt</span>
              <span>·</span>
              <span>AMS-IX Amsterdam</span>
              <span>·</span>
              <span>LINX London</span>
              <span>·</span>
              <span>NYIIX New York</span>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-muted/40 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Launch Your Next Server in Any of Our 8 Datacenters
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Instant provisioning, dedicated IPv4/IPv6, and low-latency network routing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/products/cloud-vps" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                Deploy Cloud VPS
              </Link>
              <Link href="/products/dedicated-servers" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                Bare Metal Servers
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
