"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/Module/Shared/Components/SectionHeader";
import PriceCard from "@/components/Module/Pricing/PriceCard";
import PricingFeatures from "@/components/Module/Pricing/PricingFeatures";
import PricingFaq from "@/components/Module/Pricing/PricingFaq";
import CTASection from "@/components/Module/Shared/Components/CTASection";
import { pricingContent } from "@/data/pricingData";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
const language = useSelector(selectLanguage);

  const t = pricingContent[language];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <section
        className="container mx-auto px-4 py-12"
        aria-labelledby="pricing-heading"
      >
        {/* Header Section */}
        <header className="text-center mb-12">
          <SectionHeader
            titleClassName="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent"
            title={t.title}
            subTitle={t.subtitle}
          />

          {/* Billing Toggle */}
          <div
            className="flex items-center justify-center space-x-4 mb-10"
            role="group"
            aria-label={
              language === "en"
                ? "Billing frequency toggle"
                : "বিলিং ফ্রিকোয়েন্সি টগল"
            }
          >
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
              aria-checked={isYearly}
              aria-label={
                language === "en"
                  ? "Toggle billing to yearly"
                  : "বিলিং পরিবর্তন করে বার্ষিক করুন"
              }
            />

            <span
              className={`text-sm ${
                isYearly ? "font-medium" : "text-gray-500"
              }`}
            >
              {t.billing.yearly}
            </span>

            {isYearly && (
              <Badge
                className="bg-green-100 text-green-800 hover:bg-green-200"
                aria-label={language === "en" ? "Save badge" : "সেভ ব্যাজ"}
              >
                {t.billing.save}
              </Badge>
            )}
          </div>

          <PriceCard t={t.plans} isYearly={isYearly} />
        </header>

        {/* Feature Comparison */}
        <section aria-labelledby="feature-comparison-heading" className="mb-12">
          <h2 id="feature-comparison-heading" className="sr-only">
            {language === "en" ? "Feature Comparison" : "ফিচার তুলনা"}
          </h2>
          <PricingFeatures />
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading" className="mb-12">
          <h2 id="faq-heading" className="sr-only">
            {language === "en"
              ? "Frequently Asked Questions"
              : "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী"}
          </h2>
          <PricingFaq t={t.faq} />
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="sr-only">
            {language === "en" ? "Call to Action" : "কল টু অ্যাকশন"}
          </h2>
          <CTASection className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-2xl text-white"
            title={
              language === "en"
                ? "Ready to Get Started?"
                : "শুরু করতে প্রস্তুত?"
            }
          />
        </section>
      </section>
    </main>
  );
};

export default PricingPage;
