// src/types/globalTypes.ts

export type Language = 'en' | 'bn';
export type Currency = 'BDT' | 'USD' | 'EUR' | 'GBP';

export type InvoiceStatus = 'Draft' | 'Pending' | 'Paid' | 'Overdue';
export type PaymentStatus = 'Completed' | 'Pending' | 'Failed';
export type RecurringStatus = 'Active' | 'Paused' | 'Cancelled';
export type RecurringFrequency = 'Monthly' | 'Quarterly' | 'Annually';
export type NotificationType = 'success' | 'error' | 'info';
export type NotificationCategory = 'invoice' | 'payment' | 'customer' | 'system' | 'support';
