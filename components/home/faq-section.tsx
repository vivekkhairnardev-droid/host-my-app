"use client";

import React, { useState } from "react";
import { CaretDown, Question } from "@phosphor-icons/react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "Which hosting plan should I choose?",
    a: "If you are running a single business site, portfolio, or blog, start with our Web Hosting or WordPress Hosting. If you need root SSH access, custom software stacks, Docker containers, or dedicated vCPU resources, our Cloud VPS is ideal. For heavy database workloads or multi-client agencies, look at Dedicated Servers or Reseller plans.",
  },
  {
    q: "Can I migrate from another hosting provider?",
    a: "Yes! We offer 100% free assisted migrations. Our dedicated sysadmins handle moving your website files, MySQL/PostgreSQL databases, email mailboxes, and DNS records with zero downtime.",
  },
  {
    q: "Do you provide backups?",
    a: "Yes. All plans include automated snapshot backups stored offsite in separate datacenter facilities. Shared and WordPress plans feature daily snapshots with 1-click restore, while VPS instances allow on-demand snapshots and customizable backup retention policies.",
  },
  {
    q: "Do you offer VPS hosting?",
    a: "Yes! We provide both Unmanaged Cloud VPS (full root access, KVM isolation, instant scaling) and Managed VPS (where our senior DevOps team monitors server health, security patches, firewall tuning, and software configurations for you).",
  },
  {
    q: "Can I install Docker?",
    a: "Absolutely. All Cloud VPS and Dedicated instances give you bare-metal or KVM kernel root access, meaning you can run Docker, Docker Compose, Podman, and k3s/Kubernetes without any restrictions.",
  },
  {
    q: "Which operating systems are supported?",
    a: "We support all major Linux distributions including Ubuntu 22.04/24.04 LTS, Debian 11/12, AlmaLinux 8/9, Rocky Linux 8/9, CentOS Stream, and Alpine Linux. Windows Server licenses and custom ISO mounts are also fully supported.",
  },
  {
    q: "Do you provide SSL certificates?",
    a: "Yes, automated Let's Encrypt SSL certificates are provided free for unlimited domains and subdomains on all accounts, renewing automatically with zero manual effort required.",
  },
  {
    q: "Where are your servers located?",
    a: "Our infrastructure spans 7 global regions: Mumbai (India), Singapore, Frankfurt (Germany), Amsterdam (Netherlands), London (United Kingdom), Virginia (United States), and Toronto (Canada). All facilities are Tier III+ certified.",
  },
  {
    q: "Do you provide technical support?",
    a: "Yes, 24/7/365 engineering support is available via live chat, support tickets, and direct email. Our support team is composed of experienced Linux sysadmins, not scripted Tier-1 call centers.",
  },
  {
    q: "Can I upgrade my server later?",
    a: "Yes. You can vertically scale your CPU, RAM, and NVMe disk in 1-click directly from your cloud dashboard without losing any data or reconfiguring your applications.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes, we offer an unconditional 30-day money-back guarantee on all Web Hosting, WordPress Hosting, and Cloud VPS plans. If you are not satisfied for any reason, request a full refund with no questions asked.",
  },
  {
    q: "Do you support WordPress and WooCommerce?",
    a: "Yes, we offer specialized WordPress and WooCommerce hosting with server-level LiteSpeed & Redis object caching, automated security updates, staging environments, and WP-CLI pre-installed.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative py-16 lg:py-24 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Everything you need to know about our cloud infrastructure, hosting services, migration, and billing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="rounded-lg border border-border bg-card transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-foreground pr-4">
                    {faq.q}
                  </span>
                  <div className={`flex size-6 shrink-0 items-center justify-center rounded text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180 text-foreground" : ""}`}>
                    <CaretDown weight="bold" className="size-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-border/60 px-5 pb-5 pt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
