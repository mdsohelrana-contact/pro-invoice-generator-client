import { TPayment } from "@/types/payment.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PaymentState {
  payments: TPayment[];
}

const initialState: PaymentState = {
  payments: [],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addPayment: (state, action: PayloadAction<TPayment>) => {
      state.payments.push(action.payload);
    },
    updatePayment: (state, action: PayloadAction<TPayment>) => {
      state.payments = state.payments.map((pay) =>
        pay.id === action.payload.id ? action.payload : pay
      );
    },
    deletePayment: (state, action: PayloadAction<string>) => {
      state.payments = state.payments.filter(
        (pay) => pay.id !== action.payload
      );
    },
  },
});

// Selectors
export const selectPayments =(state: RootState) =>
  state.payments.payments;

export const { addPayment, updatePayment, deletePayment } =
  paymentSlice.actions;
export default paymentSlice.reducer;
