import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload); // action.payload should be a serializable object
    },
    removeProduct: (state, action) => {
      console.log("Action payload: ", action.payload.id);
      state.products.filter((product) => product._id !== action.payload.id); // action.payload should be serializable
    },
    clearProducts: (state) => {
      state.products = [];
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct, clearProducts } =
  productSlice.actions;
export default productSlice.reducer;
