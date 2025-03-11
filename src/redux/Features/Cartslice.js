import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [], // Ensure this is an array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (!Array.isArray(state.value)) {
        state.value = []; // Reset value to an array if it's undefined or not an array
      }
      state.value.push(action.payload); // Push new item
    },
    removecart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    emptyCart: (state) => {
      state.value = []; // Reset cart to empty array
    },
  },
});

export const { increment, removecart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
