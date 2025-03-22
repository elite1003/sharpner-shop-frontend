import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
  },
  reducers: {
    init(state, action) {
      state.order = action.payload;
    },
  },
});

export const orderActions = orderSlice.actions;

export default orderSlice;
