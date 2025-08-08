/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  name: string;
  email: string;
  plan: "Free" | "Premium";
  avatar?: string;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: string;
}

interface Company {
  name: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  logo?: string;
}

interface StoreState {
  user: User | null;
  setUser: (user: User | null) => void;

  language: "en" | "bn";
  setLanguage: (language: "en" | "bn") => void;

  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;

  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;

  notifications: Notification[];
  addNotification: (
    notification: Omit<Notification, "id" | "createdAt">
  ) => void;
  markNotificationAsRead: (id: string) => void;
  clearNotifications: () => void;

  invoices: any[];
  setInvoices: (invoices: any[]) => void;

  company: Company;
  setCompany: (company: Partial<Company>) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      user: {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        plan: "Free",
      },
      setUser: (user) => set({ user }),

      language: "en",
      setLanguage: (language) => set({ language }),

      theme: "system",
      setTheme: (theme) => set({ theme }),

      sidebarCollapsed: false,
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),

      notifications: [
        {
          id: "1",
          title: "Welcome to InvoicePro BD",
          message: "Your account has been created successfully",
          type: "success",
          read: false,
          createdAt: new Date().toISOString(),
        },
        {
          id: "2",
          title: "Invoice Payment Received",
          message: "Payment for Invoice #INV-001 has been received",
          type: "success",
          read: false,
          createdAt: new Date().toISOString(),
        },
        {
          id: "3",
          title: "Invoice Overdue",
          message: "Invoice #INV-003 is now overdue",
          type: "warning",
          read: true,
          createdAt: new Date().toISOString(),
        },
      ],

      addNotification: (notification) => {
        const newNotification: Notification = {
          ...notification,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          notifications: [newNotification, ...state.notifications],
        }));
      },

      markNotificationAsRead: (id) => {
        set((state) => ({
          notifications: state.notifications.map((notification) =>
            notification.id === id
              ? { ...notification, read: true }
              : notification
          ),
        }));
      },

      clearNotifications: () => set({ notifications: [] }),

      invoices: [],
      setInvoices: (invoices) => set({ invoices }),

      company: {
        name: "InvoicePro BD",
        address: "Dhaka, Bangladesh",
        phone: "+880 1700-000000",
        email: "info@invoiceprobd.com",
        website: "https://invoiceprobd.com",
      },
      setCompany: (company) =>
        set((state) => ({ company: { ...state.company, ...company } })),
    }),
    {
      name: "invoice-saas-storage",
      partialize: (state) => ({
        user: state.user,
        language: state.language,
        theme: state.theme,
        sidebarCollapsed: state.sidebarCollapsed,
        company: state.company,
      }),
    }
  )
);
