/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface NotificationsProps {
  language: "en" | "bn";
  notificationSettings: {
    invoiceReminders: boolean;
    paymentConfirmations: boolean;
    newCustomerAlerts: boolean;
    systemUpdates: boolean;
  };
  setNotificationSettings: React.Dispatch<React.SetStateAction<any>>;
  handleNotificationSave: () => void;
}

const Notifications: React.FC<NotificationsProps> = ({
  language,
  notificationSettings,
  setNotificationSettings,
  handleNotificationSave,
}) => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.5 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle>
              <h2>{language === "en" ? "Notification Preferences" : "বিজ্ঞপ্তি পছন্দ"}</h2>
            </CardTitle>
            <CardDescription>
              {language === "en"
                ? "Control how and when you receive notifications."
                : "আপনি কীভাবে এবং কখন বিজ্ঞপ্তি পাবেন তা নিয়ন্ত্রণ করুন।"}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {[
              {
                id: "invoice-reminders",
                title: language === "en" ? "Invoice Reminders" : "ইনভয়েস রিমাইন্ডার",
                description:
                  language === "en"
                    ? "Receive alerts for upcoming or overdue invoices."
                    : "আসন্ন বা বিলম্বিত ইনভয়েসের জন্য সতর্কতা পান।",
                checked: notificationSettings.invoiceReminders,
              },
              {
                id: "payment-confirmations",
                title: language === "en" ? "Payment Confirmations" : "পেমেন্ট নিশ্চিতকরণ",
                description:
                  language === "en"
                    ? "Get notified when a payment is successfully processed."
                    : "যখন একটি পেমেন্ট সফলভাবে প্রক্রিয়া করা হয় তখন বিজ্ঞপ্তি পান।",
                checked: notificationSettings.paymentConfirmations,
              },
              {
                id: "new-customer-alerts",
                title: language === "en" ? "New Customer Alerts" : "নতুন গ্রাহক সতর্কতা",
                description:
                  language === "en"
                    ? "Receive alerts when a new customer is added."
                    : "যখন একজন নতুন গ্রাহক যোগ করা হয় তখন সতর্কতা পান।",
                checked: notificationSettings.newCustomerAlerts,
              },
              {
                id: "system-updates",
                title: language === "en" ? "System Updates" : "সিস্টেম আপডেট",
                description:
                  language === "en"
                    ? "Get notified about new features and important announcements."
                    : "নতুন বৈশিষ্ট্য এবং গুরুত্বপূর্ণ ঘোষণা সম্পর্কে বিজ্ঞপ্তি পান।",
                checked: notificationSettings.systemUpdates,
              },
            ].map((notif) => (
              <motion.div
                key={notif.id}
                className="flex items-center justify-between"
                variants={item}
              >
                <Label htmlFor={notif.id} className="flex flex-col space-y-1">
                  <span>{notif.title}</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    {notif.description}
                  </span>
                </Label>
                <Switch
                  id={notif.id}
                  checked={notif.checked}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({
                      ...notificationSettings,
                      [notif.id]: checked,
                    })
                  }
                />
              </motion.div>
            ))}
            <motion.div variants={item}>
              <Button onClick={handleNotificationSave}>
                {language === "en"
                  ? "Save Notification Settings"
                  : "বিজ্ঞপ্তি সেটিংস সংরক্ষণ করুন"}
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Notifications;
