"use client";

import { motion, AnimatePresence } from "framer-motion";

import Head from "next/head";
import Link from "next/link";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FileText, Eye, EyeOff, CheckCircle, Mail } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

import { selectLanguage } from "@/store/slices/settingsSlice";
import LanguageButton from "@/components/Module/Shared/Buttons/LanguageButton";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  acceptTerms?: string;
  general?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const SignUpPage = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const content = {
    en: {
      title: "Create Account",
      subtitle: "Start managing your invoices professionally",
      name: "Full Name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      acceptTerms: "I agree to the Terms of Service and Privacy Policy",
      submit: "Create Account",
      haveAccount: "Already have an account?",
      signIn: "Sign in here",
      featuresTitle: "Why choose InvoicePro BD?",
      features: [
        "Create professional invoices in minutes",
        "Support for Bangla and English",
        "Multiple payment methods (bKash, Nagad, Bank)",
        "Automated reminders and follow-ups",
        "Detailed analytics and reports",
      ],
    },
    bn: {
      title: "একাউন্ট তৈরি করুন",
      subtitle: "পেশাদারভাবে আপনার ইনভয়েস ম্যানেজ করুন",
      name: "পুরো নাম",
      email: "ইমেইল",
      password: "পাসওয়ার্ড",
      confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
      acceptTerms: "আমি টার্মস অব সার্ভিস এবং প্রাইভেসি পলিসিতে সম্মত",
      submit: "একাউন্ট তৈরি করুন",
      haveAccount: "ইতোমধ্যে একাউন্ট আছে?",
      signIn: "সাইন ইন করুন",
      featuresTitle: "কেন InvoicePro BD নির্বাচন করবেন?",
      features: [
        "মিনিটেই পেশাদার ইনভয়েস তৈরি করুন",
        "বাংলা ও ইংরেজি সাপোর্ট",
        "একাধিক পেমেন্ট পদ্ধতি (বিকাশ, নগদ, ব্যাংক)",
        "স্বয়ংক্রিয় রিমাইন্ডার ও ফলো-আপ",
        "বিস্তারিত অ্যানালিটিক্স ও রিপোর্ট",
      ],
    },
  };
  const text = content[language];

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm your password";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.acceptTerms)
      newErrors.acceptTerms = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    field: keyof SignupFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.toLowerCase(),
          password: formData.password,
        }),
      });

      if (!response.ok) {
        setErrors({ general: "Something went wrong. Please try again." });
        return;
      }

      toast.success("Account created successfully.");
      window.location.href = `/verify-email?email=${encodeURIComponent(
        formData.email
      )}`;
    } catch {
      setErrors({ general: "Something went wrong. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>{text.title} | InvoicePro BD</title>
        <meta name="description" content={text.subtitle} />
      </Head>

      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 flex items-center justify-center p-4"
        >
          <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
            {/* Left (Features) */}
            <motion.div
              className="hidden lg:block space-y-8"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  InvoicePro BD
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-800">
                {text.featuresTitle}
              </h2>

              <motion.ul
                initial="initial"
                animate="animate"
                variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
                className="space-y-4"
              >
                {text.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right (Signup Form) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl">
                <CardHeader>
                  <div className="flex justify-between">
                    <div />
                    <LanguageButton aria-label="Change Language" />
                  </div>
                  <CardTitle className="text-2xl text-center">
                    {text.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {text.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {errors.general && (
                    <p className="mb-4 text-sm text-red-600">
                      {errors.general}
                    </p>
                  )}

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                    >
                      <Label htmlFor="name">{text.name}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        disabled={isLoading}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600">{errors.name}</p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                    >
                      <Label htmlFor="email">{text.email}</Label>
                      <Input
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600">{errors.email}</p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                    >
                      <Label htmlFor="password">{text.password}</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) =>
                            handleInputChange("password", e.target.value)
                          }
                          disabled={isLoading}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          disabled={isLoading}
                        >
                          {showPassword ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-sm text-red-600">
                          {errors.password}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                    >
                      <Label htmlFor="confirmPassword">
                        {text.confirmPassword}
                      </Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            handleInputChange("confirmPassword", e.target.value)
                          }
                          disabled={isLoading}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          disabled={isLoading}
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                      </div>
                      {formData.confirmPassword === formData.password && (
                        <div className="flex items-center text-green-600 mt-1">
                          <CheckCircle size={16} className="mr-1" />{" "}
                          <span className="text-sm">Passwords match</span>
                        </div>
                      )}
                      {errors.confirmPassword && (
                        <p className="text-sm text-red-600">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-2"
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                    >
                      <Checkbox
                        checked={formData.acceptTerms}
                        onCheckedChange={(v) =>
                          handleInputChange("acceptTerms", v as boolean)
                        }
                        disabled={isLoading}
                      />
                      <Label htmlFor="acceptTerms" className="cursor-pointer">
                        {text.acceptTerms}
                      </Label>
                    </motion.div>
                    {errors.acceptTerms && (
                      <p className="text-sm text-red-600">
                        {errors.acceptTerms}
                      </p>
                    )}

                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                    >
                      <Button
                        disabled={isLoading}
                        type="submit"
                        className="w-full"
                      >
                        {isLoading ? "Creating..." : text.submit}
                      </Button>
                    </motion.div>
                  </form>

                  <Separator className="my-6" />

                  <div className="text-center text-sm text-gray-600">
                    {text.haveAccount}{" "}
                    <Link href="/login" className="font-medium underline">
                      {text.signIn}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SignUpPage;
