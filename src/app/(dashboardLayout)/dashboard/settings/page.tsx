'use client'

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useStore } from "@/lib/store"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Building2, Bell, CreditCard, Lock, Globe } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import Link from "next/link"
const SettingsPage = () => {
      const { user, updateUser, company, updateCompany, language, setLanguage, notifications, updateNotificationSettings, currency, setCurrency } = useStore()


  const [profileData, setProfileData] = React.useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    avatar: user?.avatar || '/placeholder-user.jpg',
  })

  const [companyData, setCompanyData] = React.useState({
    name: company.name || '',
    address: company.address || '',
    email: company.email || '',
    phone: company.phone || '',
    website: company.website || '',
    logo: company.logo || '/placeholder.svg',
  })

  const [notificationSettings, setNotificationSettings] = React.useState({
    invoiceReminders: notifications.settings.invoiceReminders,
    paymentConfirmations: notifications.settings.paymentConfirmations,
    newCustomerAlerts: notifications.settings.newCustomerAlerts,
    systemUpdates: notifications.settings.systemUpdates,
  })

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault()
    updateUser(profileData)
   toast.success(language === 'en' ? "Profile Settings Updated!" : "প্রোফাইল সেটিংস আপডেট করা হয়েছে!");
  }

  const handleCompanySave = (e: React.FormEvent) => {
    e.preventDefault()
    updateCompany(companyData)
    toast.success(language === 'en' ? "Company Settings Updated!" : "কম্পানি সেটিংস আপডেট করা হয়েছে!");
  }

  const handleNotificationSave = () => {
    updateNotificationSettings(notificationSettings)
    toast.success(language === 'en' ? "Notification Settings Updated!" : "নোটিফিকেশন সেটিংস আপডেট করা হয়েছে!");
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setProfileData({ ...profileData, avatar: event.target?.result as string })
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setCompanyData({ ...companyData, logo: event.target?.result as string })
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
   <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {language === 'en' ? 'Settings' : 'সেটিংস'}
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        {language === 'en' ? 'Manage your account, company, and application settings.' : 'আপনার অ্যাকাউন্ট, কোম্পানি এবং অ্যাপ্লিকেশন সেটিংস পরিচালনা করুন।'}
      </p>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-6 h-auto flex-wrap">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" /> {language === 'en' ? 'Profile' : 'প্রোফাইল'}
          </TabsTrigger>
          <TabsTrigger value="company" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" /> {language === 'en' ? 'Company' : 'কোম্পানি'}
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" /> {language === 'en' ? 'Notifications' : 'বিজ্ঞপ্তি'}
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" /> {language === 'en' ? 'Billing' : 'বিলিং'}
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="h-4 w-4" /> {language === 'en' ? 'Security' : 'নিরাপত্তা'}
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-2">
            <Globe className="h-4 w-4" /> {language === 'en' ? 'Preferences' : 'পছন্দ'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Profile Information' : 'প্রোফাইল তথ্য'}</CardTitle>
              <CardDescription>{language === 'en' ? 'Update your personal details and avatar.' : 'আপনার ব্যক্তিগত বিবরণ এবং অবতার আপডেট করুন।'}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileSave} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={profileData.avatar || "/placeholder.svg"} alt="User Avatar" />
                    <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1.5">
                    <Label htmlFor="avatar-upload">{language === 'en' ? 'Change Avatar' : 'অবতার পরিবর্তন করুন'}</Label>
                    <Input id="avatar-upload" type="file" accept="image/*" onChange={handleAvatarChange} className="max-w-xs" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">{language === 'en' ? 'Name' : 'নাম'}</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">{language === 'en' ? 'Email' : 'ইমেল'}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      readOnly // Email usually not editable directly
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">{language === 'en' ? 'Phone' : 'ফোন'}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">{language === 'en' ? 'Address' : 'ঠিকানা'}</Label>
                  <Textarea
                    id="address"
                    value={profileData.address}
                    onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                    rows={3}
                  />
                </div>
                <Button type="submit">{language === 'en' ? 'Save Profile' : 'প্রোফাইল সংরক্ষণ করুন'}</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="company">
          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Company Details' : 'কোম্পানির বিবরণ'}</CardTitle>
              <CardDescription>{language === 'en' ? 'Update your company information for invoices and branding.' : 'ইনভয়েস এবং ব্র্যান্ডিংয়ের জন্য আপনার কোম্পানির তথ্য আপডেট করুন।'}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCompanySave} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20 rounded-none">
                    <AvatarImage src={companyData.logo || "/placeholder.svg"} alt="Company Logo" className="object-contain" />
                    <AvatarFallback className="rounded-none">{companyData.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1.5">
                    <Label htmlFor="logo-upload">{language === 'en' ? 'Change Logo' : 'লোগো পরিবর্তন করুন'}</Label>
                    <Input id="logo-upload" type="file" accept="image/*" onChange={handleLogoChange} className="max-w-xs" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company-name">{language === 'en' ? 'Company Name' : 'কোম্পানির নাম'}</Label>
                  <Input
                    id="company-name"
                    value={companyData.name}
                    onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company-email">{language === 'en' ? 'Company Email' : 'কোম্পানির ইমেল'}</Label>
                  <Input
                    id="company-email"
                    type="email"
                    value={companyData.email}
                    onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company-phone">{language === 'en' ? 'Company Phone' : 'কোম্পানির ফোন'}</Label>
                  <Input
                    id="company-phone"
                    type="tel"
                    value={companyData.phone}
                    onChange={(e) => setCompanyData({ ...companyData, phone: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company-website">{language === 'en' ? 'Website' : 'ওয়েবসাইট'}</Label>
                  <Input
                    id="company-website"
                    type="url"
                    value={companyData.website}
                    onChange={(e) => setCompanyData({ ...companyData, website: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company-address">{language === 'en' ? 'Address' : 'ঠিকানা'}</Label>
                  <Textarea
                    id="company-address"
                    value={companyData.address}
                    onChange={(e) => setCompanyData({ ...companyData, address: e.target.value })}
                    rows={3}
                  />
                </div>
                <Button type="submit">{language === 'en' ? 'Save Company Settings' : 'কোম্পানির সেটিংস সংরক্ষণ করুন'}</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Notification Preferences' : 'বিজ্ঞপ্তি পছন্দ'}</CardTitle>
              <CardDescription>{language === 'en' ? 'Control how and when you receive notifications.' : 'আপনি কীভাবে এবং কখন বিজ্ঞপ্তি পাবেন তা নিয়ন্ত্রণ করুন।'}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="invoice-reminders" className="flex flex-col space-y-1">
                  <span>{language === 'en' ? 'Invoice Reminders' : 'ইনভয়েস রিমাইন্ডার'}</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    {language === 'en' ? 'Receive alerts for upcoming or overdue invoices.' : 'আসন্ন বা বিলম্বিত ইনভয়েসের জন্য সতর্কতা পান।'}
                  </span>
                </Label>
                <Switch
                  id="invoice-reminders"
                  checked={notificationSettings.invoiceReminders}
                  onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, invoiceReminders: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="payment-confirmations" className="flex flex-col space-y-1">
                  <span>{language === 'en' ? 'Payment Confirmations' : 'পেমেন্ট নিশ্চিতকরণ'}</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    {language === 'en' ? 'Get notified when a payment is successfully processed.' : 'যখন একটি পেমেন্ট সফলভাবে প্রক্রিয়া করা হয় তখন বিজ্ঞপ্তি পান।'}
                  </span>
                </Label>
                <Switch
                  id="payment-confirmations"
                  checked={notificationSettings.paymentConfirmations}
                  onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, paymentConfirmations: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="new-customer-alerts" className="flex flex-col space-y-1">
                  <span>{language === 'en' ? 'New Customer Alerts' : 'নতুন গ্রাহক সতর্কতা'}</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    {language === 'en' ? 'Receive alerts when a new customer is added.' : 'যখন একজন নতুন গ্রাহক যোগ করা হয় তখন সতর্কতা পান।'}
                  </span>
                </Label>
                <Switch
                  id="new-customer-alerts"
                  checked={notificationSettings.newCustomerAlerts}
                  onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, newCustomerAlerts: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="system-updates" className="flex flex-col space-y-1">
                  <span>{language === 'en' ? 'System Updates' : 'সিস্টেম আপডেট'}</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    {language === 'en' ? 'Get notified about new features and important announcements.' : 'নতুন বৈশিষ্ট্য এবং গুরুত্বপূর্ণ ঘোষণা সম্পর্কে বিজ্ঞপ্তি পান।'}
                  </span>
                </Label>
                <Switch
                  id="system-updates"
                  checked={notificationSettings.systemUpdates}
                  onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, systemUpdates: checked })}
                />
              </div>
              <Button onClick={handleNotificationSave}>{language === 'en' ? 'Save Notification Settings' : 'বিজ্ঞপ্তি সেটিংস সংরক্ষণ করুন'}</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Billing & Subscription' : 'বিলিং ও সাবস্ক্রিপশন'}</CardTitle>
              <CardDescription>{language === 'en' ? 'Manage your subscription plan and payment methods.' : 'আপনার সাবস্ক্রিপশন প্ল্যান এবং পেমেন্ট পদ্ধতি পরিচালনা করুন।'}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-2">
                <Label>{language === 'en' ? 'Current Plan' : 'বর্তমান প্ল্যান'}</Label>
                <div className="flex items-center justify-between rounded-md border p-4">
                  <span className="font-medium">{user?.plan === 'premium' ? (language === 'en' ? 'Premium Plan' : 'প্রিমিয়াম প্ল্যান') : (language === 'en' ? 'Free Plan' : 'ফ্রি প্ল্যান')}</span>
                  {user?.plan === 'free' && (
                    <Link href="/pricing">
                      <Button size="sm">{language === 'en' ? 'Upgrade' : 'আপগ্রেড করুন'}</Button>
                    </Link>
                  )}
                </div>
              </div>
              <Separator />
              <div className="grid gap-2">
                <Label>{language === 'en' ? 'Payment Method' : 'পেমেন্ট পদ্ধতি'}</Label>
                <div className="flex items-center justify-between rounded-md border p-4">
                  <span className="text-gray-600 dark:text-gray-400">
                    {language === 'en' ? 'No payment method on file.' : 'কোনো পেমেন্ট পদ্ধতি ফাইল করা নেই।'}
                  </span>
                  <Button variant="outline" size="sm">{language === 'en' ? 'Add Payment Method' : 'পেমেন্ট পদ্ধতি যোগ করুন'}</Button>
                </div>
              </div>
              <Separator />
              <div className="grid gap-2">
                <Label>{language === 'en' ? 'Billing History' : 'বিলিং ইতিহাস'}</Label>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'en' ? 'View your past invoices and payment history.' : 'আপনার অতীতের ইনভয়েস এবং পেমেন্ট ইতিহাস দেখুন।'}
                </p>
                <Button variant="outline" size="sm" className="w-fit">
                  {language === 'en' ? 'View Billing History' : 'বিলিং ইতিহাস দেখুন'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Security Settings' : 'নিরাপত্তা সেটিংস'}</CardTitle>
              <CardDescription>{language === 'en' ? 'Manage your account security and password.' : 'আপনার অ্যাকাউন্ট নিরাপত্তা এবং পাসওয়ার্ড পরিচালনা করুন।'}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="current-password">{language === 'en' ? 'Current Password' : 'বর্তমান পাসওয়ার্ড'}</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="new-password">{language === 'en' ? 'New Password' : 'নতুন পাসওয়ার্ড'}</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">{language === 'en' ? 'Confirm New Password' : 'নতুন পাসওয়ার্ড নিশ্চিত করুন'}</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button>{language === 'en' ? 'Change Password' : 'পাসওয়ার্ড পরিবর্তন করুন'}</Button>
              <Separator />
              <div className="flex items-center justify-between">
                <Label htmlFor="two-factor" className="flex flex-col space-y-1">
                  <span>{language === 'en' ? 'Two-Factor Authentication' : 'দুই-ধাপ যাচাইকরণ'}</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    {language === 'en' ? 'Add an extra layer of security to your account.' : 'আপনার অ্যাকাউন্টে নিরাপত্তার একটি অতিরিক্ত স্তর যোগ করুন।'}
                  </span>
                </Label>
                <Switch id="two-factor" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Preferences' : 'পছন্দ'}</CardTitle>
              <CardDescription>{language === 'en' ? 'Customize your application experience.' : 'আপনার অ্যাপ্লিকেশন অভিজ্ঞতা কাস্টমাইজ করুন।'}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="language-select">{language === 'en' ? 'Language' : 'ভাষা'}</Label>
                <Select value={language} onValueChange={(value) => setLanguage(value as 'en' | 'bn')}>
                  <SelectTrigger id="language-select">
                    <SelectValue placeholder={language === 'en' ? "Select language" : "ভাষা নির্বাচন করুন"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="bn">বাংলা</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="currency-select">{language === 'en' ? 'Default Currency' : 'ডিফল্ট মুদ্রা'}</Label>
                <Select value={currency} onValueChange={(value) => setCurrency("BDT")}>
                  <SelectTrigger id="currency-select">
                    <SelectValue placeholder={language === 'en' ? "Select currency" : "মুদ্রা নির্বাচন করুন"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BDT">BDT - Bangladeshi Taka</SelectItem>
                    <SelectItem value="USD">USD - US Dollar</SelectItem>
                    <SelectItem value="EUR">EUR - Euro</SelectItem>
                    <SelectItem value="GBP">GBP - British Pound</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SettingsPage