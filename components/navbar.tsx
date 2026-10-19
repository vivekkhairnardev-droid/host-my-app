"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CurrencySelector } from "@/components/currency-selector";
import { cn } from "@/lib/utils";
import {
  Cloud,
  List,
  X,
  CaretDown,
  ArrowRight,
  Globe,
  HardDrives,
  Cpu,
  Code,
  Buildings,
  Users,
  ArrowsClockwise,
  Browsers,
  ShieldCheck,
  Headset,
  BookOpen,
  SquaresFour,
  User,
} from "@phosphor-icons/react";

interface MenuItem {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string; weight?: "regular" | "bold" | "fill" }>;
  badge?: string;
}

const hostingProducts: MenuItem[] = [
  {
    title: "Web Hosting",
    description: "Fast NVMe shared hosting with automated SSL & email",
    href: "/products/web-hosting",
    icon: Globe,
  },
  {
    title: "WordPress Hosting",
    description: "Built-in caching, staging, and 1-click WP maintenance",
    href: "/products/wordpress-hosting",
    icon: Browsers,
  },
  {
    title: "Cloud VPS",
    description: "Dedicated vCPU, root SSH access & instant vertical scaling",
    href: "/products/cloud-vps",
    icon: Cloud,
    badge: "Popular",
  },
  {
    title: "Managed VPS",
    description: "Enterprise performance with 24/7 proactive sysadmin care",
    href: "/products/managed-vps",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Servers",
    description: "Bare-metal high-density hardware with raw IOPS throughput",
    href: "/products/dedicated-servers",
    icon: HardDrives,
  },
  {
    title: "Reseller Hosting",
    description: "White-label cPanel/WHMCS infrastructure for digital agencies",
    href: "/products/reseller-hosting",
    icon: ArrowsClockwise,
  },
];

const solutions: MenuItem[] = [
  {
    title: "Developers & DevOps",
    description: "Instant Git deployments, CLI toolchains, and REST APIs",
    href: "/solutions/developers",
    icon: Code,
  },
  {
    title: "Businesses & Startups",
    description: "99.99% SLA, SOC 2 compliance & high-availability clusters",
    href: "/solutions/businesses",
    icon: Buildings,
  },
  {
    title: "Agencies",
    description: "Multi-tenant client accounts, staging environments & white-label",
    href: "/solutions/agencies",
    icon: Users,
  },
  {
    title: "Infrastructure Migration",
    description: "Zero-downtime assisted migration by cloud engineers",
    href: "/solutions/migration",
    icon: ArrowsClockwise,
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<"hosting" | "solutions" | "dashboard" | null>(null);
  const [mobileExpanded, setMobileExpanded] = React.useState<Record<string, boolean>>({
    hosting: false,
    solutions: false,
  });
  const [scrolled, setScrolled] = React.useState(false);
  const navRef = React.useRef<HTMLElement>(null);

  // Close dropdown on click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update navbar on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu: "hosting" | "solutions" | "dashboard") => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileSection = (key: string) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${scrolled
        ? "border-b border-border bg-background/90 shadow-sm shadow-slate-950/5 backdrop-blur-md"
        : "border-b border-border/60 bg-background/70 backdrop-blur-sm"
        }`}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            className="group flex items-center transition-transform hover:opacity-95"
            onClick={() => {
              setActiveDropdown(null);
              setMobileMenuOpen(false);
            }}
          >
            <Image
              src="/platform-logo1.png"
              alt="Bhartiya Cloud logo"
              width={160}
              height={38}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links (Centered) */}
        <nav className="hidden items-center gap-1 lg:flex absolute left-1/2 -translate-x-1/2">
          {/* Hosting Dropdown Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("hosting")}
              onMouseEnter={() => setActiveDropdown("hosting")}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
                activeDropdown === "hosting"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              )}
              aria-expanded={activeDropdown === "hosting"}
            >
              <span>Hosting</span>
              <CaretDown
                weight="bold"
                className={cn(
                  "size-3.5 transition-transform text-muted-foreground",
                  activeDropdown === "hosting" && "rotate-180 text-primary"
                )}
              />
            </button>

            {/* Hosting Dropdown Panel */}
            {activeDropdown === "hosting" && (
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full left-0 mt-2 w-96 rounded-md border border-border bg-popover p-2 text-popover-foreground shadow-md animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="grid grid-cols-1 gap-1">
                  {hostingProducts.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3 rounded-md p-2.5 transition-colors hover:bg-muted/70"
                      >
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                          <Icon weight="bold" className="size-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground line-clamp-1">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>


          {/* Solutions Dropdown Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown("solutions")}
              onMouseEnter={() => setActiveDropdown("solutions")}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
                activeDropdown === "solutions"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              )}
              aria-expanded={activeDropdown === "solutions"}
            >
              <span>Solutions</span>
              <CaretDown
                weight="bold"
                className={cn(
                  "size-3.5 transition-transform text-muted-foreground",
                  activeDropdown === "solutions" && "rotate-180 text-primary"
                )}
              />
            </button>

            {/* Solutions Dropdown Panel */}
            {activeDropdown === "solutions" && (
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute top-full left-0 mt-2 w-96 rounded-md border border-border bg-popover p-2 text-popover-foreground shadow-md animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="grid grid-cols-1 gap-1">
                  {solutions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3 rounded-md p-2.5 transition-colors hover:bg-muted/70"
                      >
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                          <Icon weight="bold" className="size-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-muted-foreground line-clamp-1">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Locations */}
          <Link
            href="/locations"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
          >
            Locations
          </Link>

          {/* Resources */}
          <Link
            href="/resources"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
          >
            Resources
          </Link>

          {/* Pricing */}
          <Link
            href="/pricing"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>

        {/* Right Desktop CTA Button & Theme Toggle & Currency Selector */}
        <div className="hidden items-center gap-2 lg:flex shrink-0">
          <CurrencySelector />
          <ThemeToggle />

          {/* Dashboard Dropdown */}
          <div className="relative">
            <Button
              size="sm"
              onClick={() => toggleDropdown("dashboard")}
              className="group gap-1.5 shadow-xs cursor-pointer"
              aria-expanded={activeDropdown === "dashboard"}
            >
              <SquaresFour weight="bold" className="size-4" />
              <span>Dashboard</span>
              <CaretDown
                weight="bold"
                className={cn(
                  "size-3.5 transition-transform",
                  activeDropdown === "dashboard" && "rotate-180"
                )}
              />
            </Button>

            {/* Dashboard Dropdown Panel */}
            {activeDropdown === "dashboard" && (
              <div
                className="absolute top-full right-0 mt-2 w-80 rounded-md border border-border bg-popover p-2 text-popover-foreground shadow-md animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <div className="grid grid-cols-1 gap-1">
                  {/* Active Link: Dashboard */}
                  <Link
                    href="/dashboard"
                    onClick={() => setActiveDropdown(null)}
                    className="group flex items-start gap-3 rounded-md p-2.5 transition-colors hover:bg-muted/70"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors">
                      <SquaresFour weight="bold" className="size-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          Dashboard
                        </span>
                        <ArrowRight weight="bold" className="size-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-xs text-muted-foreground line-clamp-1">
                        Cloud servers & infrastructure
                      </div>
                    </div>
                  </Link>

                  {/* Active Link: Client Dashboard */}
                  <Link
                    href="/client-dashboard"
                    onClick={() => setActiveDropdown(null)}
                    className="group flex items-start gap-3 rounded-md p-2.5 transition-colors hover:bg-muted/70"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                      <User weight="bold" className="size-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          Client Dashboard
                        </span>
                        <ArrowRight weight="bold" className="size-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-xs text-muted-foreground line-clamp-1">
                        Billing & client portal
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="size-9 rounded-md border border-border bg-card/70 text-foreground hover:bg-muted"
          >
            {mobileMenuOpen ? (
              <X weight="bold" className="size-5" />
            ) : (
              <List weight="bold" className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-card/98 px-4 pt-2 pb-6 backdrop-blur-md lg:hidden animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {/* Mobile Hosting Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileSection("hosting")}
                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-semibold text-foreground hover:bg-muted cursor-pointer"
              >
                <span>Hosting</span>
                <CaretDown
                  weight="bold"
                  className={cn(
                    "size-4 text-muted-foreground transition-transform",
                    mobileExpanded.hosting && "rotate-180 text-primary"
                  )}
                />
              </button>

              {mobileExpanded.hosting && (
                <div className="ml-2 flex flex-col space-y-1 border-l-2 border-border/80 pl-3 py-1">
                  {hostingProducts.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-md px-2 py-2 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/products/cloud-vps"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Cloud VPS
            </Link>

            <Link
              href="/products/dedicated-servers"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Dedicated
            </Link>

            {/* Mobile Solutions Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileSection("solutions")}
                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-semibold text-foreground hover:bg-muted cursor-pointer"
              >
                <span>Solutions</span>
                <CaretDown
                  weight="bold"
                  className={cn(
                    "size-4 text-muted-foreground transition-transform",
                    mobileExpanded.solutions && "rotate-180 text-primary"
                  )}
                />
              </button>

              {mobileExpanded.solutions && (
                <div className="ml-2 flex flex-col space-y-1 border-l-2 border-border/80 pl-3 py-1">
                  {solutions.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-md px-2 py-2 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/locations"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Locations
            </Link>

            <Link
              href="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Resources
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Pricing
            </Link>

            {/* Mobile Currency & Theme Controls */}
            <div className="pt-3 mt-3 border-t border-border/80 flex items-center justify-between px-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Currency</span>
              <CurrencySelector />
            </div>

            {/* Mobile Action Buttons: Dashboard & Client Dashboard */}
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90"
              >
                <div className="flex items-center gap-2">
                  <SquaresFour weight="bold" className="size-4" />
                  <span>Dashboard</span>
                </div>
                <ArrowRight weight="bold" className="size-3.5" />
              </Link>

              <Link
                href="/client-dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                <div className="flex items-center gap-2">
                  <User weight="bold" className="size-4 text-primary" />
                  <span>Client Dashboard</span>
                </div>
                <ArrowRight weight="bold" className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
