import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import checkoutReducer from "./slice/CheckoutSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, productReducer);
const persistedCheckoutReducer = persistReducer(persistConfig, checkoutReducer);

export const store = configureStore({
  reducer: {
    products: persistedReducer,
    checkouts: persistedCheckoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
