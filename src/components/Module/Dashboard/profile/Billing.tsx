"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface BillingProps {
  language: "en" | "bn";
  user: { plan: "free" | "premium" };
}

const Billing: React.FC<BillingProps> = ({ language, user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleAddPayment = () => {
    // API call to save payment method
    console.log({ cardNumber, expiry, cvv });
    setIsModalOpen(false);
  };

  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.5 } },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={container}>
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle>
                <h2>{language === "en" ? "Billing & Subscription" : "বিলিং ও সাবস্ক্রিপশন"}</h2>
              </CardTitle>
              <CardDescription>
                {language === "en"
                  ? "Manage your subscription plan and payment methods."
                  : "আপনার সাবস্ক্রিপশন প্ল্যান এবং পেমেন্ট পদ্ধতি পরিচালনা করুন।"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Current Plan */}
              <motion.div variants={item} className="grid gap-2">
                <Label>{language === "en" ? "Current Plan" : "বর্তমান প্ল্যান"}</Label>
                <div className="flex items-center justify-between rounded-md border p-4">
                  <span className="font-medium">
                    {user?.plan === "premium"
                      ? language === "en"
                        ? "Premium Plan"
                        : "প্রিমিয়াম প্ল্যান"
                      : language === "en"
                      ? "Free Plan"
                      : "ফ্রি প্ল্যান"}
                  </span>
                  {user?.plan === "free" && (
                    <Link href="/pricing">
                      <Button size="sm">
                        {language === "en" ? "Upgrade" : "আপগ্রেড করুন"}
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>

              <Separator />

              {/* Payment Method */}
              <motion.div variants={item} className="grid gap-2">
                <Label>{language === "en" ? "Payment Method" : "পেমেন্ট পদ্ধতি"}</Label>
                <div className="flex items-center justify-between rounded-md border p-4">
                  <span className="text-gray-600 dark:text-gray-400">
                    {language === "en"
                      ? "No payment method on file."
                      : "কোনো পেমেন্ট পদ্ধতি ফাইল করা নেই।"}
                  </span>
                  <Button variant="outline" size="sm" onClick={() => setIsModalOpen(true)}>
                    {language === "en"
                      ? "Add Payment Method"
                      : "পেমেন্ট পদ্ধতি যোগ করুন"}
                  </Button>
                </div>
              </motion.div>

              <Separator />

              {/* Billing History */}
              <motion.div variants={item} className="grid gap-2">
                <Label>{language === "en" ? "Billing History" : "বিলিং ইতিহাস"}</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === "en"
                    ? "View your past invoices and payment history."
                    : "আপনার অতীতের ইনভয়েস এবং পেমেন্ট ইতিহাস দেখুন।"}
                </p>
                <Button variant="outline" size="sm" className="w-fit">
                  {language === "en" ? "View Billing History" : "বিলিং ইতিহাস দেখুন"}
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Payment Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{language === "en" ? "Add Payment Method" : "পেমেন্ট পদ্ধতি যোগ করুন"}</DialogTitle>
            <DialogDescription>
              {language === "en"
                ? "Enter your card details to securely save your payment method."
                : "আপনার কার্ডের বিবরণ লিখুন এবং নিরাপদভাবে পেমেন্ট পদ্ধতি সংরক্ষণ করুন।"}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); handleAddPayment(); }} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="card-number">{language === "en" ? "Card Number" : "কার্ড নম্বর"}</Label>
              <Input
                id="card-number"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="xxxx xxxx xxxx xxxx"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="expiry">{language === "en" ? "Expiry Date" : "মেয়াদ শেষ"} (MM/YY)</Label>
                <Input
                  id="expiry"
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvv">{language === "en" ? "CVV" : "সিভিভি"}</Label>
                <Input
                  id="cvv"
                  type="password"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="XXX"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">{language === "en" ? "Save Payment Method" : "পেমেন্ট পদ্ধতি সংরক্ষণ করুন"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Billing;
