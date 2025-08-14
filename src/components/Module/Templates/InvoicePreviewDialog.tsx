"use client";

import React from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Star, Plus, Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PaymentDetails {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
}

interface InvoiceTemplate {
  id: string;
  name?: string;
  premium?: boolean;
  preview?: string;
  description?: string;
  features?: string[];
  rating?: number;
  downloads?: number;
  paymentDetails?: PaymentDetails;
}

interface InvoicePreviewDialogProps {
  selectedTemplate: InvoiceTemplate | null;
  setSelectedTemplate: (template: InvoiceTemplate | null) => void;
  language?: "en" | "bn";
  user?: { plan: string } | null;
  handleUseTemplate: (template: InvoiceTemplate) => void;
  handleDownloadTemplate: (template: InvoiceTemplate) => void;
}

const InvoicePreviewDialog: React.FC<InvoicePreviewDialogProps> = ({
  selectedTemplate,
  setSelectedTemplate,
  language = "en",
  user = null,
  handleUseTemplate,
  handleDownloadTemplate,
}) => {
  return (
    <Dialog
      open={!!selectedTemplate}
      onOpenChange={(open) => {
        if (!open) setSelectedTemplate(null);
      }}
      aria-label={
        selectedTemplate?.name
          ? `${selectedTemplate.name} ${
              language === "en" ? "Preview" : "প্রিভিউ"
            }`
          : language === "en"
          ? "Invoice Preview Dialog"
          : "ইনভয়েস প্রিভিউ ডায়ালগ"
      }
    >
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-xl font-semibold">
            <span>
              {selectedTemplate?.name ||
                (language === "en" ? "Invoice Preview" : "ইনভয়েস প্রিভিউ")}
            </span>
            {selectedTemplate?.premium && (
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center">
                <Crown className="w-4 h-4 mr-1" aria-hidden="true" />
                Premium
              </Badge>
            )}
          </DialogTitle>
        </DialogHeader>

        {selectedTemplate && (
          <motion.div
            className="space-y-6 mt-4"
            initial="hidden"
            animate="visible"
            key={selectedTemplate.id} // animate on template change
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Image
                  src={selectedTemplate.preview || "/placeholder.svg"}
                  alt={selectedTemplate.name || "Invoice preview image"}
                  className="w-full rounded-lg border"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </div>

              <div className="space-y-4">
                {selectedTemplate.description && (
                  <section>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {language === "en" ? "Description" : "বিবরণ"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedTemplate.description}
                    </p>
                  </section>
                )}

                {selectedTemplate.features &&
                  selectedTemplate.features.length > 0 && (
                    <section>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                        {language === "en" ? "Features" : "বৈশিষ্ট্য"}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedTemplate.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            aria-label={`Feature: ${feature}`}
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </section>
                  )}

                <div
                  className="flex items-center space-x-4"
                  aria-label={
                    language === "en"
                      ? "Rating and downloads"
                      : "রেটিং এবং ডাউনলোড"
                  }
                >
                  <div className="flex items-center space-x-1">
                    <Star
                      className="w-4 h-4 text-yellow-500 fill-current"
                      aria-hidden="true"
                    />
                    <span className="font-medium" aria-live="polite">
                      {selectedTemplate.rating ?? "N/A"}
                    </span>
                  </div>
                  <span
                    className="text-sm text-gray-500 dark:text-gray-400"
                    aria-live="polite"
                  >
                    {selectedTemplate.downloads?.toLocaleString() ?? 0}{" "}
                    {language === "en" ? "downloads" : "ডাউনলোড"}
                  </span>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Button
                    className="w-full cursor-pointer"
                    onClick={() =>
                      selectedTemplate && handleUseTemplate(selectedTemplate)
                    }
                    disabled={selectedTemplate.premium && user?.plan === "Free"}
                    aria-disabled={
                      selectedTemplate.premium && user?.plan === "Free"
                    }
                    aria-label={
                      language === "en"
                        ? "Use This Template"
                        : "এই টেমপ্লেট ব্যবহার করুন"
                    }
                  >
                    <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
                    {language === "en"
                      ? "Use This Template"
                      : "এই টেমপ্লেট ব্যবহার করুন"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      selectedTemplate &&
                      handleDownloadTemplate(selectedTemplate)
                    }
                    disabled={selectedTemplate.premium && user?.plan === "Free"}
                    aria-disabled={
                      selectedTemplate.premium && user?.plan === "Free"
                    }
                    aria-label={
                      language === "en"
                        ? "Download Template"
                        : "টেমপ্লেট ডাউনলোড করুন"
                    }
                    className="w-full cursor-pointer"
                  >
                    <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                    {language === "en" ? "Download" : "ডাউনলোড"}
                  </Button>
                </div>

                {selectedTemplate.premium && user?.plan === "Free" && (
                  <div
                    className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4"
                    role="alert"
                    aria-live="assertive"
                  >
                    <p className="text-sm text-orange-800 dark:text-orange-200 mb-2">
                      {language === "en"
                        ? "This is a premium template. Upgrade to access all premium features."
                        : "এটি একটি প্রিমিয়াম টেমপ্লেট। সব প্রিমিয়াম ফিচার অ্যাক্সেস করতে আপগ্রেড করুন।"}
                    </p>
                    <Link href="/pricing" passHref>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 cursor-pointer"
                        aria-label={
                          language === "en"
                            ? "Upgrade Now"
                            : "এখনই আপগ্রেড করুন"
                        }
                      >
                        <Crown className="w-4 h-4 mr-2" aria-hidden="true" />
                        {language === "en"
                          ? "Upgrade Now"
                          : "এখনই আপগ্রেড করুন"}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InvoicePreviewDialog;
