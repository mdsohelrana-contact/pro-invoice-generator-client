"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const FAQQuickLinks = ({ language }: { language: string }) => {
  const links = [
    {
      href: "/help",
      labelEn: "Help Center",
      labelBn: "সাহায্য কেন্দ্র",
    },
    {
      href: "/pricing",
      labelEn: "Pricing & Plans",
      labelBn: "মূল্য ও প্ল্যান",
    },
    {
      href: "/templates",
      labelEn: "Invoice Templates",
      labelBn: "ইনভয়েস টেমপ্লেট",
    },
  ];

  return (
    <motion.section
      aria-labelledby="quick-help-title"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      //   className="max-w-md mx-auto"
    >
      <Card className="border-0 bg-white/60 backdrop-blur-sm" role="region">
        <CardHeader>
          <CardTitle id="quick-help-title" className="text-xl font-semibold">
            {language === "en" ? "Quick Help" : "দ্রুত সাহায্য"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-gray-800">
          <p className="mb-4" aria-live="polite">
            {language === "en"
              ? "Looking for quick answers? Check out these resources:"
              : "দ্রুত উত্তর খুঁজছেন? এই রিসোর্সগুলি দেখুন:"}
          </p>
          <nav
            aria-label={
              language === "en" ? "Quick Help Links" : "দ্রুত সাহায্যের লিঙ্কস"
            }
          >
            <ul className="space-y-2 list-none p-0 m-0">
              {links.map(({ href, labelEn, labelBn }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                    {language === "en" ? labelEn : labelBn}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default FAQQuickLinks;
