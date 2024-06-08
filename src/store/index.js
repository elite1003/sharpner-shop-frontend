import { configureStore } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";
import productSlice from "./productSlice";
const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
