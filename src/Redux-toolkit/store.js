import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slices/product-slice';
import cartSlice from "./Slices/cart-slice";
import categoriesSlice from './Slices/categories-slice';
import wishlistSlice from './Slices/wishlist-slice';
import authSlice from './Slices/auth-slice';
import checkoutSlice from './Slices/checkout-slice';
import ordersSlice from './Slices/orders-slice';


export const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    categories: categoriesSlice,
    wishlist: wishlistSlice,
    auth: authSlice, 
    checkout: checkoutSlice,
    orders: ordersSlice,
  },
});