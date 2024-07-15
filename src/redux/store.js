import { configureStore } from "@reduxjs/toolkit";
import { addToCartSlice } from "./addToCartSlice";
import { wishListSlice } from "./addToWishlist";

const store = configureStore({
  reducer: {
    addToCart: addToCartSlice.reducer,
    wishlist: wishListSlice.reducer,
  },
});

export default store;
