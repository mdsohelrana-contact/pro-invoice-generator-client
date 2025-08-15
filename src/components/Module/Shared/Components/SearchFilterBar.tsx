"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

type ReusableSearchFilterProps = {

  placeholder?: string;              
  categories?: string[];               
  selectedCategory: string;           
  onCategoryChange: (value: string) => void;
  searchTerm: string;                  
  onSearchChange: (value: string) => void;
  badgeText?: string;                 
};

const ReusableSearchFilter = ({
  placeholder = "Search...",
  categories = [],
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  badgeText = "",
}: ReusableSearchFilterProps) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Select + Badge */}
        <div className="flex items-center space-x-2">
          {categories.length > 0 && (
            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          {badgeText && <Badge variant="secondary" className="font-bold text-lg">{badgeText}</Badge>}
        </div>
      </div>
    </motion.div>
  );
};

export default ReusableSearchFilter;
