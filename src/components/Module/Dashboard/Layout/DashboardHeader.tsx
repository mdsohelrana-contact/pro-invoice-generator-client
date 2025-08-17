"use client";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";
import LanguageButton from "../../Shared/Buttons/LanguageButton";
import UserProfile from "../Shared/UserProfile";
import Notifications from "../Shared/Notifications";
import SearchInput from "../../Form/SearchInput";

export function DashboardHeader() {
  const language = useSelector(selectLanguage);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between flex-1">
        {/* Search */}
        <div className="flex-1 max-w-md ml-8">
          <SearchInput
            placeholder={language === "en" ? "Search" : "অনুসন্ধান"}
          />
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <LanguageButton className="block" />

          {/* Notifications */}
          <Notifications />

          {/* User Menu */}
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
