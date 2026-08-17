import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // each item: { id, title, price, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const book = action.payload;
      const existing = state.items.find((item) => item.id === book.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          id: book.id,
          title: book.title,
          price: book.price,
          quantity: 1,
        });
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    decreaseQuantity(state, action) {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);

      if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
