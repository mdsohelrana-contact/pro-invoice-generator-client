"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  Users,
  Package,
  CreditCard,
  BarChart3,
  RefreshCw,
  Settings,
  Bell,
  Menu,
  X,
  Crown,
  HelpCircle,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";
import { selectCurrentUser } from "@/store/slices/userSlice";

const sidebarItems = [
  {
    title: "Dashboard",
    titleBn: "ড্যাশবোর্ড",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Invoices",
    titleBn: "ইনভয়েস",
    href: "/dashboard/invoice",
    icon: FileText,
    badge: "new",
  },
  {
    title: "Customers",
    titleBn: "গ্রাহক",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Products",
    titleBn: "পণ্য",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    title: "Analytics",
    titleBn: "বিশ্লেষণ",
    href: "/dashboard/analytics",
    icon: BarChart3,
    premium: true,
  },
  {
    title: "Recurring",
    titleBn: "পুনরাবৃত্ত",
    href: "/dashboard/recurring",
    icon: RefreshCw,
    premium: true,
  },
  {
    title: "Templates",
    titleBn: "টেমপ্লেট",
    href: "/templates",
    icon: FileText,
  },
  {
    title: "Notifications",
    titleBn: "বিজ্ঞপ্তি",
    href: "/notifications",
    icon: Bell,
    badge: "3",
  },
  {
    title: "Settings",
    titleBn: "সেটিংস",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

const supportItems = [
  {
    title: "Help Center",
    titleBn: "সাহায্য কেন্দ্র",
    href: "/dashboard/support",
    icon: HelpCircle,
  },
  {
    title: "Problem Report",
    titleBn: "সমস্যা রিপোর্ট",
    href: "/dashboard/report",
    icon: MessageSquare,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const language = useSelector(selectLanguage);
  const user = useSelector(selectCurrentUser);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobileOpen(true);
    }

    const handleResize = () => {
      // if user resize to desktop, always close mobile sidebar
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div
        className={cn(
          "flex items-center px-4 py-6 border-b border-gray-200 dark:border-gray-700",
          sidebarCollapsed ? "justify-center" : "justify-between"
        )}
      >
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          {!sidebarCollapsed && (
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              InvoicePro BD
            </span>
          )}
        </Link>

        {!sidebarCollapsed && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(true)}
            className="hidden md:flex"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* User Info */}
   
      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          const title = language === "en" ? item.title : item.titleBn;

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                  sidebarCollapsed ? "justify-center" : "justify-start"
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 flex-shrink-0",
                    sidebarCollapsed ? "" : "mr-3"
                  )}
                />

                {!sidebarCollapsed && (
                  <>
                    <span className="flex-1">{title}</span>
                    <div className="flex items-center space-x-1">
                      {item.premium && user?.plan !== "premium" && (
                        <Crown className="w-3 h-3 text-yellow-500" />
                      )}
                      {item.badge && (
                        <Badge
                          variant={
                            item.badge === "new" ? "default" : "secondary"
                          }
                          className="text-xs"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                  </>
                )}

                {sidebarCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {title}
                  </div>
                )}
              </div>
            </Link>
          );
        })}

        {/* Support Section */}
        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          {!sidebarCollapsed && (
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {language === "en" ? "Support" : "সাহায্য"}
            </p>
          )}

          {supportItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            const title = language === "en" ? item.title : item.titleBn;

            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                    sidebarCollapsed ? "justify-center" : "justify-start"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5 flex-shrink-0",
                      sidebarCollapsed ? "" : "mr-3"
                    )}
                  />

                  {!sidebarCollapsed && <span className="flex-1">{title}</span>}

                  {sidebarCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                      {title}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Collapse Toggle for Desktop */}
      {sidebarCollapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 hidden md:block">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(false)}
            className="w-full justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 z-50 md:hidden shadow-xl"
              initial={{ x: -256 }}
              animate={{ x: 0 }}
              exit={{ x: -256 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
            
              <div className="h-[calc(100%-73px)]">
                <SidebarContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden md:flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300",
          sidebarCollapsed ? "w-16" : "w-64"
        )}
      >
        <SidebarContent />
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-30 md:hidden"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu className="w-5 h-5" />
      </Button>
    </>
  );
}
