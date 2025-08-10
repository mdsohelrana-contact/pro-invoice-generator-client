"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Search,
  Book,
  MessageCircle,
  Video,
  FileText,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Star,
  ArrowUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useStore } from "@/lib/store";
import Link from "next/link";
import PrimaryButton from "@/components/Module/Shared/Buttons/PrimaryButton";
import AnimatedDoubleCTASection from "@/components/Module/Shared/Components/AnimatedDoubleCTASection";
import SectionHeader from "@/components/Module/Shared/Components/SectionHeader";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
const HelpPage = () => {
  const { language } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const helpCategories = [
    {
      id: "getting-started",
      title: language === "en" ? "Getting Started" : "শুরু করা",
      icon: Book,
      color: "from-blue-500 to-blue-600",
      articles: [
        {
          title:
            language === "en"
              ? "How to create your first invoice"
              : "আপনার প্রথম ইনভয়েস কিভাবে তৈরি করবেন",
          description:
            language === "en"
              ? "Step-by-step guide to creating invoices"
              : "ইনভয়েস তৈরির ধাপে ধাপে গাইড",
          readTime: "5 min",
          popular: true,
        },
        {
          title:
            language === "en"
              ? "Setting up your company profile"
              : "আপনার কোম্পানি প্রোফাইল সেটআপ করা",
          description:
            language === "en"
              ? "Configure your business information"
              : "আপনার ব্যবসায়িক তথ্য কনফিগার করুন",
          readTime: "3 min",
        },
        {
          title:
            language === "en"
              ? "Adding customers and products"
              : "গ্রাহক এবং পণ্য যোগ করা",
          description:
            language === "en"
              ? "Manage your customer and product database"
              : "আপনার গ্রাহক এবং পণ্য ডাটাবেস পরিচালনা করুন",
          readTime: "4 min",
        },
      ],
    },
    {
      id: "invoicing",
      title: language === "en" ? "Invoicing" : "ইনভয়েসিং",
      icon: FileText,
      color: "from-green-500 to-green-600",
      articles: [
        {
          title:
            language === "en"
              ? "Understanding invoice statuses"
              : "ইনভয়েস স্ট্যাটাস বোঝা",
          description:
            language === "en"
              ? "Learn about different invoice states"
              : "বিভিন্ন ইনভয়েস অবস্থা সম্পর্কে জানুন",
          readTime: "3 min",
          popular: true,
        },
        {
          title:
            language === "en"
              ? "Customizing invoice templates"
              : "ইনভয়েস টেমপ্লেট কাস্টমাইজ করা",
          description:
            language === "en"
              ? "Personalize your invoice design"
              : "আপনার ইনভয়েস ডিজাইন ব্যক্তিগতকরণ করুন",
          readTime: "6 min",
        },
        {
          title:
            language === "en"
              ? "Setting up recurring invoices"
              : "পুনরাবৃত্ত ইনভয়েস সেটআপ করা",
          description:
            language === "en"
              ? "Automate your regular billing"
              : "আপনার নিয়মিত বিলিং স্বয়ংক্রিয় করুন",
          readTime: "5 min",
        },
      ],
    },
    {
      id: "payments",
      title: language === "en" ? "Payments & Tracking" : "পেমেন্ট ও ট্র্যাকিং",
      icon: MessageCircle,
      color: "from-purple-500 to-purple-600",
      articles: [
        {
          title:
            language === "en" ? "Recording payments" : "পেমেন্ট রেকর্ড করা",
          description:
            language === "en"
              ? "How to mark invoices as paid"
              : "ইনভয়েসগুলি পরিশোধিত হিসাবে চিহ্নিত করার উপায়",
          readTime: "3 min",
        },
        {
          title: language === "en" ? "Payment reminders" : "পেমেন্ট রিমাইন্ডার",
          description:
            language === "en"
              ? "Automate payment follow-ups"
              : "পেমেন্ট ফলো-আপ স্বয়ংক্রিয় করুন",
          readTime: "4 min",
          popular: true,
        },
        {
          title:
            language === "en"
              ? "Integrating payment gateways"
              : "পেমেন্ট গেটওয়ে ইন্টিগ্রেট করা",
          description:
            language === "en"
              ? "Connect bKash, Nagad, and other methods"
              : "বিকাশ, নগদ এবং অন্যান্য পদ্ধতি সংযুক্ত করুন",
          readTime: "7 min",
        },
      ],
    },
    {
      id: "reports",
      title:
        language === "en" ? "Reports & Analytics" : "রিপোর্ট ও অ্যানালিটিক্স",
      icon: Video,
      color: "from-orange-500 to-orange-600",
      articles: [
        {
          title:
            language === "en"
              ? "Understanding your dashboard"
              : "আপনার ড্যাশবোর্ড বোঝা",
          description:
            language === "en"
              ? "Navigate your business overview"
              : "আপনার ব্যবসার ওভারভিউ নেভিগেট করুন",
          readTime: "4 min",
        },
        {
          title:
            language === "en"
              ? "Generating financial reports"
              : "আর্থিক রিপোর্ট তৈরি করা",
          description:
            language === "en"
              ? "Create detailed business reports"
              : "বিস্তারিত ব্যবসায়িক রিপোর্ট তৈরি করুন",
          readTime: "6 min",
        },
        {
          title: language === "en" ? "Exporting data" : "ডেটা এক্সপোর্ট করা",
          description:
            language === "en"
              ? "Download your data in various formats"
              : "বিভিন্ন ফরম্যাটে আপনার ডেটা ডাউনলোড করুন",
          readTime: "3 min",
        },
      ],
    },
  ];

  const popularArticles = helpCategories
    .flatMap((category) =>
      category.articles.filter((article) => article.popular)
    )
    .slice(0, 3);

  const filteredCategories = helpCategories
    .map((category) => ({
      ...category,
      articles: category.articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.description.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.articles.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-end">
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <PrimaryButton
                size="sm"
                className="ml-2"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {language === "en" ? "Contact Support" : "সাপোর্ট যোগাযোগ"}{" "}
                <ArrowRight />
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
            {language === "en" ? "Help Center" : "সাহায্য কেন্দ্র"}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === "en"
              ? "Find answers to your questions and learn how to make the most of InvoicePro BD"
              : "আপনার প্রশ্নের উত্তর খুঁজুন এবং InvoicePro BD এর সর্বোচ্চ ব্যবহার করতে শিখুন"}
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder={
                language === "en"
                  ? "Search help articles..."
                  : "সাহায্য নিবন্ধ খুঁজুন..."
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 text-lg"
            />
          </div>
        </motion.div>

        {/* Popular Articles */}
        {!searchTerm && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              {language === "en" ? "Popular Articles" : "জনপ্রিয় নিবন্ধ"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {popularArticles.map((article, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-orange-100 text-orange-800">
                        <Star className="w-3 h-3 mr-1" />
                        {language === "en" ? "Popular" : "জনপ্রিয়"}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Help Categories */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            const isOpen = openSections[category.id];

            return (
              <Card
                key={category.id}
                className="border-0 bg-white/60 backdrop-blur-sm"
              >
                <Collapsible
                  open={isOpen}
                  onOpenChange={() => toggleSection(category.id)}
                >
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-gray-50/50 transition-colors">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">
                              {category.title}
                            </h3>
                            <p className="text-sm text-gray-600 font-normal">
                              {category.articles.length}{" "}
                              {language === "en" ? "articles" : "নিবন্ধ"}
                            </p>
                          </div>
                        </div>
                        {isOpen ? (
                          <ChevronDown className="w-5 h-5" />
                        ) : (
                          <ChevronRight className="w-5 h-5" />
                        )}
                      </CardTitle>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {category.articles.map((article, articleIndex) => (
                          <div
                            key={articleIndex}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                          >
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-medium text-gray-800">
                                  {article.title}
                                </h4>
                                {article.popular && (
                                  <Badge className="bg-orange-100 text-orange-800 text-xs">
                                    <Star className="w-2 h-2 mr-1" />
                                    {language === "en" ? "Popular" : "জনপ্রিয়"}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600">
                                {article.description}
                              </p>
                              <span className="text-xs text-gray-500">
                                {article.readTime} read
                              </span>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            );
          })}
        </motion.div>

        {/* No Results */}
        {searchTerm && filteredCategories.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {language === "en"
                ? "No articles found"
                : "কোন নিবন্ধ পাওয়া যায়নি"}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === "en"
                ? "Try adjusting your search terms or browse our categories above."
                : "আপনার অনুসন্ধান শর্ত সামঞ্জস্য করুন বা উপরের আমাদের ক্যাটেগরি ব্রাউজ করুন।"}
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
                {language === "en" ? "Contact Support" : "সাপোর্ট যোগাযোগ"}
              </Button>
            </Link>
          </motion.div>
        )}

        {/* Contact Support CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatedDoubleCTASection
            title={
              language === "en" ? "Still need help?" : "এখনও সাহায্য প্রয়োজন?"
            }
            subTitle={
              language === "en"
                ? "Can't find what you're looking for? Our support team is here to help you succeed."
                : "আপনি যা খুঁজছেন তা খুঁজে পাচ্ছেন না? আমাদের সাপোর্ট টিম আপনাকে সফল হতে সাহায্য করতে এখানে আছে।"
            }
            buttons={[
              {
                href: "/contact",
                labelEn: "Contact Support",
                labelBn: "সাপোর্ট যোগাযোগ",
                variant: "default",
              },
              {
                href: "/contact",
                labelEn: "Watch Tutorials",
                labelBn: "টিউটুরিয়াল দেখুন",
                variant: "outline",
              },
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HelpPage;
