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
  Mail,
  Phone,
  Building,
  MapPin,
  Eye,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";
import LanguageButton from "@/components/Module/Shared/Buttons/LanguageButton";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  totalInvoices: number;
  totalAmount: number;
  status: "active" | "inactive";
  lastInvoice: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};
const CustomersPage = () => {
  const language = useSelector(selectLanguage);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [customers] = useState<Customer[]>([
    {
      id: "1",
      name: "আহমেদ হাসান",
      email: "ahmed@example.com",
      phone: "+880 1712-345678",
      company: "আহমেদ ট্রেডিং",
      address: "ধানমন্ডি, ঢাকা",
      totalInvoices: 12,
      totalAmount: 150000,
      status: "active",
      lastInvoice: "2024-01-15",
    },
    {
      id: "2",
      name: "Fatima Rahman",
      email: "fatima@rahman.com",
      phone: "+880 1812-987654",
      company: "Rahman Enterprise",
      address: "Gulshan, Dhaka",
      totalInvoices: 8,
      totalAmount: 85000,
      status: "active",
      lastInvoice: "2024-01-10",
    },
    {
      id: "3",
      name: "মোহাম্মদ খান",
      email: "khan@associates.com",
      phone: "+880 1912-456789",
      company: "Khan & Associates",
      address: "বনানী, ঢাকা",
      totalInvoices: 15,
      totalAmount: 220000,
      status: "active",
      lastInvoice: "2024-01-12",
    },
    {
      id: "4",
      name: "Sarah Ahmed",
      email: "sarah@solutions.com",
      phone: "+880 1612-789012",
      company: "Dhaka Solutions",
      address: "Uttara, Dhaka",
      totalInvoices: 5,
      totalAmount: 62500,
      status: "inactive",
      lastInvoice: "2023-12-20",
    },
  ]);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {language === "en" ? "Customers" : "গ্রাহকগণ"}
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageButton className="text-sm" />
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
                  <Plus className="w-4 h-4 mr-2" />
                  {language === "en" ? "Add Customer" : "গ্রাহক যোগ করুন"}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>
                    {language === "en"
                      ? "Add New Customer"
                      : "নতুন গ্রাহক যোগ করুন"}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">
                      {language === "en" ? "Name" : "নাম"}
                    </Label>
                    <Input
                      id="name"
                      placeholder={
                        language === "en" ? "Customer name" : "গ্রাহকের নাম"
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">
                      {language === "en" ? "Email" : "ইমেইল"}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="customer@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">
                      {language === "en" ? "Phone" : "ফোন"}
                    </Label>
                    <Input id="phone" placeholder="+880 1XXX-XXXXXX" />
                  </div>
                  <div>
                    <Label htmlFor="company">
                      {language === "en" ? "Company" : "কোম্পানি"}
                    </Label>
                    <Input
                      id="company"
                      placeholder={
                        language === "en" ? "Company name" : "কোম্পানির নাম"
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">
                      {language === "en" ? "Address" : "ঠিকানা"}
                    </Label>
                    <Textarea
                      id="address"
                      placeholder={
                        language === "en"
                          ? "Customer address"
                          : "গ্রাহকের ঠিকানা"
                      }
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsAddModalOpen(false)}
                    >
                      {language === "en" ? "Cancel" : "বাতিল"}
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-500 to-teal-500">
                      {language === "en" ? "Add Customer" : "গ্রাহক যোগ করুন"}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={
                  language === "en" ? "Search customers..." : "গ্রাহক খুঁজুন..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                {language === "en" ? "Filter" : "ফিল্টার"}
              </Button>
              <Badge variant="secondary">
                {filteredCustomers.length}{" "}
                {language === "en" ? "customers" : "গ্রাহক"}
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Customers Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence>
            {filteredCustomers.map((customer, index) => (
              <motion.div
                key={customer.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold">
                            {getInitials(customer.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {customer.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {customer.company}
                          </p>
                        </div>
                      </div>
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
                            {language === "en" ? "Edit" : "সম্পাদনা"}
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="w-4 h-4 mr-2" />
                            {language === "en"
                              ? "Create Invoice"
                              : "ইনভয়েস তৈরি"}
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            {language === "en" ? "Delete" : "মুছে ফেলুন"}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <Badge
                      className={`w-fit ${
                        customer.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {customer.status === "active"
                        ? language === "en"
                          ? "Active"
                          : "সক্রিয়"
                        : language === "en"
                        ? "Inactive"
                        : "নিষ্ক্রিয়"}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      {customer.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      {customer.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {customer.address}
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-blue-600">
                            {customer.totalInvoices}
                          </p>
                          <p className="text-xs text-gray-600">
                            {language === "en" ? "Invoices" : "ইনভয়েস"}
                          </p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-600">
                            ৳{customer.totalAmount.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-600">
                            {language === "en" ? "Total" : "মোট"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs text-gray-500">
                        {language === "en" ? "Last invoice:" : "শেষ ইনভয়েস:"}{" "}
                        {customer.lastInvoice}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCustomers.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {language === "en"
                ? "No customers found"
                : "কোন গ্রাহক পাওয়া যায়নি"}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === "en"
                ? "Try adjusting your search terms or add a new customer."
                : "আপনার অনুসন্ধান শর্ত সামঞ্জস্য করুন বা একটি নতুন গ্রাহক যোগ করুন।"}
            </p>
            <Button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              {language === "en"
                ? "Add Your First Customer"
                : "আপনার প্রথম গ্রাহক যোগ করুন"}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CustomersPage;
