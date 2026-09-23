import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    initialState: JSON.parse(localStorage.getItem("wishlist")) || [],
    name: "wishlistSlice", 
    reducers: {
        toggleWishlist: (state, action) => {
            const product = action.payload;
            const exists = state.find((item) => 
                item.id === product.id)
            if (exists) {
                return state.filter((item) => item.id !== product.id)
            } else {
                state.push(product);
            }
        }
    }
})

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;