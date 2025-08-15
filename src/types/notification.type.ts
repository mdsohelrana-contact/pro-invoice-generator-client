export type TNotification = {
  id: string;
  message: string;
  type: "success" | "error" | "info";
  category: "invoice" | "payment" | "customer" | "system" | "support";
  read: boolean;
  timestamp: string;
};

export type TNotificationSettings = {
  invoiceReminders: boolean;
  paymentConfirmations: boolean;
  newCustomerAlerts: boolean;
  systemUpdates: boolean;
};
