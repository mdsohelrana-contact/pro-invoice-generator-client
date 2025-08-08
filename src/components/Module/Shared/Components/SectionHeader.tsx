"use client";

import React from "react";
import clsx from "clsx";

interface SectionHeaderProps {
  title?: string;
  subTitle?: string;
  className?: string;          // for container div
  titleClassName?: string;     // for h2
  subTitleClassName?: string;  // for p
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subTitle,
  className,
  titleClassName,
  subTitleClassName,
}) => {
  return (
    <div className={clsx("text-center mb-16", className)}>
      {title && (
        <h2
          className={clsx(
            "text-3xl md:text-4xl font-bold mb-4",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}
      {subTitle && (
        <p className={clsx("text-xl text-gray-600", subTitleClassName)}>
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
