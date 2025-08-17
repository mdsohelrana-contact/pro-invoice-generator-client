/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Building2, Bell, CreditCard, Lock } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import ProfileInformation from "@/components/Module/Dashboard/profile/ProfileInformation";
import CompanyDetails from "@/components/Module/Dashboard/profile/CompanyDetails";
import Notifications from "@/components/Module/Dashboard/profile/Notifications";
import Billing from "@/components/Module/Dashboard/profile/Billing";
import SecuritySettings from "@/components/Module/Dashboard/profile/SecuritySettings";

import { RootState } from "@/store/store";
import { selectLanguage } from "@/store/slices/settingsSlice";
import { selectCurrentUser, updateUser } from "@/store/slices/userSlice";
import { selectCompany, updateCompany } from "@/store/slices/companySlice";
import { updateNotificationSettings } from "@/store/slices/notificationSlice";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const user = useSelector(selectCurrentUser);
  const company = useSelector(selectCompany);
  const settings = useSelector(
    (state: RootState) => state.notifications.settings
  );

  const [profileData, setProfileData] = React.useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    avatar: user?.avatar || "/placeholder-user.jpg",
  });

  const [companyData, setCompanyData] = React.useState({
    name: company.name || "",
    email: company.email || "",
    phone: company.phone || "",
    address: company.address || "",
    website: company.website || "",
    logo: company.logo || "/placeholder.svg",
  });

  const [notificationSettings, setNotificationSettings] =
    React.useState(settings);
  const [twoFactorEnabled, setTwoFactorEnabled] = React.useState(false);

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUser(profileData));
    toast.success(
      language === "en" ? "Profile Updated!" : "প্রোফাইল আপডেট হয়েছে!"
    );
  };

  const handleCompanySave = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateCompany(companyData));
    toast.success(
      language === "en" ? "Company Updated!" : "কোম্পানি আপডেট হয়েছে!"
    );
  };

  const handleNotificationSave = () => {
    dispatch(updateNotificationSettings(notificationSettings));
    toast.success(
      language === "en"
        ? "Notification Settings Updated!"
        : "বিজ্ঞপ্তি সেটিংস আপডেট হয়েছে!"
    );
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) =>
        setProfileData({
          ...profileData,
          avatar: event.target?.result as string,
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) =>
        setCompanyData({
          ...companyData,
          logo: event.target?.result as string,
        });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {language === "en" ? "Settings" : "সেটিংস"}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {language === "en"
            ? "Manage your account, company, and application settings."
            : "আপনার অ্যাকাউন্ট, কোম্পানি এবং অ্যাপ্লিকেশন সেটিংস পরিচালনা করুন।"}
        </p>
      </header>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-6 flex-wrap gap-2 mb-20 md:mb-3">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {language === "en" ? "Profile" : "প্রোফাইল"}
          </TabsTrigger>

          <TabsTrigger value="company" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            {language === "en" ? "Company" : "কোম্পানি"}
          </TabsTrigger>

          <TabsTrigger
            value="notifications"
            className="flex items-center gap-2"
          >
            <Bell className="h-4 w-4" />
            {language === "en" ? "Notifications" : "বিজ্ঞপ্তি"}
          </TabsTrigger>

          <TabsTrigger value="billing" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            {language === "en" ? "Billing" : "বিলিং"}
          </TabsTrigger>

          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            {language === "en" ? "Security" : "নিরাপত্তা"}
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <motion.div
            key={language} // triggers animation on language change
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <TabsContent value="profile">
              <ProfileInformation
                profileData={profileData}
                language={language}
                handleProfileSave={handleProfileSave}
                handleAvatarChange={handleAvatarChange}
                setProfileData={setProfileData}
              />
            </TabsContent>

            <TabsContent value="company">
              <CompanyDetails
                companyData={companyData}
                language={language}
                handleCompanySave={handleCompanySave}
                handleLogoChange={handleLogoChange}
                setCompanyData={setCompanyData}
              />
            </TabsContent>

            <TabsContent value="notifications">
              <Notifications
                language={language}
                notificationSettings={notificationSettings}
                setNotificationSettings={setNotificationSettings}
                handleNotificationSave={handleNotificationSave}
              />
            </TabsContent>

            <TabsContent value="billing">
              <Billing language={language} user={user as any} />
            </TabsContent>

            <TabsContent value="security">
              <SecuritySettings
                language={language}
                twoFactorEnabled={twoFactorEnabled}
                setTwoFactorEnabled={setTwoFactorEnabled}
              />
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
