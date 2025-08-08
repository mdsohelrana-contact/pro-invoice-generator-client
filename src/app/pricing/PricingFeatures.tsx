"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";
const PricingFeatures = () => {
  return (
    <Card className="mb-16">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Feature Comparison
        </CardTitle>
        <CardDescription className="text-center">
          Compare all features across different plans
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Feature</th>
                <th className="text-center py-3 px-4">Free</th>
                <th className="text-center py-3 px-4">Professional</th>
                <th className="text-center py-3 px-4">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">Monthly Invoices</td>
                <td className="text-center py-3 px-4">5</td>
                <td className="text-center py-3 px-4">Unlimited</td>
                <td className="text-center py-3 px-4">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">Custom Branding</td>
                <td className="text-center py-3 px-4">
                  <X className="w-4 h-4 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-4 h-4 text-green-600 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-4 h-4 text-green-600 mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">WhatsApp Integration</td>
                <td className="text-center py-3 px-4">
                  <X className="w-4 h-4 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-4 h-4 text-green-600 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-4 h-4 text-green-600 mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">Analytics & Reports</td>
                <td className="text-center py-3 px-4">
                  <X className="w-4 h-4 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">Basic</td>
                <td className="text-center py-3 px-4">Advanced</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">API Access</td>
                <td className="text-center py-3 px-4">
                  <X className="w-4 h-4 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <X className="w-4 h-4 text-red-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-4 h-4 text-green-600 mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">Support</td>
                <td className="text-center py-3 px-4">Email</td>
                <td className="text-center py-3 px-4">Priority Email</td>
                <td className="text-center py-3 px-4">Phone + Email</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingFeatures;
