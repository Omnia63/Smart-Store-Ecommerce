import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],

  reducers: {
    addToCart: (state, action) => {
      const product = state.find(
        (item) => item.id === action.payload.id
      );

      if (product) {
        product.quantity += action.payload.quantity || 1;
      } else {
        state.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
    },

    increaseQuantity: (state, action) => {
      const product = state.find(
        (item) => item.id === action.payload
      );

      if (product) {
        product.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const product = state.find(
        (item) => item.id === action.payload
      );

      if (!product) return;

      if (product.quantity > 1) {
        product.quantity -= 1;
      } else {
        return state.filter(
          (item) => item.id !== action.payload
        );
      }
    },

    deleteFromCart: (state, action) => {
      return state.filter(
        (item) => item.id !== action.payload.id
      );
    },

    clearCart: () => {
      return [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;