"use client";

import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Users,
  CreditCard,
  BarChart3,
  Globe,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import HeroSection from "@/components/Module/Home/HeroSection";
import FeaturesSection from "@/components/Module/Home/FeaturesSection";
import TestimonialSection from "@/components/Module/Home/TestmonialSection";
import IntegrationSection from "@/components/Module/Home/IntegrationSection";
import StatsSection from "@/components/Module/Home/StatsSection";
import CTASection from "@/components/Module/Shared/Components/CTASection";
import { useLanguage } from "../components/context/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        title: "Professional Invoice Generator for Bangladesh",
        subtitle:
          "Create, manage, and track invoices with ease. Support for BDT & USD, Bangla & English.",
        cta: "Start Free Trial",
        demo: "Watch Demo",
      },
      features: {
        title: "Everything You Need to Manage Your Business",
        subtitle:
          "Powerful features designed for Bangladeshi freelancers and businesses",
        items: [
          {
            icon: FileText,
            title: "Smart Invoice Creation",
            description:
              "Create professional invoices in minutes with customizable templates",
          },
          {
            icon: Users,
            title: "Customer Management",
            description:
              "Keep track of all your clients and their payment history",
          },
          {
            icon: CreditCard,
            title: "Payment Tracking",
            description:
              "Monitor payments, send reminders, and track overdue invoices",
          },
          {
            icon: BarChart3,
            title: "Business Analytics",
            description:
              "Get insights into your business performance with detailed reports",
          },
          {
            icon: Globe,
            title: "Multi-Currency Support",
            description: "Work with BDT, USD, and other currencies seamlessly",
          },
          {
            icon: Shield,
            title: "Secure & Reliable",
            description:
              "Your data is protected with enterprise-grade security",
          },
        ],
      },
      testimonials: {
        title: "Trusted by 10,000+ Businesses",
        subtitle: "See what our customers say about InvoicePro BD",
        items: [
          {
            name: "Ahmed Hassan",
            role: "Freelance Developer",
            company: "Dhaka",
            rating: 5,
            text: "InvoicePro BD has transformed how I handle my freelance business. The Bengali support is excellent!",
          },
          {
            name: "Fatima Rahman",
            role: "Business Owner",
            company: "Chittagong",
            rating: 5,
            text: "Perfect for small businesses. The payment tracking feature saves me hours every week.",
          },
          {
            name: "Karim Ahmed",
            role: "Consultant",
            company: "Sylhet",
            rating: 5,
            text: "Professional templates and easy-to-use interface. Highly recommended for any business.",
          },
        ],
      },
      integrations: {
        title: "Seamless Integrations",
        subtitle: "Connect with your favorite tools and payment methods",
        items: [
          {
            name: "bKash",
            logo: "💳",
            description: "Mobile payment integration",
          },
          { name: "Nagad", logo: "📱", description: "Digital wallet support" },
          {
            name: "WhatsApp",
            logo: "💬",
            description: "Share invoices instantly",
          },
          { name: "PayPal", logo: "🌐", description: "International payments" },
          { name: "Stripe", logo: "💰", description: "Credit card processing" },
          {
            name: "Bank Transfer",
            logo: "🏦",
            description: "Direct bank payments",
          },
        ],
      },
      stats: {
        title: "Growing Fast in Bangladesh",
        subtitle: "Join thousands of businesses already using InvoicePro BD",
        items: [
          { number: "10,000+", label: "Active Users", icon: Users },
          { number: "৳50M+", label: "Invoices Generated", icon: FileText },
          { number: "99.9%", label: "Uptime", icon: Zap },
          { number: "24/7", label: "Support", icon: Shield },
        ],
      },
      cta: {
        title: "Ready to Streamline Your Invoicing?",
        subtitle:
          "Join thousands of Bangladeshi businesses using InvoicePro BD",
        button: "Start Your Free Trial",
      },
    },
    bn: {
      hero: {
        title: "বাংলাদেশের জন্য পেশাদার ইনভয়েস জেনারেটর",
        subtitle:
          "সহজেই ইনভয়েস তৈরি, পরিচালনা এবং ট্র্যাক করুন। টাকা ও ডলার, বাংলা ও ইংরেজি সাপোর্ট।",
        cta: "ফ্রি ট্রায়াল শুরু করুন",
        demo: "ডেমো দেখুন",
      },
      features: {
        title: "আপনার ব্যবসা পরিচালনার জন্য সবকিছু",
        subtitle:
          "বাংলাদেশী ফ্রিল্যান্সার এবং ব্যবসার জন্য ডিজাইন করা শক্তিশালী ফিচার",
        items: [
          {
            icon: FileText,
            title: "স্মার্ট ইনভয়েস তৈরি",
            description:
              "কাস্টমাইজেবল টেমপ্লেট দিয়ে মিনিটেই পেশাদার ইনভয়েস তৈরি করুন",
          },
          {
            icon: Users,
            title: "কাস্টমার ম্যানেজমেন্ট",
            description:
              "আপনার সব ক্লায়েন্ট এবং তাদের পেমেন্ট হিস্টরি ট্র্যাক করুন",
          },
          {
            icon: CreditCard,
            title: "পেমেন্ট ট্র্যাকিং",
            description:
              "পেমেন্ট মনিটর করুন, রিমাইন্ডার পাঠান এবং বকেয়া ইনভয়েস ট্র্যাক করুন",
          },
          {
            icon: BarChart3,
            title: "ব্যবসায়িক বিশ্লেষণ",
            description:
              "বিস্তারিত রিপোর্ট দিয়ে আপনার ব্যবসার পারফরম্যান্স বুঝুন",
          },
          {
            icon: Globe,
            title: "মাল্টি-কারেন্সি সাপোর্ট",
            description:
              "টাকা, ডলার এবং অন্যান্য মুদ্রা নিয়ে নির্বিঘ্নে কাজ করুন",
          },
          {
            icon: Shield,
            title: "নিরাপদ ও নির্ভরযোগ্য",
            description:
              "এন্টারপ্রাইজ-গ্রেড নিরাপত্তা দিয়ে আপনার ডেটা সুরক্ষিত",
          },
        ],
      },
      testimonials: {
        title: "১০,০০০+ ব্যবসার বিশ্বস্ত",
        subtitle: "আমাদের কাস্টমাররা InvoicePro BD সম্পর্কে কী বলেন দেখুন",
        items: [
          {
            name: "আহমেদ হাসান",
            role: "ফ্রিল্যান্স ডেভেলপার",
            company: "ঢাকা",
            rating: 5,
            text: "InvoicePro BD আমার ফ্রিল্যান্স ব্যবসা পরিচালনার পদ্ধতি পরিবর্তন করেছে। বাংলা সাপোর্ট চমৎকার!",
          },
          {
            name: "ফাতিমা রহমান",
            role: "ব্যবসার মালিক",
            company: "চট্টগ্রাম",
            rating: 5,
            text: "ছোট ব্যবসার জন্য পারফেক্ট। পেমেন্ট ট্র্যাকিং ফিচার আমার প্রতি সপ্তাহে ঘন্টা সাশ্রয় করে।",
          },
          {
            name: "করিম আহমেদ",
            role: "কনসালট্যান্ট",
            company: "সিলেট",
            rating: 5,
            text: "পেশাদার টেমপ্লেট এবং ব্যবহার করা সহজ ইন্টারফেস। যেকোনো ব্যবসার জন্য অত্যন্ত সুপারিশকৃত।",
          },
        ],
      },
      integrations: {
        title: "নিরবচ্ছিন্ন ইন্টিগ্রেশন",
        subtitle: "আপনার পছন্দের টুলস এবং পেমেন্ট পদ্ধতির সাথে সংযুক্ত হন",
        items: [
          {
            name: "বিকাশ",
            logo: "💳",
            description: "মোবাইল পেমেন্ট ইন্টিগ্রেশন",
          },
          { name: "নগদ", logo: "📱", description: "ডিজিটাল ওয়ালেট সাপোর্ট" },
          {
            name: "হোয়াটসঅ্যাপ",
            logo: "💬",
            description: "তাৎক্ষণিক ইনভয়েস শেয়ার",
          },
          { name: "পেপাল", logo: "🌐", description: "আন্তর্জাতিক পেমেন্ট" },
          {
            name: "স্ট্রাইপ",
            logo: "💰",
            description: "ক্রেডিট কার্ড প্রসেসিং",
          },
          {
            name: "ব্যাংক ট্রান্সফার",
            logo: "🏦",
            description: "সরাসরি ব্যাংক পেমেন্ট",
          },
        ],
      },
      stats: {
        title: "বাংলাদেশে দ্রুত বৃদ্ধি",
        subtitle:
          "ইতিমধ্যে InvoicePro BD ব্যবহার করা হাজার হাজার ব্যবসার সাথে যোগ দিন",
        items: [
          { number: "১০,০০০+", label: "সক্রিয় ব্যবহারকারী", icon: Users },
          { number: "৳৫০M+", label: "ইনভয়েস তৈরি", icon: FileText },
          { number: "৯৯.৯%", label: "আপটাইম", icon: Zap },
          { number: "২৪/৭", label: "সাপোর্ট", icon: Shield },
        ],
      },
      cta: {
        title: "আপনার ইনভয়েসিং স্ট্রিমলাইন করতে প্রস্তুত?",
        subtitle:
          "InvoicePro BD ব্যবহার করা হাজার হাজার বাংলাদেশী ব্যবসার সাথে যোগ দিন",
        button: "আপনার ফ্রি ট্রায়াল শুরু করুন",
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <HeroSection t={t} />

      {/* Features Section */}
      <FeaturesSection t={t} />

      {/* Testimonials Section */}
      <TestimonialSection t={t} />

      {/* Integrations Section */}
      <IntegrationSection t={t} />

      {/* Stats Section */}
      <StatsSection t={t} />

      {/* CTA Section */}
      <CTASection
        title={t.cta.title}
        subTitle={t.cta.subtitle}
        buttonValue={t.cta.button}
        icon={<ArrowRight className=" w-5 h-5" />}
      />
    </div>
  );
}
