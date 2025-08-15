"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react"; // Type for icons
import PrimaryButton from "../Buttons/PrimaryButton";

type EmptyStateProps = {
  icon: LucideIcon; // Pass any icon component from lucide-react
  title: string; // Main heading
  description?: string; // Optional description text
  buttonText?: string; // Optional button text
  onButtonClick?: () => void; // Optional click handler
  className?: string; // Additional classes for wrapper
};

const EmptyState = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onButtonClick,
  className = "",
}: EmptyStateProps) => {
  return (
    <motion.div
      className={`text-center py-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-12 h-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-6">{description}</p>}
      {buttonText && onButtonClick && (
        <div className="flex justify-center">
          <PrimaryButton onClick={onButtonClick}>{buttonText}</PrimaryButton>
        </div>
      )}
    </motion.div>
  );
};

export default EmptyState;
