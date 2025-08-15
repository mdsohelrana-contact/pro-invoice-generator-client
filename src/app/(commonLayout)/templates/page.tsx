/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { FileText, Crown } from "lucide-react";

import { useStore } from "@/lib/store";
import Link from "next/link";
import { toast } from "sonner";
import SectionHeader from "@/components/Module/Shared/Components/SectionHeader";
import PrimaryButton from "@/components/Module/Shared/Buttons/PrimaryButton";
import Filters from "@/components/Module/Shared/Components/Filters";
import InvoiceGrid from "@/components/Module/Templates/InvoiceGrid";

import InvoicePreviewDialog from "@/components/Module/Templates/InvoicePreviewDialog";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";

const templatesData = [
  {
    id: 1,
    name: "Modern Business",
    description: "Clean and professional design for modern businesses",
    category: "business",
    premium: false,
    rating: 4.8,
    downloads: 1250,
    preview:
      "/placeholder.svg?height=400&width=300&text=Modern+Business+Template",
    features: ["Clean Design", "Professional Layout", "Multi-language Support"],
  },
  {
    id: 2,
    name: "Creative Agency",
    description: "Colorful and creative template for agencies",
    category: "creative",
    premium: true,
    rating: 4.9,
    downloads: 890,
    preview:
      "/placeholder.svg?height=400&width=300&text=Creative+Agency+Template",
    features: ["Colorful Design", "Creative Layout", "Brand Customization"],
  },
  {
    id: 3,
    name: "Minimalist",
    description: "Simple and clean minimalist design",
    category: "minimal",
    premium: false,
    rating: 4.7,
    downloads: 2100,
    preview: "/placeholder.svg?height=400&width=300&text=Minimalist+Template",
    features: ["Minimal Design", "Easy to Read", "Fast Loading"],
  },
  {
    id: 4,
    name: "Corporate Elite",
    description: "Premium corporate template with advanced features",
    category: "business",
    premium: true,
    rating: 4.9,
    downloads: 650,
    preview:
      "/placeholder.svg?height=400&width=300&text=Corporate+Elite+Template",
    features: ["Premium Design", "Advanced Features", "Custom Branding"],
  },
  {
    id: 5,
    name: "freelancer Pro",
    description: "Perfect template for freelancers and consultants",
    category: "freelancer",
    premium: true,
    rating: 4.8,
    downloads: 780,
    preview:
      "/placeholder.svg?height=400&width=300&text=freelancer+Pro+Template",
    features: ["freelancer Focused", "Time Tracking", "Project Details"],
  },
  {
    id: 6,
    name: "Simple Classic",
    description: "Traditional and reliable invoice template",
    category: "classic",
    premium: false,
    rating: 4.6,
    downloads: 3200,
    preview:
      "/placeholder.svg?height=400&width=300&text=Simple+Classic+Template",
    features: ["Traditional Design", "Reliable Layout", "Universal Appeal"],
  },
];

const TemplatesPage = () => {
const language = useSelector(selectLanguage);
  const { user } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);

  const categories = [
    {
      value: "all",
      label: language === "en" ? "All Categories" : "সব ক্যাটেগরি",
    },
    { value: "business", label: language === "en" ? "Business" : "ব্যবসা" },
    { value: "creative", label: language === "en" ? "Creative" : "সৃজনশীল" },
    { value: "minimal", label: language === "en" ? "Minimal" : "মিনিমাল" },
    {
      value: "freelancer",
      label: language === "en" ? "freelancer" : "ফ্রিল্যান্সার",
    },
    { value: "classic", label: language === "en" ? "Classic" : "ক্লাসিক" },
  ];

  const filteredTemplates = templatesData.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || template.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleUseTemplate = (template: any) => {
    if (template.premium && user?.plan === "free") {
      toast.success("Upgrade your plan to use this template");
      return;
    }
    toast.success("Template used successfully");
    setSelectedTemplate(template);
    setSelectedTemplate(null);
  };

  const handleDownloadTemplate = (template: any) => {
    if (template.premium && user?.plan === "free") {
      toast.success("Upgrade your plan to use this template");
      return;
    }

    toast.success("Template downloaded successfully");
  };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <SectionHeader
          title={language === "en" ? "Invoice Templates" : "ইনভয়েস টেমপ্লেট"}
          subTitle={
            language === "en"
              ? "Choose from our collection of professional invoice templates"
              : "আমাদের পেশাদার ইনভয়েস টেমপ্লেটের সংগ্রহ থেকে বেছে নিন"
          }
        />

        <div className="flex items-center justify-center mb-4">
          {user?.plan === "free" && (
            <Link href="/pricing">
              <PrimaryButton className="" size="lg">
                <Crown className="w-4 h-4 mr-2" />
                {language === "en"
                  ? "Unlock Premium Templates"
                  : "প্রিমিয়াম টেমপ্লেট আনলক করুন"}
              </PrimaryButton>
            </Link>
          )}
        </div>

        {/* Filters */}
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          viewMode={viewMode}
          setViewMode={setViewMode}
          categories={categories}
        />

        {/* Templates Grid/List */}

        <InvoiceGrid
          // filteredTemplates={filteredTemplates}
          viewMode={viewMode}
          language={language}
          user={user}
          setSelectedTemplate={setSelectedTemplate}
          handleUseTemplate={handleUseTemplate}
          handleDownloadTemplate={handleDownloadTemplate}
        />

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              {language === "en"
                ? "No templates found"
                : "কোন টেমপ্লেট পাওয়া যায়নি"}
            </p>
          </div>
        )}

        {/* Template Preview Dialog */}
        <InvoicePreviewDialog
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          language={language}
          user={user}
          handleUseTemplate={handleUseTemplate}
          handleDownloadTemplate={handleDownloadTemplate}
        />
      </div>
    </div>
  );
};

export default TemplatesPage;
