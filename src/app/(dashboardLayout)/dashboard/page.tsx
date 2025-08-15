"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Users,
  Plus,
  Eye,
  Edit,
  MoreHorizontal,
  DollarSign,
  Clock,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
import { selectInvoices } from "@/store/slices/invoiceSlice";
import { selectCustomers } from "@/store/slices/customerSlice";
import { selectCurrentUser } from "@/store/slices/userSlice";
import { selectLanguage } from "@/store/slices/settingsSlice";

export default function DashboardPage() {
  const invoices = useSelector(selectInvoices);
  const customers = useSelector(selectCustomers);
  // const payments = useSelector(selectPayments);
  const user = useSelector(selectCurrentUser);
  const language = useSelector(selectLanguage);

  // Calculate stats
  const totalInvoices = invoices.length;
  const totalCustomers = customers.length;
  const totalRevenue = invoices.reduce(
    (sum, invoice) => sum + invoice.totalAmount,
    0
  );
  const paidInvoices = invoices.filter((inv) => inv.status === "Paid").length;
  const pendingInvoices = invoices.filter(
    (inv) => inv.status === "Pending"
  ).length;
  const overdueInvoices = invoices.filter(
    (inv) => inv.status === "Overdue"
  ).length;

  // Recent invoices (last 5)
  const recentInvoices = invoices.slice(0, 5);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Overdue":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "Draft":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {language === "en" ? "Welcome back" : "স্বাগতম"},{" "}
            {user?.name || "User"}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {language === "en"
              ? "Here's what's happening with your business today."
              : "আজ আপনার ব্যবসার সাথে কী ঘটছে তা এখানে।"}
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/invoices/create">
              <Plus className="mr-2 h-4 w-4" />
              {language === "en" ? "New Invoice" : "নতুন ইনভয়েস"}
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/customers">
              <Users className="mr-2 h-4 w-4" />
              {language === "en" ? "Add Customer" : "গ্রাহক যোগ করুন"}
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {language === "en" ? "Total Revenue" : "মোট আয়"}
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">৳{totalRevenue}</div>
            <p className="text-xs text-muted-foreground">
              {language === "en"
                ? "+20.1% from last month"
                : "গত মাস থেকে +২০.১%"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {language === "en" ? "Total Invoices" : "মোট ইনভয়েস"}
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalInvoices}</div>
            <p className="text-xs text-muted-foreground">
              {language === "en"
                ? `${paidInvoices} paid, ${pendingInvoices} pending`
                : `${paidInvoices} পরিশোধিত, ${pendingInvoices} অপেক্ষমাণ`}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {language === "en" ? "Customers" : "গ্রাহক"}
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCustomers}</div>
            <p className="text-xs text-muted-foreground">
              {language === "en" ? "+2 new this month" : "এই মাসে +২ নতুন"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {language === "en" ? "Overdue" : "বকেয়া"}
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {overdueInvoices}
            </div>
            <p className="text-xs text-muted-foreground">
              {language === "en" ? "Requires attention" : "মনোযোগ প্রয়োজন"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Progress */}
      {user?.plan === "premium" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {language === "en" ? "Plan Usage" : "প্ল্যান ব্যব���ার"}
            </CardTitle>
            <CardDescription>
              {language === "en"
                ? `You've used ${user.invoicesUsed} of ${user.maxInvoices} invoices this month.`
                : `আপনি এই মাসে ${user.maxInvoices} টির মধ্যে ${user.invoicesUsed} টি ইনভয়েস ব্যবহার করেছেন।`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress
              value={(user.invoicesUsed / user.maxInvoices) * 100}
              className="mb-4"
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {user.maxInvoices - user.invoicesUsed}{" "}
                {language === "en" ? "invoices remaining" : "ইনভয়েস বাকি"}
              </span>
              <Button variant="outline" size="sm" asChild>
                <Link href="/pricing">
                  {language === "en" ? "Upgrade Plan" : "প্ল্যান আপগ্রেড করুন"}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Invoices */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>
              {language === "en" ? "Recent Invoices" : "সাম্প্রতিক ইনভয়েস"}
            </CardTitle>
            <CardDescription>
              {language === "en"
                ? "Your latest invoice activity"
                : "আপনার সর্বশেষ ইনভয়েস কার্যকলাপ"}
            </CardDescription>
          </div>
          <Button variant="outline" asChild>
            <Link href="/invoices">
              {language === "en" ? "View All" : "সব দেখুন"}
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInvoices.length > 0 ? (
              recentInvoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {invoice.customerName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{invoice.invoiceNumber}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {invoice.customerName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-medium">৳{invoice.totalAmount}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {invoice.date}
                      </p>
                    </div>
                    <Badge className={getStatusColor(invoice.status)}>
                      {invoice.status}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          {language === "en" ? "View" : "দেখুন"}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          {language === "en" ? "Edit" : "সম্পাদনা"}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <FileText className="mx-auto h-12 w-12 mb-4 opacity-50" />
                <p>
                  {language === "en"
                    ? "No invoices yet"
                    : "এখনো কোনো ইনভয়েস নেই"}
                </p>
                <Button className="mt-4" asChild>
                  <Link href="/invoices/create">
                    {language === "en"
                      ? "Create Your First Invoice"
                      : "আপনার প্রথম ইনভয়েস তৈরি করুন"}
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
