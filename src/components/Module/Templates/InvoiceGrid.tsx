"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

import InvoiceCard from "./InvoiceCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dummyInvoices } from "@/data/dummyInvoicesData";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

interface InvoiceTemplate {
  id: string;
  companyName: string;
  companyTagline?: string;
  companyLogoName?: string; // icon name string like "Apple"
  invoiceNumber: string;
  issueDate: string;
  items: { description: string; amount: number }[];
  subtotal: number;
  discount?: number;
  deliveryFee?: number;
  totalDue: number;
  paymentDetails: {
    bankName: string;
    accountNumber: string;
    accountHolder: string;
  };
  watermarkContent?: string;
  fontFamily?: string;
  colors?: {
    primary?: string;
    secondary?: string;
    background?: string;
    textPrimary?: string;
    textSecondary?: string;
    border?: string;
  };
  premium?: boolean;
  rating?: number;
  description?: string;
  features?: string[];
  downloads?: number;
  preview?: string;
  name?: string;
}

interface InvoiceGridProps {
  viewMode: "grid" | "list";
  language?: "en" | "bn";
  user?: { plan: string } | null;
  setSelectedTemplate: (template: InvoiceTemplate) => void;
  handleUseTemplate: (template: InvoiceTemplate) => void;
  handleDownloadTemplate: (template: InvoiceTemplate) => void;
}

const InvoiceGrid: React.FC<InvoiceGridProps> = ({
  viewMode,
  language = "en",
  user,
  setSelectedTemplate,
  handleUseTemplate,
  handleDownloadTemplate,
}) => {
  return (
      <motion.div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {dummyInvoices.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {viewMode === "grid" ? (
                <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <InvoiceCard {...template} />
                      {template.premium && (
                        <Badge className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                          <LucideIcons.Crown className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-lg flex items-center justify-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => setSelectedTemplate(template)}
                            >
                              <LucideIcons.Eye className="w-4 h-4 mr-2" />
                              {language === "en" ? "Preview" : "প্রিভিউ"}
                            </Button>
                          </DialogTrigger>
                        </Dialog>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {template.companyName}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <LucideIcons.Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {template.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {template.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {template.features.map((feature, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span>
                        {template.downloads.toLocaleString()}{" "}
                        {language === "en" ? "downloads" : "ডাউনলোড"}
                      </span>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => handleUseTemplate(template)}
                        disabled={template.premium && user?.plan === "Free"}
                      >
                        <LucideIcons.Plus className="w-4 h-4 mr-2" />
                        {language === "en"
                          ? "Use Template"
                          : "টেমপ্লেট ব্যবহার করুন"}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDownloadTemplate(template)}
                        disabled={template.premium && user?.plan === "Free"}
                      >
                        <LucideIcons.Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={template.preview || "/placeholder.svg"}
                        alt={template.companyName}
                        className="w-20 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-gray-800 dark:text-white">
                            {template.companyName}
                          </h3>
                          {template.premium && (
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                              <LucideIcons.Crown className="w-3 h-3 mr-1" />
                              Premium
                            </Badge>
                          )}
                          <div className="flex items-center space-x-1">
                            <LucideIcons.Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {template.rating}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {template.description}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                          <span>
                            {template.downloads.toLocaleString()}{" "}
                            {language === "en" ? "downloads" : "ডাউনলোড"}
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {template.features
                              .slice(0, 2)
                              .map((feature, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {feature}
                                </Badge>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setSelectedTemplate(template)}
                            >
                              <LucideIcons.Eye className="w-4 h-4" />
                            </Button>
                          </DialogTrigger>
                        </Dialog>
                        <Button
                          size="sm"
                          onClick={() => handleUseTemplate(template)}
                          disabled={template.premium && user?.plan === "Free"}
                        >
                          <LucideIcons.Plus className="w-4 h-4 mr-2" />
                          {language === "en" ? "Use" : "ব্যবহার"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </motion.div>
  );
};

export default InvoiceGrid;
