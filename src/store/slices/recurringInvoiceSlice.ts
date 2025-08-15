import { TRecurringInvoice } from "@/types/recurringInvoice.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecurringInvoiceState {
  recurringInvoices: TRecurringInvoice[];
}

const initialState: RecurringInvoiceState = {
  recurringInvoices: [],
};

const recurringInvoiceSlice = createSlice({
  name: "recurringInvoice",
  initialState,
  reducers: {
    addRecurringInvoice: (state, action: PayloadAction<TRecurringInvoice>) => {
      state.recurringInvoices.push(action.payload);
    },
    updateRecurringInvoice: (
      state,
      action: PayloadAction<TRecurringInvoice>
    ) => {
      state.recurringInvoices = state.recurringInvoices.map((rec) =>
        rec.id === action.payload.id ? action.payload : rec
      );
    },
    deleteRecurringInvoice: (state, action: PayloadAction<string>) => {
      state.recurringInvoices = state.recurringInvoices.filter(
        (rec) => rec.id !== action.payload
      );
    },
  },
});

// Selectors
export const selectRecurringInvoices = (state: {
  recurringInvoice: RecurringInvoiceState;
}) => state.recurringInvoice.recurringInvoices;

export const {
  addRecurringInvoice,
  updateRecurringInvoice,
  deleteRecurringInvoice,
} = recurringInvoiceSlice.actions;
export default recurringInvoiceSlice.reducer;
