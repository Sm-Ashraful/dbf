import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartTotal: 0,
  isOpen: false,
};

const checkoutSlice = createSlice({
  name: "checkouts",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { product, quantity, selectedColor, selectedSize } = action.payload;
      console.log("Cart product: ", state.items, selectedSize);

      // Find the item based on product ID, selected color, and size
      const item = state.items.find(
        (item) =>
          item.product._id === product._id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (item) {
        // If the item exists, increment the quantity
        item.quantity += quantity;
      } else {
        // If the item doesn't exist, add it to the cart
        state.items.push({
          product,
          quantity,
          selectedColor,
          selectedSize,
        });
      }
    },
    cartItemDecrement: (state, action) => {
      const { _id, selectedColor, selectedSize } = action.payload;

      const item = state.items.find(
        (item) =>
          item.product._id === _id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter(
            (item) =>
              !(
                item.product._id === _id &&
                item.selectedColor === selectedColor &&
                item.selectedSize === selectedSize
              )
          );
        }
      }
    },
    removeFromCart: (state, action) => {
      const { _id, selectedColor, selectedSize } = action.payload;

      state.items = state.items.filter(
        (item) =>
          !(
            item.product._id === _id &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
          )
      );
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.cartTotal = 0;
    },
  },
});

export const cartItems = (state) => state.checkouts.items;
export const isOpen = (state) => state.checkouts.isOpen;
export const totalCartItemSelector = createSelector(cartItems, (cartItems) => {
  return cartItems.reduce((total, curr) => (total += curr.quantity), 0);
});
export const totalCartItemPriceSelector = createSelector(
  cartItems,
  (cartItems) => {
    return cartItems.reduce(
      (total, curr) =>
        (total += curr.quantity * parseFloat(curr.product.price)),
      0
    );
  }
);

export const productQuantitySelector = createSelector(
  [
    cartItems,
    (_, productId, selectedColor, selectedSize) => ({
      productId,
      selectedColor,
      selectedSize,
    }),
  ],
  (cartItems, { productId, selectedColor, selectedSize }) => {
    return cartItems.find(
      (cartItem) =>
        cartItem.product._id === productId &&
        cartItem.selectedColor === selectedColor &&
        cartItem.selectedSize === selectedSize
    )?.quantity;
  }
);

export const {
  addItemToCart,
  cartItemDecrement,
  removeFromCart,
  clearCart,
  setIsOpen,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
