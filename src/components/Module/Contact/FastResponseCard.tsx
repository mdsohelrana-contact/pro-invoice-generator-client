"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface FastResponseCardProps {
  language: string;
}

const FastResponseCard = ({ language }: FastResponseCardProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      aria-labelledby="fast-response-title"
      role="region"
      //   className="max-w-md mx-auto"
    >
      <Card className="border-0 bg-gradient-to-r from-green-50 to-teal-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-center mb-3">
            <CheckCircle
              className="w-6 h-6 text-green-600 mr-2"
              aria-hidden="true"
            />
            <h3
              id="fast-response-title"
              className="font-semibold text-green-800"
            >
              {language === "en"
                ? "Fast Response Guarantee"
                : "দ্রুত প্রতিক্রিয়ার গ্যারান্টি"}
            </h3>
          </div>
          <p className="text-green-700 text-sm" aria-live="polite">
            {language === "en"
              ? "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
              : "আমরা সাধারণত কর্মদিবসে ২৪ ঘন্টার মধ্যে সমস্ত জিজ্ঞাসার উত্তর দিই। জরুরি বিষয়ের জন্য, অনুগ্রহ করে সরাসরি আমাদের কল করুন।"}
          </p>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default FastResponseCard;
