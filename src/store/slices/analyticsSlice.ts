// /store/slices/analyticsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AnalyticsData } from "@/types/analytics.type";

const initialState: AnalyticsData = {
  totalInvoices: 0,
  totalRevenue: 0,
  totalCustomers: 0,
  paidInvoices: 0,
  pendingAmount: 0,
  topCustomers: [
    { customer: "Customer A", amount: 12000 },
    { customer: "Customer B", amount: 10500 },
    { customer: "Customer C", amount: 9800 },
    { customer: "Customer D", amount: 8700 },
    { customer: "Customer E", amount: 7500 },
    { customer: "Customer F", amount: 6800 },
    { customer: "Customer G", amount: 5900 },
  ],
  revenueData: [],
  paymentMethodData: [],
  customerGrowthData: [],
  invoiceStatusData: [],
};

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setAnalytics: (state, action: PayloadAction<AnalyticsData>) => action.payload,
    updateAnalytics: (state, action: PayloadAction<Partial<AnalyticsData>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const selectAnalytics = (state: RootState) => state.analytics;
export const { setAnalytics, updateAnalytics } = analyticsSlice.actions;
export default analyticsSlice.reducer;
