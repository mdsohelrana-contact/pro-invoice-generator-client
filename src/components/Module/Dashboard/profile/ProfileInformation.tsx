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

interface ProfileFormProps {
  profileData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    avatar?: string;
  };
  language: "en" | "bn";
  handleProfileSave: (e: React.FormEvent<HTMLFormElement>) => void;
  handleAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setProfileData: React.Dispatch<React.SetStateAction<any>>;
}

const ProfileInformation: React.FC<ProfileFormProps> = ({
  profileData,
  language,
  handleProfileSave,
  handleAvatarChange,
  setProfileData,
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="w-full"
    >
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle>
              <h2>
                {language === "en" ? "Profile Information" : "প্রোফাইল তথ্য"}
              </h2>
            </CardTitle>
            <CardDescription>
              {language === "en"
                ? "Update your personal details and avatar."
                : "আপনার ব্যক্তিগত বিবরণ এবং অবতার আপডেট করুন।"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.form
              onSubmit={handleProfileSave}
              className="space-y-6"
              variants={item}
            >
              {/* Avatar */}
              <motion.div
                className="flex items-center space-x-4"
                variants={item}
              >
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src={profileData.avatar || "/placeholder.svg"}
                    alt={
                      language === "en" ? "User Avatar" : "ব্যবহারকারীর অবতার"
                    }
                  />
                  <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="grid gap-1.5">
                  <Label htmlFor="avatar-upload">
                    {language === "en"
                      ? "Change Avatar"
                      : "অবতার পরিবর্তন করুন"}
                  </Label>
                  <Input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="max-w-xs"
                  />
                </div>
              </motion.div>

              {/* Name & Email */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={item}
              >
                <div className="grid gap-2">
                  <Label htmlFor="name">
                    {language === "en" ? "Name" : "নাম"}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">
                    {language === "en" ? "Email" : "ইমেল"}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    readOnly
                  />
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div className="grid gap-2" variants={item}>
                <Label htmlFor="phone">
                  {language === "en" ? "Phone" : "ফোন"}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) =>
                    setProfileData({ ...profileData, phone: e.target.value })
                  }
                />
              </motion.div>

              {/* Address */}
              <motion.div className="grid gap-2" variants={item}>
                <Label htmlFor="address">
                  {language === "en" ? "Address" : "ঠিকানা"}
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  value={profileData.address}
                  onChange={(e) =>
                    setProfileData({ ...profileData, address: e.target.value })
                  }
                  rows={3}
                />
              </motion.div>

              <motion.div variants={item}>
                <Button type="submit">
                  {language === "en" ? "Save Profile" : "প্রোফাইল সংরক্ষণ করুন"}
                </Button>
              </motion.div>
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProfileInformation;
