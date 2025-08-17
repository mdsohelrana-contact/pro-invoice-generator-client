"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ChevronDown, Crown, LogOut, Settings, User } from "lucide-react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { selectLanguage } from "@/store/slices/settingsSlice";
import { selectCurrentUser } from "@/store/slices/userSlice";

const UserProfile = () => {
  const language = useSelector(selectLanguage);
  const user = useSelector(selectCurrentUser);

  const handleLogout = () => {
    toast.success("Logout successful!");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center space-x-2 h-9 px-2"
          aria-label="User profile menu"
        >
          <div
            className="w-7 h-7 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="text-white text-sm font-medium">
              {user?.name?.charAt(0) || "U"}
            </span>
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium leading-none">
              {user?.name || "User"}
            </p>
            <div className="flex items-center space-x-1 mt-1">
              <p className="text-xs text-gray-500">{user?.plan || "Free"}</p>
              {user?.plan === "premium" && (
                <Crown className="w-3 h-3" aria-hidden="true" />
              )}
            </div>
          </div>
          <ChevronDown className="w-3 h-3 text-gray-400" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{user?.name || "User"}</p>
            <p className="text-xs text-gray-500">
              {user?.email || "user@example.com"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link
          href="/dashboard/profile"
          aria-label={language === "en" ? "Go to profile" : "প্রোফাইলে যান"}
        >
          <DropdownMenuItem className="cursor-pointer">
            <User className="w-4 h-4 mr-2" aria-hidden="true" />
            {language === "en" ? "Profile" : "প্রোফাইল"}
          </DropdownMenuItem>
        </Link>

        {user?.plan !== "premium" && (
          <Link
            href="/pricing"
            aria-label={
              language === "en"
                ? "Upgrade to premium"
                : "প্রিমিয়ামে আপগ্রেড করুন"
            }
          >
            <DropdownMenuItem className="cursor-pointer">
              <Crown className="w-4 h-4 mr-2" aria-hidden="true" />
              {language === "en" ? "Upgrade to Premium" : "প্রিমিয়ামে আপগ্রেড"}
            </DropdownMenuItem>
          </Link>
        )}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer text-red-600"
          aria-label={language === "en" ? "Log out" : "লগ আউট"}
        >
          <LogOut className="w-4 h-4 mr-2" aria-hidden="true" />
          {language === "en" ? "Log out" : "লগ আউট"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
