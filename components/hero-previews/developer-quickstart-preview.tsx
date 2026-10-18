"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal, Copy, Check, ArrowRight, Code } from "@phosphor-icons/react";

const codeSnippets = {
  cli: `# Install Nexora CLI & deploy instance in under 30s
curl -fsSL https://get.nexora.cloud/cli.sh | sh
nexora auth login --token $NEXORA_API_KEY
nexora vps create --plan cpx41 --region fra --os ubuntu-24.04`,

  terraform: `# Terraform provider definition
terraform {
  required_providers {
    nexora = { source = "nexora/cloud", version = "~> 2.4" }
  }
}
resource "nexora_vps" "api_node" {
  name   = "api-cluster-01"
  plan   = "cpx41"
  region = "fra"
  os     = "ubuntu-24.04"
}`,

  curl: `# Deploy programmatically via REST API
curl -X POST https://api.nexora.cloud/v1/servers \\
  -H "Authorization: Bearer $NEXORA_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"plan":"cpx41","region":"fra","os":"ubuntu-24.04"}'`,
};

export function DeveloperQuickstartPreview() {
  const [activeTab, setActiveTab] = useState<"cli" | "terraform" | "curl">("cli");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-lg rounded-lg border border-border bg-card p-6 shadow-xs">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="size-4 text-primary" />
          <span className="text-xs font-semibold text-foreground">Developer Quickstart</span>
        </div>
        <span className="rounded bg-primary/10 px-2 py-0.5 text-[11px] font-mono font-medium text-primary">
          v1 REST API &amp; SDK
        </span>
      </div>

      {/* Tabs */}
      <div className="mt-3 flex items-center justify-between border-b border-border/60 pb-2">
        <div className="flex gap-1.5">
          {(["cli", "terraform", "curl"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded px-2.5 py-1 text-xs font-medium uppercase font-mono transition-colors cursor-pointer ${
                activeTab === tab
                  ? "bg-muted text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check weight="bold" className="size-3 text-primary" />
              <span className="text-primary">Copied</span>
            </>
          ) : (
            <>
              <Copy className="size-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code box */}
      <div className="mt-3 rounded-md bg-muted/40 p-3.5 font-mono text-xs text-foreground/90 overflow-x-auto border border-border">
        <pre className="leading-relaxed whitespace-pre font-mono">
          {codeSnippets[activeTab]}
        </pre>
      </div>

      {/* Footer Info */}
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs">
        <div className="text-[11px] text-muted-foreground">
          SDKs available in Go, Python, Node.js &amp; Rust
        </div>

        <Link
          href="/resources"
          className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
        >
          <span>API Docs</span>
          <ArrowRight weight="bold" className="size-3" />
        </Link>
      </div>
    </div>
  );
}
