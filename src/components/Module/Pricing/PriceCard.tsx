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
import PrimaryButton from "../Shared/Buttons/PrimaryButton";

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
          aria-label={`${plan.name} pricing plan`}
          role="region"
          tabIndex={-1}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge
                className="bg-blue-600 text-white px-4 py-1 flex items-center"
                aria-label="Most popular plan"
              >
                <Star
                  className="w-4 h-4 mr-1"
                  aria-hidden="true"
                  focusable="false"
                />
                Most Popular
              </Badge>
            </div>
          )}

          <CardHeader className="text-center pb-4">
            <h3 className="text-2xl font-bold" id={`${key}-plan-title`}>
              {plan.name}
            </h3>
            <CardDescription
              id={`${key}-plan-description`}
              className="text-gray-600"
            >
              {plan.description}
            </CardDescription>

            <div className="mt-4" aria-describedby={`${key}-plan-description`}>
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
              <section aria-labelledby={`${key}-features-title`}>
                <h4
                  id={`${key}-features-title`}
                  className="font-medium mb-3 text-green-700"
                >
                  Included:
                </h4>
                <ul
                  className="space-y-2 list-inside list-disc"
                  aria-describedby={`${key}-features-list`}
                >
                  {plan.features.map((feature: any, index: number) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-sm text-gray-700"
                      tabIndex={0}
                    >
                      <Check
                        className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                        focusable="false"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Limitations */}
              {plan.limitations && plan.limitations.length > 0 && (
                <section aria-labelledby={`${key}-limitations-title`}>
                  <h4
                    id={`${key}-limitations-title`}
                    className="font-medium mb-3 text-gray-500"
                  >
                    Not included:
                  </h4>
                  <ul
                    className="space-y-2 list-inside list-disc"
                    aria-describedby={`${key}-limitations-list`}
                  >
                    {plan.limitations.map((limitation: any, index: number) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-gray-500"
                        tabIndex={0}
                      >
                        <X
                          className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                          focusable="false"
                        />
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <Separator />

              <Link href="/dashboard" passHref>
                <PrimaryButton
                  className="w-full mt-2"
                  aria-label={`${
                    plan.price[isYearly ? "yearly" : "monthly"] === 0
                      ? "Get started free"
                      : "Start free trial"
                  } for ${plan.name} plan`}
                >
                  {plan.price[isYearly ? "yearly" : "monthly"] === 0
                    ? "Get Started Free"
                    : "Start Free Trial"}
                </PrimaryButton>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PriceCard;
