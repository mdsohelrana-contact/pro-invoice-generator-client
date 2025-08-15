export type TRecurringInvoice= {
  id: string;
  name: string;
  customerName: string;
  amount: number;
  frequency: 'Monthly' | 'Quarterly' | 'Annually';
  nextDueDate: string;
  status: 'Active' | 'Paused' | 'Cancelled';
  createdAt: string;
}
