"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Code,
  Terminal,
  ArrowRight,
  Copy,
  Check,
} from "@phosphor-icons/react";

const devStacks = [
  { name: "Node.js", tag: "v22 LTS", desc: "Express, Fastify & NestJS apps" },
  { name: "Next.js", tag: "App Router", desc: "Serverless edge & SSR nodes" },
  { name: "Python", tag: "v3.12", desc: "Django, FastAPI & Celery tasks" },
  { name: "PHP", tag: "v8.3", desc: "OPcache, JIT & Composer ready" },
  { name: "Laravel", tag: "v11.x", desc: "Octane, Horizon & Queue workers" },
  { name: "Docker", tag: "v26.0", desc: "Containerized compose deployments" },
  { name: "Kubernetes", tag: "k3s / k8s", desc: "Lightweight container orchestration" },
  { name: "PostgreSQL", tag: "v16.2", desc: "pgvector & connection pooling" },
  { name: "MongoDB", tag: "v7.0", desc: "Replica sets & document storage" },
  { name: "Redis", tag: "v7.2", desc: "In-memory caching & pub/sub" },
  { name: "Nginx", tag: "v1.26", desc: "Reverse proxy & HTTP/3 QUIC" },
  { name: "Apache", tag: "v2.4", desc: "mod_rewrite & .htaccess support" },
];

export function DeveloperSection() {
  const [copied, setCopied] = useState(false);

  const command = "npm install -g bhartiya-cli && bhartiya deploy --prod";

  const handleCopy = () => {
    navigator.clipboard?.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="developer-section" className="relative py-16 lg:py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Deploy your stack your way.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            From a simple WordPress site to a containerized application stack, run the technologies your team already knows with root access, Git triggers, and programmable APIs.
          </p>
        </div>

        {/* CLI Terminal Snippet */}
        <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-card p-4 shadow-xs">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="size-4 text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">~/projects/my-app</span>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded border border-border bg-muted/50 px-2.5 py-1 text-xs text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check weight="bold" className="size-3.5 text-primary" />
                  <span className="font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy weight="bold" className="size-3.5 text-muted-foreground" />
                  <span>Copy Command</span>
                </>
              )}
            </button>
          </div>
          <div className="mt-3.5 font-mono text-xs sm:text-sm text-foreground overflow-x-auto py-1">
            <span className="text-primary font-bold">$ </span>
            <span>{command}</span>
          </div>
          <div className="mt-2 text-[11px] text-muted-foreground font-mono">
            Deploy via CLI, GitHub Actions, GitLab CI or Docker Compose.
          </div>
        </div>

        {/* 12 Stacks Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {devStacks.map((stk) => (
            <div
              key={stk.name}
              className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-border/80"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-foreground">
                  {stk.name}
                </span>
                <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                  {stk.tag}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {stk.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
            nativeButton={false}
            render={<Link href="/#pricing" />}
            className="gap-2"
          >
            <span>Explore Developer Hosting</span>
            <ArrowRight weight="bold" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
