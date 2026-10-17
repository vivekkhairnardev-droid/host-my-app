"use client";

import React from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true} className="flex flex-col min-h-svh w-full">
      {/* 1. Full-width Topbar at the very top */}
      <DashboardHeader />

      {/* 2. Main Area below Topbar: Sidebar on left + Content on right */}
      <div className="flex flex-1 w-full min-h-0 relative bg-muted/40 dark:bg-background">
        <AppSidebar />
        <SidebarInset className="min-w-0 flex-1 bg-muted/40 dark:bg-background">
          <div className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 min-h-full">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
