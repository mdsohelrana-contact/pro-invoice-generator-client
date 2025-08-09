import { FileText } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4" role="contentinfo">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center"
                aria-hidden="true"
              >
                <FileText className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold">InvoicePro BD</span>
            </div>
            <p className="text-gray-400">
              Professional invoice generator for Bangladeshi businesses.
            </p>
          </div>

          {/* Product Links */}
          <nav aria-label="Product links">
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-white transition-colors"
                  aria-label="Pricing page"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="hover:text-white transition-colors"
                  aria-label="Templates page"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-white transition-colors"
                  aria-label="Dashboard page"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>

          {/* Support Links */}
          <nav aria-label="Support links">
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/help"
                  className="hover:text-white transition-colors"
                  aria-label="Help Center page"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                  aria-label="Contact page"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                  aria-label="About page"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal Links */}
          <nav aria-label="Legal links">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                  aria-label="Privacy Policy page"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                  aria-label="Terms of Service page"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; <time dateTime={currentYear.toString()}>{currentYear}</time>{" "}
            InvoicePro BD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
