"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Users,
  CreditCard,
  BarChart3,
  Globe,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Play,
} from "lucide-react";

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "bn">("en");

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
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              InvoicePro BD
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/templates"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Templates
            </Link>
            <Link
              href="/help"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Help
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "bn" : "en")}
              className="text-sm"
            >
              {language === "en" ? "বাংলা" : "English"}
            </Button>
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            🎉 New: WhatsApp Integration Available
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <Play className="mr-2 w-5 h-5" />
              {t.hero.demo}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">{t.testimonials.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.integrations.title}
            </h2>
            <p className="text-xl text-gray-600">{t.integrations.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {t.integrations.items.map((integration, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{integration.logo}</div>
                  <h3 className="font-semibold mb-2">{integration.name}</h3>
                  <p className="text-sm text-gray-600">
                    {integration.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.stats.title}
            </h2>
            <p className="text-xl opacity-90">{t.stats.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3"
            >
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">InvoicePro BD</span>
              </div>
              <p className="text-gray-400">
                Professional invoice generator for Bangladeshi businesses.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templates"
                    className="hover:text-white transition-colors"
                  >
                    Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 InvoicePro BD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
