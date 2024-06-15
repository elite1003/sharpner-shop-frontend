import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    init(state, action) {
      state.cart = action.payload;
    },
    addProductInCart(state, action) {
      const product = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (p) => p.id === product.id
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity++;
      } else {
        state.cart.push({
          id: product.id,
          productName: product.productName,
          price: product.price,
          quantity: 1,
        });
      }
    },

    deleteProductInCart(state, action) {
      const productId = action.payload;
      state.cart = state.cart.filter((p) => p.id !== productId);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
