import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root", // key for the persisted data
  storage, // storage engine
};

const persistedReducer = persistReducer(persistConfig, productReducer);

export const store = configureStore({
  reducer: {
    products: persistedReducer, // Add more reducers as needed
  },
});

export const persistor = persistStore(store);
