import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('productSlice/fetchProducts', async({ limit, skip }) => {
    const res = await fetch (`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data = await res.json();
    return data;
})

export const fetchProductsByCategory = createAsyncThunk(
  "productSlice/fetchProductsByCategory",
  async (category) => {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await res.json();
    return data.products;
  }
);

const productSlice = createSlice({
    initialState: {
        items: [],
        total: 0,
        loading: false,
        error: null
    },
    name: 'productSlice',
    reducers: {

    }, 
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload.products;
            state.total = action.payload.total;
            state.loading = false;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
  state.loading = false;
  state.error = action.error.message;
})
        // fetchProductsByCategory
       .addCase(fetchProductsByCategory.pending, (state) => {
          state.loading = true;
          state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
          state.items = action.payload;
          state.loading = false;
      })
.addCase(fetchProductsByCategory.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
});
      
    }
});

export default  productSlice.reducer;
