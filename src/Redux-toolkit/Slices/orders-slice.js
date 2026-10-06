import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "ordersSlice",
  initialState: JSON.parse(localStorage.getItem("orders")) || [],

  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    },

    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const { addOrder, clearOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
