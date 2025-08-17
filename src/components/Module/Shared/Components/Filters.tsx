"use client";

import React from "react";
import { motion, type MotionProps } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Grid, List, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";
import { Button } from "@/components/ui/button";

export interface Category {
  value: string;
  label: string;
}

interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  /** optional view-mode (omit if you don't need the toggle)  */
  viewMode?: "grid" | "list";
  setViewMode?: (value: "grid" | "list") => void;
  categories: Category[];
  defaultCategoryLabel?: string;
  className?: string;
  animation?: MotionProps;
}

const translations = {
  en: {
    sectionLabel: "Template filters",
    formLabel: "Search and filter templates",
    searchLabel: "Search templates",
    categoryLabel: "Filter templates by category",
    gridLabel: "Grid view",
    listLabel: "List view",
  },
  bn: {
    sectionLabel: "টেমপ্লেট ফিল্টার",
    formLabel: "টেমপ্লেট সার্চ এবং ফিল্টার",
    searchLabel: "টেমপ্লেট খুঁজুন",
    categoryLabel: "ক্যাটাগরি দ্বারা টেমপ্লেট ফিল্টার করুন",
    gridLabel: "গ্রিড ভিউ",
    listLabel: "লিস্ট ভিউ",
  },
} as const;

const Filters: React.FC<FiltersProps> = ({
  searchTerm,
  setSearchTerm,
  categoryFilter,
  setCategoryFilter,
  viewMode,
  setViewMode,
  categories,
  defaultCategoryLabel = "Select category",
  className = "",
  animation,
}) => {
  const language = useSelector(selectLanguage) as keyof typeof translations;
  const t = translations[language] ?? translations.en;

  return (
    <motion.section
      aria-label={t.sectionLabel}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      {...animation}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mb-6 ${className}`}
    >
      <form
        role="search"
        aria-label={t.formLabel}
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-wrap gap-4"
      >
        {/* Search + Category */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1 min-w-[250px]">
          <div className="relative flex-1">
            <Search
              aria-hidden="true"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            />
            <Input
              type="search"
              aria-label={t.searchLabel}
              placeholder={`${t.searchLabel}...`}
              autoComplete="off"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select
            value={categoryFilter}
            onValueChange={setCategoryFilter}
          >
            <SelectTrigger aria-label={t.categoryLabel} className="flex-1">
              <SelectValue placeholder={defaultCategoryLabel} />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* View mode toggle (optional) */}
        {viewMode && setViewMode && (
          <div
            role="group"
            aria-label={t.formLabel}
            className="flex items-center space-x-2 w-full sm:w-auto"
          >
            <Button
              type="button"
              size="sm"
              variant={viewMode === "grid" ? "default" : "outline"}
              aria-pressed={viewMode === "grid"}
              aria-label={t.gridLabel}
              onClick={() => setViewMode("grid")}
              className="flex-1 sm:flex-none"
            >
              <Grid className="w-4 h-4" />
            </Button>

            <Button
              type="button"
              size="sm"
              variant={viewMode === "list" ? "default" : "outline"}
              aria-pressed={viewMode === "list"}
              aria-label={t.listLabel}
              onClick={() => setViewMode("list")}
              className="flex-1 sm:flex-none"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        )}
      </form>
    </motion.section>
  );
};

export default Filters;
