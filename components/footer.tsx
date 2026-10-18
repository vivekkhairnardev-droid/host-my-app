"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Cpu,
  Browsers,
  Terminal,
  GithubLogo,
  TwitterLogo,
  DiscordLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 text-zinc-300 border-t border-zinc-800">
      {/* Main Navigation Grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand info column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Nexora Cloud Logo"
                width={160}
                height={38}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="max-w-sm text-sm text-zinc-400 leading-relaxed">
              Enterprise-grade cloud compute, high-speed NVMe KVM virtual servers, and ultra-low latency global network routing engineered for high-scale applications.
            </p>


            {/* Social icons */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">Connect</p>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex size-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                >
                  <GithubLogo weight="fill" className="size-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="flex size-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                >
                  <TwitterLogo weight="fill" className="size-4" />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  className="flex size-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                >
                  <DiscordLogo weight="fill" className="size-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex size-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                >
                  <LinkedinLogo weight="fill" className="size-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="flex size-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                >
                  <YoutubeLogo weight="fill" className="size-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: Products */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-1.5">
              <Cpu className="size-3.5 text-primary" /> Products
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/products/cloud-vps" className="hover:text-zinc-100 transition-colors flex items-center justify-between">
                  <span>Cloud VPS</span>
                  <span className="rounded bg-primary/20 px-1.5 py-0.2 text-[10px] font-medium text-primary">Popular</span>
                </Link>
              </li>
              <li>
                <Link href="/products/dedicated-servers" className="hover:text-zinc-100 transition-colors">
                  Dedicated Servers
                </Link>
              </li>
              <li>
                <Link href="/products/web-hosting" className="hover:text-zinc-100 transition-colors">
                  Web Hosting
                </Link>
              </li>
              <li>
                <Link href="/products/app-hosting" className="hover:text-zinc-100 transition-colors">
                  App Containers
                </Link>
              </li>
              <li>
                <Link href="/products/storage" className="hover:text-zinc-100 transition-colors">
                  NVMe Block Storage
                </Link>
              </li>
              <li>
                <Link href="/products/ddos-shield" className="hover:text-zinc-100 transition-colors flex items-center gap-1.5">
                  <span>DDoS Shield</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-1.5">
              <Browsers className="size-3.5 text-primary" /> Solutions
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/solutions/developers" className="hover:text-zinc-100 transition-colors">
                  Developers & DevOps
                </Link>
              </li>
              <li>
                <Link href="/solutions/businesses" className="hover:text-zinc-100 transition-colors">
                  Enterprise Workloads
                </Link>
              </li>
              <li>
                <Link href="/solutions/agencies" className="hover:text-zinc-100 transition-colors">
                  Digital Agencies
                </Link>
              </li>
              <li>
                <Link href="/solutions/resellers" className="hover:text-zinc-100 transition-colors">
                  Hosting Resellers
                </Link>
              </li>
              <li>
                <Link href="/solutions/databases" className="hover:text-zinc-100 transition-colors">
                  High-IOPS Databases
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-compute" className="hover:text-zinc-100 transition-colors">
                  AI & GPU Clusters
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Network & Infra */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-1.5">
              <Globe className="size-3.5 text-primary" /> Network
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/locations" className="hover:text-zinc-100 transition-colors">
                  Global Datacenters
                </Link>
              </li>
              <li>
                <Link href="/speed-test" className="hover:text-zinc-100 transition-colors">
                  Looking Glass & Speed Test
                </Link>
              </li>
              <li>
                <Link href="/uptime" className="hover:text-zinc-100 transition-colors">
                  Status & SLA Metrics
                </Link>
              </li>
              <li>
                <Link href="/peering" className="hover:text-zinc-100 transition-colors">
                  BGP & Peering Policy
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-zinc-100 transition-colors">
                  ISO & SOC 2 Compliance
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-zinc-100 transition-colors">
                  100% Green Energy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Developers & Resources */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200 flex items-center gap-1.5">
              <Terminal className="size-3.5 text-primary" /> Developers
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/docs" className="hover:text-zinc-100 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api-reference" className="hover:text-zinc-100 transition-colors">
                  API & CLI Reference
                </Link>
              </li>
              <li>
                <Link href="/terraform" className="hover:text-zinc-100 transition-colors">
                  Terraform Provider
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-zinc-100 transition-colors">
                  Discord & Forum
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-zinc-100 transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-zinc-100 transition-colors">
                  Release Changelog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-xs text-zinc-400 sm:flex-row">
          <p>© 2026 NEXORA Cloud Inc. All rights reserved. Built for mission-critical infrastructure.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/legal/terms" className="hover:text-zinc-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal/privacy" className="hover:text-zinc-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/aup" className="hover:text-zinc-200 transition-colors">
              Acceptable Use Policy
            </Link>
            <Link href="/legal/security" className="hover:text-zinc-200 transition-colors">
              Security
            </Link>
            <Link href="/legal/cookies" className="hover:text-zinc-200 transition-colors">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
