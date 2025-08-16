export interface User {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'premium' | 'basic';
  invoicesUsed: number;
  maxInvoices: number;
  phone?: string;
  address?: string;
  avatar?: string;
}