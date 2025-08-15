export interface User {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'premium';
  invoicesUsed: number;
  maxInvoices: number;
  phone?: string;
  address?: string;
  avatar?: string;
}