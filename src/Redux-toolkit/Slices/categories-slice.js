import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk('categoriesSlice/fetchCategories', async () => {
    const res = await fetch('https://dummyjson.com/products/categories');
    const data = await res.json();
    return data
})

const categoriesSlice = createSlice({
    initialState: [],
    name: 'categoriesSlice',
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default categoriesSlice.reducer;