"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Bell, Info, CheckCircle, AlertCircle } from "lucide-react";
import { TNotification } from "@/types/notification.type";

// Demo notifications
const demoNotifications: TNotification[] = [
  {
    id: "1",
    message: "Welcome! Thanks for joining our platform. Explore features now.",
    type: "info",
    category: "system",
    read: false,
    timestamp: new Date().toISOString(),
    url: "/welcome",
  },
  {
    id: "2",
    message: "A new version of the app is available. Update now!",
    type: "success",
    category: "system",
    read: true,
    timestamp: new Date().toISOString(),
    url: "/updates",
  },
  {
    id: "3",
    message: "Your subscription is about to expire. Renew today.",
    type: "error",
    category: "payment",
    read: false,
    timestamp: new Date().toISOString(),
    url: "/subscription",
  },
];

// Map icons based on type
const iconMap = {
  info: <Info className="w-5 h-5 text-blue-500" />,
  success: <CheckCircle className="w-5 h-5 text-green-500" />,
  error: <AlertCircle className="w-5 h-5 text-red-500" />,
};

const Notifications = () => {
  const storeNotifications = useSelector(
    (state: RootState) => state.notifications.list as TNotification[]
  );

  const notifications: TNotification[] =
    storeNotifications && storeNotifications.length > 0
      ? storeNotifications
      : demoNotifications;

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative"
          aria-label={`You have ${unreadCount} unread notifications`}
        >
          <Bell className="w-6 h-6" aria-hidden="true" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs animate-pulse">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-96 max-h-96 overflow-y-auto p-2 space-y-1 rounded-lg shadow-lg bg-white dark:bg-gray-900"
      >
        <DropdownMenuLabel className="flex items-center justify-between">
          <p className="text-lg font-semibold">Notifications</p>
          {unreadCount > 0 && (
            <Badge variant="secondary">{unreadCount} new</Badge>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {notifications.length === 0 ? (
          <DropdownMenuItem className="cursor-default text-gray-500">
            No notifications
          </DropdownMenuItem>
        ) : (
          notifications.map((notification) => (
            <Link
              key={notification.id}
              href={notification.url || "#"}
              aria-label={`View notification: ${notification.message}`}
            >
              <DropdownMenuItem
                className={`
                  flex items-start space-x-3 p-3 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-800
                  ${
                    !notification.read
                      ? "bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500 shadow-sm"
                      : ""
                  }
                `}
              >
                <div className="mt-1">{iconMap[notification.type]}</div>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{notification.message}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(notification.timestamp).toLocaleString()}
                  </p>
                </div>
              </DropdownMenuItem>
            </Link>
          ))
        )}

        {notifications.length > 0 && <DropdownMenuSeparator />}

        {notifications.length > 0 && (
          <DropdownMenuItem
            className="text-center text-sm text-blue-600 cursor-pointer hover:underline"
            onClick={() => console.log("Mark all as read")}
            aria-label="Mark all notifications as read"
          >
            Mark all as read
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notifications;
