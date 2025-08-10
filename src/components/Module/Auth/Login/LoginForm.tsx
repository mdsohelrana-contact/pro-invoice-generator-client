"use client";

import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import { FileText } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useLanguage } from "@/components/context/LanguageContext";
import LanguageButton from "../../Shared/Buttons/LanguageButton";
import EmailTab from "./EmailTab";
import PhoneTab from "./PhoneTab";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";
import Head from "next/head";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
const LoginForm = () => {
  const { language } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "otp">("email");

  const content = {
    en: {
      title: "Welcome Back",
      subtitle: "Sign in to your InvoicePro BD account",
      emailTab: "Email & Password",
      otpTab: "Phone & OTP",
      email: "Email",
      password: "Password",
      phone: "Phone Number",
      otp: "OTP Code",
      sendOtp: "Send OTP",
      signIn: "Sign In",
      forgotPassword: "Forgot Password?",
      noAccount: "Don't have an account?",
      signUp: "Sign up here",
      orContinue: "Or continue with",
      features: {
        title: "Why choose InvoicePro BD?",
        items: [
          "Create professional invoices in minutes",
          "Support for Bangla and English",
          "Multiple payment methods (bKash, Nagad, Bank)",
          "Automated reminders and follow-ups",
          "Detailed analytics and reports",
        ],
      },
    },
    bn: {
      title: "স্বাগতম",
      subtitle: "আপনার InvoicePro BD অ্যাকাউন্টে সাইন ইন করুন",
      emailTab: "ইমেইল ও পাসওয়ার্ড",
      otpTab: "ফোন ও OTP",
      email: "ইমেইল",
      password: "পাসওয়ার্ড",
      phone: "ফোন নম্বর",
      otp: "OTP কোড",
      sendOtp: "OTP পাঠান",
      signIn: "সাইন ইন",
      forgotPassword: "পাসওয়ার্ড ভুলে গেছেন?",
      noAccount: "অ্যাকাউন্ট নেই?",
      signUp: "এখানে সাইন আপ করুন",
      orContinue: "অথবা চালিয়ে যান",
      features: {
        title: "কেন InvoicePro BD বেছে নেবেন?",
        items: [
          "মিনিটেই পেশাদার ইনভয়েস তৈরি করুন",
          "বাংলা ও ইংরেজি সাপোর্ট",
          "একাধিক পেমেন্ট পদ্ধতি (বিকাশ, নগদ, ব্যাংক)",
          "স্বয়ংক্রিয় রিমাইন্ডার ও ফলো-আপ",
          "বিস্তারিত অ্যানালিটিক্স ও রিপোর্ট",
        ],
      },
    },
  };

  const currentContent = content[language];

  return (
    <>
      <Head>
        <title>{currentContent.title} | InvoicePro BD</title>
        <meta name="description" content={currentContent.subtitle} />
        <meta
          name="keywords"
          content={
            language === "en"
              ? "invoice, Bangladesh, bKash, Nagad, multi-language"
              : "ইনভয়েস, বাংলাদেশ, বিকাশ, নগদ, মাল্টি-ল্যাঙ্গুয়েজ"
          }
        />
        <meta
          property="og:title"
          content={`${currentContent.title} | InvoicePro BD`}
        />
        <meta property="og:description" content={currentContent.subtitle} />
        <meta property="og:type" content="website" />
      </Head>

      <AnimatePresence mode="wait">
        <motion.div
          key={language} // triggers animation when language changes
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 flex items-center justify-center p-4"
        >
          <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Features */}
            <motion.div
              className="hidden lg:block space-y-8"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    InvoicePro BD
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {currentContent.features.title}
                </h1>
              </div>

              <motion.div
                className="space-y-4"
                initial="initial"
                animate="animate"
                variants={{
                  initial: {},
                  animate: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {currentContent.features.items.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full" />
                    <p className="text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-2">
                  {language === "en"
                    ? "Trusted by 10,000+ businesses"
                    : "১০,০০০+ ব্যবসার বিশ্বস্ত"}
                </h3>
                <p className="text-blue-100">
                  {language === "en"
                    ? "Join thousands of Bangladeshi entrepreneurs who trust InvoicePro BD for their invoicing needs."
                    : "হাজারো বাংলাদেশী উদ্যোক্তার সাথে যোগ দিন যারা তাদের ইনভয়েসিং প্রয়োজনে InvoicePro BD-তে বিশ্বাস করেন।"}
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
                <header className="text-center pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div></div>
                    <LanguageButton aria-label="Change Language" />
                  </div>

                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    {currentContent.title}
                  </h1>

                  <p className="text-gray-600">{currentContent.subtitle}</p>
                </header>
                <CardContent>
                  <Tabs
                    value={loginMethod}
                    onValueChange={(value) =>
                      setLoginMethod(value as "email" | "otp")
                    }
                    className="mb-6"
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="email">
                        {currentContent.emailTab}
                      </TabsTrigger>
                      <TabsTrigger value="otp">
                        {currentContent.otpTab}
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="email" className="space-y-4 mt-6">
                      <EmailTab
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        currentContent={currentContent}
                        fadeInUp={fadeInUp}
                      />
                    </TabsContent>

                    <TabsContent value="otp" className="space-y-4 mt-6">
                      <PhoneTab
                        currentContent={currentContent}
                        fadeInUp={fadeInUp}
                      />
                    </TabsContent>
                  </Tabs>

                  <motion.div
                    className="text-center mt-4"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      aria-label={currentContent.forgotPassword}
                      href="/forgot-password"
                      className="text-sm primary-color hover:primary-hover"
                    >
                      {currentContent.forgotPassword}
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.4 }}
                  >
                    <div className="relative my-6">
                      <Separator />
                      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
                        {currentContent.orContinue}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <PrimaryButton>Facebook</PrimaryButton>

                      <PrimaryButton>Facebook</PrimaryButton>
                    </div>
                  </motion.div>

                  <motion.div
                    className="text-center mt-6"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-sm text-gray-600">
                      {currentContent.noAccount}{" "}
                      <Link
                        href="/forgot-password"
                        className="text-sm primary-color hover:primary-hover"
                        aria-label={currentContent.signUp}
                      >
                        {currentContent.signUp}
                      </Link>
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default LoginForm;
