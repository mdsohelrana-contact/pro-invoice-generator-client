/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Watermark from "@uiw/react-watermark";

export interface InvoiceProps {
  companyName: string;
  companyTagline?: string;
  companyLogoName?: string; // icon name like "Apple", "Heart"
  invoiceNumber: string;
  issueDate: string;
  items: any[];
  subtotal: number;
  discount?: number;
  deliveryFee?: number;
  totalDue: number;
  paymentDetails: {
    bankName: string;
    accountNumber: string;
    accountHolder: string;
  };
  thankYouMessage?: string;
  watermarkContent?: string;
  watermarkOptions?: {
    rotate?: number;
    fontColor?: string;
    fontSize?: number;
    gapX?: number;
    gapY?: number;
    markStyle?: React.CSSProperties;
  };
  fontFamily?: string;
  colors?: {
    primary?: string;
    secondary?: string;
    background?: string;
    textPrimary?: string;
    textSecondary?: string;
    border?: string;
  };
}

const InvoiceCard: React.FC<InvoiceProps> = ({
  companyName,
  companyTagline,
  companyLogoName,
  invoiceNumber,
  issueDate,
  items,
  subtotal,
  discount = 0,
  deliveryFee = 0,
  totalDue,
  paymentDetails,
  thankYouMessage = "Thank you for choosing us — savor every bite!",
  watermarkContent = "InvoicePro BD",
  watermarkOptions = {
    rotate: -22,
    fontColor: "rgba(185, 18, 28, 0.15)",
    fontSize: 20,
    gapX: 100,
    gapY: 120,
    markStyle: { textAlign: "center", fontWeight: "bold" },
  },
  fontFamily = "'Roboto Mono', monospace",
  colors = {
    primary: "#B9121C",
    secondary: "#6B7280",
    background: "#F5F5F5",
    textPrimary: "#111827",
    textSecondary: "#4B5563",
    border: "#D1D5DB",
  },
}) => {
  const renderIconByName = (
    iconName?: string,
    size = 28,
    color = colors.primary
  ): React.ReactNode => {
    if (!iconName) return null;
    const Icon = (LucideIcons as any)[iconName];
    if (!Icon) return null;
    return <Icon size={size} color={color} aria-label={`${iconName} logo`} />;
  };

  return (
    <Watermark
      content={watermarkContent}
      style={{
        display: "inline-block",
        width: "100%",
        maxWidth: "20rem",
        height: "auto",
        background: colors.background,
        position: "relative",
      }}
      rotate={watermarkOptions.rotate}
      fontColor={watermarkOptions.fontColor}
      fontSize={watermarkOptions.fontSize}
      gapX={watermarkOptions.gapX}
      gapY={watermarkOptions.gapY}
      markStyle={watermarkOptions.markStyle}
    >
      <article
        style={{ fontFamily, lineHeight: 1.2 }}
        className="rounded-2xl border shadow p-4"
        aria-label={`${companyName} Invoice`}
      >
        <Card
          className="border p-3"
          style={{ borderColor: colors.border, backgroundColor: "white" }}
        >
          <CardHeader className="flex items-center space-x-2">
            {companyLogoName ? (
              <div aria-label={`${companyName} logo`}>
                {renderIconByName(companyLogoName, 28, colors.primary)}
              </div>
            ) : (
              <Badge
                variant="destructive"
                className="rounded-full w-8 h-8 flex items-center justify-center text-base select-none"
                style={{ backgroundColor: colors.primary, color: "white" }}
                aria-hidden="true"
              >
                ♥
              </Badge>
            )}
            <div>
              <h1
                className="font-extrabold tracking-wide text-sm leading-none"
                style={{ color: colors.primary }}
              >
                {companyName}
              </h1>
              {companyTagline && (
                <p
                  className="italic text-xs leading-none"
                  style={{ color: colors.secondary }}
                >
                  {companyTagline}
                </p>
              )}
            </div>
          </CardHeader>

          {/* TODO: add the rest of the invoice details here */}
        </Card>
      </article>
    </Watermark>
  );
};

export default InvoiceCard;
