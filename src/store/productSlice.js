import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    init(state, action) {
      state.products = action.payload;
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    updateProduct(state, action) {
      const productId = action.payload.id;
      const existingProductIndex = state.products.findIndex(
        (p) => p.id === productId
      );
      state.products[existingProductIndex] = action.payload;
    },
    deleteProduct(state, action) {
      const productId = action.payload;
      state.products = state.products.filter((p) => p.id !== productId);
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
