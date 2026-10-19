"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InnerHero } from "@/components/inner-hero";
import { DeveloperQuickstartPreview } from "@/components/hero-previews/developer-quickstart-preview";
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
curl -X POST https://api.bhartiyacloud.com/v1/servers \\
  -H "Authorization: Bearer $BHARTIYA_API_KEY" \\
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
    code: `import { BhartiyaClient } from "@bhartiyacloud/sdk";

const client = new BhartiyaClient({
  apiKey: process.env.BHARTIYA_API_KEY!,
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
    code: `from bhartiyacloud import BhartiyaClient

client = BhartiyaClient(api_key="bc_live_948f932...")

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
    bhartiya = {
      source  = "bhartiyacloud/bhartiya"
      version = "~> 2.1"
    }
  }
}

resource "bhartiya_server" "api_cluster" {
  count     = 3
  name      = "api-worker-\${count.index + 1}"
  plan      = "cpx41"
  region    = "fra"
  image     = "ubuntu-24.04"
  ssh_keys  = [data.bhartiya_ssh_key.main.id]
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
        {/* UNIFIED INNER HERO */}
        <InnerHero
          title="Cloud Infrastructure Built"
          titleHighlight="for Developers & DevOps."
          description="Fast KVM virtual servers, Git push-to-deploy, REST APIs, and official Terraform modules with root SSH access. Predictable billing without complex cloud calculators."
          primaryCta={{
            text: "Deploy Cloud VPS",
            href: "/products/cloud-vps",
            icon: ArrowRight,
          }}
          secondaryCta={{
            text: "View API Documentation",
            href: "/resources",
            variant: "outline",
            icon: Terminal,
          }}
          benefits={[
            "Official Terraform Provider",
            "REST API & CLI Tooling",
            "Direct Git Push Deployments",
          ]}
          preview={<DeveloperQuickstartPreview />}
        />

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
                <h3 className="text-base font-bold text-foreground">Bhartiya Cloud CLI &amp; REST API</h3>
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
              Start Deploying with Bhartiya Cloud
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
