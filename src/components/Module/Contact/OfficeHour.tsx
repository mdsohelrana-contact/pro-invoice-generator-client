"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

const OfficeHour = ({ language }: { language: string }) => {
  return (
    <motion.section
      aria-labelledby="office-hours-title"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    //   className="max-w-md mx-auto"
    >
      <Card className="border-0 bg-white/60 backdrop-blur-sm" role="region">
        <CardHeader>
          <CardTitle
            id="office-hours-title"
            className="flex items-center text-xl font-semibold"
          >
            <Clock className="w-5 h-5 mr-2" aria-hidden="true" />
            {language === "en" ? "Office Hours" : "অফিস সময়"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-gray-800">
          <div className="flex justify-between" role="listitem">
            <span>{language === "en" ? "Monday - Friday" : "সোমবার - শুক্রবার"}</span>
            <time dateTime="09:00-18:00">9:00 AM - 6:00 PM</time>
          </div>
          <div className="flex justify-between" role="listitem">
            <span>{language === "en" ? "Saturday" : "শনিবার"}</span>
            <time dateTime="10:00-16:00">10:00 AM - 4:00 PM</time>
          </div>
          <div className="flex justify-between" role="listitem">
            <span>{language === "en" ? "Sunday" : "রবিবার"}</span>
            <time dateTime="Closed">
              {language === "en" ? "Closed" : "বন্ধ"}
            </time>
          </div>
          <div className="text-sm text-gray-600 mt-4" aria-label="Time zone info">
            {language === "en"
              ? "All times are in Bangladesh Standard Time (BST)"
              : "সব সময় বাংলাদেশ স্ট্যান্ডার্ড টাইম (BST) অনুযায়ী"}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default OfficeHour;
