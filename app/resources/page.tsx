"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InnerHero } from "@/components/inner-hero";
import { ResourcesQuickstartPreview } from "@/components/hero-previews/resources-quickstart-preview";
import {
  BookOpen,
  Terminal,
  ShieldCheck,
  Cpu,
  Database,
  Globe,
  MagnifyingGlass,
  ArrowRight,
  FileText,
  ChatCircleDots,
  HardDrives,
  CheckCircle,
} from "@phosphor-icons/react";

interface GuideArticle {
  id: string;
  title: string;
  summary: string;
  category: "vps" | "docker" | "security" | "databases" | "hosting";
  readTime: string;
  badge?: string;
}

const articles: GuideArticle[] = [
  {
    id: "vps-initial-setup",
    title: "Initial Cloud VPS Hardening on Ubuntu 24.04 LTS",
    summary: "Step-by-step configuration for UFW firewalls, SSH key-only authentication, fail2ban, and automated kernel livepatching.",
    category: "vps",
    readTime: "6 min read",
    badge: "Popular Guide",
  },
  {
    id: "docker-traefik-ssl",
    title: "Deploying Docker Compose with Traefik & Auto-Renewing SSL",
    summary: "Production reverse proxy configuration with automatic Let's Encrypt certificates and HTTP-to-HTTPS redirection.",
    category: "docker",
    readTime: "9 min read",
    badge: "Architecture Blueprint",
  },
  {
    id: "postgres-high-availability",
    title: "PostgreSQL Master-Replica Streaming Replication on AMD EPYC",
    summary: "Setting up zero-data-loss synchronous streaming replication, pg_hba security tuning, and automated health failover.",
    category: "databases",
    readTime: "12 min read",
  },
  {
    id: "ddos-rules-tuning",
    title: "Configuring Nexora DDoS Shield & Layer 7 Rate Limiting",
    summary: "Define custom WAF rules, block malicious user agents, and protect sensitive API endpoints during brute-force attacks.",
    category: "security",
    readTime: "5 min read",
  },
  {
    id: "litespeed-cache-tuning",
    title: "Optimizing LiteSpeed LSCache & Redis for Core Web Vitals",
    summary: "Configure browser caching, WebP replacement, CSS/JS minification, and in-memory Redis database object caching.",
    category: "hosting",
    readTime: "7 min read",
  },
  {
    id: "terraform-provider-guide",
    title: "Managing Cloud VPS Fleets with Official Nexora Terraform Provider",
    summary: "Declarative infrastructure as code. Spin up VPCs, private subnets, cloud servers, and DNS records using GitOps.",
    category: "vps",
    readTime: "8 min read",
    badge: "DevOps",
  },
];

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredArticles = articles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.summary.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* UNIFIED INNER HERO */}
        <InnerHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resources & Documentation" },
          ]}
          eyebrow="Engineering Knowledge Base"
          title="Technical Documentation &"
          titleHighlight="Server Engineering Guides."
          description="Step-by-step tutorials, server configuration manuals, API references, and architecture blueprints written and tested by our cloud engineering team."
          primaryCta={{
            text: "Browse Knowledge Base",
            href: "#categories",
            icon: ArrowRight,
          }}
          secondaryCta={{
            text: "System Status",
            href: "https://status.nexoracloud.com",
            variant: "outline",
            icon: BookOpen,
          }}
          benefits={[
            "Verified Linux & Docker Guides",
            "Full REST API Documentation",
            "24/7 Human Engineering Support",
          ]}
          preview={<ResourcesQuickstartPreview />}
        />

        {/* ARTICLES & GUIDES DIRECTORY */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Filter Pills (Segmented style) */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10">
              {[
                { id: "all", label: "All Topics" },
                { id: "vps", label: "Cloud VPS & Linux" },
                { id: "docker", label: "Docker & Containers" },
                { id: "security", label: "Security & DDoS" },
                { id: "databases", label: "Databases" },
                { id: "hosting", label: "Web & WordPress" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "rounded px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                    selectedCategory === cat.id
                      ? "border border-border bg-foreground text-background font-semibold"
                      : "border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((art) => (
                <div
                  key={art.id}
                  className="rounded-lg border border-border bg-card p-6 shadow-xs hover:border-border/80 transition-colors flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground uppercase">
                        {art.category}
                      </span>
                      <span className="text-[11px] text-muted-foreground">{art.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {art.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border flex items-center justify-between text-xs">
                    {art.badge ? (
                      <span className="text-[11px] font-medium text-foreground">
                        {art.badge}
                      </span>
                    ) : (
                      <span className="text-[11px] text-muted-foreground">Documentation</span>
                    )}
                    <span className="font-medium text-primary flex items-center gap-1">
                      Read Guide <ArrowRight weight="bold" className="size-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12 text-muted-foreground space-y-2">
                <p className="text-sm">No articles found matching &quot;{search}&quot;.</p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("all");
                  }}
                  className="text-xs text-primary font-medium underline cursor-pointer"
                >
                  Clear search filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* COMMUNITY & SUPPORT CHANNELS */}
        <section className="py-16 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Technical Support Channels
              </h2>
              <p className="text-xs text-muted-foreground">
                Direct access to systems engineers without automated tier-1 gatekeepers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-lg border border-border bg-card p-6 text-center space-y-3">
                <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary mx-auto">
                  <ChatCircleDots weight="bold" className="size-4.5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">Developer Community</h3>
                <p className="text-xs text-muted-foreground">
                  Connect with engineers, ask configuration questions, and review community architecture guides.
                </p>
                <Button variant="outline" size="sm" className="font-medium text-xs">
                  Join Community
                </Button>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 text-center space-y-3">
                <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary mx-auto">
                  <Terminal weight="bold" className="size-4.5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">API Reference</h3>
                <p className="text-xs text-muted-foreground">
                  Complete REST API endpoints, curl examples, official SDKs, and error code specifications.
                </p>
                <Button variant="outline" size="sm" className="font-medium text-xs">
                  View API Reference
                </Button>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 text-center space-y-3">
                <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary mx-auto">
                  <ShieldCheck weight="bold" className="size-4.5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">24/7 Priority Support</h3>
                <p className="text-xs text-muted-foreground">
                  Average ticket response time under 15 minutes. Certified sysadmins ready to troubleshoot your instances.
                </p>
                <Link href="/client-dashboard" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "font-medium text-xs")}>
                  Open Support Ticket
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-muted/40 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Ready to Deploy on Nexora Cloud?
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Launch an AMD EPYC™ Cloud VPS today with dedicated resources and instant provisioning.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="/products/cloud-vps" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                Deploy Cloud VPS
              </Link>
              <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
