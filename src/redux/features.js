import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateFromCart: (state, action) => {
      // Find Index in Product Data
      const index = state.findIndex((item) => item.id === action.payload.id);

      // if id not match it return false and function is not run.
      if (index !== -1) {
        state[index].quantity = action.payload.quantity;
      }
    },
  },
});

export const wishListSlice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    deleteFromWishlist: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const cartSliceAction = cartSlice.actions;
export const wishListAction = wishListSlice.actions;
