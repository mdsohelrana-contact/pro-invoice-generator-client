"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/context/LanguageContext";
import LanguageButton from "@/components/Module/Shared/Buttons/LanguageButton";
import PriceCard from "@/components/Module/Pricing/PriceCard";
import PricingFeatures from "../../components/Module/Pricing/PricingFeatures";
import PricingFaq from "../../components/Module/Pricing/PricingFaq";
import CTASection from "@/components/Module/Shared/Components/CTASection";
import { pricingContent } from "@/data/pricingData";
import SectionHeader from "@/components/Module/Shared/Components/SectionHeader";
const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { language } = useLanguage();

  const t = pricingContent[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <SectionHeader
            titleClassName="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent"
            title={t.title}
            subTitle={t.subtitle}
          />

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-10">
            <span
              className={`text-sm ${
                !isYearly ? "font-medium" : "text-gray-500"
              }`}
            >
              {t.billing.monthly}
            </span>

            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-green-600"
            />

            <span
              className={`text-sm ${
                isYearly ? "font-medium" : "text-gray-500"
              }`}
            >
              {t.billing.yearly}
            </span>

            {isYearly && (
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                {t.billing.save}
              </Badge>
            )}
          </div>

          <PriceCard t={t.plans} isYearly={isYearly} />
        </div>

        {/* Feature Comparison */}
        <PricingFeatures />

        {/* FAQ Section */}
        <PricingFaq t={t.faq} />

        {/* CTA Section */}
        <CTASection
          title="Ready to Get Started?"
          subTitle=" Join thousands of businesses using InvoicePro BD"
          buttonValue="Start Your Free Trial"
        />
      </div>
    </div>
  );
};

export default PricingPage;
