"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Eye, Mail } from "lucide-react";

interface Invoice {
  id: string;
  clientName: string;
  clientEmail: string;
  items: Array<{
    description: string;
    quantity: number;
    rate: number;
    amount: number;
  }>;
  subtotal: number;
  tax: number;
  total: number;
  date: string;
}

interface PDFGeneratorProps {
  invoice?: Invoice;
}
const PDFGenerator = ({ invoice }: PDFGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);

    // Simulate PDF generation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // In a real app, you would use a library like jsPDF or react-pdf
    console.log("Generating PDF for invoice:", invoice);

    setIsGenerating(false);
  };

  const previewInvoice = () => {
    // Open preview modal or new window
    console.log("Preview invoice:", invoice);
  };

  const emailInvoice = () => {
    // Send invoice via email
    console.log("Email invoice:", invoice);
  };

  if (!invoice) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-32">
          <p className="text-muted-foreground">No invoice data available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          PDF Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Invoice Preview</h3>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Client:</strong> {invoice.clientName}
            </p>
            <p>
              <strong>Email:</strong> {invoice.clientEmail}
            </p>
            <p>
              <strong>Items:</strong> {invoice.items.length}
            </p>
            <p>
              <strong>Total:</strong> ${invoice.total.toFixed(2)}
            </p>
            <p>
              <strong>Date:</strong> {invoice.date}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={previewInvoice}
            variant="outline"
            className="flex-1 bg-transparent"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button
            onClick={generatePDF}
            disabled={isGenerating}
            className="flex-1"
          >
            <Download className="w-4 h-4 mr-2" />
            {isGenerating ? "Generating..." : "Download PDF"}
          </Button>
          <Button
            onClick={emailInvoice}
            variant="outline"
            className="flex-1 bg-transparent"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PDFGenerator;
