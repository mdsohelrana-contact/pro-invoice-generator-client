"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

export interface CTASectionProps {
  title?: string;
  subTitle?: string;
  buttonValue?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CTASection = ({
  title,
  subTitle,
  buttonValue,
  icon,
}: CTASectionProps) => {
  return (
    <section
      className="py-20 px-4 bg-white"
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
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {subTitle}
          </p>
        )}
        <div className="flex justify-center">
          <Link
            href="/dashboard"
            passHref
            aria-label={buttonValue || "Call to Action"}
          >
            <PrimaryButton
              size="lg"
              icon={icon || <ArrowRight />}
              className="inline-flex items-center"
              aria-describedby="cta-section-title"
            >
              {buttonValue || "Get Started"}
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
