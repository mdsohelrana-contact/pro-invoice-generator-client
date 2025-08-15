// notificationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TNotification, TNotificationSettings } from "@/types/notification.type";
import { RootState } from "../store";

interface NotificationState {
  list: TNotification[];
  settings: TNotificationSettings;
}

const initialState: NotificationState = {
  list: [],
  settings: {
    invoiceReminders: true,
    paymentConfirmations: true,
    newCustomerAlerts: true,
    systemUpdates: true,
  },
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<TNotification>) => {
      state.list.push(action.payload);
    },
    markNotificationAsRead: (state, action: PayloadAction<string>) => {
      state.list = state.list.map((notif) =>
        notif.id === action.payload ? { ...notif, read: true } : notif
      );
    },
    markAllNotificationsAsRead: (state) => {
      state.list = state.list.map((notif) => ({ ...notif, read: true }));
    },
    deleteNotification: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((notif) => notif.id !== action.payload);
    },
    deleteAllNotifications: (state) => {
      state.list = [];
    },
    updateNotificationSettings: (
      state,
      action: PayloadAction<Partial<TNotificationSettings>>
    ) => {
      state.settings = { ...state.settings, ...action.payload };
    },
  },
});

// Selector
export const selectNotifications = (state: RootState) => state.notifications.list;


export const {
  addNotification,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification,
  deleteAllNotifications,
  updateNotificationSettings,
} = notificationSlice.actions;

export default notificationSlice.reducer;
