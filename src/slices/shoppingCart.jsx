import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addItem(state, action) {
      return [...state, action.payload];
    },
    removeItem(state, action) {
      return [...state, action.payload];
    },
    editItem(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { addItem, removeItem, editItem } = shoppingSlice.actions;
export default shoppingSlice.reducer;
