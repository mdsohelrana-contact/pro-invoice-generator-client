"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  AlertTriangle,
  FileText,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { selectLanguage } from "@/store/slices/settingsSlice";
import LanguageButton from "@/components/Module/Shared/Buttons/LanguageButton";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const PrivacyPage = () => {
  const language = useSelector(selectLanguage);

  const content = {
    en: {
      pageTitle: "Privacy Policy",
      subtitle:
        "Your privacy is our priority. Learn how we collect, use, and protect your information.",
      lastUpdate: "Last updated",
      quickNav: "Quick Navigation",
      highlights: "Privacy at a Glance",
      highlightsItems: [
        {
          title: "Encrypted Data",
          desc: "All data encrypted in transit and at rest",
        },
        {
          title: "No Data Selling",
          desc: "We never sell your personal information",
        },
        {
          title: "Limited Access",
          desc: "Only authorized personnel access your data",
        },
        {
          title: "Data Control",
          desc: "You can export or delete your data anytime",
        },
      ],
      infoCollect: "1. Information We Collect",
      personalInfo: "Personal Information",
      personalItems: [
        "Name, email address, and contact information",
        "Business information and tax identification numbers",
        "Payment information (processed securely by third parties)",
      ],
      usageInfo: "Usage Information",
      usageItems: [
        "How you use our services and interact with features",
        "Device information, IP address, and browser type",
        "Log files and analytics data",
      ],
      dataMin: "Data Minimization",
      howWeUse: "2. How We Use Your Information",
      serviceProvision: "Service Provision",
      useItems1: [
        "Create and manage your account",
        "Process invoices and payments",
        "Provide customer support",
        "Send service notifications",
      ],
      improvementSecurity: "Improvement & Security",
      useItems2: [
        "Analyze usage patterns",
        "Improve our services",
        "Detect and prevent fraud",
        "Ensure platform security",
      ],
      sharingTitle: "3. Information Sharing and Disclosure",
      noSell:
        "We do not sell, trade, or rent your personal information to third parties.",
      dataSecurity: "4. Data Security and Protection",
      securityItems: [
        "We use encryption for data in transit and at rest",
        "Role-based access control and monitoring",
        "Regular security audits",
      ],
      yourRights: "5. Your Rights and Choices",
      rightsItems: [
        "Access and export your data",
        "Request correction of inaccurate information",
        "Request deletion of your data",
        "Withdraw consent",
      ],
      cookieTitle: "6. Cookies and Tracking Technologies",
      cookieText:
        "We use both essential and optional cookies. You can manage cookie settings in your browser or in your account preferences.",
      contactTitle: "Privacy Questions or Concerns?",
      contactText:
        "We’re here to help you understand how we protect your privacy.",
      quickLinks: [
        { href: "#collect", title: "Information We Collect" },
        { href: "#usage", title: "How We Use Information" },
        { href: "#share", title: "Data Sharing" },
        { href: "#security", title: "Data Security" },
        { href: "#rights", title: "Your Rights" },
        { href: "#cookies", title: "Cookies & Tracking" },
      ],
    },
    bn: {
      pageTitle: "প্রাইভেসি নীতি",
      subtitle:
        "আপনার তথ্য আমাদের কাছে সর্বোচ্চ অগ্রাধিকার। আমরা কিভাবে তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত করি তা জানতে পড়ুন।",
      lastUpdate: "সর্বশেষ আপডেট",
      quickNav: "দ্রুত নেভিগেশন",
      highlights: "এক নজরে প্রাইভেসি",
      highlightsItems: [
        {
          title: "এনক্রিপ্টেড ডাটা",
          desc: "সব ডাটা এনক্রিপ্ট করা অবস্থায় স্থানান্তরিত ও সংরক্ষিত হয়",
        },
        {
          title: "কোন ডাটা বিক্রি নয়",
          desc: "আমরা আপনার ব্যক্তিগত তথ্য কখনো তৃতীয় পক্ষকে বিক্রি করি না",
        },
        {
          title: "সীমিত অ্যাক্সেস",
          desc: "শুধুমাত্র অনুমোদিত ব্যক্তিরা আপনার ডাটা দেখতে পারে",
        },
        {
          title: "ডাটার নিয়ন্ত্রণ",
          desc: "আপনি চাইলে যেকোনো সময় ডাটা এক্সপোর্ট বা ডিলিট করতে পারেন",
        },
      ],
      infoCollect: "১. আমরা কী তথ্য সংগ্রহ করি",
      personalInfo: "ব্যক্তিগত তথ্য",
      personalItems: [
        "আপনার নাম, ইমেইল এবং যোগাযোগের তথ্য",
        "ব্যবসায়িক তথ্য এবং ট্যাক্স আইডেন্টিফিকেশন নাম্বার",
        "পেমেন্ট সংক্রান্ত তথ্য (তৃতীয় পক্ষের মাধ্যমে নিরাপদে প্রক্রিয়াকৃত)",
      ],
      usageInfo: "ব্যবহার সম্পর্কিত তথ্য",
      usageItems: [
        "আপনি সেবা কিভাবে ব্যবহার করছেন সে সম্পর্কিত তথ্য",
        "ডিভাইস, আইপি অ্যাড্রেস এবং ব্রাউজার তথ্য",
        "লগ ফাইল এবং অ্যানালিটিক্স ডাটা",
      ],
      dataMin: "ডাটা মিনিমাইজেশন",
      howWeUse: "২. আমরা আপনার তথ্য কীভাবে ব্যবহার করি",
      serviceProvision: "সেবা প্রদান",
      useItems1: [
        "আপনার একাউন্ট তৈরি ও পরিচালনা করা",
        "ইনভয়েস এবং পেমেন্ট প্রসেস করা",
        "গ্রাহক সহায়তা প্রদান করা",
        "সার্ভিস নোটিফিকেশন পাঠানো",
      ],
      improvementSecurity: "উন্নয়ন ও নিরাপত্তা",
      useItems2: [
        "ব্যবহার প্যাটার্ন বিশ্লেষণ করা",
        "সেবা উন্নত করা",
        "প্রতারণা প্রতিরোধ করা",
        "প্ল্যাটফর্ম সুরক্ষা নিশ্চিত করা",
      ],
      sharingTitle: "৩. তথ্য শেয়ার ও প্রকাশ",
      noSell:
        "আমরা কখনোই আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি, বিনিময় বা ভাড়া দিই না।",
      dataSecurity: "৪. ডাটা নিরাপত্তা ও সুরক্ষা",
      securityItems: [
        "ডাটা সংরক্ষণ ও স্থানান্তরে এনক্রিপশন ব্যবহৃত হয়",
        "অ্যাক্সেস নিয়ন্ত্রণ এবং নিয়মিত মনিটরিং করা হয়",
        "নিরাপত্তা অডিট এবং টেস্ট করা হয়",
      ],
      yourRights: "৫. আপনার অধিকারসমূহ",
      rightsItems: [
        "আপনার ডাটা অ্যাক্সেস এবং এক্সপোর্ট করার অধিকার",
        "ভুল তথ্য সংশোধনের অনুরোধ করার অধিকার",
        "আপনার তথ্য মুছে ফেলার অনুরোধ",
        "আপনি পূর্বে দেওয়া সম্মতি প্রত্যাহার করতে পারবেন",
      ],
      cookieTitle: "৬. কুকিজ ও ট্র্যাকিং প্রযুক্তি",
      cookieText:
        "আমরা প্রয়োজনীয় এবং ঐচ্ছিক কুকিজ ব্যবহার করি। আপনি চাইলে ব্রাউজার বা একাউন্ট সেটিং থেকে কুকি কনফিগার করতে পারবেন।",
      contactTitle: "প্রাইভেসি সংক্রান্ত প্রশ্ন?",
      contactText:
        "আমরা আপনার প্রাইভেসি রক্ষা সম্পর্কে আপনাকে সহায়তা করতে প্রস্তুত।",
      quickLinks: [
        { href: "#collect", title: "তথ্য সংগ্রহ" },
        { href: "#usage", title: "তথ্য ব্যবহার" },
        { href: "#share", title: "তথ্য শেয়ার" },
        { href: "#security", title: "ডাটা নিরাপত্তা" },
        { href: "#rights", title: "আপনার অধিকার" },
        { href: "#cookies", title: "কুকিজ" },
      ],
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">


      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t.pageTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            {t.lastUpdate}: January 15, 2024
          </div>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          <Card className="mb-8 border-0 bg-white/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                {t.quickNav}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.quickLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    <span className="text-sm font-medium text-gray-700">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sections */}
        <motion.div
          className="space-y-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          {/* Collect */}
          <Card
            id="collect"
            className="border-0 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Database className="w-6 h-6 mr-3 text-blue-500" />
                {t.infoCollect}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t.personalInfo}
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {t.personalItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t.usageInfo}
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {t.usageItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-blue-800 text-sm">
                  <strong>{t.dataMin}:</strong>{" "}
                  {language === "en"
                    ? "We only collect information necessary to provide and improve our services."
                    : "আমরা শুধুমাত্র সেবা প্রদান এবং উন্নতির জন্য প্রয়োজনীয় তথ্যই সংগ্রহ করি।"}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Use */}
          <Card
            id="usage"
            className="border-0 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Users className="w-6 h-6 mr-3 text-green-500" />
                {t.howWeUse}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t.serviceProvision}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {t.useItems1.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t.improvementSecurity}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {t.useItems2.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Share */}
          <Card
            id="share"
            className="border-0 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Shield className="w-6 h-6 mr-3 text-purple-500" />
                {t.sharingTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{t.noSell}</p>
            </CardContent>
          </Card>

          {/* Security */}
          <Card
            id="security"
            className="border-0 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Lock className="w-6 h-6 mr-3 text-red-500" />
                {t.dataSecurity}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                {t.securityItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Rights */}
          <Card
            id="rights"
            className="border-0 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Users className="w-6 h-6 mr-3 text-indigo-500" />
                {t.yourRights}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                {t.rightsItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card
            id="cookies"
            className="border-0 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Eye className="w-6 h-6 mr-3 text-orange-500" />
                {t.cookieTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{t.cookieText}</p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-0 bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-semibold mb-4">{t.contactTitle}</h3>
              <p className="mb-6 text-green-100">{t.contactText}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary">
                  <Link href="/contact">
                    {language === "en"
                      ? "Contact Support"
                      : "সাপোর্টে যোগাযোগ করুন"}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-green-500"
                >
                  <Link href="mailto:privacy@invoicepro.com">
                    {language === "en"
                      ? "Email Privacy Team"
                      : "প্রাইভেসি টিমে ইমেইল করুন"}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;
