
export interface AnalyticsMetrics {
  totalInvoices: number;
  totalRevenue: number;
  totalCustomers: number;
  paidInvoices: number;
  pendingAmount: number;
}

export interface TopCustomer {
  customer: string;
  amount: number;
}
export interface RevenueDataPoint {
  month: string; // e.g. "Jan"
  revenue: number;
  invoices: number;
}

export interface PaymentMethodData {
  name: string; // e.g. "bKash"
  value: number; // percentage
  color: string; // hex color
}

export interface CustomerGrowthData {
  month: string;
  customers: number;
}

export interface InvoiceStatusData {
  status: "Paid" | "Pending" | "Overdue" | "Draft";
  count: number;
  color: string;
}

export interface AnalyticsData extends AnalyticsMetrics {
  topCustomers: TopCustomer[];
  revenueData: RevenueDataPoint[];
  paymentMethodData: PaymentMethodData[];
  customerGrowthData: CustomerGrowthData[];
  invoiceStatusData: InvoiceStatusData[];
}
