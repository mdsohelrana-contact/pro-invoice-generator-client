"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title?: string;
  subTitle?: string;
  className?: string;          
  titleClassName?: string;    
  subTitleClassName?: string;  
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subTitle,
  className,
  titleClassName,
  subTitleClassName,
}) => {
  return (
    <motion.div
      className={clsx("text-center mb-16", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {title && (
        <h1
          className={clsx(
            "text-3xl md:text-4xl font-bold mb-4 primary-text-gradient",
            titleClassName
          )}
        >
          {title}
        </h1>
      )}
      {subTitle && (
        <p className={clsx("text-xl text-gray-600", subTitleClassName)}>
          {subTitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
