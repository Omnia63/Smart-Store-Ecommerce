import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  notes: "",
};

const checkoutSlice = createSlice({
  name: "checkoutSlice",

  initialState,

  reducers: {
    setCheckoutField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },

    resetCheckout: () => initialState,
  },
});

export const { setCheckoutField, resetCheckout } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
