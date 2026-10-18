"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InnerHero } from "@/components/inner-hero";
import { VpsConfigPreview } from "@/components/hero-previews/vps-config-preview";
import {
  Cloud,
  Cpu,
  HardDrives,
  Lightning,
  ShieldCheck,
  Globe,
  ArrowRight,
  Check,
  CheckCircle,
  CaretDown,
  CaretRight,
  Sliders,
  Terminal,
  Database,
  LockKey,
  ChartLineUp,
  Fingerprint,
  Headset,
  Copy,
  ArrowsClockwise,
  ClockCounterClockwise,
  ShieldPlus,
  SquaresFour,
} from "@phosphor-icons/react";

// VPS Plans Data
interface VPSPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  category: "general" | "cpu" | "memory" | "storage";
  vCpu: number;
  cpuType: string;
  ramGb: number;
  ramType: string;
  diskGb: number;
  diskType: string;
  bandwidthTb: number;
  portSpeedGbps: number;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  hourlyPrice: number;
  features: string[];
}

const vpsPlans: VPSPlan[] = [
  {
    id: "cx21",
    name: "CX-21 Sandbox",
    category: "general",
    vCpu: 1,
    cpuType: "AMD EPYC™ 9654",
    ramGb: 2,
    ramType: "DDR5 ECC",
    diskGb: 40,
    diskType: "Gen4 NVMe",
    bandwidthTb: 20,
    portSpeedGbps: 1,
    monthlyPrice: 4.5,
    annualMonthlyPrice: 3.6,
    hourlyPrice: 0.006,
    features: [
      "1 Dedicated AMD vCPU core",
      "2 GB DDR5 ECC Memory",
      "40 GB PCIe 4.0 NVMe SSD",
      "20 TB Traffic @ 1 Gbps",
      "1 Dedicated IPv4 + /64 IPv6",
      "DDoS Protection (3.2 Tbps)",
    ],
  },
  {
    id: "cx31",
    name: "CX-31 Standard",
    category: "general",
    badge: "Balanced",
    vCpu: 2,
    cpuType: "AMD EPYC™ 9654",
    ramGb: 4,
    ramType: "DDR5 ECC",
    diskGb: 80,
    diskType: "Gen4 NVMe",
    bandwidthTb: 20,
    portSpeedGbps: 2.5,
    monthlyPrice: 8.9,
    annualMonthlyPrice: 7.1,
    hourlyPrice: 0.012,
    features: [
      "2 Dedicated AMD vCPU cores",
      "4 GB DDR5 ECC Memory",
      "80 GB PCIe 4.0 NVMe SSD",
      "20 TB Traffic @ 2.5 Gbps",
      "Automated Daily Snapshots",
      "1 Dedicated IPv4 + /64 IPv6",
    ],
  },
  {
    id: "cpx41",
    name: "CPX-41 Production",
    category: "general",
    badge: "Most Popular",
    isPopular: true,
    vCpu: 4,
    cpuType: "AMD EPYC™ 9654",
    ramGb: 8,
    ramType: "DDR5 ECC",
    diskGb: 160,
    diskType: "Gen4 NVMe",
    bandwidthTb: 30,
    portSpeedGbps: 5,
    monthlyPrice: 16.5,
    annualMonthlyPrice: 13.2,
    hourlyPrice: 0.023,
    features: [
      "4 Dedicated AMD vCPU cores",
      "8 GB High-Speed DDR5 RAM",
      "160 GB PCIe 4.0 NVMe (RAID 10)",
      "30 TB Traffic @ 5 Gbps Uplink",
      "Priority Hypervisor Allocation",
      "Free 3 Snapshot Slots",
      "Dedicated Private VPC LAN",
    ],
  },
  {
    id: "cpx51",
    name: "CPX-51 Performance",
    category: "cpu",
    badge: "High Compute",
    vCpu: 8,
    cpuType: "AMD EPYC™ 9654",
    ramGb: 16,
    ramType: "DDR5 ECC",
    diskGb: 320,
    diskType: "Gen4 NVMe",
    bandwidthTb: 30,
    portSpeedGbps: 10,
    monthlyPrice: 32.0,
    annualMonthlyPrice: 25.6,
    hourlyPrice: 0.044,
    features: [
      "8 Dedicated AMD vCPU cores",
      "16 GB DDR5 ECC Memory",
      "320 GB Enterprise NVMe SSD",
      "30 TB Traffic @ 10 Gbps Uplink",
      "High AVX-512 Vector Compute",
      "Live Snapshot & Instant Cloning",
      "Advanced DDoS Firewall Rules",
    ],
  },
  {
    id: "cpx61",
    name: "CPX-61 Memory Pro",
    category: "memory",
    badge: "DB Optimized",
    vCpu: 16,
    cpuType: "AMD EPYC™ 9654",
    ramGb: 32,
    ramType: "DDR5 ECC",
    diskGb: 640,
    diskType: "Gen4 NVMe",
    bandwidthTb: 40,
    portSpeedGbps: 10,
    monthlyPrice: 64.0,
    annualMonthlyPrice: 51.2,
    hourlyPrice: 0.088,
    features: [
      "16 Dedicated AMD vCPU cores",
      "32 GB DDR5 ECC Memory",
      "640 GB Gen4 NVMe (1.2M IOPS)",
      "40 TB Traffic @ 10 Gbps Uplink",
      "Enterprise SLA 99.99%",
      "Custom Reverse DNS (PTR)",
      "1-Click Docker & K8s Stacks",
    ],
  },
  {
    id: "cpx71",
    name: "CPX-71 Ultra Cluster",
    category: "memory",
    badge: "Enterprise",
    vCpu: 32,
    cpuType: "AMD EPYC™ 9654",
    ramGb: 64,
    ramType: "DDR5 ECC",
    diskGb: 1200,
    diskType: "Gen4 NVMe",
    bandwidthTb: 50,
    portSpeedGbps: 10,
    monthlyPrice: 128.0,
    annualMonthlyPrice: 102.4,
    hourlyPrice: 0.175,
    features: [
      "32 Dedicated AMD vCPU cores",
      "64 GB Ultra-Fast DDR5 RAM",
      "1.2 TB Enterprise NVMe Array",
      "50 TB Traffic @ 10 Gbps Uplink",
      "BGP Session & Bring Your Own IP",
      "Dedicated Technical Account Mgr",
      "Sub-Minute Automated Cloning",
    ],
  },
];

// Available Regions
interface Region {
  id: string;
  name: string;
  city: string;
  country: string;
  flag: string;
  pingMs: number;
}

const regions: Region[] = [
  { id: "fra", name: "Frankfurt", city: "Frankfurt", country: "Germany", flag: "🇩🇪", pingMs: 14 },
  { id: "nyc", name: "New York", city: "New York", country: "United States", flag: "🇺🇸", pingMs: 38 },
  { id: "lon", name: "London", city: "London", country: "United Kingdom", flag: "🇬🇧", pingMs: 22 },
  { id: "sin", name: "Singapore", city: "Singapore", country: "Singapore", flag: "🇸🇬", pingMs: 84 },
  { id: "tyo", name: "Tokyo", city: "Tokyo", country: "Japan", flag: "🇯🇵", pingMs: 112 },
  { id: "bom", name: "Mumbai", city: "Mumbai", country: "India", flag: "🇮🇳", pingMs: 92 },
  { id: "sjc", name: "Silicon Valley", city: "San Jose", country: "United States", flag: "🇺🇸", pingMs: 65 },
  { id: "syd", name: "Sydney", city: "Sydney", country: "Australia", flag: "🇦🇺", pingMs: 146 },
];

// Operating Systems
interface OSItem {
  id: string;
  name: string;
  version: string;
  iconText: string;
  category: "linux" | "app";
}

const operatingSystems: OSItem[] = [
  { id: "ubuntu", name: "Ubuntu", version: "24.04 LTS / 22.04", iconText: "Ubuntu", category: "linux" },
  { id: "debian", name: "Debian", version: "12 Bookworm", iconText: "Debian", category: "linux" },
  { id: "rocky", name: "Rocky Linux", version: "9.4 Enterprise", iconText: "Rocky", category: "linux" },
  { id: "almalinux", name: "AlmaLinux", version: "9.4 Cloud", iconText: "Alma", category: "linux" },
  { id: "alpine", name: "Alpine", version: "3.20 Minimal", iconText: "Alpine", category: "linux" },
  { id: "docker", name: "Docker CE", version: "Ubuntu 24.04 + Compose", iconText: "Docker", category: "app" },
  { id: "k8s", name: "Kubernetes K3s", version: "Single-node lightweight", iconText: "K8s", category: "app" },
  { id: "wireguard", name: "WireGuard VPN", version: "1-Click Secure Gateway", iconText: "VPN", category: "app" },
];

// Comparison Matrix Data
const comparisonData = [
  {
    feature: "Processor Architecture",
    nexora: "AMD EPYC™ 9654 (Genoa)",
    aws: "Shared Xeon / Graviton3",
    digitalocean: "Shared Intel / AMD",
    linode: "Shared AMD EPYC",
  },
  {
    feature: "Storage Technology",
    nexora: "PCIe 4.0 NVMe RAID 10",
    aws: "EBS gp3 (Network Attached)",
    digitalocean: "Local NVMe SSD",
    linode: "Standard NVMe SSD",
  },
  {
    feature: "Network Uplink Speed",
    nexora: "Up to 10 Gbps Unthrottled",
    aws: "Up to 5 Gbps (Burstable)",
    digitalocean: "1 Gbps to 2 Gbps",
    linode: "1 Gbps to 4 Gbps",
  },
  {
    feature: "Included Bandwidth (4 vCPU / 8GB)",
    nexora: "30 TB / month",
    aws: "Pay-as-you-go ($0.09/GB)",
    digitalocean: "5 TB / month",
    linode: "5 TB / month",
  },
  {
    feature: "Enterprise DDoS Shield",
    nexora: "3.2 Tbps Always-On (Free)",
    aws: "Shield Advanced ($3,000/mo)",
    digitalocean: "Basic L3/L4",
    linode: "Standard Scrubbing",
  },
  {
    feature: "Automated Snapshots & API",
    nexora: "Sub-second live copy",
    aws: "EBS Snapshot latency",
    digitalocean: "20% plan fee",
    linode: "Monthly add-on fee",
  },
  {
    feature: "Price for 4 vCPU / 8 GB RAM",
    nexora: "$16.50 / mo",
    aws: "~$68.40 / mo (t4g.xlarge)",
    digitalocean: "$48.00 / mo",
    linode: "$48.00 / mo",
  },
];

// FAQs Data
const faqs = [
  {
    question: "How fast is instance provisioning after placing an order?",
    answer:
      "All Nexora Cloud VPS instances are fully automated and provisioned in under 30 seconds. Your root credentials and IP assignments are delivered immediately via dashboard and email, ready for instant SSH access.",
  },
  {
    question: "Can I scale CPU, RAM, and NVMe storage without losing data?",
    answer:
      "Yes! You can dynamically scale your Cloud VPS instance up or down directly from the Nexora Cloud Console. CPU and RAM resizing takes less than 60 seconds with a quick reboot, and NVMe block storage can be expanded on-the-fly without any downtime.",
  },
  {
    question: "What kind of DDoS protection is included?",
    answer:
      "Every Cloud VPS includes our carrier-grade, multi-terabit DDoS mitigation engine with up to 3.2 Tbps capacity. It filters Layer 3, Layer 4, and volumetric attacks with sub-second detection, keeping your services online with zero added latency.",
  },
  {
    question: "Do I get full root access and dedicated IP addresses?",
    answer:
      "Yes. Every instance includes 100% root access via SSH, web-based out-of-band VNC recovery console, 1 dedicated static IPv4 address, and a routed /64 IPv6 subnet. Additional IPv4 addresses can be attached anytime.",
  },
  {
    question: "What virtualization technology does NEXORA Cloud use?",
    answer:
      "We strictly use Kernel-based Virtual Machine (KVM) virtualization on top of enterprise hypervisors with ECC DDR5 memory and redundant PCIe 4.0 NVMe arrays. There is zero noisy-neighbor resource throttling.",
  },
  {
    question: "How do backups and snapshots work?",
    answer:
      "You can create instant point-in-time snapshots with a single click or schedule automated daily/weekly backups stored on separate geographical storage clusters. Restoring or cloning to a new instance takes under 2 minutes.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "We offer a 7-day no-questions-asked refund guarantee on all Cloud VPS instances. If you are not completely satisfied with the latency or compute performance, reach out to our 24/7 support team for an instant refund.",
  },
];

export default function CloudVpsPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "general" | "cpu" | "memory">("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("fra");
  const [selectedOS, setSelectedOS] = useState<string>("ubuntu");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>("cpx41");
  const [activeCodeTab, setActiveCodeTab] = useState<"cli" | "terraform" | "curl">("cli");

  // Filter plans based on category
  const filteredPlans = vpsPlans.filter((plan) => {
    if (selectedCategory === "all") return true;
    return plan.category === selectedCategory;
  });

  const selectedPlan = vpsPlans.find((p) => p.id === selectedPlanId) || vpsPlans[2];
  const activeRegionObj = regions.find((r) => r.id === selectedRegion) || regions[0];
  const activeOSObj = operatingSystems.find((o) => o.id === selectedOS) || operatingSystems[0];

  const getPlanPrice = (plan: VPSPlan) => {
    return billingCycle === "annual" ? plan.annualMonthlyPrice : plan.monthlyPrice;
  };

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(`nexora vps create --plan ${selectedPlan.id} --region ${selectedRegion} --os ${selectedOS} --name my-app-prod`);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO SECTION                                                             */}
        {/* ========================================================================= */}
        {/* UNIFIED INNER HERO */}
        <InnerHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/#hosting-plans" },
            { label: "Cloud VPS" },
          ]}
          eyebrow="High-Performance VPS"
          title="Scalable VPS Hosting"
          titleHighlight="with Dedicated Resources."
          description="Provision fully isolated KVM cloud virtual servers on AMD EPYC processors and enterprise Gen4 NVMe arrays. Scale CPU, memory, and storage on demand with root SSH control and transparent pricing."
          primaryCta={{
            text: "Configure Your VPS",
            href: "#configurator",
            icon: Sliders,
          }}
          secondaryCta={{
            text: "Compare VPS Plans",
            href: "#plans",
            variant: "outline",
            icon: ArrowRight,
          }}
          benefits={[
            "100% Dedicated KVM Cores",
            "Full Root SSH & Out-of-Band VNC",
            "Instant 1-Click Scaling",
          ]}
          preview={
            <VpsConfigPreview
              title="CPX-41 Production KVM"
              badge="Ready to deploy"
              vCpu="4 Dedicated AMD vCPU"
              cpuModel="AMD EPYC™ 9654 @ 3.7 GHz"
              ram="8 GB High-Speed DDR5"
              ramType="ECC Registered"
              storage="160 GB PCIe 4.0"
              storageType="NVMe RAID-10"
              bandwidth="30 TB @ 5 Gbps"
              monthlyPrice={`$${getPlanPrice(selectedPlan).toFixed(2)}`}
              hourlyPrice={`$${selectedPlan.hourlyPrice.toFixed(3)}/hr`}
              ctaLink="#configurator"
              ctaText="Configure Instance"
            />
          }
        />

        {/* ========================================================================= */}
        {/* INTERACTIVE PLANS & PRICING GRID                                         */}
        {/* ========================================================================= */}
        <section id="plans" className="py-20 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-xs font-bold tracking-widest text-primary uppercase">
                Flexible Cloud Compute
              </h2>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Predictable, Transparent Cloud VPS Pricing
              </p>
              <p className="text-base text-muted-foreground">
                No hidden egress charges, no surprise invoices. Choose standard hourly or save 20% with annual billing.
              </p>

              {/* Billing Cycle Switch */}
              <div className="pt-4 flex items-center justify-center gap-3">
                <span className={cn("text-sm font-medium", billingCycle === "monthly" ? "text-foreground font-bold" : "text-muted-foreground")}>
                  Monthly Billing
                </span>
                <button
                  type="button"
                  onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
                  className={cn(
                    "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    billingCycle === "annual" ? "bg-primary" : "bg-muted"
                  )}
                  aria-label="Toggle billing cycle"
                >
                  <span
                    className={cn(
                      "pointer-events-none inline-block size-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out",
                      billingCycle === "annual" ? "translate-x-5" : "translate-x-0"
                    )}
                  />
                </button>
                <div className="flex items-center gap-2">
                  <span className={cn("text-sm font-medium", billingCycle === "annual" ? "text-foreground font-bold" : "text-muted-foreground")}>
                    Annual Billing
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    Save 20%
                  </span>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={cn(
                    "rounded-md px-3.5 py-1.5 text-xs font-semibold cursor-pointer transition-colors",
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                >
                  All VPS Configurations
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("general")}
                  className={cn(
                    "rounded-md px-3.5 py-1.5 text-xs font-semibold cursor-pointer transition-colors",
                    selectedCategory === "general"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                >
                  General Purpose
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("cpu")}
                  className={cn(
                    "rounded-md px-3.5 py-1.5 text-xs font-semibold cursor-pointer transition-colors",
                    selectedCategory === "cpu"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                >
                  CPU Optimized
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory("memory")}
                  className={cn(
                    "rounded-md px-3.5 py-1.5 text-xs font-semibold cursor-pointer transition-colors",
                    selectedCategory === "memory"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                >
                  High Memory & DB
                </button>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPlans.map((plan) => {
                const isSelected = selectedPlanId === plan.id;
                const price = getPlanPrice(plan);

                return (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={cn(
                      "relative flex flex-col rounded-xl border p-6 transition-all duration-200 cursor-pointer",
                      plan.isPopular
                        ? "border-primary bg-card shadow-xs"
                        : "border-border bg-card hover:border-border/80",
                      isSelected && !plan.isPopular && "border-primary/80"
                    )}
                  >
                    {/* Popular Pill */}
                    {plan.badge && (
                      <div className="absolute -top-3 right-6">
                        <span
                          className={cn(
                            "rounded px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                            plan.isPopular
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted border border-border text-foreground"
                          )}
                        >
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    {/* Plan Header */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        Hardware KVM isolation · {plan.cpuType}
                      </p>
                    </div>

                    {/* Price display */}
                    <div className="my-6 border-y border-border/80 py-4">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-extrabold text-foreground">
                          ${price.toFixed(2)}
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">
                          / month
                        </span>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Or ~${plan.hourlyPrice.toFixed(3)}/hr</span>
                        {billingCycle === "annual" && (
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                            Billed annually
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Core Hardware Specs Badge Row */}
                    <div className="grid grid-cols-3 gap-2 pb-5 text-center">
                      <div className="rounded-lg bg-muted/60 p-2.5">
                        <Cpu className="mx-auto size-4 text-primary mb-1" />
                        <p className="text-xs font-bold text-foreground">{plan.vCpu} vCPU</p>
                        <p className="text-[10px] text-muted-foreground">Dedicated</p>
                      </div>

                      <div className="rounded-lg bg-muted/60 p-2.5">
                        <SquaresFour className="mx-auto size-4 text-accent mb-1" />
                        <p className="text-xs font-bold text-foreground">{plan.ramGb} GB</p>
                        <p className="text-[10px] text-muted-foreground">{plan.ramType}</p>
                      </div>

                      <div className="rounded-lg bg-muted/60 p-2.5">
                        <HardDrives className="mx-auto size-4 text-emerald-500 mb-1" />
                        <p className="text-xs font-bold text-foreground">{plan.diskGb} GB</p>
                        <p className="text-[10px] text-muted-foreground">{plan.diskType}</p>
                      </div>
                    </div>

                    {/* Feature bullet list */}
                    <ul className="flex-1 space-y-2.5 text-xs text-muted-foreground">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="size-3.5 shrink-0 text-emerald-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA button */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <Link
                        href={`/deploy?plan=${plan.id}&cycle=${billingCycle}`}
                        className={cn(
                          buttonVariants({
                            variant: plan.isPopular ? "default" : "outline",
                            size: "default",
                          }),
                          "w-full rounded-md font-semibold text-center transition-all",
                          plan.isPopular
                            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs"
                            : "hover:bg-muted"
                        )}
                      >
                        Deploy This Plan
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE SERVER CONFIGURATOR & REGION PICKER                           */}
        {/* ========================================================================= */}
        <section id="configurator" className="py-20 bg-muted/30 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-xs font-bold tracking-widest text-primary uppercase">
                Tailored Deployment
              </h2>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Configure Your Cloud Instance in Real Time
              </p>
              <p className="text-base text-muted-foreground">
                Select your target datacenter location, preferred operating system or 1-click app, and configure your instant cluster.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left Column: Regions & OS Selectors */}
              <div className="lg:col-span-8 space-y-8">
                {/* 1. Global Datacenter Location Picker */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary font-bold text-xs">
                        1
                      </div>
                      <h3 className="text-base font-bold text-foreground">
                        Select Datacenter Location
                      </h3>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      18+ Global Regions Available
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {regions.map((region) => {
                      const isSelected = selectedRegion === region.id;
                      return (
                        <button
                          key={region.id}
                          type="button"
                          onClick={() => setSelectedRegion(region.id)}
                          className={cn(
                            "group flex flex-col items-start rounded-lg border p-3 text-left transition-all cursor-pointer",
                            isSelected
                              ? "border-primary bg-primary/5 shadow-xs"
                              : "border-border bg-background hover:border-border/80 hover:bg-muted/50"
                          )}
                        >
                          <div className="flex w-full items-center justify-between">
                            <span className="text-xl">{region.flag}</span>
                            <span
                              className={cn(
                                "font-mono text-[10px] font-bold",
                                region.pingMs < 30
                                  ? "text-emerald-600 dark:text-emerald-400"
                                  : region.pingMs < 80
                                  ? "text-amber-600 dark:text-amber-400"
                                  : "text-muted-foreground"
                              )}
                            >
                              ~{region.pingMs}ms
                            </span>
                          </div>
                          <span className="mt-2 text-xs font-bold text-foreground">
                            {region.name}
                          </span>
                          <span className="text-[11px] text-muted-foreground">
                            {region.country}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. OS & 1-Click Apps Picker */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary font-bold text-xs">
                        2
                      </div>
                      <h3 className="text-base font-bold text-foreground">
                        Choose Operating System or 1-Click App
                      </h3>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Custom ISOs also supported
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {operatingSystems.map((os) => {
                      const isSelected = selectedOS === os.id;
                      return (
                        <button
                          key={os.id}
                          type="button"
                          onClick={() => setSelectedOS(os.id)}
                          className={cn(
                            "flex flex-col items-start rounded-lg border p-3 text-left transition-all cursor-pointer",
                            isSelected
                              ? "border-primary bg-primary/5 shadow-xs"
                              : "border-border bg-background hover:border-border/80 hover:bg-muted/50"
                          )}
                        >
                          <div className="flex size-7 items-center justify-center rounded-md bg-muted text-xs font-black text-foreground">
                            {os.iconText.slice(0, 3).toUpperCase()}
                          </div>
                          <span className="mt-2 text-xs font-bold text-foreground">
                            {os.name}
                          </span>
                          <span className="text-[11px] text-muted-foreground line-clamp-1">
                            {os.version}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Summary Order Card */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 rounded-lg border border-border bg-card p-6 shadow-xs space-y-6">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <h3 className="text-base font-bold text-foreground">Order Summary</h3>
                      <p className="text-xs text-muted-foreground">Sub-30s Provisioning</p>
                    </div>
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                      {selectedPlan.name}
                    </span>
                  </div>

                  {/* Summary Items */}
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-border/60">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <Cpu className="size-3.5 text-primary" /> Compute
                      </span>
                      <span className="font-semibold text-foreground">
                        {selectedPlan.vCpu} vCPU Cores (Dedicated)
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-border/60">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <SquaresFour className="size-3.5 text-accent" /> Memory
                      </span>
                      <span className="font-semibold text-foreground">
                        {selectedPlan.ramGb} GB {selectedPlan.ramType}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-border/60">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <HardDrives className="size-3.5 text-emerald-500" /> NVMe SSD
                      </span>
                      <span className="font-semibold text-foreground">
                        {selectedPlan.diskGb} GB {selectedPlan.diskType}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-border/60">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <Globe className="size-3.5 text-primary" /> Region
                      </span>
                      <span className="font-semibold text-foreground flex items-center gap-1">
                        <span>{activeRegionObj.flag}</span>
                        <span>{activeRegionObj.city}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-border/60">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <Terminal className="size-3.5 text-amber-500" /> Operating System
                      </span>
                      <span className="font-semibold text-foreground">
                        {activeOSObj.name}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-border/60">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <ShieldCheck className="size-3.5 text-emerald-500" /> DDoS Defense
                      </span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        3.2 Tbps Included Free
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-1">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <Lightning className="size-3.5 text-accent" /> Network Bandwidth
                      </span>
                      <span className="font-semibold text-foreground">
                        {selectedPlan.bandwidthTb} TB @ {selectedPlan.portSpeedGbps} Gbps
                      </span>
                    </div>
                  </div>

                  {/* Pricing Total */}
                  <div className="rounded-lg bg-muted/60 p-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-medium text-foreground">Total Due:</span>
                      <div className="text-right">
                        <span className="text-3xl font-extrabold text-primary">
                          ${getPlanPrice(selectedPlan).toFixed(2)}
                        </span>
                        <span className="text-xs text-muted-foreground">/mo</span>
                      </div>
                    </div>
                    {billingCycle === "annual" && (
                      <p className="mt-1 text-right text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        Includes 20% annual discount
                      </p>
                    )}
                  </div>

                  {/* Deploy Button */}
                  <Link
                    href={`/deploy?plan=${selectedPlan.id}&region=${selectedRegion}&os=${selectedOS}&cycle=${billingCycle}`}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-xs text-center flex items-center justify-center gap-2"
                    )}
                  >
                    <span>Deploy Instance Now</span>
                    <ArrowRight weight="bold" className="size-4" />
                  </Link>

                  <p className="text-center text-[11px] text-muted-foreground">
                    🔒 7-day money-back guarantee · Cancel anytime · Instant provisioning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ENTERPRISE ARCHITECTURE & FEATURE GRID                                    */}
        {/* ========================================================================= */}
        <section className="py-20 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-xs font-bold tracking-widest text-primary uppercase">
                Engineered for Reliability
              </h2>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Next-Gen Cloud Architecture Under the Hood
              </p>
              <p className="text-base text-muted-foreground">
                We built our cloud stack on physical bare-metal nodes with zero oversubscription, enterprise virtualization, and hardware-grade security.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-xs hover:border-primary/50 transition-colors">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Cpu weight="fill" className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Dedicated KVM Virtualization
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  True hardware virtualization without noisy neighbors. Guaranteed vCPU clock cycles, AVX-512 extensions, and isolated kernel memory structures.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-xs hover:border-primary/50 transition-colors">
                <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <HardDrives weight="fill" className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  PCIe 4.0 NVMe RAID 10 Arrays
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Experience sub-millisecond seek times and up to 1,200,000 IOPS. Redundant parity ensures zero data loss even during sudden physical drive replacement.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-xs hover:border-primary/50 transition-colors">
                <div className="flex size-11 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <ShieldPlus weight="fill" className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Carrier-Grade DDoS Filtration
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Always-active automated filtering scrubs volumetric SYN, UDP, and application floods up to 3.2 Tbps before malicious traffic reaches your instance.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-xs hover:border-primary/50 transition-colors">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ClockCounterClockwise weight="fill" className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  1-Click Snapshots & Automated Backups
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Take instantaneous point-in-time image snapshots before major kernel upgrades or database migrations. Restore or roll back with a single click.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-xs hover:border-primary/50 transition-colors">
                <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Globe weight="fill" className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  40 Gbps Global Anycast Backbone
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Direct peering agreements with Tier-1 carriers across Frankfurt, New York, London, Tokyo, and Singapore ensure rock-solid routing and minimal latency.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-xs hover:border-primary/50 transition-colors">
                <div className="flex size-11 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                  <Terminal weight="fill" className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Full Root Access & Custom ISOs
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Unrestricted administrative access. Mount custom ISOs, initialize with cloud-init user-data, and troubleshoot via out-of-band HTML5 VNC console.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DEVELOPER EXPERIENCE & API TOOLCHAIN                                      */}
        {/* ========================================================================= */}
        <section className="py-20 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
              {/* Left Column: Developer text */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Terminal weight="bold" className="size-3.5" />
                  <span>Developer First Infrastructure</span>
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                  Programmatic Deployments with CLI, Terraform & REST API
                </h2>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Automate instance lifecycle management effortlessly. Integrate Nexora Cloud VPS directly into your CI/CD pipelines, GitOps workflows, or Kubernetes autoscalers.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                      <Check className="size-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Declarative Infrastructure as Code</p>
                      <p className="text-xs text-muted-foreground">Official HashiCorp verified Terraform & OpenTofu providers.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                      <Check className="size-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">OpenAPI 3.1 & SDKs</p>
                      <p className="text-xs text-muted-foreground">Type-safe SDKs for Go, TypeScript/Node.js, and Python with token auth.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                      <Check className="size-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Cloud-Init & Startup Scripts</p>
                      <p className="text-xs text-muted-foreground">Inject base64 bootstrap scripts to auto-provision Docker, Nginx, or SSH keys.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/docs/api"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "rounded-md border-border bg-card text-foreground hover:bg-muted text-xs font-semibold gap-1.5"
                    )}
                  >
                    <span>Read API Reference</span>
                    <CaretRight weight="bold" className="size-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Code block sample */}
              <div className="lg:col-span-6">
                <div className="rounded-lg border border-border bg-card p-5 shadow-xs text-foreground font-mono text-xs">
                  {/* Code tabs */}
                  <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                    <div className="flex items-center gap-1.5 rounded-md border border-border bg-muted p-1">
                      <button
                        type="button"
                        onClick={() => setActiveCodeTab("cli")}
                        className={cn(
                          "rounded px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer",
                          activeCodeTab === "cli"
                            ? "bg-background text-foreground shadow-xs"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        NEXORA CLI
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCodeTab("terraform")}
                        className={cn(
                          "rounded px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer",
                          activeCodeTab === "terraform"
                            ? "bg-background text-foreground shadow-xs"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        Terraform
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveCodeTab("curl")}
                        className={cn(
                          "rounded px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer",
                          activeCodeTab === "curl"
                            ? "bg-background text-foreground shadow-xs"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        cURL
                      </button>
                    </div>
                    <span className="text-[11px] text-muted-foreground font-mono">v1.4.2</span>
                  </div>

                  {/* Code snippet display */}
                  {activeCodeTab === "cli" && (
                    <div className="space-y-2 leading-relaxed text-slate-300">
                      <p className="text-slate-500"># Authenticate with Nexora Cloud API</p>
                      <p>
                        <span className="text-primary font-bold">nexora</span> auth login --token <span className="text-emerald-400">&quot;$NEXORA_API_KEY&quot;</span>
                      </p>
                      <p className="text-slate-500 pt-2"># Provision production Cloud VPS</p>
                      <p>
                        <span className="text-primary font-bold">nexora</span> vps create \
                      </p>
                      <p className="pl-4">
                        --name <span className="text-emerald-400">&quot;api-cluster-prod-01&quot;</span> \
                      </p>
                      <p className="pl-4">
                        --plan <span className="text-amber-400">&quot;cpx41&quot;</span> \
                      </p>
                      <p className="pl-4">
                        --region <span className="text-cyan-400">&quot;fra&quot;</span> \
                      </p>
                      <p className="pl-4">
                        --os <span className="text-emerald-400">&quot;ubuntu-24-04&quot;</span> \
                      </p>
                      <p className="pl-4">
                        --ssh-key <span className="text-purple-400">&quot;id_ed25519&quot;</span> \
                      </p>
                      <p className="pl-4">
                        --backups <span className="text-yellow-400">true</span>
                      </p>
                      <p className="pt-2 text-emerald-400">
                        ✔ Instance created in 18.4s! IP: 194.26.112.48
                      </p>
                    </div>
                  )}

                  {activeCodeTab === "terraform" && (
                    <div className="space-y-1.5 leading-relaxed text-slate-300">
                      <p><span className="text-primary font-bold">resource</span> <span className="text-emerald-400">&quot;nexora_vps&quot;</span> <span className="text-amber-400">&quot;web_node&quot;</span> &#123;</p>
                      <p className="pl-4">name        = <span className="text-emerald-400">&quot;web-gateway-01&quot;</span></p>
                      <p className="pl-4">plan        = <span className="text-amber-400">&quot;cpx41&quot;</span></p>
                      <p className="pl-4">region      = <span className="text-cyan-400">&quot;fra&quot;</span></p>
                      <p className="pl-4">image       = <span className="text-emerald-400">&quot;ubuntu-24.04&quot;</span></p>
                      <p className="pl-4">ssh_keys    = [nexora_ssh_key.primary.id]</p>
                      <p className="pl-4">auto_backup = <span className="text-purple-400">true</span></p>
                      <p className="pl-4">firewall_id = nexora_firewall.web_sec.id</p>
                      <p>&#125;</p>
                    </div>
                  )}

                  {activeCodeTab === "curl" && (
                    <div className="space-y-2 leading-relaxed text-slate-300 overflow-x-auto">
                      <p className="text-slate-500"># Direct REST API POST</p>
                      <p>
                        <span className="text-primary font-bold">curl</span> -X POST https://api.nexora.cloud/v1/vps \
                      </p>
                      <p className="pl-4">
                        -H <span className="text-emerald-400">&quot;Authorization: Bearer $NEXORA_TOKEN&quot;</span> \
                      </p>
                      <p className="pl-4">
                        -H <span className="text-emerald-400">&quot;Content-Type: application/json&quot;</span> \
                      </p>
                      <p className="pl-4">
                        -d &#39;&#123;&quot;name&quot;:&quot;k8s-worker-1&quot;,&quot;plan&quot;:&quot;cpx41&quot;,&quot;region&quot;:&quot;fra&quot;&#125;&#39;
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COMPETITIVE BENCHMARK & COMPARISON TABLE                                  */}
        {/* ========================================================================= */}
        <section className="py-20 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-xs font-bold tracking-widest text-primary uppercase">
                Performance Benchmarks
              </h2>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                How NEXORA Compares to Legacy Hyperscalers
              </p>
              <p className="text-base text-muted-foreground">
                Up to 3x higher I/O throughput, unmetered network pipelines, and 60% lower infrastructure bills.
              </p>
            </div>

            <div className="mt-14 overflow-x-auto rounded-xl border border-border shadow-xs">
              <table className="w-full border-collapse text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/60 text-foreground">
                    <th className="p-4 sm:px-6 font-bold">Specification / Feature</th>
                    <th className="p-4 sm:px-6 font-bold bg-primary/10 text-primary">
                      NEXORA Cloud VPS
                    </th>
                    <th className="p-4 sm:px-6 font-medium text-muted-foreground">
                      AWS EC2 (t4g/c6i)
                    </th>
                    <th className="p-4 sm:px-6 font-medium text-muted-foreground">
                      DigitalOcean Droplets
                    </th>
                    <th className="p-4 sm:px-6 font-medium text-muted-foreground">
                      Linode (Akamai)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 sm:px-6 font-semibold text-foreground">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:px-6 font-bold text-primary bg-primary/5">
                        {row.nexora}
                      </td>
                      <td className="p-4 sm:px-6 text-muted-foreground">{row.aws}</td>
                      <td className="p-4 sm:px-6 text-muted-foreground">{row.digitalocean}</td>
                      <td className="p-4 sm:px-6 text-muted-foreground">{row.linode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE FAQ ACCORDION                                                 */}
        {/* ========================================================================= */}
        <section className="py-20 bg-muted/30 border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h2 className="text-xs font-bold tracking-widest text-primary uppercase">
                Got Questions?
              </h2>
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Frequently Asked Questions
              </p>
              <p className="text-base text-muted-foreground">
                Everything you need to know about our Cloud VPS architecture, billing, and support.
              </p>
            </div>

            <div className="mt-12 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-border bg-card overflow-hidden shadow-xs transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-5 text-left font-semibold text-foreground hover:bg-muted/40 cursor-pointer text-sm sm:text-base"
                    >
                      <span>{faq.question}</span>
                      <CaretDown
                        weight="bold"
                        className={cn(
                          "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                          isOpen && "rotate-180 text-primary"
                        )}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-border/60 bg-muted/20 p-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FINAL CONVERSION CALL TO ACTION BANNER                                    */}
        {/* ========================================================================= */}
        <section className="relative py-16 lg:py-24 border-t border-border bg-muted/30">
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
              <Lightning weight="fill" className="size-3.5 text-primary" />
              <span>Deploy in Under 30 Seconds</span>
            </span>

            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight text-foreground">
              Launch Your Next High-Compute Cloud VPS Today
            </h2>

            <p className="mx-auto max-w-2xl text-base text-muted-foreground">
              Join thousands of developers, growing SaaS teams, and mission-critical applications running on NEXORA Cloud.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <Button
                size="lg"
                nativeButton={false}
                render={<Link href="/deploy" />}
                className="gap-2 font-semibold"
              >
                <span>Deploy Cloud VPS Now</span>
                <ArrowRight weight="bold" className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                nativeButton={false}
                render={<Link href="/contact" />}
                className="font-medium"
              >
                <span>Talk to Solutions Engineer</span>
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle weight="fill" className="size-4 text-muted-foreground" /> 7-Day Money-Back Guarantee
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle weight="fill" className="size-4 text-muted-foreground" /> 99.99% Hardware SLA
              </span>
              <span className="text-border">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle weight="fill" className="size-4 text-muted-foreground" /> No Long-Term Contracts
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
