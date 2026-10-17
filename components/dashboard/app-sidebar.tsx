"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SquaresFour,
  Plus,
  HardDrives,
  Globe,
  TreeStructure,
  CreditCard,
  Headset,
  BookOpen,
  Megaphone,
  Pulse,
  ArrowSquareOut,
  Sparkle,
  Gear,
  User,
  LockKey,
  Wallet,
  Users,
  EnvelopeSimple,
  CaretRight,
  CaretDown,
  CaretUpDown,
} from "@phosphor-icons/react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarRail,
} from "@/components/ui/sidebar";

const manageItems = [
  { label: "Overview", href: "/dashboard", icon: SquaresFour },
  { label: "Deploy", href: "/dashboard/deploy", icon: Plus, iconWeight: "bold" as const },
  { label: "My Services", href: "/dashboard/services", icon: HardDrives },
  { label: "Domains", href: "/dashboard/domains", icon: Globe },
  { label: "DNS Manager", href: "/dashboard/dns", icon: TreeStructure },
  { label: "Payments", href: "/dashboard/payments", icon: CreditCard },
];

const generalItems = [
  { label: "Help Center", href: "/dashboard/help-center", icon: Headset },
  { label: "Docs", href: "/dashboard/docs", icon: BookOpen },
  { label: "What's New", href: "/dashboard/whats-new", icon: Megaphone },
  {
    label: "System Status",
    href: "https://status.nexoracloud.com",
    icon: Pulse,
    isExternal: true,
  },
  { label: "Partners", href: "/dashboard/partners", icon: Sparkle },
];

const accountSubItems = [
  { label: "Profile", href: "/dashboard/account/profile", icon: User },
  { label: "Security", href: "/dashboard/account/security", icon: LockKey },
  { label: "Credits", href: "/dashboard/account/credit", icon: Wallet },
  { label: "Team", href: "/dashboard/account/team", icon: Users },
  { label: "Notifications", href: "/dashboard/account/notifications", icon: EnvelopeSimple },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [accountOpen, setAccountOpen] = React.useState(true);

  // Check if any account sub-item is active
  const isAccountActive = accountSubItems.some((item) => pathname === item.href);

  return (
    <Sidebar
      collapsible="icon"
      className="top-14! h-[calc(100svh-3.5rem)]! border-r border-sidebar-border bg-white dark:bg-card"
      style={{ top: "3.5rem", height: "calc(100svh - 3.5rem)" }}
      {...props}
    >
      {/* Sidebar Content with Links */}
      <SidebarContent className="p-2 space-y-3 pt-3 bg-white dark:bg-card">
        {/* Manage Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground/70 px-2 py-1.5 group-data-[collapsible=icon]:hidden">
            Manage
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {manageItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.label}
                      render={<Link href={item.href} />}
                      className={`text-sm rounded-md transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      }`}
                    >
                      <Icon
                        weight={item.iconWeight || "regular"}
                        className="size-[18px] shrink-0"
                      />
                      <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* General Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground/70 px-2 py-1.5 group-data-[collapsible=icon]:hidden">
            General
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {generalItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                if (item.isExternal) {
                  return (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        tooltip={item.label}
                        render={
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                        className="text-sm rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors justify-between"
                      >
                        <Icon className="size-[18px] shrink-0" />
                        <span className="truncate group-data-[collapsible=icon]:hidden">{item.label}</span>
                        <ArrowSquareOut className="size-3.5 shrink-0 opacity-70 group-data-[collapsible=icon]:hidden ml-auto" />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.label}
                      render={<Link href={item.href} />}
                      className={`text-sm rounded-md transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      }`}
                    >
                      <Icon className="size-[18px] shrink-0" />
                      <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}

              {/* Collapsible Account Section */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip="Account"
                  isActive={isAccountActive}
                  onClick={() => setAccountOpen(!accountOpen)}
                  className="text-sm rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors justify-between w-full"
                >
                  <Gear className="size-[18px] shrink-0" />
                  <span className="group-data-[collapsible=icon]:hidden">Account</span>
                  <span className="group-data-[collapsible=icon]:hidden ml-auto">
                    {accountOpen ? (
                      <CaretDown className="size-3.5 shrink-0 opacity-70" />
                    ) : (
                      <CaretRight className="size-3.5 shrink-0 opacity-70" />
                    )}
                  </span>
                </SidebarMenuButton>

                {accountOpen && (
                  <SidebarMenuSub className="mt-1 space-y-0.5 border-l border-sidebar-border ml-5 pl-2 group-data-[collapsible=icon]:hidden">
                    {accountSubItems.map((sub) => {
                      const SubIcon = sub.icon;
                      const isSubActive = pathname === sub.href;
                      return (
                        <SidebarMenuSubItem key={sub.label}>
                          <SidebarMenuSubButton
                            isActive={isSubActive}
                            render={<Link href={sub.href} />}
                            className={`text-xs rounded-md py-1.5 transition-colors ${
                              isSubActive
                                ? "bg-primary text-primary-foreground font-semibold"
                                : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                            }`}
                          >
                            <SubIcon className="size-3.5 shrink-0" />
                            <span>{sub.label}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* 3. Sidebar Footer with User Pill */}
      <SidebarFooter className="border-t border-sidebar-border p-2 bg-white dark:bg-card group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
        <div className="flex items-center justify-between rounded-md p-2 hover:bg-sidebar-accent transition-colors cursor-pointer group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:size-9 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:mx-auto">
          <div className="flex items-center gap-2.5 min-w-0 group-data-[collapsible=icon]:gap-0 group-data-[collapsible=icon]:justify-center">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-neutral-900 border border-neutral-700 text-white font-semibold text-xs">
              V
            </div>
            <div className="min-w-0 group-data-[collapsible=icon]:hidden">
              <div className="truncate text-xs font-semibold text-foreground">
                vivekkhairnar.dev...
              </div>
              <div className="text-[10px] text-muted-foreground truncate">
                vivekkhairnar.dev@gm...
              </div>
            </div>
          </div>
          <CaretUpDown className="size-3.5 shrink-0 text-muted-foreground group-data-[collapsible=icon]:hidden" />
        </div>
      </SidebarFooter>

      {/* 4. Resizing Rail */}
      <SidebarRail />
    </Sidebar>
  );
}
