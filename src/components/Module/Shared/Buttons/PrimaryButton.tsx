"use client";

import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface PrimaryButtonProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "lg" | "icon" | "default";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  icon ,
  onClick,
  disabled = false,
  type = "button",
  size = "lg",
}) => {
  return (
    <Button
      size={size}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3 flex items-center justify-center",
        className
      )}
    >
      {children}
      {icon}
    </Button>
  );
};

export default PrimaryButton;
