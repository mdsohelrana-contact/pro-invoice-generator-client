import { InvoiceStatus } from "./globalTypes";

export interface TInvoiceItem {
  id: string;
  productId: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface TInvoice {
  id: string;
  invoiceNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  totalAmount: number; // Use this for totals
  total?: number; // Optional alias for your page code
  status: InvoiceStatus;
  date: string;
  dueDate: string;
  isRecurring: boolean;
  recurringFrequency?: "weekly" | "monthly" | "quarterly" | "yearly";
  nextRecurringDate?: string; // Needed for “Next:” field
  items: TInvoiceItem[];
  notes?: string;
}
