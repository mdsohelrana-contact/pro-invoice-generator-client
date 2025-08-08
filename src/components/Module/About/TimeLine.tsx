/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/context/LanguageContext";
import SectionHeader from "../Shared/Components/SectionHeader";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface TimeLineProps {
  milestones: Milestone[];
}

const TimeLine = ({ milestones }: TimeLineProps) => {
  const { language } = useLanguage();

  // const milestones = [
  //   {
  //     year: "2022",
  //     title: language === "en" ? "Company Founded" : "কোম্পানি প্রতিষ্ঠা",
  //     description:
  //       language === "en"
  //         ? "InvoicePro BD was founded with a vision to simplify invoicing for Bangladeshi businesses."
  //         : "বাংলাদেশী ব্যবসার জন্য ইনভয়েসিং সহজ করার দৃষ্টিভঙ্গি নিয়ে InvoicePro BD প্রতিষ্ঠিত হয়।",
  //   },
  //   {
  //     year: "2023",
  //     title:
  //       language === "en" ? "First 1,000 Users" : "প্রথম ১,০০০ ব্যবহারকারী",
  //     description:
  //       language === "en"
  //         ? "Reached our first milestone of 1,000 active users within the first year."
  //         : "প্রথম বছরের মধ্যে ১,০০০ সক্রিয় ব্যবহারকারীর প্রথম মাইলফলক অর্জন।",
  //   },
  //   {
  //     year: "2024",
  //     title: language === "en" ? "Mobile App Launch" : "মোবাইল অ্যাপ লঞ্চ",
  //     description:
  //       language === "en"
  //         ? "Launched mobile applications for iOS and Android to serve users on the go."
  //         : "চলমান ব্যবহারকারীদের সেবা দিতে iOS এবং Android এর জন্য মোবাইল অ্যাপ্লিকেশন লঞ্চ।",
  //   },
  //   {
  //     year: "2024",
  //     title: language === "en" ? "10,000+ Businesses" : "১০,০০০+ ব্যবসা",
  //     description:
  //       language === "en"
  //         ? "Now serving over 10,000 businesses across Bangladesh with our invoicing solutions."
  //         : "এখন আমাদের ইনভয়েসিং সমাধান দিয়ে সারা বাংলাদেশে ১০,০০০+ ব্যবসাকে সেবা দিচ্ছি।",
  //   },
  // ];

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <SectionHeader
        title={language === "en" ? "Our Journey" : "আমাদের যাত্রা"}
      />

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
        <div className="space-y-12">
          {milestones.map((milestone: any, index: any) => (
            <motion.div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <Card className="border-0 bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                      {milestone.year}
                    </Badge>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="relative z-10">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimeLine;
