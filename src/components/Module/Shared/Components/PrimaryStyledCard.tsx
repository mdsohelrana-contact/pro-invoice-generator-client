import React, { ReactNode, HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";

interface StyledCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  role?: string;
  ariaLabelledBy?: string;
  className?: string;
}

const PrimaryStyledCard = ({
  children,
  role,
  ariaLabelledBy,
  className = "",
  ...rest
}: StyledCardProps) => {
  return (
    <Card
      role={role}
      aria-labelledby={ariaLabelledBy}
      className={`border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg rounded-xl transition-all duration-300 ${className}`}
      {...rest}
    >
      {children}
    </Card>
  );
};

export default PrimaryStyledCard;
