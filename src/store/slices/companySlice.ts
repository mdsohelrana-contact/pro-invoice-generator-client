import { TCompany } from '@/types/company.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: TCompany = {
  name: 'InvoicePro BD',
  address: '123 Business Rd, Dhaka, Bangladesh',
  email: 'info@invoiceprobd.com',
  phone: '+8801234567890',
  website: 'https://www.invoiceprobd.com',
  logo: '/placeholder.svg',
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    updateCompany: (state, action: PayloadAction<Partial<TCompany>>) => {
      return { ...state, ...action.payload };
    },
  },
});


export const selectCompany = (state: RootState) => state.company;


export const { updateCompany } = companySlice.actions;
export default companySlice.reducer;
