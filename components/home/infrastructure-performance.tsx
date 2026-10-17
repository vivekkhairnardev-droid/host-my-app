"use client";

import React, { useState } from "react";
import {
  Cpu,
  HardDrives,
  Broadcast,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react";

const benchmarkData = {
  cpu: {
    title: "Compute Performance & Core Density",
    description: "Benchmark testing sustained single-core and multi-threaded throughput under 100% continuous CPU workload.",
    suite: "UnixBench 5.1.3 & Geekbench 6 (Higher is better)",
    specs: [
      { metric: "Processor", value: "AMD EPYC™ 9654", detail: "96 Cores / 192 Threads per Socket" },
      { metric: "Base / Boost Clock", value: "2.4 GHz / 4.2 GHz", detail: "Guaranteed dedicated cycles, no throttling" },
      { metric: "L3 Cache Size", value: "384 MB", detail: "Ultra-fast database query cache hits" },
      { metric: "Instruction Sets", value: "AVX-512 & VNNI", detail: "Accelerated vector & AI inference instructions" },
    ],
    comparison: [
      { provider: "NEXORA Cloud (Gen 4 KVM)", score: "3,480 pts", note: "100% Dedicated core allocation" },
      { provider: "Standard Public Cloud VPS", score: "2,240 pts", note: "Noisy neighbor resource sharing" },
      { provider: "Legacy Budget Shared Host", score: "940 pts", note: "Oversold vCPU with strict throttling" },
    ],
  },
  storage: {
    title: "PCIe 4.0 NVMe Storage Throughput",
    description: "Raw disk read/write bandwidth and IOPS tested under high concurrency with direct-attached NVMe drives.",
    suite: "FIO 3.28 (4K Random Read/Write & Sequential Throughput)",
    specs: [
      { metric: "Read Throughput", value: "3,800 MB/s", detail: "Sequential read across NVMe RAID-10" },
      { metric: "Write Throughput", value: "2,950 MB/s", detail: "Direct write cache with power-loss protection" },
      { metric: "Random 4K IOPS", value: "120,000 IOPS", detail: "Sub-millisecond latency on high-volume SQL queries" },
      { metric: "Array Architecture", value: "Hardware RAID-10", detail: "Zero single point of failure at block layer" },
    ],
    comparison: [
      { provider: "NEXORA Cloud (Direct NVMe)", score: "120,000 IOPS", note: "Direct NVMe, no extra IOPS billing" },
      { provider: "Hyperscaler Network Volume (gp3)", score: "3,000 IOPS", note: "Baseline, charged extra for IOPS boost" },
      { provider: "Legacy SATA SSD Host", score: "450 IOPS", note: "Shared SATA disk with high wait times" },
    ],
  },
  network: {
    title: "Multi-Homed BGP Network Fabric",
    description: "Line-rate port speeds and automated route optimization across global Tier-1 upstream transit providers.",
    suite: "iPerf3 & Global Anycast Latency RTT",
    specs: [
      { metric: "Port Bandwidth", value: "10 Gbps Uplink", detail: "Full line-rate burst capacity per physical node" },
      { metric: "Transit Upstreams", value: "Lumen, Telia, NTT, Cogent", detail: "Multi-homed redundant carrier backbones" },
      { metric: "Internet Exchanges", value: "DE-CIX, AMS-IX, LINX, TorIX", detail: "Direct local peering in major metropolitan hubs" },
      { metric: "DDoS Mitigation", value: "3.2 Tbps Inline Scrubbing", detail: "Sub-second BGP flowspec attack mitigation" },
    ],
    comparison: [
      { provider: "NEXORA Cloud Anycast", score: "10 Gbps Uplink", note: "Multi-carrier BGP-4 routing included" },
      { provider: "Typical VPS Provider", score: "1 Gbps Shared", note: "Single upstream with peering bottlenecks" },
      { provider: "Budget Hosting Node", score: "100 Mbps Shared", note: "Null-routing during traffic spikes" },
    ],
  },
};

export function InfrastructurePerformanceSection() {
  const [activeTab, setActiveTab] = useState<"cpu" | "storage" | "network">("cpu");
  const current = benchmarkData[activeTab];

  return (
    <section className="relative py-16 lg:py-24 border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built on hardware designed for real workloads.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            No oversold, noisy-neighbor servers. Guaranteed dedicated clock cycles, enterprise Gen4 NVMe arrays, and full line-rate multi-gigabit routing.
          </p>
        </div>

        {/* 5 Hardware Spec KPI Cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-lg border border-border bg-card p-5 text-center shadow-xs">
            <div className="mx-auto flex size-10 items-center justify-center rounded-md bg-muted text-primary mb-3">
              <Cpu weight="bold" className="size-5" />
            </div>
            <div className="text-2xl font-bold text-foreground">8 Cores</div>
            <div className="text-xs font-medium text-foreground mt-0.5">4.2 GHz Turbo</div>
            <div className="mt-1 text-[11px] text-muted-foreground">AMD EPYC™ 9654</div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5 text-center shadow-xs">
            <div className="mx-auto flex size-10 items-center justify-center rounded-md bg-muted text-primary mb-3">
              <HardDrives weight="bold" className="size-5" />
            </div>
            <div className="text-2xl font-bold text-foreground">3.8 GB/s</div>
            <div className="text-xs font-medium text-foreground mt-0.5">120K IOPS</div>
            <div className="mt-1 text-[11px] text-muted-foreground">PCIe Gen4 NVMe</div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5 text-center shadow-xs">
            <div className="mx-auto flex size-10 items-center justify-center rounded-md bg-muted text-primary mb-3">
              <Broadcast weight="bold" className="size-5" />
            </div>
            <div className="text-2xl font-bold text-foreground">10 Gbps</div>
            <div className="text-xs font-medium text-foreground mt-0.5">Low Latency</div>
            <div className="mt-1 text-[11px] text-muted-foreground">Multi-homed BGP</div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5 text-center shadow-xs">
            <div className="mx-auto flex size-10 items-center justify-center rounded-md bg-muted text-primary mb-3">
              <ShieldCheck weight="bold" className="size-5" />
            </div>
            <div className="text-2xl font-bold text-foreground">99.99%</div>
            <div className="text-xs font-medium text-foreground mt-0.5">Financial SLA</div>
            <div className="mt-1 text-[11px] text-muted-foreground">High Availability</div>
          </div>

          <div className="col-span-2 sm:col-span-1 rounded-lg border border-border bg-card p-5 text-center shadow-xs">
            <div className="mx-auto flex size-10 items-center justify-center rounded-md bg-muted text-primary mb-3">
              <HardDrives weight="bold" className="size-5" />
            </div>
            <div className="text-2xl font-bold text-foreground">RAID-10</div>
            <div className="text-xs font-medium text-foreground mt-0.5">Mirror Protected</div>
            <div className="mt-1 text-[11px] text-muted-foreground">DDR5 ECC Memory</div>
          </div>
        </div>

        {/* Tabbed Benchmark Architecture Panel */}
        <div className="mt-10 rounded-lg border border-border bg-card p-6 lg:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-5">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Verified Benchmark Specifications
              </div>
              <h3 className="mt-1 text-lg font-bold text-foreground">
                {current.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {current.description}
              </p>
            </div>

            {/* Metric Switcher Tabs */}
            <div className="flex rounded-md border border-border bg-muted p-1">
              <button
                type="button"
                onClick={() => setActiveTab("cpu")}
                className={`rounded px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${activeTab === "cpu"
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Compute (CPU)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("storage")}
                className={`rounded px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${activeTab === "storage"
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Storage (NVMe)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("network")}
                className={`rounded px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${activeTab === "network"
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Network (BGP)
              </button>
            </div>
          </div>

          {/* Architecture Specs & Comparative Benchmarks */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
            {/* Left: Detailed Hardware Specs */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Physical Hardware Architecture
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.specs.map((item) => (
                  <div key={item.metric} className="rounded-md border border-border bg-muted/30 p-3.5">
                    <div className="text-xs text-muted-foreground">{item.metric}</div>
                    <div className="text-sm font-bold text-foreground mt-0.5">{item.value}</div>
                    <div className="text-[11px] text-muted-foreground mt-1 leading-snug">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Comparative Benchmark Standard */}
            <div className="lg:col-span-5 rounded-md border border-border bg-muted/20 p-4">
              <div className="flex items-center justify-between pb-3 border-b border-border text-xs">
                <span className="font-semibold text-foreground">Standardized Score</span>
                <span className="text-[11px] text-muted-foreground font-mono">{current.suite}</span>
              </div>
              <div className="mt-3 space-y-2.5">
                {current.comparison.map((c, i) => (
                  <div
                    key={c.provider}
                    className={`rounded-md p-3 border text-xs ${i === 0
                        ? "border-primary/40 bg-primary/5 text-foreground"
                        : "border-border bg-card text-muted-foreground"
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={i === 0 ? "font-bold text-foreground" : "font-medium"}>
                        {c.provider}
                      </span>
                      <span className={i === 0 ? "font-bold text-primary" : "font-mono"}>
                        {c.score}
                      </span>
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{c.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Graph footer stats */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle weight="fill" className="size-4 text-primary" />
              Verified hardware specifications with 100% tenant resource isolation
            </span>
            <span className="font-mono text-muted-foreground">
              Methodology: Standard UnixBench 5.1.3 & FIO 3.28
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
