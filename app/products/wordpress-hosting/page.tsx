"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InnerHero } from "@/components/inner-hero";
import { HostingPlanPreview } from "@/components/hero-previews/hosting-plan-preview";
import {
  Browsers,
  Lightning,
  ShieldCheck,
  Check,
  ArrowRight,
  Database,
  ArrowsClockwise,
  Rocket,
  LockKey,
  Terminal,
  Gear,
  CaretDown,
  CheckCircle,
} from "@phosphor-icons/react";

interface WPPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  sites: string;
  visits: string;
  storage: string;
  features: string[];
}

const wpPlans: WPPlan[] = [
  {
    id: "wp-spark",
    name: "WP Core",
    tagline: "Essential caching & compute for personal WordPress sites and blogs",
    monthlyPrice: 5.99,
    annualMonthlyPrice: 3.99,
    sites: "1 WordPress Site",
    visits: "~30,000 monthly visits",
    storage: "30 GB Gen4 NVMe",
    features: [
      "1 Managed WordPress Instance",
      "30 GB Gen4 NVMe Storage",
      "LiteSpeed LSCache Module",
      "Free Cloudflare CDN Integration",
      "Automated Daily Cloud Backups (30 days)",
      "Free AutoSSL Certificates",
      "1-Click WordPress Staging Sandbox",
      "WP-CLI & Secure SSH Access",
    ],
  },
  {
    id: "wp-turbo",
    name: "WP Pro",
    tagline: "High-performance compute for WooCommerce stores and client websites",
    badge: "Recommended",
    isPopular: true,
    monthlyPrice: 11.99,
    annualMonthlyPrice: 7.99,
    sites: "5 WordPress Sites",
    visits: "~120,000 monthly visits",
    storage: "90 GB Gen4 NVMe",
    features: [
      "Up to 5 WordPress Sites",
      "90 GB Enterprise NVMe SSD",
      "Dedicated Redis Object Cache (In-Memory)",
      "WooCommerce Performance Tuning",
      "Automated Safe Plugin Updates with Rollback",
      "Push-to-Production Staging Tool",
      "Free 1-Year Domain Registration",
      "24/7 Priority WordPress Engineering Support",
      "Free Assisted Site Migration",
    ],
  },
  {
    id: "wp-enterprise",
    name: "WP Enterprise",
    tagline: "Dedicated CPU resources for high-concurrency stores and publishers",
    monthlyPrice: 24.99,
    annualMonthlyPrice: 17.99,
    sites: "Unlimited Sites",
    visits: "~500,000+ monthly visits",
    storage: "250 GB Gen4 NVMe",
    features: [
      "Unlimited WordPress Sites",
      "250 GB Pure Enterprise NVMe Array",
      "Dedicated 6 vCPU & 8 GB PHP Memory",
      "Imunify360 Web Application Firewall",
      "Hourly Snapshots for Sales Events",
      "Dedicated Redis & Memcached Instances",
      "Custom WP-CLI Deployment Pipelines",
      "Dedicated Technical Account Manager",
    ],
  },
];

const wpFeatures = [
  {
    icon: Lightning,
    title: "Server-Level LiteSpeed Caching",
    desc: "Bypasses standard PHP execution for static assets and cached HTML, lowering TTFB and reducing server resource consumption under traffic spikes.",
  },
  {
    icon: Browsers,
    title: "1-Click Staging & Cloning",
    desc: "Clone your production site to a protected staging environment with one click. Test new plugins, theme updates, and PHP versions before deploying live.",
  },
  {
    icon: Gear,
    title: "Automated Core & Plugin Updates",
    desc: "Automated patch management ensures security vulnerabilities in core WordPress files and popular plugins are resolved promptly.",
  },
  {
    icon: Database,
    title: "In-Memory Redis Object Cache",
    desc: "Stores recurring MySQL database queries in fast DDR5 memory, significantly improving page load speeds on dynamic WooCommerce catalog pages.",
  },
  {
    icon: ShieldCheck,
    title: "Proactive Security Shield",
    desc: "Always-on Web Application Firewall (WAF) blocking brute-force login attempts, XML-RPC exploits, and malicious scrapers at the edge.",
  },
  {
    icon: Terminal,
    title: "Developer Tools & WP-CLI",
    desc: "Full SSH terminal access, Composer, Git deployment webhooks, and official WP-CLI pre-installed on every account.",
  },
];

const faqs = [
  {
    q: "How does Nexora Managed WordPress differ from generic shared hosting?",
    a: "Our WordPress platform is custom-configured specifically for WordPress and WooCommerce execution. We provide server-side LiteSpeed caching, Redis object cache, automated staging environments, and WordPress-specific firewall rules that prevent common CMS vulnerabilities.",
  },
  {
    q: "Can you migrate my existing WordPress site for free?",
    a: "Yes. Our engineering team transfers your complete WordPress website, uploads, database, and configurations with zero downtime. We verify the staging copy before completing DNS changes.",
  },
  {
    q: "Does Nexora support WooCommerce stores?",
    a: "Yes. Our WP Pro and WP Enterprise plans are tuned specifically for WooCommerce, featuring generous PHP worker allocations, high memory limits (up to 1024MB), and Redis object caching.",
  },
  {
    q: "Are daily backups included?",
    a: "Yes. Automated daily backups with 30-day retention are included on all plans. You can also generate on-demand manual snapshots prior to making major site changes.",
  },
];

export default function WordPressHostingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* UNIFIED INNER HERO */}
        <InnerHero
          title="Optimized WordPress Hosting"
          titleHighlight="with Server-Level Caching."
          description="Server-side LiteSpeed and Redis caching, 1-click staging environments, and automated WordPress core updates. Engineered to eliminate slow loading times on high-traffic sites and WooCommerce stores."
          primaryCta={{
            text: "View WordPress Plans",
            href: "#plans",
            icon: ArrowRight,
          }}
          secondaryCta={{
            text: "Explore Managed Features",
            href: "#features",
            variant: "outline",
            icon: Lightning,
          }}
          benefits={[
            "LiteSpeed & Redis Caching",
            "1-Click Staging & Cloning",
            "Automated WordPress Updates",
          ]}
          preview={
            <HostingPlanPreview
              planName="WordPress Pro"
              tagline="Optimized for WooCommerce stores & dynamic blogs"
              price="$4.99"
              period="/ month"
              badge="LSCache Ready"
              specs={[
                { label: "PHP Memory", value: "1024 MB" },
                { label: "Cache Engine", value: "Redis + LSWS" },
                { label: "Staging Clone", value: "1-Click" },
                { label: "Storage", value: "75 GB NVMe" },
              ]}
              features={[
                "Server-level LiteSpeed page caching",
                "Redis object caching pre-configured",
                "Automatic WordPress core & plugin patches",
                "Free white-glove site migration included",
              ]}
              ctaLink="#plans"
              ctaText="View All Plans"
            />
          }
        />

        {/* PRICING PLANS */}
        <section id="plans" className="py-16 sm:py-20 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                Managed WordPress Plans &amp; Pricing
              </h2>
              <p className="text-sm text-muted-foreground">
                All plans include free migration, daily backups, and Gen4 NVMe storage.
              </p>

              {/* Billing Toggle (Segmented control) */}
              <div className="pt-2 inline-flex items-center rounded-md border border-border bg-muted p-1">
                <button
                  type="button"
                  onClick={() => setIsAnnual(false)}
                  className={cn(
                    "rounded px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                    !isAnnual ? "bg-background text-foreground shadow-xs font-semibold" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Monthly Billing
                </button>
                <button
                  type="button"
                  onClick={() => setIsAnnual(true)}
                  className={cn(
                    "flex items-center gap-1.5 rounded px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer",
                    isAnnual ? "bg-background text-foreground shadow-xs font-semibold" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span>Annual Billing</span>
                  <span className="rounded bg-primary/10 px-1.5 py-0.2 text-[10px] font-semibold text-primary">
                    Save 33%
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {wpPlans.map((plan) => {
                const price = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;
                return (
                  <div
                    key={plan.id}
                    className={cn(
                      "relative flex flex-col rounded-lg border bg-card p-6 shadow-xs transition-colors",
                      plan.isPopular ? "border-primary" : "border-border hover:border-border/80"
                    )}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                        {plan.badge}
                      </div>
                    )}

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                      <p className="text-xs text-muted-foreground min-h-[32px]">{plan.tagline}</p>
                    </div>

                    <div className="my-5 border-y border-border py-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                          ${price.toFixed(2)}
                        </span>
                        <span className="text-xs text-muted-foreground">/ month</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-1 font-mono">
                        {isAnnual ? `Billed $${(price * 12).toFixed(2)} annually` : "Billed month-to-month"}
                      </p>
                    </div>

                    <div className="space-y-2 mb-6 text-xs">
                      <div className="flex justify-between py-1 border-b border-border/50">
                        <span className="text-muted-foreground">Websites</span>
                        <span className="font-semibold text-foreground">{plan.sites}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border/50">
                        <span className="text-muted-foreground">Traffic</span>
                        <span className="font-semibold text-foreground">{plan.visits}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-border/50">
                        <span className="text-muted-foreground">NVMe Storage</span>
                        <span className="font-semibold text-foreground">{plan.storage}</span>
                      </div>
                    </div>

                    <ul className="flex-1 space-y-2 text-xs text-muted-foreground mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check weight="bold" className="size-3.5 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.isPopular ? "default" : "outline"}
                      className="w-full font-medium"
                    >
                      <span>Deploy {plan.name}</span>
                      <ArrowRight weight="bold" className="ml-1.5 size-3.5" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Built for Scalable WordPress Operations
              </h2>
              <p className="text-sm text-muted-foreground">
                Engineered to maintain uptime, protect code integrity, and streamline deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {wpFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="rounded-lg border border-border bg-card p-6 space-y-2.5">
                    <div className="flex size-9 items-center justify-center rounded-md bg-muted text-primary">
                      <Icon weight="bold" className="size-4.5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{feat.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="py-16 sm:py-20 bg-muted/20 border-b border-border">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2 mb-10">
              <h2 className="text-2xl font-bold text-foreground tracking-tight sm:text-3xl">
                WordPress Hosting FAQ
              </h2>
              <p className="text-sm text-muted-foreground">
                Frequently asked questions regarding our managed WordPress platform.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-lg border border-border bg-card overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-4 text-left text-sm font-semibold text-foreground cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <CaretDown
                        weight="bold"
                        className={cn("size-4 text-muted-foreground transition-transform", isOpen && "rotate-180 text-primary")}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-muted/40 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Accelerate Your WordPress Website Today
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Migrate your existing WordPress site with zero downtime. Assisted by our cloud engineering team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a href="#plans" className={cn(buttonVariants({ size: "default" }), "font-medium shadow-xs")}>
                Deploy WordPress
              </a>
              <Link href="/solutions/migration" className={cn(buttonVariants({ variant: "outline", size: "default" }), "font-medium")}>
                Schedule Free Migration
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
