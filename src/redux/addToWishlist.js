import { createSlice } from "@reduxjs/toolkit";

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

export const wishListAction = wishListSlice.actions;
