"use client";

import * as React from "react";
import {
  Search,
  ChevronRight,
  Lightbulb,
  BookOpen,
  LifeBuoy,
  MessageSquare,
  Settings,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";
const HelpSupportPage = () => {
const language = useSelector(selectLanguage);
  const [searchTerm, setSearchTerm] = React.useState("");

  const helpTopics = [
    {
      title: language === "en" ? "Getting Started" : "শুরু করা",
      description:
        language === "en"
          ? "Learn how to set up your account and create your first invoice."
          : "আপনার অ্যাকাউন্ট সেট আপ এবং আপনার প্রথম ইনভয়েস তৈরি করতে শিখুন।",
      icon: Lightbulb,
      link: "#getting-started",
    },
    {
      title: language === "en" ? "Invoice Management" : "ইনভয়েস ব্যবস্থাপনা",
      description:
        language === "en"
          ? "Manage, edit, and track your invoices efficiently."
          : "আপনার ইনভয়েসগুলি দক্ষতার সাথে পরিচালনা, সম্পাদনা এবং ট্র্যাক করুন।",
      icon: BookOpen,
      link: "#invoice-management",
    },
    {
      title: language === "en" ? "Payments & Analytics" : "পেমেন্ট ও বিশ্লেষণ",
      description:
        language === "en"
          ? "Understand payment processing and analyze your financial data."
          : "পেমেন্ট প্রক্রিয়াকরণ বুঝুন এবং আপনার আর্থিক ডেটা বিশ্লেষণ করুন।",
      icon: LifeBuoy,
      link: "#payments-analytics",
    },
    {
      title: language === "en" ? "Account & Settings" : "অ্যাকাউন্ট ও সেটিংস",
      description:
        language === "en"
          ? "Customize your profile, company details, and notification preferences."
          : "আপনার প্রোফাইল, কোম্পানির বিবরণ এবং বিজ্ঞপ্তি পছন্দগুলি কাস্টমাইজ করুন।",
      icon: Settings,
      link: "#account-settings",
    },
    {
      title: language === "en" ? "Troubleshooting" : "সমস্যা সমাধান",
      description:
        language === "en"
          ? "Find solutions to common issues and technical problems."
          : "সাধারণ সমস্যা এবং প্রযুক্তিগত সমস্যার সমাধান খুঁজুন।",
      icon: MessageSquare,
      link: "#troubleshooting",
    },
  ];

  const filteredTopics = helpTopics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="p-4 md:p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        {language === "en" ? "Help Center" : "সাহায্য কেন্দ্র"}
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {language === "en"
          ? "Find answers to your questions, learn how to use our features, and get support."
          : "আপনার প্রশ্নের উত্তর খুঁজুন, আমাদের বৈশিষ্ট্যগুলি কীভাবে ব্যবহার করবেন তা শিখুন এবং সহায়তা পান।"}
      </p>

      <div className="relative max-w-lg mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
        <Input
          type="text"
          placeholder={
            language === "en"
              ? "Search help topics..."
              : "সাহায্যের বিষয় খুঁজুন..."
          }
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Link href={topic.link} key={index}>
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold">
                      {topic.title}
                    </CardTitle>
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {topic.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500">
                      {language === "en" ? "Learn More" : "আরও জানুন"}{" "}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })
        ) : (
          <div className="col-span-full text-center text-gray-500 dark:text-gray-400 py-8">
            {language === "en"
              ? "No help topics found for your search."
              : "আপনার অনুসন্ধানের জন্য কোনো সাহায্য বিষয় পাওয়া যায়নি।"}
          </div>
        )}
      </div>

      <div className="text-center pt-8">
        <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {language === "en" ? "Still need help?" : "এখনও সাহায্যের প্রয়োজন?"}
        </p>
        <Link href="/contact">
          <Button size="lg">
            <MessageSquare className="mr-2 h-5 w-5" />
            {language === "en"
              ? "Contact Support"
              : "সাপোর্টের সাথে যোগাযোগ করুন"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HelpSupportPage;
