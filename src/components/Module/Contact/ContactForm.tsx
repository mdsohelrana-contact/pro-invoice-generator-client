"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import FormFieldSelect from "@/components/Module/Form/FormFieldSelect";
import FormFieldTextarea from "@/components/Module/Form/FormFieldTextarea";
import FormFieldInput from "@/components/Module/Form/FormFieldInput";

import { Form } from "@/components/ui/form";

import PrimaryButton from "@/components/Module/Shared/Buttons/PrimaryButton";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useLanguage } from "@/components/context/LanguageContext";
import { Send } from "lucide-react";
import { useStore } from "@/lib/store";

const formSchema = z.object({
  name: z.string().min(1, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  inquiryType: z
    .enum(["general", "support", "billing", "feature", "partnership"])
    .default("general"),
  message: z.string().min(1, "Please enter your message"),
});

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Technical Support" },
  { value: "billing", label: "Billing Question" },
  { value: "feature", label: "Feature Request" },
  { value: "partnership", label: "Partnership" },
];

const ContactForm = () => {
   const { language } = useStore();

  const translatedInquiryTypes = inquiryTypes.map(({ value, label }) => ({
    value,
    label:
      language === "en"
        ? label
        : value === "general"
        ? "সাধারণ জিজ্ঞাসা"
        : value === "support"
        ? "টেকনিক্যাল সাপোর্ট"
        : value === "billing"
        ? "বিলিং প্রশ্ন"
        : value === "feature"
        ? "ফিচার অনুরোধ"
        : "অংশীদারিত্ব",
  }));

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "general",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    // Simulate submission delay (replace with real API call)
    setTimeout(() => {
      alert(
        language === "en"
          ? "Thank you for contacting us. We'll get back to you soon."
          : "যোগাযোগ করার জন্য ধন্যবাদ। আমরা দ্রুত আপনার সাথে যোগাযোগ করব।"
      );
      setIsSubmitting(false);
      form.reset();
    }, 1500);

    console.log("Form data submitted:", values);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="border-0 bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">
            {language === "en" ? "Send us a Message" : "আমাদের একটি বার্তা পাঠান"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-4">
                <FormFieldInput
                  control={form.control}
                  name="name"
                  label={language === "en" ? "Full Name" : "পূর্ণ নাম"}
                  placeholder={language === "en" ? "Enter your full name" : "আপনার পূর্ণ নাম লিখুন"}
                  required
                />
                <FormFieldInput
                  control={form.control}
                  name="email"
                  label={language === "en" ? "Email Address" : "ইমেইল ঠিকানা"}
                  placeholder={language === "en" ? "Enter your email" : "আপনার ইমেইল লিখুন"}
                  type="email"
                  required
                />
              </div>

              <FormFieldInput
                control={form.control}
                name="company"
                label={language === "en" ? "Company Name (optional)" : "কোম্পানির নাম (ঐচ্ছিক)"}
                placeholder={language === "en" ? "Your company name" : "আপনার কোম্পানির নাম"}
              />

            

              <FormFieldInput
                control={form.control}
                name="phone"
                label={language === "en" ? "Phone Number (optional)" : "ফোন নম্বর (ঐচ্ছিক)"}
                placeholder={language === "en" ? "Your phone number" : "আপনার ফোন নম্বর"}
              />

              <FormFieldSelect
                control={form.control}
                name="inquiryType"
                label={language === "en" ? "Inquiry Type" : "জিজ্ঞাসার ধরন"}
                options={translatedInquiryTypes}
                placeholder={language === "en" ? "Select inquiry type" : "জিজ্ঞাসার ধরন নির্বাচন করুন"}
                required
              />

              <FormFieldTextarea
                control={form.control}
                name="message"
                label={language === "en" ? "Message" : "বার্তা"}
                placeholder={language === "en" ? "Write your message here..." : "এখানে আপনার বার্তা লিখুন..."}
                required
              />

              <PrimaryButton type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    {language === "en" ? "Sending..." : "পাঠানো হচ্ছে..."}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {language === "en" ? "Send Message" : "বার্তা পাঠান"}
                  </>
                )}
              </PrimaryButton>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
