"use client";

import type * as React from "react";
import {
  BarChart3,
  CreditCard,
  FileText,
  Home,
  Package,
  Repeat,
  Settings,
  Users,
  HelpCircle,
  AlertTriangle,
  ChevronUp,
  ChevronDown,
  User2,
  LogOut,
  Sun,
  Moon,
  Monitor,
  Bell,
  Plus,
  Building2,
  DollarSign,
  TrendingUp,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useStore } from "@/lib/store";
import { useTheme } from "next-themes";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

// Main navigation items
const data = {
  navMain: [
    { title: "Dashboard", url: "/dashboard", icon: Home, isActive: true },
    {
      title: "Invoices",
      url: "/invoices",
      icon: FileText,
      badge: "12",
      items: [
        { title: "All Invoices", url: "/invoices", icon: FileText },
        { title: "Templates", url: "/templates", icon: Building2 },
        {
          title: "Drafts",
          url: "/invoices/drafts",
          icon: FileText,
          badge: "3",
        },
      ],
    },
    { title: "Products", url: "/products", icon: Package },
    {
      title: "Payments",
      url: "/payments",
      icon: CreditCard,
      badge: "5",
      items: [
        { title: "All Payments", url: "/payments", icon: CreditCard },
        { title: "Pending", url: "/payments/pending", icon: Clock, badge: "5" },
        {
          title: "Overdue",
          url: "/payments/overdue",
          icon: AlertTriangle,
          badge: "2",
        },
      ],
    },
    { title: "Recurring", url: "/recurring", icon: Repeat },
    {
      title: "Analytics",
      url: "/analytics",
      icon: BarChart3,
      items: [
        { title: "Overview", url: "/analytics", icon: TrendingUp },
        { title: "Revenue", url: "/analytics/revenue", icon: DollarSign },
        { title: "Reports", url: "/analytics/reports", icon: BarChart3 },
      ],
    },
  ],
  navSecondary: [
    { title: "Settings", url: "/dashboard/settings", icon: Settings },
    { title: "Help & Support", url: "/dashboard/support", icon: HelpCircle },
    { title: "Report Problem", url: "/dashboard/report", icon: AlertTriangle },
  ],
  quickActions: [
    { title: "New Invoice", url: "/dashboard/invoice/create", icon: Plus },
    { title: "Add Customer", url: "/dashboard/customers/create", icon: Users },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { user, language, logout, notifications } = useStore();
  const { theme, setTheme } = useTheme();

  const unreadCount = notifications?.list?.filter((n) => !n.read).length || 0;

  return (
    <Sidebar collapsible="icon" className="border-r" {...props}>
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              className="hover:bg-sidebar-accent"
            >
              <Link href="/dashboard">
                <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-sm">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="grid flex-1 text-left text-base leading-tight">
                  <span className="truncate font-semibold text-sidebar-foreground">
                    InvoicePro
                  </span>
                  <span className="truncate text-sm text-sidebar-foreground/70">
                    {language === "en"
                      ? "Professional Invoicing"
                      : "পেশাদার ইনভয়েসিং"}
                  </span>
                </div>
                {unreadCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="ml-auto h-6 w-6 p-0 text-sm"
                  >
                    {unreadCount}
                  </Badge>
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="gap-0">
        {/* Quick Actions */}
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel className="text-sm font-medium text-sidebar-foreground/70">
            {language === "en" ? "Quick Actions" : "দ্রুত কর্ম"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.quickActions.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="sm" className="h-9">
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="group-data-[collapsible=icon]:hidden" />

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium text-sidebar-foreground/70">
            {language === "en" ? "Main Menu" : "প্রধান মেনু"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.title}
                        isActive={pathname === item.url}
                        className={cn(
                          "w-full justify-start",
                          pathname === item.url &&
                            "bg-sidebar-accent text-sidebar-accent-foreground"
                        )}
                        asChild={!item.items}
                      >
                        {item.items ? (
                          <div className="flex w-full items-center text-base">
                            <item.icon className="h-5 w-5" />
                            <span className="flex-1 ml-2">{item.title}</span>
                            {item.badge && (
                              <Badge
                                variant="secondary"
                                className="ml-auto h-6 px-2 text-sm"
                              >
                                {item.badge}
                              </Badge>
                            )}
                            <ChevronDown className="ml-1 h-5 w-5 transition-transform duration-200" />
                          </div>
                        ) : (
                          <Link
                            href={item.url}
                            className="flex w-full items-center text-base"
                          >
                            <item.icon className="h-5 w-5" />
                            <span className="flex-1 ml-2">{item.title}</span>
                          </Link>
                        )}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {item.items && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={pathname === subItem.url}
                              >
                                <Link
                                  href={subItem.url}
                                  className="flex items-center text-sm"
                                >
                                  {subItem.icon && (
                                    <subItem.icon className="h-4 w-4 mr-2" />
                                  )}
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Secondary Navigation */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                  >
                    <Link
                      href={item.url}
                      className="text-base flex items-center"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="ml-2">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
