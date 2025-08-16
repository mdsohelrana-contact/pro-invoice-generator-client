/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Plus,
  Search,
  Calendar,
  DollarSign,
  TrendingUp,
  Filter,
} from "lucide-react";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";

interface Payment {
  id: string;
  invoiceId: string;
  clientName: string;
  amount: number;
  method: "credit_card" | "bank_transfer" | "paypal" | "cash";
  status: "completed" | "pending" | "failed";
  date: string;
  transactionId: string;
}
const PaymentsPage = () => {
  const language = useSelector(selectLanguage);
  const [searchQuery, setSearchQuery] = useState("");

  const payments: Payment[] = [
    {
      id: "1",
      invoiceId: "INV-001",
      clientName: "Acme Corporation",
      amount: 1200,
      method: "credit_card",
      status: "completed",
      date: "2024-01-15",
      transactionId: "TXN-001",
    },
    {
      id: "2",
      invoiceId: "INV-002",
      clientName: "Tech Solutions Inc",
      amount: 850,
      method: "bank_transfer",
      status: "pending",
      date: "2024-01-14",
      transactionId: "TXN-002",
    },
    {
      id: "3",
      invoiceId: "INV-003",
      clientName: "Design Studio LLC",
      amount: 2100,
      method: "paypal",
      status: "completed",
      date: "2024-01-10",
      transactionId: "TXN-003",
    },
  ];

  const filteredPayments = payments.filter(
    (payment) =>
      payment.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.invoiceId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalAmount = payments.reduce(
    (sum, payment) => sum + payment.amount,
    0
  );
  const completedPayments = payments.filter((p) => p.status === "completed");
  const pendingPayments = payments.filter((p) => p.status === "pending");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "pending":
        return "secondary";
      case "failed":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getMethodIcon = (method: string) => {
    switch (method) {
      case "credit_card":
        return "💳";
      case "bank_transfer":
        return "🏦";
      case "paypal":
        return "💰";
      case "cash":
        return "💵";
      default:
        return "💳";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {language === "en" ? "Payments" : "পেমেন্ট"}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {language === "en"
              ? "Track and manage all your payment transactions."
              : "আপনার সমস্ত পেমেন্ট লেনদেন ট্র্যাক এবং পরিচালনা করুন।"}
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
          <Plus className="w-4 h-4 mr-2" />
          {language === "en" ? "Record Payment" : "পেমেন্ট রেকর্ড করুন"}
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={
                  language === "en" ? "Search payments..." : "পেমেন্ট খুঁজুন..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              {language === "en" ? "Filter" : "ফিল্টার"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {language === "en" ? "Total Payments" : "মোট পেমেন্ট"}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  ${totalAmount.toLocaleString()}
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {language === "en" ? "Completed" : "সম্পন্ন"}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {completedPayments.length}
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                <CreditCard className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {language === "en" ? "Pending" : "অপেক্ষমাণ"}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {pendingPayments.length}
                </p>
              </div>
              <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400">
                <Calendar className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {language === "en" ? "Success Rate" : "সফলতার হার"}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {Math.round(
                    (completedPayments.length / payments.length) * 100
                  )}
                  %
                </p>
              </div>
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payments List */}
      <Card>
        <CardHeader>
          <CardTitle>
            {language === "en" ? "Recent Payments" : "সাম্প্রতিক পেমেন্ট"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-lg">
                    {getMethodIcon(payment.method)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {payment.invoiceId} - {payment.clientName}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {payment.transactionId} • {payment.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">
                    ${payment.amount.toLocaleString()}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant={getStatusColor(payment.status) as any}>
                      {payment.status}
                    </Badge>
                    <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {payment.method.replace("_", " ")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPayments.length === 0 && (
            <div className="flex items-center justify-center h-32">
              <p className="text-muted-foreground">
                {language === "en"
                  ? "No payments found."
                  : "কোনো পেমেন্ট পাওয়া যায়নি।"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentsPage;
