"use client";

import { useLanguage } from "@/components/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTAButton {
  href: string;
  labelEn: string;
  labelBn: string;
  variant?: "outline" | "default";
}

interface AnimatedDoubleCTASectionProps {
  title: string;
  subTitle: string;
  buttons: CTAButton[]; // Expecting exactly 2 buttons but flexible
}

const AnimatedDoubleCTASection: React.FC<AnimatedDoubleCTASectionProps> = ({
  title,
  subTitle,
  buttons,
}) => {
  const { language } = useLanguage();

  return (
    <motion.section
      className="text-center p-12 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 rounded-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      aria-label={language === "en" ? "Call to action section" : "কল টু অ্যাকশন সেকশন"}
      role="region"
    >
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <p className="text-blue-100 mb-8 max-w-2xl mx-auto">{subTitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {buttons.map(({ href, labelEn, labelBn, variant }, idx) => (
          <Link key={idx} href={href} prefetch={false} >
            <Button
              size="lg"
              variant={variant || "default"}
              className={`px-8 py-3 cursor-pointer ${
                variant === "outline"
                  ? "border-white primary-color hover:bg-white hover:text-blue-600"
                  : "bg-white primary-color hover:bg-gray-100"
              }`}
              aria-label={
                language === "en" ? labelEn + " button" : labelBn + " বোতাম"
              }
            >
              {language === "en" ? labelEn : labelBn}
              {idx === 0 && <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />}
            </Button>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default AnimatedDoubleCTASection;
