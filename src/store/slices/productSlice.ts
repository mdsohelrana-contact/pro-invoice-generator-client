import { TProduct } from '@/types/product.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  products: TProduct[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<TProduct>) => {
      state.products = state.products.map((prod) =>
        prod.id === action.payload.id ? action.payload : prod
      );
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((prod) => prod.id !== action.payload);
    },
  },
});

// Selectors
export const selectProducts = (state: { product: ProductState }) => state.product.products;

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
