import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

// Slices
import userReducer from "./slices/userSlice";
import settingsReducer from "./slices/settingsSlice"; // language & theme
import companyReducer from "./slices/companySlice";
import invoiceReducer from "./slices/invoiceSlice";
import customerReducer from "./slices/customerSlice";
import productReducer from "./slices/productSlice";
import paymentReducer from "./slices/paymentSlice";
import recurringInvoiceReducer from "./slices/recurringInvoiceSlice";
import notificationReducer from "./slices/notificationSlice";

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer, // persist this
  settings: settingsReducer, // persist this (language & theme)
  company: companyReducer,
  invoices: invoiceReducer,
  customers: customerReducer,
  products: productReducer,
  payments: paymentReducer,
  recurringInvoices: recurringInvoiceReducer,
  notifications: notificationReducer,
});

// Persist config (only persist user & settings)
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "settings"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
