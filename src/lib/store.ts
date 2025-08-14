import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
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

interface Company {
  name: string;
  address: string;
  email: string;
  phone: string;
  website: string;
  logo?: string;
}

interface InvoiceItem {
  id: string;
  productId: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

interface Invoice {
  id: string;
  invoiceNumber: string;
  customerName: string;
  customerEmail: string;
  totalAmount: number;
  status: 'Draft' | 'Pending' | 'Paid' | 'Overdue';
  date: string;
  dueDate: string;
  items: InvoiceItem[];
  notes?: string;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
}

interface Product {
  id: string;
  name: string;
  unitPrice: number;
  description: string;
  createdAt: string;
}

interface Payment {
  id: string;
  invoiceNumber: string;
  customerName: string;
  amount: number;
  date: string;
  method: string;
  status: 'Completed' | 'Pending' | 'Failed';
}

interface RecurringInvoice {
  id: string;
  name: string;
  customerName: string;
  amount: number;
  frequency: 'Monthly' | 'Quarterly' | 'Annually';
  nextDueDate: string;
  status: 'Active' | 'Paused' | 'Cancelled';
  createdAt: string;
}

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  category: 'invoice' | 'payment' | 'customer' | 'system' | 'support';
  read: boolean;
  timestamp: string;
}

interface NotificationSettings {
  invoiceReminders: boolean;
  paymentConfirmations: boolean;
  newCustomerAlerts: boolean;
  systemUpdates: boolean;
}

interface StoreState {
  user: User | null;
  company: Company;
  language: 'en' | 'bn';
  currency: 'BDT' | 'USD' | 'EUR' | 'GBP';
  invoices: Invoice[];
  customers: Customer[];
  products: Product[];
  payments: Payment[];
  recurringInvoices: RecurringInvoice[];
  notifications: {
    list: Notification[];
    settings: NotificationSettings;
  };

  login: (userData: User) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  updateCompany: (companyData: Partial<Company>) => void;
  setLanguage: (lang: 'en' | 'bn') => void;
  setCurrency: (currency: 'BDT' | 'USD' | 'EUR' | 'GBP') => void;
  addInvoice: (invoice: Invoice) => void;
  updateInvoice: (invoice: Invoice) => void;
  deleteInvoice: (id: string) => void;
  addCustomer: (customer: Customer) => void;
  updateCustomer: (customer: Customer) => void;
  deleteCustomer: (id: string) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  addPayment: (payment: Payment) => void;
  updatePayment: (payment: Payment) => void;
  deletePayment: (id: string) => void;
  addRecurringInvoice: (recurringInvoice: RecurringInvoice) => void;
  updateRecurringInvoice: (recurringInvoice: RecurringInvoice) => void;
  deleteRecurringInvoice: (id: string) => void;
  addNotification: (notification: Notification) => void;
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  deleteNotification: (id: string) => void;
  deleteAllNotifications: () => void;
  updateNotificationSettings: (settings: Partial<NotificationSettings>) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      user: null,
      company: {
        name: 'InvoicePro BD',
        address: '123 Business Rd, Dhaka, Bangladesh',
        email: 'info@invoiceprobd.com',
        phone: '+8801234567890',
        website: 'https://www.invoiceprobd.com',
        logo: '/placeholder.svg?height=100&width=100&text=Logo',
      },
      language: 'en',
      currency: 'BDT',
      invoices: [],
      customers: [],
      products: [],
      payments: [],
      recurringInvoices: [],
      notifications: {
        list: [],
        settings: {
          invoiceReminders: true,
          paymentConfirmations: true,
          newCustomerAlerts: true,
          systemUpdates: true,
        },
      },

      login: (userData) => set({ user: userData }),
      logout: () => set({ user: null }),
      updateUser: (userData) =>
        set((state) => ({ user: state.user ? { ...state.user, ...userData } : null })),
      updateCompany: (companyData) =>
        set((state) => ({ company: { ...state.company, ...companyData } })),
      setLanguage: (lang) => set({ language: lang }),
      setCurrency: (curr) => set({ currency: curr }),

      addInvoice: (invoice) => set((state) => ({ invoices: [...state.invoices, invoice] })),
      updateInvoice: (updatedInvoice) =>
        set((state) => ({
          invoices: state.invoices.map((inv) => (inv.id === updatedInvoice.id ? updatedInvoice : inv)),
        })),
      deleteInvoice: (id) =>
        set((state) => ({ invoices: state.invoices.filter((inv) => inv.id !== id) })),

      addCustomer: (customer) => set((state) => ({ customers: [...state.customers, customer] })),
      updateCustomer: (updatedCustomer) =>
        set((state) => ({
          customers: state.customers.map((cust) => (cust.id === updatedCustomer.id ? updatedCustomer : cust)),
        })),
      deleteCustomer: (id) =>
        set((state) => ({ customers: state.customers.filter((cust) => cust.id !== id) })),

      addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
      updateProduct: (updatedProduct) =>
        set((state) => ({
          products: state.products.map((prod) => (prod.id === updatedProduct.id ? updatedProduct : prod)),
        })),
      deleteProduct: (id) =>
        set((state) => ({ products: state.products.filter((prod) => prod.id !== id) })),

      addPayment: (payment) => set((state) => ({ payments: [...state.payments, payment] })),
      updatePayment: (updatedPayment) =>
        set((state) => ({
          payments: state.payments.map((pay) => (pay.id === updatedPayment.id ? updatedPayment : pay)),
        })),
      deletePayment: (id) =>
        set((state) => ({ payments: state.payments.filter((pay) => pay.id !== id) })),

      addRecurringInvoice: (recurringInvoice) =>
        set((state) => ({ recurringInvoices: [...state.recurringInvoices, recurringInvoice] })),
      updateRecurringInvoice: (updatedRecurringInvoice) =>
        set((state) => ({
          recurringInvoices: state.recurringInvoices.map((rec) =>
            rec.id === updatedRecurringInvoice.id ? updatedRecurringInvoice : rec
          ),
        })),
      deleteRecurringInvoice: (id) =>
        set((state) => ({ recurringInvoices: state.recurringInvoices.filter((rec) => rec.id !== id) })),

      addNotification: (notification) =>
        set((state) => ({
          notifications: { ...state.notifications, list: [...state.notifications.list, notification] },
        })),
      markNotificationAsRead: (id) =>
        set((state) => ({
          notifications: {
            ...state.notifications,
            list: state.notifications.list.map((notif) =>
              notif.id === id ? { ...notif, read: true } : notif
            ),
          },
        })),
      markAllNotificationsAsRead: () =>
        set((state) => ({
          notifications: {
            ...state.notifications,
            list: state.notifications.list.map((notif) => ({ ...notif, read: true })),
          },
        })),
      deleteNotification: (id) =>
        set((state) => ({
          notifications: {
            ...state.notifications,
            list: state.notifications.list.filter((notif) => notif.id !== id),
          },
        })),
      deleteAllNotifications: () =>
        set((state) => ({
          notifications: {
            ...state.notifications,
            list: [],
          },
        })),
      updateNotificationSettings: (settings) =>
        set((state) => ({
          notifications: { ...state.notifications, settings: { ...state.notifications.settings, ...settings } },
        })),
    }),
    {
      name: 'invoice-saas-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
