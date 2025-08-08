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

const CTASection = ({ title, subTitle, buttonValue,icon  }: CTASectionProps) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        )}
        {subTitle && (
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {subTitle}
          </p>
        )}
        <div className="flex justify-center">
          <Link href="/dashboard" aria-label={buttonValue || "Call to Action"}>
            <PrimaryButton
              size="lg"
              icon={icon}
              className="inline-flex items-center"
            >
              {buttonValue}
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
