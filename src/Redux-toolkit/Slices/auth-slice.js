import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../Lib/supabase.js";

// GETTING USER WHEN THE APP RUNS
export const getCurrentUser = createAsyncThunk(
  "authSlice/getCurrentUser",
  async (_, thunkAPI) => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return data.session?.user || null;
  }
);

// LOGIN
export const loginUser = createAsyncThunk(
  "authSlice/loginUser",
  async ({ email, password }, thunkAPI) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return data.user;
  }
);

// REGISTER
export const registerUser = createAsyncThunk(
  "authSlice/registerUser",
  async ({ name, email, password }, thunkAPI) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options:{
        data:{
          name
        }
      }
    });

    if (error) {
      // return thunkAPI.rejectWithValue("This email is already registered.");
        console.log("SUPABASE REGISTER ERROR:", error);
  return thunkAPI.rejectWithValue(error.message);
    }

    return data.user;
  }
);

// LOGOUT
export const logoutUser = createAsyncThunk(
  "authSlice/logoutUser",
  async (_, thunkAPI) => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",

  initialState: {
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

       // GETTING USER WHEN THE APP RUNS
       .addCase(getCurrentUser.pending, (state) => {
  state.loading = true;
})

.addCase(getCurrentUser.fulfilled, (state, action) => {
  state.loading = false;
  state.user = action.payload;
  state.isAuthenticated = !!action.payload;
})

.addCase(getCurrentUser.rejected, (state, action) => {
  state.loading = false;
  state.user = null;
  state.isAuthenticated = false;
  state.error = action.payload;
})

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // LOGOUT
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      })

      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
