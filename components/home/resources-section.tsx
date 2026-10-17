"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock, CalendarBlank } from "@phosphor-icons/react";

const articles = [
  {
    category: "Guides",
    title: "How to Optimize WordPress & WooCommerce for Sub-300ms TTFB on NVMe",
    excerpt: "A deep dive into server-level Redis object caching, PHP OPcache tuning, and edge page cache configuration for high-traffic stores.",
    readTime: "7 min read",
    date: "May 24, 2026",
    link: "/docs/wordpress-performance-guide",
  },
  {
    category: "Tutorials",
    title: "Deploying Docker Containers with Zero-Downtime via Nexora CLI & Git",
    excerpt: "Step-by-step guide to setting up automated push-to-deploy pipelines with SSL issuance and reverse proxy routing on modern KVM instances.",
    readTime: "11 min read",
    date: "Jun 12, 2026",
    link: "/docs/docker-git-deploy",
  },
  {
    category: "Engineering Blog",
    title: "Mitigating 3.2 Tbps Carpet-Bombing DDoS Attacks at the Network Edge",
    excerpt: "Inside our engineering team's approach to inline BGP flowspec filtering, eBPF packet inspection, and real-time Anycast scrubbing.",
    readTime: "9 min read",
    date: "Jul 03, 2026",
    link: "/blog/ddos-mitigation-architecture",
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="relative py-16 lg:py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Learn, build, and scale.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Practical technical tutorials, architecture benchmarks, and best practices curated by senior cloud infrastructure engineers.
          </p>
        </div>

        {/* 3 Categories / Articles Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((art) => (
            <article
              key={art.title}
              className="flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-xs transition-colors hover:border-border/80"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-foreground">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Clock className="size-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="mt-4 text-base font-bold text-foreground leading-snug">
                  <Link href={art.link} className="hover:text-primary transition-colors">
                    {art.title}
                  </Link>
                </h3>

                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CalendarBlank className="size-3.5" />
                  <span>{art.date}</span>
                </span>

                <Link
                  href={art.link}
                  className="flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight weight="bold" className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
