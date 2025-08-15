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
  customerName: string;
  customerEmail: string;
  totalAmount: number;
  status: InvoiceStatus;
  date: string;
  dueDate: string;
  items: TInvoiceItem[];
  notes?: string;
}
