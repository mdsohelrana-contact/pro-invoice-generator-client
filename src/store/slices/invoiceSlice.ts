// src/features/invoice/invoiceTypes.ts
import { TInvoice } from '@/types/invoice.type';


// src/features/invoice/invoiceSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface InvoiceState {
  invoices: TInvoice[];
}

const initialState: InvoiceState = { invoices: [] };

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    addInvoice(state, action: PayloadAction<TInvoice>) {
      state.invoices.push(action.payload);
    },
    updateInvoice(state, action: PayloadAction<TInvoice>) {
      state.invoices = state.invoices.map(inv =>
        inv.id === action.payload.id ? action.payload : inv
      );
    },
    deleteInvoice(state, action: PayloadAction<string>) {
      state.invoices = state.invoices.filter(inv => inv.id !== action.payload);
    },
  },
});

// Selectors
export const selectInvoices = (state: RootState) => state.invoices.invoices;


export const { addInvoice, updateInvoice, deleteInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
