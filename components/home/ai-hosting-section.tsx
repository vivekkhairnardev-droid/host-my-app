"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sparkle,
  PaintBrush,
  CheckCircle,
  ArrowsClockwise,
} from "@phosphor-icons/react";

export function AiHostingSection() {
  const [prompt, setPrompt] = useState(
    "A clean, modern portfolio website for a technical agency with case studies, infrastructure specifications, and customer inquiry booking."
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [published, setPublished] = useState(false);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setPublished(true);
      setTimeout(() => setPublished(false), 4000);
    }, 1500);
  };

  return (
    <section className="relative py-16 lg:py-24 border-t border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Side: Copy & Form */}
          <div className="lg:col-span-5 space-y-5 text-left">

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              From idea to live website, faster.
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              Describe your website, generate the structure, customize it visually, and publish it directly to your high-speed NEXORA hosting account with zero code hurdles.
            </p>

            <form onSubmit={handleSimulate} className="space-y-3 pt-2">
              <div className="rounded-md border border-border bg-card p-3 shadow-xs">
                <label htmlFor="ai-prompt-input" className="text-[11px] font-semibold text-muted-foreground uppercase px-1">
                  Site Concept Prompt
                </label>
                <textarea
                  id="ai-prompt-input"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={3}
                  className="w-full resize-none border-0 bg-transparent px-1 pt-1.5 text-xs text-foreground focus:outline-none"
                  placeholder="Describe your website concept..."
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  type="submit"
                  disabled={isGenerating}
                  className="gap-2"
                >
                  {isGenerating ? (
                    <>
                      <ArrowsClockwise className="size-4 animate-spin" />
                      <span>Generating Preview...</span>
                    </>
                  ) : (
                    <>
                      <Sparkle weight="fill" className="size-4" />
                      <span>Generate Preview</span>
                    </>
                  )}
                </Button>
              </div>

              {published && (
                <p className="text-xs font-medium text-foreground flex items-center gap-1.5 pt-1 animate-fadeIn">
                  <CheckCircle weight="fill" className="size-4 text-primary" />
                  <span>Preview ready! Published to temporary staging environment.</span>
                </p>
              )}
            </form>
          </div>

          {/* Right Side: Website Builder UI Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-border bg-card p-5 shadow-xs">
              {/* Top toolbar */}
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">nexora-studio // live-canvas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded border border-border bg-muted px-2 py-0.5 text-[10px] text-muted-foreground font-mono">
                    Viewport: Desktop 1080p
                  </span>
                </div>
              </div>

              {/* Builder Controls Bar */}
              <div className="mt-3 flex items-center justify-between rounded-md bg-muted/40 p-2 text-xs border border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <PaintBrush className="size-4 text-primary" />
                  <span>Theme: System Default</span>
                  <span>•</span>
                  <span>Font: Inter Sans</span>
                </div>
                <span className="rounded bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                  1-Click Publish
                </span>
              </div>

              {/* Generated Website Canvas Preview */}
              <div className="mt-3.5 rounded-md border border-border bg-background p-6">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-bold text-foreground text-sm tracking-tight">ALEX R. · DESIGN & ENGINEERING</span>
                  <div className="flex gap-3 text-xs text-muted-foreground">
                    <span>Work</span>
                    <span>About</span>
                    <span>Contact</span>
                  </div>
                </div>

                <div className="py-6 text-center space-y-2">
                  <span className="rounded border border-border bg-muted px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                    Generated Structure
                  </span>
                  <h4 className="text-lg font-bold text-foreground">
                    Digital products engineered for high-growth tech companies.
                  </h4>
                  <p className="text-xs text-muted-foreground max-w-md mx-auto">
                    Full-stack designer building resilient web experiences with modern cloud primitives.
                  </p>
                </div>

                {/* Simulated generated project cards */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-md border border-border bg-card p-3 text-left">
                    <span className="text-xs font-bold text-foreground">Fintech Mobile App</span>
                    <p className="text-[10px] text-muted-foreground">Design System & React Native</p>
                  </div>
                  <div className="rounded-md border border-border bg-card p-3 text-left">
                    <span className="text-xs font-bold text-foreground">Cloud Metrics Dashboard</span>
                    <p className="text-[10px] text-muted-foreground">Next.js & Tailwind CSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
