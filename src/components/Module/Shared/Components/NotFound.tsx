import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, FileText } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardContent className="p-12 text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="relative mx-auto w-64 h-48">
              {/* Large 404 Text */}
              <div className="text-8xl font-bold text-blue-600 dark:text-blue-400 opacity-20 absolute inset-0 flex items-center justify-center">
                404
              </div>

              {/* Invoice Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
                  <FileText className="w-16 h-16 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>

          <p className="text-gray-500 dark:text-gray-400 mb-8">
            It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-transparent"
            >
              <Link href="/dashboard" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Dashboard
              </Link>
            </Button>
          </div>

          {/* Additional Help */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              What can you do?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <Home className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  Go to Homepage
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Start fresh from our main page
                </p>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <Search className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  Search Invoices
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Find what you&lsquo;re looking for
                </p>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  Create Invoice
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Start creating a new invoice
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Quick Links:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/invoices"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                All Invoices
              </Link>
              <Link
                href="/customers"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Customers
              </Link>
              <Link
                href="/payments"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Payments
              </Link>
              <Link
                href="/settings"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Settings
              </Link>
              <Link
                href="/help"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Help Center
              </Link>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Still need help?{" "}
              <Link
                href="/contact"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Contact our support team
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
