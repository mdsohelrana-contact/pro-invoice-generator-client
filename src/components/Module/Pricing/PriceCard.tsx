/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PriceCardProps {
  t: Record<string, any>;
  isYearly: boolean;
}

const PriceCard = ({ t, isYearly }: PriceCardProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {Object.entries(t).map(([key, plan]) => (
        <Card
          key={key}
          className={`relative ${
            plan.popular
              ? "border-2 border-blue-500 shadow-xl scale-105"
              : "border shadow-lg"
          } hover:shadow-xl transition-all duration-300`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-600 text-white px-4 py-1">
                <Star className="w-4 h-4 mr-1" />
                Most Popular
              </Badge>
            </div>
          )}

          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
            <CardDescription className="text-gray-600">
              {plan.description}
            </CardDescription>

            <div className="mt-4">
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold">
                  {plan.price[isYearly ? "yearly" : "monthly"] === 0
                    ? "Free"
                    : `৳${plan.price[
                        isYearly ? "yearly" : "monthly"
                      ].toLocaleString()}`}
                </span>
                {plan.price[isYearly ? "yearly" : "monthly"] > 0 && (
                  <span className="text-gray-500 ml-1">
                    /{isYearly ? "year" : "month"}
                  </span>
                )}
              </div>

              {isYearly && plan.price.yearly > 0 && (
                <p className="text-sm text-gray-500 mt-1">
                  ৳{plan.price.yearly.toLocaleString()} billed annually
                </p>
              )}
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              {/* Features */}
              <div>
                <h4 className="font-medium mb-3 text-green-700">Included:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature: any, index: any) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              {plan.limitations && plan.limitations.length > 0 && (
                <div>
                  <h4 className="font-medium mb-3 text-gray-500">
                    Not included:
                  </h4>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation: any, index: any) => (
                      <li key={index} className="flex items-start space-x-2">
                        <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-500">
                          {limitation}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Separator />

              <Link href="/dashboard" className="block">
                <Button className="w-full">
                  {plan.price[isYearly ? "yearly" : "monthly"] === 0
                    ? "Get Started Free"
                    : "Start Free Trial"}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PriceCard;
