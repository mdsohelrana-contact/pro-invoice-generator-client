"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  RefreshCw,
  Calendar,
  Play,
  Pause,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";
import { selectInvoices, updateInvoice } from "@/store/slices/invoiceSlice";
import { selectCustomers } from "@/store/slices/customerSlice";
import { updateRecurringInvoice } from "@/store/slices/recurringInvoiceSlice";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

const RecurringPage = () => {
  const language = useSelector(selectLanguage);
  const invoices = useSelector(selectInvoices);
  const customers = useSelector(selectCustomers);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Filter recurring invoices
  const recurringInvoices = invoices.filter((invoice) => invoice.isRecurring);

  const filteredInvoices = recurringInvoices.filter((invoice) => {
    const customer = customers.find((c) => c.id === invoice.customerId);
    const matchesSearch =
      invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer?.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFrequency =
      selectedFrequency === "all" ||
      invoice.recurringFrequency === selectedFrequency;

    return matchesSearch && matchesFrequency;
  });

  const toggleRecurring = (invoiceId: string, isActive: boolean) => {
    dispatch(
      updateRecurringInvoice({
        id: invoiceId,
        changes: { status: isActive ? "Paused" : "Active" },
      })
    );
  };

  type Frequency = "Monthly" | "Quarterly" | "Annually";

  const getNextRecurringDate = (date: Date, frequency: Frequency): string => {
    const nextDate = new Date(date);

    switch (frequency) {
      case "Monthly":
        nextDate.setMonth(nextDate.getMonth() + 1);
        break;
      case "Quarterly":
        nextDate.setMonth(nextDate.getMonth() + 3);
        break;
      case "Annually":
        nextDate.setFullYear(nextDate.getFullYear() + 1);
        break;
    }

    return nextDate.toISOString().split("T")[0]; // Returns YYYY-MM-DD
  };

  const getFrequencyBadge = (frequency: string) => {
    const colors = {
      weekly: "bg-blue-100 text-blue-800",
      monthly: "bg-green-100 text-green-800",
      quarterly: "bg-purple-100 text-purple-800",
      yearly: "bg-orange-100 text-orange-800",
    };

    const labels = {
      weekly: language === "en" ? "Weekly" : "সাপ্তাহিক",
      monthly: language === "en" ? "Monthly" : "মাসিক",
      quarterly: language === "en" ? "Quarterly" : "ত্রৈমাসিক",
      yearly: language === "en" ? "Yearly" : "বার্ষিক",
    };

    return (
      <Badge className={colors[frequency as keyof typeof colors]}>
        <RefreshCw className="w-3 h-3 mr-1" />
        {labels[frequency as keyof typeof labels]}
      </Badge>
    );
  };

  const getStatusColor = (nextDate: string) => {
    const today = new Date();
    const next = new Date(nextDate);
    const diffDays = Math.ceil(
      (next.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (diffDays < 0) return "text-red-600";
    if (diffDays <= 7) return "text-orange-600";
    return "text-green-600";
  };

  return (
    <div className="p-6">
      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {language === "en" ? "Recurring Invoices" : "পুনরাবৃত্ত ইনভয়েস"}
            </h1>
            <p className="text-gray-600">
              {language === "en"
                ? "Automate your regular billing with recurring invoices"
                : "পুনরাবৃত্ত ইনভয়েসের সাথে আপনার নিয়মিত বিলিং স্বয়ংক্রিয় করুন"}
            </p>
          </div>
          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
                <Plus className="w-4 h-4 mr-2" />
                {language === "en"
                  ? "Create Recurring"
                  : "পুনরাবৃত্ত তৈরি করুন"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {language === "en"
                    ? "Create Recurring Invoice"
                    : "পুনরাবৃত্ত ইনভয়েস তৈরি করুন"}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  {language === "en"
                    ? "To create a recurring invoice, first create a regular invoice and then enable recurring billing from the invoice details."
                    : "একটি পুনরাবৃত্ত ইনভয়েস তৈরি করতে, প্রথমে একটি নিয়মিত ইনভয়েস তৈরি করুন এবং তারপর ইনভয়েস বিবরণ থেকে পুনরাবৃত্ত বিলিং সক্ষম করুন।"}
                </p>
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setIsCreateModalOpen(false)}
                  >
                    {language === "en" ? "Cancel" : "বাতিল"}
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-500 to-teal-500">
                    {language === "en" ? "Create Invoice" : "ইনভয়েস তৈরি করুন"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="border-0 bg-white/60 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  {language === "en"
                    ? "Active Recurring"
                    : "সক্রিয় পুনরাবৃত্ত"}
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {recurringInvoices.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-white/60 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  {language === "en" ? "Monthly Revenue" : "মাসিক আয়"}
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {recurringInvoices
                    .filter((inv) => inv.recurringFrequency === "monthly")
                    .reduce((sum, inv) => sum + inv.total!, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-white/60 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  {language === "en" ? "Due This Week" : "এই সপ্তাহে বকেয়া"}
                </p>
                <p className="text-2xl font-bold text-orange-600">
                  {
                    recurringInvoices.filter((inv) => {
                      if (!inv.nextRecurringDate) return false;
                      const nextDate = new Date(inv.nextRecurringDate);
                      const today = new Date();
                      const diffDays = Math.ceil(
                        (nextDate.getTime() - today.getTime()) /
                          (1000 * 60 * 60 * 24)
                      );
                      return diffDays >= 0 && diffDays <= 7;
                    }).length
                  }
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 bg-white/60 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  {language === "en" ? "Total Value" : "মোট মূল্য"}
                </p>
                <p className="text-2xl font-bold text-purple-600">
                  {recurringInvoices.reduce((sum, inv) => sum + inv.total!, 0)}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder={
                language === "en"
                  ? "Search recurring invoices..."
                  : "পুনরাবৃত্ত ইনভয়েস খুঁজুন..."
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Select
              value={selectedFrequency}
              onValueChange={setSelectedFrequency}
            >
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {language === "en" ? "All Frequencies" : "সব ফ্রিকোয়েন্সি"}
                </SelectItem>
                <SelectItem value="weekly">
                  {language === "en" ? "Weekly" : "সাপ্তাহিক"}
                </SelectItem>
                <SelectItem value="monthly">
                  {language === "en" ? "Monthly" : "মাসিক"}
                </SelectItem>
                <SelectItem value="quarterly">
                  {language === "en" ? "Quarterly" : "ত্রৈমাসিক"}
                </SelectItem>
                <SelectItem value="yearly">
                  {language === "en" ? "Yearly" : "বার্ষিক"}
                </SelectItem>
              </SelectContent>
            </Select>
            <Badge variant="secondary">
              {filteredInvoices.length}{" "}
              {language === "en" ? "recurring" : "পুনরাবৃত্ত"}
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* Recurring Invoices List */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <AnimatePresence>
          {filteredInvoices.map((invoice, index) => {
            const customer = customers.find((c) => c.id === invoice.customerId);

            return (
              <motion.div
                key={invoice.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                          <RefreshCw className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-gray-800">
                              {invoice.invoiceNumber}
                            </h3>
                            {invoice.recurringFrequency &&
                              getFrequencyBadge(invoice.recurringFrequency)}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>{customer?.name}</span>
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {language === "en" ? "Next:" : "পরবর্তী:"}
                                <span
                                  className={`ml-1 font-medium ${
                                    invoice.nextRecurringDate
                                      ? getStatusColor(
                                          invoice.nextRecurringDate
                                        )
                                      : ""
                                  }`}
                                >
                                  {invoice.nextRecurringDate
                                    ? formatDate(
                                        invoice.nextRecurringDate,
                                        language
                                      )
                                    : "N/A"}
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">
                            {invoice.total}
                          </p>
                          <p className="text-xs text-gray-500">
                            {language === "en" ? "per" : "প্রতি"}{" "}
                            {invoice.recurringFrequency}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={invoice.isRecurring}
                            onCheckedChange={(checked) =>
                              toggleRecurring(invoice.id, checked)
                            }
                          />
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                {language === "en"
                                  ? "View Details"
                                  : "বিস্তারিত দেখুন"}
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                {language === "en"
                                  ? "Edit Schedule"
                                  : "সময়সূচী সম্পাদনা"}
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Play className="w-4 h-4 mr-2" />
                                {language === "en"
                                  ? "Generate Now"
                                  : "এখনই তৈরি করুন"}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Pause className="w-4 h-4 mr-2" />
                                {language === "en"
                                  ? "Pause Recurring"
                                  : "পুনরাবৃত্ত বিরতি"}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredInvoices.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <RefreshCw className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {language === "en"
              ? "No recurring invoices found"
              : "কোন পুনরাবৃত্ত ইনভয়েস পাওয়া যায়নি"}
          </h3>
          <p className="text-gray-600 mb-6">
            {language === "en"
              ? "Create your first recurring invoice to automate your billing process."
              : "আপনার বিলিং প্রক্রিয়া স্বয়ংক্রিয় করতে আপনার প্রথম পুনরাবৃত্ত ইনভয়েস তৈরি করুন।"}
          </p>
          <Button
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
          >
            <Plus className="w-4 h-4 mr-2" />
            {language === "en"
              ? "Create Recurring Invoice"
              : "পুনরাবৃত্ত ইনভয়েস তৈরি করুন"}
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default RecurringPage;
