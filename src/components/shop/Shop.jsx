import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "/src/slices/shoppingCart";

export default configureStore({
  reducer: {
    shopping: shoppingSlice,
  },
});
