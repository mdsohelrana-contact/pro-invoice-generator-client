import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface InfoCardProps {
  icon?: React.ElementType | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle?: string;
  description?: string;
  color?: string;
  className?: string;
}

const InfoCard = ({ icon: Icon, title, subtitle, description, color, className = "" }: InfoCardProps) => {
  return (
    <Card
      className={`border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 ${className}`}
    >
      <CardContent className="p-6 text-center">
        <div
          className={`w-16 h-16 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mx-auto mb-4`}
          aria-hidden="true"
        >
          {Icon && (
            <Icon
              className="w-8 h-8 text-white"
              role="img"
              aria-label={`${title} icon`}
            />
          )}
        </div>

        <h2 className="font-semibold text-gray-800 mb-1">{title}</h2>

        {subtitle && (
          <h3 className="text-gray-700 mb-2 text-sm font-medium">{subtitle}</h3>
        )}

        {description && (
          <p className="text-gray-600 leading-relaxed">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
