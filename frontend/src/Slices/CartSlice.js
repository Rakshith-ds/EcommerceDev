import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, { payload }) {
      state.cartData = payload;
    },
    remove(state, { payload }) {
      state.cartData = payload;
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartItems = (state) => state.cart.cartData;
export default cartSlice.reducer;
