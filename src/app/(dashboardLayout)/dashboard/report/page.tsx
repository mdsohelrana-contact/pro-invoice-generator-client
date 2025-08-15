"use client";

import * as React from "react";
import {
  Bug,
  Send,
  FileText,
  MessageSquare,
  Info,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "@/lib/store";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
const ReportPage = () => {
  const { language, addNotification } = useStore();
  const [reportType, setReportType] = React.useState<
    "bug" | "feature" | "general"
  >("bug");
  const [subject, setSubject] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [attachLogs, setAttachLogs] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!subject || !description) {
      toast.success(
        language === "en"
          ? "Please fill in all required fields."
          : "অনুগ্রহ করে সম্পূর্ণ ফিল্ডগুলি পূরণ করুন।"
      );
      setLoading(false);
      return;
    }

    try {
      // Simulate API call for sending report
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const reportData = {
        type: reportType,
        subject,
        description,
        attachLogs,
        timestamp: new Date().toISOString(),
      };
      console.log("Report submitted:", reportData);

      addNotification({
        id: `notif_${Date.now()}`,
        message:
          language === "en"
            ? `Your ${reportType} report "${subject}" has been submitted.`
            : `আপনার ${reportType} রিপোর্ট "${subject}" জমা দেওয়া হয়েছে।`,
        type: "success",
        category: "support",
        read: false,
        timestamp: new Date().toISOString(),
      });

      toast.success(
        language === "en"
          ? "Report submitted successfully!"
          : "রিপোর্ট সফলভাবে জমা দেওয়া হয়েছে!"
      );

      // Reset form
      setReportType("bug");
      setSubject("");
      setDescription("");
      setAttachLogs(false);
    } catch (error) {
      console.error("Report submission error:", error);
      toast.success(
        language === "en"
          ? "Report submitted successfully!"
          : "রিপোর্ট সফলভাবে জমা দেওয়া হয়েছে!"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        {language === "en"
          ? "Report an Issue or Suggest a Feature"
          : "একটি সমস্যা রিপোর্ট করুন বা একটি বৈশিষ্ট্য প্রস্তাব করুন"}
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {language === "en"
          ? "Help us improve InvoicePro BD by reporting bugs or suggesting new features. Your feedback is valuable!"
          : "বাগ রিপোর্ট করে বা নতুন বৈশিষ্ট্য প্রস্তাব করে ইনভয়েসপ্রো বিডি উন্নত করতে আমাদের সাহায্য করুন। আপনার মতামত মূল্যবান!"}
      </p>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>
            {language === "en" ? "Submit a Report" : "একটি রিপোর্ট জমা দিন"}
          </CardTitle>
          <CardDescription>
            {language === "en"
              ? "Please provide as much detail as possible."
              : "অনুগ্রহ করে যতটা সম্ভব বিস্তারিত তথ্য দিন।"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="report-type">
                {language === "en" ? "Report Type" : "রিপোর্টের ধরন"}
              </Label>
              <Select
                value={reportType}
                onValueChange={(value) =>
                  setReportType(value as "bug" | "feature" | "general")
                }
              >
                <SelectTrigger id="report-type">
                  <SelectValue
                    placeholder={
                      language === "en"
                        ? "Select report type"
                        : "রিপোর্টের ধরন নির্বাচন করুন"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bug" className="flex items-center gap-2">
                    <Bug className="h-4 w-4" />{" "}
                    {language === "en" ? "Bug Report" : "বাগ রিপোর্ট"}
                  </SelectItem>
                  <SelectItem
                    value="feature"
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4" />{" "}
                    {language === "en"
                      ? "Feature Suggestion"
                      : "বৈশিষ্ট্য প্রস্তাব"}
                  </SelectItem>
                  <SelectItem
                    value="general"
                    className="flex items-center gap-2"
                  >
                    <Info className="h-4 w-4" />{" "}
                    {language === "en" ? "General Feedback" : "সাধারণ মতামত"}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">
                {language === "en" ? "Subject" : "বিষয়"}
              </Label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={
                  reportType === "bug"
                    ? language === "en"
                      ? "e.g., Invoice PDF not generating correctly"
                      : "যেমন, ইনভয়েস পিডিএফ সঠিকভাবে তৈরি হচ্ছে না"
                    : language === "en"
                    ? "e.g., Add recurring invoice feature"
                    : "যেমন, পুনরাবৃত্ত ইনভয়েস বৈশিষ্ট্য যোগ করুন"
                }
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">
                {language === "en" ? "Description" : "বিবরণ"}
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={
                  language === "en"
                    ? "Provide detailed information about the issue or feature request..."
                    : "সমস্যা বা বৈশিষ্ট্য অনুরোধ সম্পর্কে বিস্তারিত তথ্য দিন..."
                }
                rows={6}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="attach-logs"
                checked={attachLogs}
                onCheckedChange={(checked: boolean) => setAttachLogs(checked)}
              />
              <Label htmlFor="attach-logs">
                {language === "en"
                  ? "Attach system logs (helps with debugging)"
                  : "সিস্টেম লগ সংযুক্ত করুন (ডিবাগিংয়ে সাহায্য করে)"}
              </Label>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                language === "en" ? (
                  "Submitting..."
                ) : (
                  "জমা দেওয়া হচ্ছে..."
                )
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {language === "en" ? "Submit Report" : "রিপোর্ট জমা দিন"}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportPage;
