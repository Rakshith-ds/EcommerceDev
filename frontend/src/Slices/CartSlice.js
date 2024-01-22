import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.cartData = action.payload;
    },
    remove(state, action) {
      state.cartData = action.payload;
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartItems = (state) => state.cart.cartData;
export default cartSlice.reducer;
