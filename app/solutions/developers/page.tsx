"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Code,
  Terminal,
  Cpu,
  Lightning,
  Copy,
  Check,
  ArrowRight,
  GitBranch,
  Cloud,
  HardDrives,
  Key,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react";

const codeSnippets: Record<string, { lang: string; code: string }> = {
  curl: {
    lang: "bash",
    code: `# Create a 4 vCPU / 8 GB RAM Cloud VPS in Frankfurt
curl -X POST https://api.nexoracloud.com/v1/servers \\
  -H "Authorization: Bearer $NEXORA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "api-production-01",
    "plan": "cpx41",
    "region": "fra",
    "image": "ubuntu-24.04",
    "ssh_keys": ["ssh-ed25519 AAAAC3NzaC1lZDI1NTE5..."],
    "backups": true
  }'`,
  },
  typescript: {
    lang: "typescript",
    code: `import { NexoraClient } from "@nexoracloud/sdk";

const client = new NexoraClient({
  apiKey: process.env.NEXORA_API_KEY!,
});

// Spin up a new KVM Cloud VPS instance
const server = await client.servers.create({
  name: "microservice-cluster-node",
  plan: "cpx41",
  region: "nyc",
  image: "docker-24.04",
  tags: ["production", "kubernetes"],
});

console.log(\`Server provisioned with IPv4: \${server.publicIp}\`);`,
  },
  python: {
    lang: "python",
    code: `from nexora import NexoraClient

client = NexoraClient(api_key="nx_live_948f932...")

# Provision high-IOPS database node
server = client.servers.create(
    name="postgres-primary",
    plan="cpx61",
    region="fra",
    image="ubuntu-24.04",
    cloud_init="#!/bin/bash\\napt-get update && apt-get install -y postgresql"
)

print(f"Server {server.id} deployed: {server.ipv4}")`,
  },
  terraform: {
    lang: "hcl",
    code: `terraform {
  required_providers {
    nexora = {
      source  = "nexoracloud/nexora"
      version = "~> 2.1"
    }
  }
}

resource "nexora_server" "api_cluster" {
  count     = 3
  name      = "api-worker-\${count.index + 1}"
  plan      = "cpx41"
  region    = "fra"
  image     = "ubuntu-24.04"
  ssh_keys  = [data.nexora_ssh_key.main.id]
}`,
  },
};

export default function DevelopersPage() {
  const [activeTab, setActiveTab] = useState<string>("curl");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="border-b border-border bg-background py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span>Solutions</span>
              <span>/</span>
              <span className="text-foreground font-semibold">Developers &amp; DevOps</span>
            </nav>

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 rounded border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  <span>REST API · Official Terraform Provider · Full Root SSH</span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl sm:leading-[1.12]">
                  Cloud Infrastructure for Developers &amp; DevOps Teams.
                </h1>

                <p className="max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
                  Fast KVM virtual servers, Git push-to-deploy, REST APIs, official Terraform modules, and full root access. Predictable pricing without complex cloud calculators.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link href="/products/cloud-vps" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                    <span>Deploy Cloud VPS</span>
                    <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                  </Link>
                  <Link href="/resources" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                    <span>API Documentation</span>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">&lt; 30s</p>
                    <p className="text-xs text-muted-foreground">Cloud-Init Provisioning</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">100%</p>
                    <p className="text-xs text-muted-foreground">Root SSH Access</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg font-bold text-foreground">Terraform</p>
                    <p className="text-xs text-muted-foreground">Official Registry Provider</p>
                  </div>
                </div>
              </div>

              {/* Code Playground Box */}
              <div className="lg:col-span-6">
                <div className="rounded-lg border border-border bg-zinc-950 text-zinc-100 shadow-xs overflow-hidden">
                  <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-4 py-2.5">
                    <div className="flex items-center gap-1">
                      {(["curl", "typescript", "python", "terraform"] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={cn(
                            "rounded px-2.5 py-1 text-xs font-mono transition-colors cursor-pointer",
                            activeTab === tab
                              ? "bg-zinc-800 text-zinc-100 font-semibold"
                              : "text-zinc-400 hover:text-zinc-200"
                          )}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300 hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check weight="bold" className="size-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-mono text-[11px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy weight="bold" className="size-3.5" />
                          <span className="font-mono text-[11px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-zinc-300">
                    <pre>
                      <code>{codeSnippets[activeTab].code}</code>
                    </pre>
                  </div>

                  <div className="border-t border-zinc-800 bg-zinc-900/40 px-4 py-2 text-[11px] text-zinc-400 flex items-center justify-between font-mono">
                    <span>API Endpoint: v1/servers</span>
                    <span className="text-emerald-400">Response time: ~48ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEVELOPER FEATURES PILLARS */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Modern Tooling Without Vendor Lock-in
              </h2>
              <p className="text-sm text-muted-foreground">
                Automate and scale your applications with open cloud primitives and standard protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-border bg-card p-6 space-y-2.5">
                <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary">
                  <Terminal weight="bold" className="size-4.5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Nexora CLI &amp; REST API</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Manage cloud servers, DNS records, automated snapshots, and firewalls directly from your terminal or CI/CD pipelines.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 space-y-2.5">
                <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary">
                  <GitBranch weight="bold" className="size-4.5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Git Push-to-Deploy</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Connect GitHub, GitLab, or Bitbucket repositories. Build and deploy containerized services on every git push.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 space-y-2.5">
                <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary">
                  <Cloud weight="bold" className="size-4.5" />
                </div>
                <h3 className="text-base font-bold text-foreground">Cloud-Init &amp; Custom ISOs</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bootstrap servers automatically using user-data scripts or boot directly from your own custom Linux distribution ISO images.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-muted/40 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Start Deploying with Nexora Cloud
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Get an instant API key and launch high-performance AMD EPYC™ cloud instances in seconds.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/products/cloud-vps" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                Deploy Cloud Server
              </Link>
              <Link href="/resources" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                Read Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
