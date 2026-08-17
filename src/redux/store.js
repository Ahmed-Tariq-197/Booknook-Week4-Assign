import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
