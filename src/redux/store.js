import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, themeSwitcherSlice, wishListSlice } from "./features";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: wishListSlice.reducer,
    theme: themeSwitcherSlice.reducer,
  },
});

export default store;
