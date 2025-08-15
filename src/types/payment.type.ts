export type TPayment ={
  id: string;
  invoiceNumber: string;
  customerName: string;
  amount: number;
  date: string;
  method: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

