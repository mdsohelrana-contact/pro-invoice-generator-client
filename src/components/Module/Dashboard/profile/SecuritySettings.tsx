"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";

interface SecuritySettingsProps {
  language: "en" | "bn";
  onChangePassword?: (current: string, newPass: string, confirmPass: string) => void;
  twoFactorEnabled: boolean;
  setTwoFactorEnabled: (value: boolean) => void;
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({
  language,
  onChangePassword,
  twoFactorEnabled,
  setTwoFactorEnabled,
}) => {
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (onChangePassword) {
      onChangePassword(currentPassword, newPassword, confirmPassword);
    }
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>
            {language === "en" ? "Security Settings" : "নিরাপত্তা সেটিংস"}
          </CardTitle>
          <CardDescription>
            {language === "en"
              ? "Manage your account security and password."
              : "আপনার অ্যাকাউন্ট নিরাপত্তা এবং পাসওয়ার্ড পরিচালনা করুন।"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Password Change Form */}
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="current-password">
                {language === "en" ? "Current Password" : "বর্তমান পাসওয়ার্ড"}
              </Label>
              <Input
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="new-password">
                {language === "en" ? "New Password" : "নতুন পাসওয়ার্ড"}
              </Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirm-password">
                {language === "en" ? "Confirm New Password" : "নতুন পাসওয়ার্ড নিশ্চিত করুন"}
              </Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit">
              {language === "en" ? "Change Password" : "পাসওয়ার্ড পরিবর্তন করুন"}
            </Button>
          </form>

          <Separator className="my-4" />

          {/* Two-Factor Authentication */}
          <div className="flex items-center justify-between">
            <Label htmlFor="two-factor" className="flex flex-col space-y-1">
              <span>
                {language === "en" ? "Two-Factor Authentication" : "দুই-ধাপ যাচাইকরণ"}
              </span>
              <span className="font-normal leading-snug text-muted-foreground">
                {language === "en"
                  ? "Add an extra layer of security to your account."
                  : "আপনার অ্যাকাউন্টে নিরাপত্তার একটি অতিরিক্ত স্তর যোগ করুন।"}
              </span>
            </Label>
            <Switch
              id="two-factor"
              checked={twoFactorEnabled}
              onCheckedChange={setTwoFactorEnabled}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SecuritySettings;
