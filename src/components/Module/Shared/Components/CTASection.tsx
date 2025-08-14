"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import PrimaryButton from "../Buttons/PrimaryButton";

export interface CTASectionProps {
  title?: string;
  subTitle?: string;
  buttonValue?: string;
  icon?: React.ReactNode;
  variant?: "outline" | "solid";
  className?: string; // dynamic section styling
}

const CTASection = ({
  title,
  subTitle,
  buttonValue = "Get Started",
  icon,
  variant = "solid",
  className = "", // default empty string
}: CTASectionProps) => {
  return (
    <section
      className={`text-center p-12 rounded-2xl ${className}`}
      role="region"
      aria-labelledby="cta-section-title"
    >
      <div className="container mx-auto text-center max-w-3xl">
        {title && (
          <h2
            id="cta-section-title"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {title}
          </h2>
        )}
        {subTitle && (
          <p className="text-xl mb-8 max-w-2xl mx-auto">{subTitle}</p>
        )}

        <div className="flex justify-center">
          <Link href="/dashboard" aria-label={buttonValue}>
            {className ? (
              <Button
                size="lg"
                className={`px-8 py-3 cursor-pointer ${
                  variant === "outline"
                    ? "border border-white text-white hover:bg-white hover:text-blue-600"
                    : "bg-white text-blue-600 hover:bg-gray-100"
                } inline-flex items-center gap-2`}
                aria-describedby="cta-section-title"
              >
                {buttonValue}
                {icon ?? <ArrowRight className="w-5 h-5" />}
              </Button>
            ) : (
              <PrimaryButton className="w-full" size="lg" icon={<ArrowRight />}>
                {buttonValue}
              </PrimaryButton>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
