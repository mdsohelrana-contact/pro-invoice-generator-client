"use client";
import React from "react";
import { motion } from "framer-motion";
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
  viewMode: "grid" | "list";
  setViewMode: (value: "grid" | "list") => void;
  categories: Category[];
}

const Filters: React.FC<FiltersProps> = ({
  searchTerm,
  setSearchTerm,
  categoryFilter,
  setCategoryFilter,
  viewMode,
  setViewMode,
  categories,
}) => {
const language = useSelector(selectLanguage);

  return (
    <motion.section
      aria-label={language === "en" ? "Template filters" : "টেমপ্লেট ফিল্টার"}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <form
        className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
        role="search"
        onSubmit={(e) => e.preventDefault()} // prevent submit on enter
        aria-label={
          language === "en"
            ? "Search and filter templates"
            : "টেমপ্লেট সার্চ এবং ফিল্টার"
        }
      >
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Search */}
          <div className="flex-1 relative">
            <Search
              aria-hidden="true"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
            />
            <Input
              type="search"
              name="search"
              aria-label={
                language === "en" ? "Search templates" : "টেমপ্লেট খুঁজুন"
              }
              placeholder={
                language === "en" ? "Search templates..." : "টেমপ্লেট খুঁজুন..."
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              autoComplete="off"
            />
          </div>

          {/* Category Filter */}
          <Select
            value={categoryFilter}
            onValueChange={setCategoryFilter}
            aria-label={
              language === "en"
                ? "Filter templates by category"
                : "ক্যাটাগরি দ্বারা টেমপ্লেট ফিল্টার করুন"
            }
          >
            <SelectTrigger
              className="w-full md:w-48"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <SelectValue />
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

        {/* View Mode Toggle */}
        <div
          role="group"
          aria-label={
            language === "en" ? "Toggle view mode" : "ভিউ মোড টগল করুন"
          }
          className="flex items-center space-x-2"
        >
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            aria-pressed={viewMode === "grid"}
            aria-label={language === "en" ? "Grid view" : "গ্রিড ভিউ"}
            onClick={() => setViewMode("grid")}
            type="button"
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            aria-pressed={viewMode === "list"}
            aria-label={language === "en" ? "List view" : "লিস্ট ভিউ"}
            onClick={() => setViewMode("list")}
            type="button"
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </motion.section>
  );
};

export default Filters;
