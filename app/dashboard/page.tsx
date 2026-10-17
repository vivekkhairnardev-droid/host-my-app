"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Cloud,
  Cpu,
  CreditCard,
  Plus,
  Terminal,
  CheckCircle,
  Globe,
  Database,
  ShieldCheck,
  Pulse,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

interface Instance {
  id: string;
  name: string;
  ip: string;
  os: string;
  region: string;
  flag: string;
  plan: string;
  cpuLoad: number;
  ramLoad: number;
  status: "running" | "rebooting" | "stopped";
  uptime: string;
}

const initialInstances: Instance[] = [
  {
    id: "inst-01",
    name: "api-gateway-prod-01",
    ip: "103.148.12.84",
    os: "Ubuntu 24.04 LTS",
    region: "Mumbai (IN)",
    flag: "🇮🇳",
    plan: "4 vCPU · 8 GB RAM · 160 GB NVMe",
    cpuLoad: 24,
    ramLoad: 52,
    status: "running",
    uptime: "48 days, 14 hrs",
  },
  {
    id: "inst-02",
    name: "db-postgres-primary",
    ip: "103.148.12.92",
    os: "Debian 12 Bookworm",
    region: "Mumbai (IN)",
    flag: "🇮🇳",
    plan: "8 vCPU · 16 GB RAM · 320 GB NVMe",
    cpuLoad: 38,
    ramLoad: 68,
    status: "running",
    uptime: "112 days, 2 hrs",
  },
  {
    id: "inst-03",
    name: "frontend-ssr-ingress",
    ip: "45.132.89.14",
    os: "Alpine Linux 3.20",
    region: "Frankfurt (DE)",
    flag: "🇩🇪",
    plan: "2 vCPU · 4 GB RAM · 80 GB NVMe",
    cpuLoad: 18,
    ramLoad: 41,
    status: "running",
    uptime: "19 days, 8 hrs",
  },
  {
    id: "inst-04",
    name: "redis-cache-cluster",
    ip: "167.99.140.55",
    os: "Ubuntu 22.04 LTS",
    region: "Singapore (SG)",
    flag: "🇸🇬",
    plan: "4 vCPU · 8 GB RAM · 160 GB NVMe",
    cpuLoad: 14,
    ramLoad: 33,
    status: "running",
    uptime: "64 days, 19 hrs",
  },
];

const recentActivities = [
  {
    title: "Offsite Backup Snapshot Verified",
    target: "db-postgres-primary · 14.2 GB",
    time: "24 minutes ago",
    status: "success",
  },
  {
    title: "Automated Deploy via GitHub Actions",
    target: "frontend-ssr-ingress · commit #f82a1b",
    time: "1 hour ago",
    status: "success",
  },
  {
    title: "DDoS Attack Packet Scrubbed at Edge",
    target: "14.2 Gbps UDP flood blocked in Frankfurt",
    time: "3 hours ago",
    status: "shield",
  },
  {
    title: "SSL Wildcard Certificate Auto-Renewed",
    target: "*.hostmyapp.dev · Let's Encrypt",
    time: "7 hours ago",
    status: "success",
  },
];

export function DashboardOverviewPage() {
  const [instances] = useState<Instance[]>(initialInstances);
  const [selectedProject, setSelectedProject] = useState("Production Infrastructure");

  return (
    <div className="space-y-6">
      {/* Page Title & Project Selector Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-primary">HostMyApp Cloud Control</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground font-mono">v4.8.2-stable</span>
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Infrastructure Overview
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Project Switcher */}
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground focus:outline-none focus:border-primary cursor-pointer shadow-xs"
          >
            <option value="Production Infrastructure">Production Infrastructure</option>
            <option value="Staging & QA">Staging & QA Environments</option>
            <option value="Client Demos">Client Demonstration Cluster</option>
          </select>

          <Button
            size="sm"
            nativeButton={false}
            render={<Link href="/deploy" />}
            className="gap-1.5 shadow-xs"
          >
            <Plus weight="bold" className="size-3.5" />
            <span>Launch Server</span>
          </Button>
        </div>
      </div>

      {/* Top 4 KPI Metric Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Active Instances */}
        <div className="rounded-lg border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Active Instances</span>
            <div className="flex size-8 items-center justify-center rounded-md bg-muted text-primary">
              <Cloud weight="bold" className="size-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">4</span>
            <span className="text-xs text-muted-foreground font-medium">100% Online</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>0 Stopped</span>
            <span>3 Regions</span>
          </div>
        </div>

        {/* Card 2: vCPU & Memory Allocated */}
        <div className="rounded-lg border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Compute Allocated</span>
            <div className="flex size-8 items-center justify-center rounded-md bg-muted text-primary">
              <Cpu weight="bold" className="size-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">18 vCPUs</span>
            <span className="text-xs text-muted-foreground">/ 36 GB</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Avg CPU Load: 23%</span>
            <span className="font-medium text-foreground">Optimal</span>
          </div>
        </div>

        {/* Card 3: Bandwidth Throughput */}
        <div className="rounded-lg border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Monthly Bandwidth</span>
            <div className="flex size-8 items-center justify-center rounded-md bg-muted text-primary">
              <Pulse weight="bold" className="size-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">2.4 TB</span>
            <span className="text-xs text-muted-foreground">/ 10 TB Pool</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>24% Quota Used</span>
            <span>Unmetered Burst</span>
          </div>
        </div>

        {/* Card 4: Month to Date Spend */}
        <div className="rounded-lg border border-border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Current Period Spend</span>
            <div className="flex size-8 items-center justify-center rounded-md bg-muted text-primary">
              <CreditCard weight="bold" className="size-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">$48.20</span>
            <span className="text-xs text-muted-foreground">USD</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Auto-pay on file</span>
            <Link href="/dashboard/billing" className="text-primary hover:underline font-medium">
              View Invoice →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Grid: Active Servers Table + Live Resource Activity Graph */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Column: Active Cloud Instances Table (8 Cols) */}
        <div className="lg:col-span-8 rounded-lg border border-border bg-card shadow-xs">
          <div className="flex items-center justify-between border-b border-border p-4 sm:px-6">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-foreground">Active Compute Instances</h2>
              <span className="rounded bg-muted px-2 py-0.5 text-xs font-semibold text-foreground">
                {instances.length} Total
              </span>
            </div>
            <Link
              href="/dashboard/vps"
              className="text-xs font-semibold text-primary hover:underline"
            >
              View All Servers →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/30 text-muted-foreground">
                  <th className="py-3 px-4 font-semibold">Instance Name</th>
                  <th className="py-3 px-4 font-semibold">Region & IP</th>
                  <th className="py-3 px-4 font-semibold">Configuration</th>
                  <th className="py-3 px-4 font-semibold">Live Load</th>
                  <th className="py-3 px-4 font-semibold">Status</th>
                  <th className="py-3 px-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {instances.map((inst) => (
                  <tr key={inst.id} className="hover:bg-muted/20 transition-colors">
                    {/* Name & OS */}
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-foreground flex items-center gap-1.5">
                        <span>{inst.name}</span>
                      </div>
                      <div className="text-[11px] text-muted-foreground font-mono mt-0.5">
                        {inst.os}
                      </div>
                    </td>

                    {/* Region & IP */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1 font-medium text-foreground">
                        <span>{inst.flag}</span>
                        <span>{inst.region}</span>
                      </div>
                      <div className="text-[11px] font-mono text-muted-foreground mt-0.5">
                        {inst.ip}
                      </div>
                    </td>

                    {/* Hardware specs */}
                    <td className="py-3.5 px-4 text-muted-foreground">
                      {inst.plan}
                    </td>

                    {/* Live Load meter */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
                        <span>CPU: {inst.cpuLoad}%</span>
                        <span>RAM: {inst.ramLoad}%</span>
                      </div>
                      <div className="h-1.5 w-24 overflow-hidden rounded bg-muted">
                        <div
                          className="h-full bg-primary rounded"
                          style={{ width: `${inst.cpuLoad}%` }}
                        />
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1.5 rounded border border-border bg-muted px-2 py-0.5 text-[11px] font-medium text-foreground">
                        <span className="size-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                        Running
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/dashboard/terminal?id=${inst.id}`}
                          title="Connect Web Terminal"
                          className="rounded border border-border p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          <Terminal className="size-3.5" />
                        </Link>
                        <Link
                          href={`/dashboard/vps/${inst.id}`}
                          className="rounded border border-border bg-card px-2.5 py-1 text-[11px] font-semibold text-foreground hover:bg-muted transition-colors"
                        >
                          Manage
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Live Resource Activity & Quick Actions (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Shortcuts Card */}
          <div className="rounded-lg border border-border bg-card p-5 shadow-xs">
            <h3 className="text-sm font-bold text-foreground mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2.5">
              <Link
                href="/deploy"
                className="flex flex-col items-center justify-center rounded-lg border border-border bg-muted/30 p-3 text-center hover:bg-muted transition-colors"
              >
                <Cloud className="size-5 text-primary mb-1.5" />
                <span className="text-xs font-semibold text-foreground">New VPS</span>
              </Link>
              <Link
                href="/dashboard/domains"
                className="flex flex-col items-center justify-center rounded-lg border border-border bg-muted/30 p-3 text-center hover:bg-muted transition-colors"
              >
                <Globe className="size-5 text-primary mb-1.5" />
                <span className="text-xs font-semibold text-foreground">Add Domain</span>
              </Link>
              <Link
                href="/dashboard/databases"
                className="flex flex-col items-center justify-center rounded-lg border border-border bg-muted/30 p-3 text-center hover:bg-muted transition-colors"
              >
                <Database className="size-5 text-primary mb-1.5" />
                <span className="text-xs font-semibold text-foreground">Create DB</span>
              </Link>
              <Link
                href="/dashboard/firewall"
                className="flex flex-col items-center justify-center rounded-lg border border-border bg-muted/30 p-3 text-center hover:bg-muted transition-colors"
              >
                <ShieldCheck className="size-5 text-primary mb-1.5" />
                <span className="text-xs font-semibold text-foreground">Firewalls</span>
              </Link>
            </div>
          </div>

          {/* Real-Time Telemetry Graph Box */}
          <div className="rounded-lg border border-border bg-card p-5 shadow-xs">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                <span className="text-xs font-bold text-foreground">Cluster Throughput</span>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">3.2 Gbps Peak</span>
            </div>

            <div className="mt-4 relative h-32 w-full">
              <svg viewBox="0 0 300 120" className="w-full h-full">
                <path
                  d="M0,90 Q40,70 80,85 T160,40 T240,55 T300,30 L300,120 L0,120 Z"
                  fill="currentColor"
                  className="text-primary/10"
                />
                <path
                  d="M0,90 Q40,70 80,85 T160,40 T240,55 T300,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                />
              </svg>
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground border-t border-border pt-2">
              <span>Avg Latency: 11.2ms</span>
              <span className="font-medium text-foreground">99.998% Uptime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Recent Audit Log & Activity Timeline */}
      <div className="rounded-lg border border-border bg-card p-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
          <h2 className="text-sm font-bold text-foreground">Recent Infrastructure Activity</h2>
          <span className="text-xs text-muted-foreground">Live Telemetry Feed</span>
        </div>

        <div className="divide-y divide-border">
          {recentActivities.map((act, index) => (
            <div key={index} className="py-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="flex size-7 items-center justify-center rounded-md bg-muted text-primary">
                  <CheckCircle weight="fill" className="size-4" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{act.title}</div>
                  <div className="text-[11px] text-muted-foreground font-mono">{act.target}</div>
                </div>
              </div>
              <span className="text-[11px] text-muted-foreground">{act.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardOverviewPage;
