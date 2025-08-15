"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

import InfoCard from "@/components/Module/Shared/Components/InfoCard";
import SectionHeader from "@/components/Module/Shared/Components/SectionHeader";
import ContactForm from "@/components/Module/Contact/ContactForm";
import OfficeHour from "@/components/Module/Contact/OfficeHour";
import FAQQuickLinks from "@/components/Module/Contact/FAQQuickLinks";
import FastResponseCard from "@/components/Module/Contact/FastResponseCard";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";

const ContactPage = () => {
  const language = useSelector(selectLanguage);

  const contactInfo = [
    {
      icon: Mail,
      title: language === "en" ? "Email Us" : "ইমেইল করুন",
      content: "support@invoiceprobd.com",
      description:
        language === "en"
          ? "Send us an email anytime"
          : "যেকোনো সময় আমাদের ইমেইল করুন",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: language === "en" ? "Call Us" : "ফোন করুন",
      content: "+880 1700-000000",
      description:
        language === "en"
          ? "Mon-Fri from 9am to 6pm"
          : "সোম-শুক্র সকাল ৯টা থেকে সন্ধ্যা ৬টা",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MessageCircle,
      title: language === "en" ? "WhatsApp" : "হোয়াটসঅ্যাপ",
      content: "+880 1700-000000",
      description:
        language === "en"
          ? "Quick support via WhatsApp"
          : "হোয়াটসঅ্যাপের মাধ্যমে দ্রুত সাপোর্ট",
      color: "from-green-400 to-green-500",
    },
    {
      icon: MapPin,
      title: language === "en" ? "Visit Us" : "আমাদের দেখুন",
      content: language === "en" ? "Dhaka, Bangladesh" : "ঢাকা, বাংলাদেশ",
      description:
        language === "en"
          ? "Come say hello at our office"
          : "আমাদের অফিসে এসে হ্যালো বলুন",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
        {/* Header */}

        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <section aria-labelledby="contact-hero-title" className="mb-12">
            <SectionHeader
              titleClassName="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent"
              title={language === "en" ? "Get in Touch" : "যোগাযোগ করুন"}
              subTitle={
                language === "en"
                  ? "Have questions about InvoicePro BD? We're here to help you succeed with your invoicing needs."
                  : "InvoicePro BD সম্পর্কে প্রশ্ন আছে? আমরা আপনার ইনভয়েসিং প্রয়োজনে সফল হতে সাহায্য করতে এখানে আছি।"
              }
            />
          </section>

          {/* Contact Info Cards */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <InfoCard
                  key={index}
                  icon={Icon}
                  title={info.title}
                  subtitle={info.content}
                  description={info.description}
                  color={info.color}
                />
              );
            })}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <OfficeHour language={language} />

              {/* FAQ Quick Links */}
              <FAQQuickLinks language={language} />

              {/* Response Time */}
              <FastResponseCard language={language} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
