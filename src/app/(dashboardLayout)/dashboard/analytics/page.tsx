"use client";

import { Suspense } from 'react';

import { motion } from "framer-motion";
import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  FileText,
  Users,
  Calendar,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";
import { selectAnalytics } from "@/store/slices/analyticsSlice";
import {
  AnalyticsData,
  RevenueDataPoint,
  PaymentMethodData,
  CustomerGrowthData,
  InvoiceStatusData,
} from "@/types/analytics.type";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AnalyticsPage = () => {
  const language = useSelector(selectLanguage);
  const analytics = useSelector(selectAnalytics) as AnalyticsData;

  const [timeRange, setTimeRange] = useState<string>("6months");

  // Use analytics state if available, otherwise fallback sample data
  const revenueData: RevenueDataPoint[] = analytics.revenueData.length
    ? analytics.revenueData
    : [
        { month: "Jan", revenue: 45000, invoices: 12 },
        { month: "Feb", revenue: 52000, invoices: 15 },
        { month: "Mar", revenue: 48000, invoices: 13 },
        { month: "Apr", revenue: 61000, invoices: 18 },
        { month: "May", revenue: 55000, invoices: 16 },
        { month: "Jun", revenue: 67000, invoices: 20 },
      ];

  const paymentMethodData: PaymentMethodData[] = analytics.paymentMethodData
    .length
    ? analytics.paymentMethodData
    : [
        { name: "bKash", value: 35, color: "#8B5CF6" },
        { name: "Bank Transfer", value: 25, color: "#06B6D4" },
        { name: "Cash", value: 20, color: "#10B981" },
        { name: "Nagad", value: 15, color: "#F59E0B" },
        { name: "Card", value: 5, color: "#EF4444" },
      ];

  const customerGrowthData: CustomerGrowthData[] = analytics.customerGrowthData
    .length
    ? analytics.customerGrowthData
    : [
        { month: "Jan", customers: 45 },
        { month: "Feb", customers: 52 },
        { month: "Mar", customers: 61 },
        { month: "Apr", customers: 73 },
        { month: "May", customers: 89 },
        { month: "Jun", customers: 95 },
      ];

  const invoiceStatusData: InvoiceStatusData[] = analytics.invoiceStatusData
    .length
    ? analytics.invoiceStatusData
    : [
        { status: "Paid", count: 45, color: "#10B981" },
        { status: "Pending", count: 12, color: "#F59E0B" },
        { status: "Overdue", count: 8, color: "#EF4444" },
        { status: "Draft", count: 5, color: "#6B7280" },
      ];


  return (
   <Suspense fallback={<div>Loading analytics...</div>}>
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
              {language === "en"
                ? "Analytics & Reports"
                : "অ্যানালিটিক্স ও রিপোর্ট"}
            </h1>
            <p className="text-gray-600">
              {language === "en"
                ? "Track your business performance and insights"
                : "আপনার ব্যবসার পারফরম্যান্স এবং অন্তর্দৃষ্টি ট্র্যাক করুন"}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">
                  {language === "en" ? "Last Month" : "গত মাস"}
                </SelectItem>
                <SelectItem value="3months">
                  {language === "en" ? "Last 3 Months" : "গত ৩ মাস"}
                </SelectItem>
                <SelectItem value="6months">
                  {language === "en" ? "Last 6 Months" : "গত ৬ মাস"}
                </SelectItem>
                <SelectItem value="1year">
                  {language === "en" ? "Last Year" : "গত বছর"}
                </SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              {language === "en" ? "Export" : "এক্সপোর্ট"}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp}>
          <Card className="border-0 bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    {language === "en" ? "Total Revenue" : "মোট আয়"}
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {analytics.totalRevenue}
                  </p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">+12.5%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="border-0 bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    {language === "en" ? "Total Invoices" : "মোট ইনভয়েস"}
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {analytics.totalInvoices}
                  </p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 text-blue-500 mr-1" />
                    <span className="text-sm text-blue-600">+8.2%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="border-0 bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    {language === "en" ? "Paid Invoices" : "পরিশোধিত ইনভয়েস"}
                  </p>
                  <p className="text-2xl font-bold text-purple-600">
                    {analytics.paidInvoices}
                  </p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 text-purple-500 mr-1" />
                    <span className="text-sm text-purple-600">+15.3%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="border-0 bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    {language === "en" ? "Pending Amount" : "অপেক্ষমাণ পরিমাণ"}
                  </p>
                  <p className="text-2xl font-bold text-orange-600">
                  {  analytics.pendingAmount}
                  </p>
                  <div className="flex items-center mt-1">
                    <TrendingDown className="w-4 h-4 text-orange-500 mr-1" />
                    <span className="text-sm text-orange-600">-5.1%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue Trend */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-0 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>
                  {language === "en" ? "Revenue Trend" : "আয়ের প্রবণতা"}
                </span>
                <Badge variant="secondary">6 months</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip
                    formatter={(currency) => [
                       currency,
                      "Revenue",
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#06B6D4"
                    fill="url(#colorRevenue)"
                  />
                  <defs>
                    <linearGradient
                      id="colorRevenue"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#06B6D4"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-0 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>
                {language === "en" ? "Payment Methods" : "পেমেন্ট পদ্ধতি"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={paymentMethodData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent! * 100).toFixed(0)}%`
                    }
                  >
                    {paymentMethodData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Customer Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border-0 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>
                {language === "en" ? "Customer Growth" : "গ্রাহক বৃদ্ধি"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={customerGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="customers"
                    stroke="#8B5CF6"
                    strokeWidth={3}
                    dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Invoice Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="border-0 bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>
                {language === "en" ? "Invoice Status" : "ইনভয়েস অবস্থা"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={invoiceStatusData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="status" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#06B6D4" radius={[4, 4, 0, 0]}>
                    {invoiceStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Top Customers */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card className="border-0 bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>
              {language === "en" ? "Top Customers" : "শীর্ষ গ্রাহক"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topCustomers.slice(0, 5).map((customer, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {customer.customer}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === "en" ? "Customer" : "গ্রাহক"}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">
                   ৳{customer.amount}
                    </p>
                    <p className="text-sm text-gray-600">
                      {language === "en" ? "Total Revenue" : "মোট আয়"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
   </Suspense>
  );
};

export default AnalyticsPage;
