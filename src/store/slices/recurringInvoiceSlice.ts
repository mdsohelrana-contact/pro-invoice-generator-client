import { TRecurringInvoice } from "@/types/recurringInvoice.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
      action: PayloadAction<{ id: string; changes: Partial<TRecurringInvoice> }>
    ) => {
      const { id, changes } = action.payload;
      const index = state.recurringInvoices.findIndex((rec) => rec.id === id);
      if (index !== -1) {
        state.recurringInvoices[index] = {
          ...state.recurringInvoices[index],
          ...changes,
        };
      }
    },

    deleteRecurringInvoice: (state, action: PayloadAction<string>) => {
      state.recurringInvoices = state.recurringInvoices.filter(
        (rec) => rec.id !== action.payload
      );
    },
  },
});

// Selectors
export const selectRecurringInvoices = (state: RootState) =>
  state.recurringInvoices.recurringInvoices;

export const {
  addRecurringInvoice,
  updateRecurringInvoice,
  deleteRecurringInvoice,
} = recurringInvoiceSlice.actions;
export default recurringInvoiceSlice.reducer;
