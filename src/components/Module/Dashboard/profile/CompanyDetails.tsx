/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CompanyFormProps {
  companyData: {
    name: string;
    email: string;
    phone: string;
    website: string;
    address: string;
    logo?: string;
  };
  language: "en" | "bn";
  handleCompanySave: (e: React.FormEvent<HTMLFormElement>) => void;
  handleLogoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setCompanyData: React.Dispatch<React.SetStateAction<any>>;
}

const CompanyDetails: React.FC<CompanyFormProps> = ({
  companyData,
  language,
  handleCompanySave,
  handleLogoChange,
  setCompanyData,
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
              <h2>
                {language === "en" ? "Company Details" : "কোম্পানির বিবরণ"}
              </h2>
            </CardTitle>
            <CardDescription>
              {language === "en"
                ? "Update your company information for invoices and branding."
                : "ইনভয়েস এবং ব্র্যান্ডিংয়ের জন্য আপনার কোম্পানির তথ্য আপডেট করুন।"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <motion.form
              onSubmit={handleCompanySave}
              className="space-y-6"
              variants={item}
            >
              {/* Logo */}
              <motion.div
                className="flex items-center space-x-4"
                variants={item}
              >
                <Avatar className="h-20 w-20 rounded-none">
                  <AvatarImage
                    src={companyData.logo || "/placeholder.svg"}
                    alt={language === "en" ? "Company Logo" : "কোম্পানির লোগো"}
                    className="object-contain"
                  />
                  <AvatarFallback className="rounded-none">
                    {companyData.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-1.5">
                  <Label htmlFor="logo-upload">
                    {language === "en" ? "Change Logo" : "লোগো পরিবর্তন করুন"}
                  </Label>
                  <Input
                    id="logo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="max-w-xs"
                  />
                </div>
              </motion.div>

              {/* Company Name */}
              <motion.div className="grid gap-2" variants={item}>
                <Label htmlFor="company-name">
                  {language === "en" ? "Company Name" : "কোম্পানির নাম"}
                </Label>
                <Input
                  id="company-name"
                  value={companyData.name}
                  onChange={(e) =>
                    setCompanyData({ ...companyData, name: e.target.value })
                  }
                />
              </motion.div>

              {/* Email */}
              <motion.div className="grid gap-2" variants={item}>
                <Label htmlFor="company-email">
                  {language === "en" ? "Company Email" : "কোম্পানির ইমেল"}
                </Label>
                <Input
                  id="company-email"
                  type="email"
                  value={companyData.email}
                  onChange={(e) =>
                    setCompanyData({ ...companyData, email: e.target.value })
                  }
                />
              </motion.div>

              {/* Phone */}
              <motion.div className="grid gap-2" variants={item}>
                <Label htmlFor="company-phone">
                  {language === "en" ? "Company Phone" : "কোম্পানির ফোন"}
                </Label>
                <Input
                  id="company-phone"
                  type="tel"
                  value={companyData.phone}
                  onChange={(e) =>
                    setCompanyData({ ...companyData, phone: e.target.value })
                  }
                />
              </motion.div>

              {/* Website */}
              <motion.div className="grid gap-2" variants={item}>
                <Label htmlFor="company-website">
                  {language === "en" ? "Website" : "ওয়েবসাইট"}
                </Label>
                <Input
                  id="company-website"
                  type="url"
                  value={companyData.website}
                  onChange={(e) =>
                    setCompanyData({ ...companyData, website: e.target.value })
                  }
                />
              </motion.div>

              {/* Address */}
              <motion.div className="grid gap-2" variants={item}>
                <Label htmlFor="company-address">
                  {language === "en" ? "Address" : "ঠিকানা"}
                </Label>
                <Textarea
                  id="company-address"
                  value={companyData.address}
                  onChange={(e) =>
                    setCompanyData({ ...companyData, address: e.target.value })
                  }
                  rows={3}
                />
              </motion.div>

              <motion.div variants={item}>
                <Button type="submit">
                  {language === "en"
                    ? "Save Company Settings"
                    : "কোম্পানির সেটিংস সংরক্ষণ করুন"}
                </Button>
              </motion.div>
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default CompanyDetails;
