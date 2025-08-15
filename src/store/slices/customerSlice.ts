import { TCustomer } from '@/types/customer.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomerState {
  customers: TCustomer[];
}

const initialState: CustomerState = {
  customers: [],
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<TCustomer>) => {
      state.customers.push(action.payload);
    },
    updateCustomer: (state, action: PayloadAction<TCustomer>) => {
      state.customers = state.customers.map((cust) =>
        cust.id === action.payload.id ? action.payload : cust
      );
    },
    deleteCustomer: (state, action: PayloadAction<string>) => {
      state.customers = state.customers.filter((cust) => cust.id !== action.payload);
    },
  },
});

// Selector functions
export const selectCustomers = (state: { customer: CustomerState }) => state.customer.customers;

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
