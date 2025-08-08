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
import PricingFeatures from "./PricingFeatures";
import PricingFaq from "./PricingFaq";
import CTASection from "@/components/Module/Shared/Components/CTASection";
const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Choose Your Plan",
      subtitle: "Start free, upgrade when you need more features",
      billing: {
        monthly: "Monthly",
        yearly: "Yearly",
        save: "Save 20%",
      },
      plans: {
        free: {
          name: "Free",
          description: "Perfect for getting started",
          price: { monthly: 0, yearly: 0 },
          popular: false,
          features: [
            "Up to 5 invoices per month",
            "Basic invoice templates",
            "Customer management",
            "Email support",
            "BDT & USD support",
          ],
          limitations: [
            "No custom branding",
            "No recurring invoices",
            "No analytics",
            "No WhatsApp integration",
          ],
        },
        professional: {
          name: "Professional",
          description: "Best for growing businesses",
          price: { monthly: 1500, yearly: 1200 },
          popular: true,
          features: [
            "Unlimited invoices",
            "Premium templates",
            "Custom branding",
            "Recurring invoices",
            "Payment tracking",
            "Basic analytics",
            "WhatsApp integration",
            "Priority email support",
            "Multi-currency support",
            "PDF customization",
          ],
          limitations: [
            "No advanced analytics",
            "No API access",
            "No team collaboration",
          ],
        },
        enterprise: {
          name: "Enterprise",
          description: "For large businesses and teams",
          price: { monthly: 3500, yearly: 2800 },
          popular: false,
          features: [
            "Everything in Professional",
            "Advanced analytics & reports",
            "Team collaboration",
            "API access",
            "Custom integrations",
            "Dedicated account manager",
            "Phone support",
            "Custom invoice fields",
            "Bulk operations",
            "Advanced security",
            "White-label solution",
          ],
          limitations: [],
        },
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Can I change my plan anytime?",
            answer:
              "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
          },
          {
            question: "Is there a free trial for paid plans?",
            answer:
              "Yes, we offer a 14-day free trial for all paid plans. No credit card required to start.",
          },
          {
            question: "What payment methods do you accept?",
            answer:
              "We accept bKash, Nagad, bank transfers, and international cards (Visa, Mastercard).",
          },
          {
            question: "Can I cancel my subscription?",
            answer:
              "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
          },
          {
            question: "Do you offer discounts for nonprofits?",
            answer:
              "Yes, we offer special pricing for registered nonprofits and educational institutions. Contact us for details.",
          },
        ],
      },
    },
    bn: {
      title: "আপনার প্ল্যান বেছে নিন",
      subtitle: "ফ্রি দিয়ে শুরু করুন, প্রয়োজনে আপগ্রেড করুন",
      billing: {
        monthly: "মাসিক",
        yearly: "বার্ষিক",
        save: "২০% সাশ্রয়",
      },
      plans: {
        free: {
          name: "ফ্রি",
          description: "শুরু করার জন্য পারফেক্ট",
          price: { monthly: 0, yearly: 0 },
          popular: false,
          features: [
            "মাসে ৫টি পর্যন্ত ইনভয়েস",
            "বেসিক ইনভয়েস টেমপ্লেট",
            "কাস্টমার ম্যানেজমেন্ট",
            "ইমেইল সাপোর্ট",
            "টাকা ও ডলার সাপোর্ট",
          ],
          limitations: [
            "কাস্টম ব্র্যান্ডিং নেই",
            "রিকারিং ইনভয়েস নেই",
            "অ্যানালিটিক্স নেই",
            "হোয়াটসঅ্যাপ ইন্টিগ্রেশন নেই",
          ],
        },
        professional: {
          name: "প্রফেশনাল",
          description: "ক্রমবর্ধমান ব্যবসার জন্য সেরা",
          price: { monthly: 1500, yearly: 1200 },
          popular: true,
          features: [
            "আনলিমিটেড ইনভয়েস",
            "প্রিমিয়াম টেমপ্লেট",
            "কাস্টম ব্র্যান্ডিং",
            "রিকারিং ইনভয়েস",
            "পেমেন্ট ট্র্যাকিং",
            "বেসিক অ্যানালিটিক্স",
            "হোয়াটসঅ্যাপ ইন্টিগ্রেশন",
            "প্রাইওরিটি ইমেইল সাপোর্ট",
            "মাল্টি-কারেন্সি সাপোর্ট",
            "PDF কাস্টমাইজেশন",
          ],
          limitations: [
            "অ্যাডভান্সড অ্যানালিটিক্স নেই",
            "API অ্যাক্সেস নেই",
            "টিম কোলাবরেশন নেই",
          ],
        },
        enterprise: {
          name: "এন্টারপ্রাইজ",
          description: "বড় ব্যবসা ও টিমের জন্য",
          price: { monthly: 3500, yearly: 2800 },
          popular: false,
          features: [
            "প্রফেশনালের সব ফিচার",
            "অ্যাডভান্সড অ্যানালিটিক্স ও রিপোর্ট",
            "টিম কোলাবরেশন",
            "API অ্যাক্সেস",
            "কাস্টম ইন্টিগ্রেশন",
            "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার",
            "ফোন সাপোর্ট",
            "কাস্টম ইনভয়েস ফিল্ড",
            "বাল্ক অপারেশন",
            "অ্যাডভান্সড সিকিউরিটি",
            "হোয়াইট-লেবেল সলিউশন",
          ],
          limitations: [],
        },
      },
      faq: {
        title: "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
        items: [
          {
            question: "আমি কি যেকোনো সময় প্ল্যান পরিবর্তন করতে পারি?",
            answer:
              "হ্যাঁ, আপনি যেকোনো সময় আপগ্রেড বা ডাউনগ্রেড করতে পারেন। পরিবর্তন পরবর্তী বিলিং সাইকেলে প্রতিফলিত হবে।",
          },
          {
            question: "পেইড প্ল্যানের জন্য কি ফ্রি ট্রায়াল আছে?",
            answer:
              "হ্যাঁ, আমরা সব পেইড প্ল্যানের জন্য ১৪ দিনের ফ্রি ট্রায়াল অফার করি। শুরু করতে কোনো ক্রেডিট কার্ডের প্রয়োজন নেই।",
          },
          {
            question: "আপনারা কোন পেমেন্ট পদ্ধতি গ্রহণ করেন?",
            answer:
              "আমরা বিকাশ, নগদ, ব্যাংক ট্রান্সফার এবং আন্তর্জাতিক কার্ড (ভিসা, মাস্টারকার্ড) গ্রহণ করি।",
          },
          {
            question: "আমি কি আমার সাবস্ক্রিপশন বাতিল করতে পারি?",
            answer:
              "হ্যাঁ, আপনি যেকোনো সময় সাবস্ক্রিপশন বাতিল করতে পারেন। বিলিং পিরিয়ড শেষ পর্যন্ত অ্যাক্সেস থাকবে।",
          },
          {
            question: "অলাভজনক সংস্থার জন্য কি ছাড় আছে?",
            answer:
              "হ্যাঁ, নিবন্ধিত অলাভজনক ও শিক্ষা প্রতিষ্ঠানের জন্য বিশেষ মূল্য আছে। বিস্তারিত জানতে যোগাযোগ করুন।",
          },
        ],
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center space-x-4">
            <LanguageButton />
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>

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
