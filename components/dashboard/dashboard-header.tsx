"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MagnifyingGlass,
  Bell,
  Question,
  Plus,
  Terminal,
  Globe,
  CaretDown,
} from "@phosphor-icons/react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "../ui/separator";

export function DashboardHeader() {
  const [currency, setCurrency] = useState<"USD" | "INR">("INR");

  return (
    <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b border-border bg-white/95 dark:bg-card/95 px-3 sm:px-4 backdrop-blur-md">
      {/* 1. Left Section: Logo, Sidebar Trigger & Project Badge */}
      <div className="flex items-center gap-3">
        {/* Sidebar Trigger */}


        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 pr-1">
          <Image
            src="/platform-logo1.png"
            alt="Bhartiya Cloud"
            width={130}
            height={30}
            priority
            className="h-7 w-auto object-contain"
          />
        </Link>

        {/* Vertical Separator */}
        <Separator orientation="vertical" className="h-5 mx-0.5" />

        {/* Sidebar Trigger */}
        <SidebarTrigger className="size-8 rounded-md border border-border bg-card hover:bg-muted text-foreground shrink-0 cursor-pointer" />
      </div>


      {/* 3. Right Section: Controls, Currency, Status, Quick Actions & User */}
      <div className="flex items-center gap-2 sm:gap-2.5">




        {/* Web SSH Terminal */}
        <Link
          href="/dashboard/terminal"
          title="Web SSH Console"
          className="hidden md:flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <Terminal className="size-4" />
        </Link>

        {/* Notifications Icon */}
        <button
          type="button"
          title="Notifications"
          className="relative flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
        >
          <Bell className="size-4" />
          <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-primary" />
        </button>

        {/* Docs / Help */}
        <Link
          href="/dashboard/docs"
          title="Documentation"
          className="hidden sm:flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <Question className="size-4" />
        </Link>

        {/* Quick Deploy CTA */}
        <Link
          href="/dashboard/deploy"
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 transition-all active:scale-98"
        >
          <Plus weight="bold" className="size-3.5" />
          <span>Deploy</span>
        </Link>

        {/* User Pill in Topbar */}
        <div className="flex items-center gap-2 pl-2 border-l border-border ml-1">
          <div className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-neutral-900 border border-neutral-700 text-white font-semibold text-xs">
            V
          </div>
          <div className="hidden 2xl:block text-left">
            <div className="text-xs font-semibold text-foreground leading-tight truncate max-w-[120px]">
              vivekkhairnar
            </div>
            <div className="text-[10px] text-muted-foreground leading-tight truncate max-w-[120px]">
              Pro Cloud
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
