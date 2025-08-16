"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Scale,
  Users,
  Clock,
  AlertTriangle,
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

const TermsPage = () => {
  const language = useSelector(selectLanguage);

  const content = {
    en: {
      pageTitle: "Terms of Service",
      subtitle:
        "Please read these terms carefully before using InvoicePro services",
      quickNav: "Quick Navigation",
      lastUpdate: "Last updated",
      acceptance: "1. Acceptance of Terms",
      acceptanceText:
        'By accessing and using InvoicePro ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
      important: "Important",
      importantText:
        "These terms constitute a legally binding agreement between you and InvoicePro. Please read them carefully.",
      servicesTitle: "2. Description of Services",
      servicesIntro:
        "InvoicePro provides online invoice management and billing services, including but not limited to:",
      servicesList: [
        "Invoice creation, customization, and management",
        "Customer and product database management",
        "Payment tracking and reporting",
        "Analytics and business insights",
        "Email notifications and reminders",
      ],
      accountsTitle: "3. User Accounts and Responsibilities",
      accountCreation: "Account Creation",
      accountDesc:
        "To use our services, you must create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your credentials.",
      responsibilities: "User Responsibilities",
      responsibilitiesList: [
        "Maintain accurate account information",
        "Use the service in compliance with applicable laws",
        "Not share account credentials with unauthorized parties",
        "Notify us immediately of any unauthorized access",
      ],
      paymentTitle: "4. Payment Terms and Billing",
      subscription: "Subscription Plans",
      paymentIntro:
        "InvoicePro offers various subscription plans with different features and usage limits. Pricing is clearly displayed on our pricing page.",
      billing: "Billing and Payments",
      billingList: [
        "Subscription fees are billed in advance on a monthly or annual basis",
        "All fees are non-refundable except as required by law",
        "Failed payments may result in service suspension",
        "You may cancel your subscription at any time",
      ],
      privacyTitle: "5. Privacy and Data Protection",
      privacyPolicy: "Privacy Policy",
      privacyIntro:
        "Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy.",
      dataSecurity:
        "We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.",
      limitationsTitle: "6. Limitations of Liability",
      limitationsText:
        "InvoicePro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses.",
      serviceAvailability: "Service Availability",
      serviceAvailabilityText:
        "While we strive for 99.9% uptime, we do not guarantee uninterrupted service. Scheduled maintenance and unforeseen technical issues may cause temporary service interruptions.",
      terminationTitle: "7. Termination",
      terminationText:
        "Either party may terminate this agreement at any time. Upon termination:",
      terminationList: [
        "Your access to the service will be discontinued",
        "You may export your data for 30 days after termination",
        "All outstanding fees remain due and payable",
      ],
      contactTitle: "Questions About These Terms?",
      contactText:
        "If you have any questions about these Terms of Service, please contact us.",
      legalEmail: "Email Legal Team",
      support: "Contact Support",
    },
    bn: {
      pageTitle: "সেবার শর্তাবলী",
      subtitle:
        "InvoicePro ব্যবহার করার আগে অনুগ্রহ করে এই শর্তগুলো মনোযোগ দিয়ে পড়ুন",
      quickNav: "দ্রুত নেভিগেশন",
      lastUpdate: "সর্বশেষ আপডেট",
      acceptance: "১. শর্তাবলী গ্রহণ",
      acceptanceText:
        'InvoicePro ("সেবা") অ্যাক্সেস এবং ব্যবহার করার মাধ্যমে আপনি এই চুক্তির শর্তাবলী মেনে নিচ্ছেন। আপনি যদি এতে সম্মত না হন তবে অনুগ্রহ করে সেবা ব্যবহার করবেন না।',
      important: "গুরুত্বপূর্ণ",
      importantText:
        "এই শর্তগুলো আপনার ও InvoicePro এর মধ্যে একটি আইনগত বাধ্যবাধকতা তৈরি করে। অনুগ্রহ করে মনোযোগ দিয়ে পড়ুন।",
      servicesTitle: "২. সেবার বিবরণ",
      servicesIntro:
        "InvoicePro অনলাইনে ইনভয়েস ম্যানেজমেন্ট ও বিলিং সেবা প্রদান করে, যার মধ্যে রয়েছে:",
      servicesList: [
        "ইনভয়েস তৈরি, কাস্টমাইজ ও ম্যানেজ করা",
        "কাস্টমার ও প্রোডাক্ট ডাটাবেস ম্যানেজমেন্ট",
        "পেমেন্ট ট্র্যাকিং ও রিপোর্টিং",
        "অ্যানালিটিক্স ও বিজনেস ইনসাইটস",
        "ইমেইল নোটিফিকেশন ও রিমাইন্ডার",
      ],
      accountsTitle: "৩. ব্যবহারকারী অ্যাকাউন্ট ও দায়িত্ব",
      accountCreation: "অ্যাকাউন্ট তৈরি",
      accountDesc:
        "সার্ভিস ব্যবহারের জন্য আপনাকে সঠিক ও সম্পূর্ণ তথ্য দিয়ে একটি অ্যাকাউন্ট তৈরি করতে হবে এবং আপনার লগইন তথ্য গোপন রাখতে হবে।",
      responsibilities: "ব্যবহারকারীর দায়িত্বসমূহ",
      responsibilitiesList: [
        "সঠিক অ্যাকাউন্ট তথ্য বজায় রাখা",
        "আইন অনুযায়ী সেবা ব্যবহার করা",
        "অননুমোদিত ব্যক্তির সাথে তথ্য শেয়ার না করা",
        "অন্য কেউ অ্যাক্সেস করলে তাৎক্ষণিকভাবে আমাদের জানানো",
      ],
      paymentTitle: "৪. পেমেন্ট ও বিলিং",
      subscription: "সাবস্ক্রিপশন প্ল্যান",
      paymentIntro:
        "InvoicePro বিভিন্ন বৈশিষ্ট্য সহ বিভিন্ন সাবস্ক্রিপশন প্ল্যান প্রদান করে। মূল্য তালিকা আমাদের pricing পেজে দেওয়া আছে।",
      billing: "বিলিং ও পেমেন্ট",
      billingList: [
        "সাবস্ক্রিপশন ফি অগ্রিম প্রদান করতে হয় (মাসিক বা বাৎসরিক)",
        "আইনগত বাধ্যবাধকতা ছাড়া কোন ফি ফেরতযোগ্য নয়",
        "পেমেন্ট ব্যর্থ হলে সেবা স্থগিত হতে পারে",
        "আপনি চাইলে যে কোনো সময় সাবস্ক্রিপশন বাতিল করতে পারবেন",
      ],
      privacyTitle: "৫. প্রাইভেসি ও ডাটা সুরক্ষা",
      privacyPolicy: "প্রাইভেসি পলিসি",
      privacyIntro:
        "আপনার প্রাইভেসি আমাদের কাছে গুরুত্বপূর্ণ। ব্যক্তিগত তথ্য সংগ্রহ ও ব্যবহার আমাদের প্রাইভেসি পলিসি অনুযায়ী করা হয়।",
      dataSecurity:
        "আমরা আপনার ডাটা সুরক্ষায় শিল্প মানের নিরাপত্তা ব্যবস্থা গ্রহণ করি, তবে ১০০% নিরাপত্তার গ্যারান্টি প্রদান করা সম্ভব নয়।",
      limitationsTitle: "৬. দায়বদ্ধতার সীমাবদ্ধতা",
      limitationsText:
        "InvoicePro কোনও পরোক্ষ, আকস্মিক বা বিশেষ ক্ষতির জন্য দায়ী নয়, যার মধ্যে লাভ, ডাটা বা goodwill নষ্ট হওয়া অন্তর্ভুক্ত।",
      serviceAvailability: "সেবার প্রাপ্যতা",
      serviceAvailabilityText:
        "আমরা ৯৯.৯% আপটাইম নিশ্চিত করার চেষ্টা করি, তবে পূর্বঘোষণা ছাড়াই প্রযুক্তিগত কারণে সেবা সাময়িকভাবে বন্ধ হতে পারে।",
      terminationTitle: "৭. সমাপ্তি",
      terminationText:
        "উভয় পক্ষই যে কোনো সময় এই চুক্তি সমাপ্ত করতে পারে। সমাপ্তির পরে:",
      terminationList: [
        "আপনার সেবায় প্রবেশাধিকার বন্ধ হয়ে যাবে",
        "আপনি ৩০ দিনের মধ্যে আপনার ডাটা এক্সপোর্ট করতে পারবেন",
        "সমস্ত বকেয়া পেমেন্ট পরিশোধযোগ্য থাকবে",
      ],
      contactTitle: "শর্তাবলী সম্পর্কে প্রশ্ন আছে?",
      contactText:
        "এই সেবার শর্তাবলী সম্পর্কে আপনার যদি কোন প্রশ্ন থাকে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।",
      legalEmail: "লিগ্যাল টিমে ইমেইল করুন",
      support: "সাপোর্টে যোগাযোগ করুন",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <motion.div
        className="bg-white/80 backdrop-blur-sm border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              InvoicePro
            </span>
          </Link>
          <LanguageButton />
        </div>
      </motion.div>

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
              <Scale className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {t.pageTitle}
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">{t.subtitle}</p>
          <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
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
                {[
                  { href: "#acceptance", title: t.acceptance },
                  { href: "#services", title: t.servicesTitle },
                  { href: "#accounts", title: t.accountsTitle },
                  { href: "#payment", title: t.paymentTitle },
                  { href: "#privacy", title: t.privacyTitle },
                  { href: "#limitations", title: t.limitationsTitle },
                ].map((item) => (
                  <a
                    href={item.href}
                    key={item.href}
                    className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-700">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Acceptance */}
        <motion.div
          className="space-y-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          <Card
            id="acceptance"
            className="border-0 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Shield className="w-6 h-6 mr-3 text-blue-500" />
                {t.acceptance}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{t.acceptanceText}</p>
              <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 mr-2 text-blue-500" />
                  <p className="text-blue-800 text-sm">
                    <strong>{t.important}:</strong> {t.importantText}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card
            id="services"
            className="border-0 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <FileText className="w-6 h-6 mr-3 text-green-500" />
                {t.servicesTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{t.servicesIntro}</p>
              <ul className="space-y-2 text-gray-700">
                {t.servicesList.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Accounts */}
          <Card
            id="accounts"
            className="border-0 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Users className="w-6 h-6 mr-3 text-purple-500" />
                {t.accountsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-gray-900 mb-2">
                {t.accountCreation}
              </h4>
              <p className="text-gray-700 mb-4">{t.accountDesc}</p>
              <h4 className="font-semibold text-gray-900 mb-2">
                {t.responsibilities}
              </h4>
              <ul className="space-y-2 text-gray-700">
                {t.responsibilitiesList.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card
            id="payment"
            className="border-0 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <FileText className="w-6 h-6 mr-3 text-orange-500" />
                {t.paymentTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-gray-900 mb-2">
                {t.subscription}
              </h4>
              <p className="text-gray-700 mb-4">{t.paymentIntro}</p>

              <h4 className="font-semibold text-gray-900 mb-2">{t.billing}</h4>
              <ul className="space-y-2 text-gray-700">
                {t.billingList.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card
            id="privacy"
            className="border-0 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Shield className="w-6 h-6 mr-3 text-red-500" />
                {t.privacyTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{t.privacyIntro}</p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-red-800 text-sm">
                  <strong>{t.dataSecurity}</strong>
                </p>
              </div>
              <Link href="/privacy" className="text-blue-600 hover:underline">
                {t.privacyPolicy}
              </Link>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card
            id="limitations"
            className="border-0 bg-white/80 backdrop-blur-sm shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <AlertTriangle className="w-6 h-6 mr-3 text-yellow-500" />
                {t.limitationsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{t.limitationsText}</p>
              <h4 className="font-semibold text-gray-900 mb-2">
                {t.serviceAvailability}
              </h4>
              <p className="text-gray-700">{t.serviceAvailabilityText}</p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <FileText className="w-6 h-6 mr-3 text-gray-500" />
                {t.terminationTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{t.terminationText}</p>
              <ul className="space-y-2 text-gray-700">
                {t.terminationList.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-0 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{t.contactTitle}</h3>
              <p className="text-blue-100 mb-6">{t.contactText}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary">
                  <Link href="/contact">{t.support}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-500"
                >
                  <Link href="mailto:legal@invoicepro.com">{t.legalEmail}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
