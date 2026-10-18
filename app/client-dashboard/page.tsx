"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  User,
  CreditCard,
  Receipt,
  Headset,
  ShieldCheck,
  Globe,
  Cloud,
  CheckCircle,
  Clock,
  ArrowRight,
  DownloadSimple,
  SquaresFour,
  Plus,
} from "@phosphor-icons/react";

interface ServiceItem {
  id: string;
  name: string;
  type: string;
  ip: string;
  location: string;
  renewalDate: string;
  amount: string;
  status: "active" | "pending";
}

const services: ServiceItem[] = [
  {
    id: "srv-9102",
    name: "Production API Cluster (CPX-41)",
    type: "Cloud VPS",
    ip: "193.148.248.42",
    location: "Frankfurt (FRA-01)",
    renewalDate: "Nov 15, 2026",
    amount: "$16.50/mo",
    status: "active",
  },
  {
    id: "srv-8841",
    name: "Corporate Web Portal & Mail",
    type: "NVMe Web Hosting (Plus)",
    ip: "199.195.250.88",
    location: "New York (NYC-01)",
    renewalDate: "Dec 01, 2026",
    amount: "$4.49/mo",
    status: "active",
  },
  {
    id: "srv-7230",
    name: "Database Replica Node (Postgres)",
    type: "Cloud VPS (CPX-61 Memory)",
    ip: "185.198.112.90",
    location: "London (LON-01)",
    renewalDate: "Nov 28, 2026",
    amount: "$64.00/mo",
    status: "active",
  },
];

const invoices = [
  { id: "INV-2026-0891", date: "Oct 01, 2026", amount: "$84.99", status: "Paid", method: "Visa ending in 4242" },
  { id: "INV-2026-0742", date: "Sep 01, 2026", amount: "$84.99", status: "Paid", method: "Visa ending in 4242" },
  { id: "INV-2026-0610", date: "Aug 01, 2026", amount: "$84.99", status: "Paid", method: "Visa ending in 4242" },
];

export default function ClientDashboardPage() {
  const [activeTab, setActiveTab] = useState<"services" | "billing" | "support">("services");
  const [ticketModal, setTicketModal] = useState(false);
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketSent, setTicketSent] = useState(false);

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketSent(true);
    setTimeout(() => {
      setTicketSent(false);
      setTicketModal(false);
      setTicketSubject("");
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 py-10 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Header Banner */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-md bg-muted text-primary">
                  <User weight="bold" className="size-4" />
                </span>
                <h1 className="text-xl font-bold text-foreground">Client Billing &amp; Account Portal</h1>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Account ID: <span className="font-mono text-foreground font-semibold">NX-CLIENT-9842</span> · Verified Customer
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/dashboard"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "text-xs font-medium gap-1.5")}
              >
                <SquaresFour weight="bold" className="size-3.5 text-muted-foreground" />
                <span>Server Management</span>
              </Link>
              <Button size="sm" onClick={() => setTicketModal(true)} className="text-xs font-medium gap-1.5">
                <Headset weight="bold" className="size-3.5" />
                <span>Open Ticket</span>
              </Button>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-lg border border-border bg-card p-4 space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Active Services</span>
                <Globe className="size-3.5 text-muted-foreground" />
              </div>
              <p className="text-xl font-bold text-foreground">3 Subscriptions</p>
              <p className="text-[11px] text-muted-foreground">All running normally</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4 space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Next Billing Date</span>
                <Clock className="size-3.5 text-muted-foreground" />
              </div>
              <p className="text-xl font-bold text-foreground">Nov 15, 2026</p>
              <p className="text-[11px] text-muted-foreground font-mono">$84.99 estimated</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4 space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Payment Method</span>
                <CreditCard className="size-3.5 text-muted-foreground" />
              </div>
              <p className="text-base font-bold text-foreground">Visa •••• 4242</p>
              <p className="text-[11px] text-muted-foreground">Auto-renewal enabled</p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4 space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Support Status</span>
                <ShieldCheck className="size-3.5 text-muted-foreground" />
              </div>
              <p className="text-xl font-bold text-foreground">SLA Active</p>
              <p className="text-[11px] text-muted-foreground">0 open tickets</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1 border-b border-border">
            {[
              { id: "services", label: "Active Services", icon: Cloud },
              { id: "billing", label: "Invoices & Payments", icon: Receipt },
              { id: "support", label: "Support Tickets", icon: Headset },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-2.5 text-xs font-medium border-b-2 transition-colors cursor-pointer",
                    activeTab === tab.id
                      ? "border-primary text-foreground font-semibold"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon weight="bold" className="size-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab 1: Active Services */}
          {activeTab === "services" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground">Subscribed Services</h3>
                <Link href="/pricing" className={cn(buttonVariants({ size: "sm" }), "text-xs font-medium gap-1")}>
                  <Plus weight="bold" className="size-3" />
                  <span>Order New Service</span>
                </Link>
              </div>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-border bg-muted/40 text-muted-foreground">
                        <th className="p-3 font-semibold">Service Name</th>
                        <th className="p-3 font-semibold">Type</th>
                        <th className="p-3 font-semibold">IP Address</th>
                        <th className="p-3 font-semibold">Location</th>
                        <th className="p-3 font-semibold">Next Renewal</th>
                        <th className="p-3 font-semibold">Price</th>
                        <th className="p-3 font-semibold">Status</th>
                        <th className="p-3 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {services.map((srv) => (
                        <tr key={srv.id} className="hover:bg-muted/20 transition-colors">
                          <td className="p-3 font-medium text-foreground">{srv.name}</td>
                          <td className="p-3 text-muted-foreground">{srv.type}</td>
                          <td className="p-3 font-mono text-muted-foreground">{srv.ip}</td>
                          <td className="p-3 text-muted-foreground">{srv.location}</td>
                          <td className="p-3 text-muted-foreground">{srv.renewalDate}</td>
                          <td className="p-3 font-medium text-foreground">{srv.amount}</td>
                          <td className="p-3">
                            <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-medium text-foreground">
                              Active
                            </span>
                          </td>
                          <td className="p-3 text-right">
                            <Link
                              href="/dashboard"
                              className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
                            >
                              Manage <ArrowRight weight="bold" className="size-3" />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Billing & Invoices */}
          {activeTab === "billing" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground">Billing History &amp; Receipts</h3>
                <span className="text-xs text-muted-foreground">Currency: USD</span>
              </div>

              <div className="rounded-lg border border-border bg-card overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-border bg-muted/40 text-muted-foreground">
                        <th className="p-3 font-semibold">Invoice ID</th>
                        <th className="p-3 font-semibold">Date</th>
                        <th className="p-3 font-semibold">Amount</th>
                        <th className="p-3 font-semibold">Payment Method</th>
                        <th className="p-3 font-semibold">Status</th>
                        <th className="p-3 font-semibold text-right">Receipt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {invoices.map((inv) => (
                        <tr key={inv.id} className="hover:bg-muted/20 transition-colors">
                          <td className="p-3 font-mono font-medium text-foreground">{inv.id}</td>
                          <td className="p-3 text-muted-foreground">{inv.date}</td>
                          <td className="p-3 font-medium text-foreground">{inv.amount}</td>
                          <td className="p-3 text-muted-foreground">{inv.method}</td>
                          <td className="p-3">
                            <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-medium text-foreground">
                              {inv.status}
                            </span>
                          </td>
                          <td className="p-3 text-right">
                            <button
                              onClick={() => alert(`Downloading PDF receipt for invoice ${inv.id}...`)}
                              className="text-xs font-medium text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
                            >
                              <DownloadSimple weight="bold" className="size-3.5" /> PDF
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Support */}
          {activeTab === "support" && (
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-card p-6 space-y-4 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Need Technical Assistance?</h3>
                    <p className="text-xs text-muted-foreground">
                      Our certified Linux sysadmins and network engineers are available 24/7/365.
                    </p>
                  </div>
                  <Button onClick={() => setTicketModal(true)} size="sm" className="font-medium text-xs">
                    Open New Support Ticket
                  </Button>
                </div>

                <div className="rounded-md border border-border bg-muted/20 p-4 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Average Response SLA:</span>
                    <span className="font-mono font-medium text-foreground">Under 15 minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Emergency Escalation:</span>
                    <span className="font-mono text-foreground">escalations@nexoracloud.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Security Team:</span>
                    <span className="font-mono text-foreground">security@nexoracloud.com</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal for creating support ticket */}
        {ticketModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-lg rounded-lg border border-border bg-card p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h3 className="text-sm font-bold text-foreground">Create Support Ticket</h3>
                <button
                  onClick={() => setTicketModal(false)}
                  className="text-muted-foreground hover:text-foreground text-sm cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {ticketSent ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle weight="fill" className="size-8 text-primary mx-auto" />
                  <p className="text-sm font-bold text-foreground">Ticket Successfully Created</p>
                  <p className="text-xs text-muted-foreground">An engineer has been assigned to your request.</p>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="font-medium text-foreground block mb-1">Subject</label>
                    <input
                      required
                      type="text"
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                      placeholder="e.g. Assistance installing SSL on CPX-41"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-foreground block mb-1">Related Service</label>
                    <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none">
                      {services.map((s) => (
                        <option key={s.id}>{s.name} ({s.ip})</option>
                      ))}
                      <option>General Account &amp; Billing Question</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-medium text-foreground block mb-1">Priority</label>
                    <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none">
                      <option>Normal (Routine maintenance or inquiry)</option>
                      <option>High (Degraded service or performance issue)</option>
                      <option>Emergency (Service outage)</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-medium text-foreground block mb-1">Message Description</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe the issue in detail, including any error logs or timestamps..."
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-2 border-t border-border">
                    <Button type="button" variant="outline" size="sm" onClick={() => setTicketModal(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" size="sm" className="font-medium">
                      Submit Ticket
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
