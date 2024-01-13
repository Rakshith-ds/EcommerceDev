import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice";
import CartSlice from "../Slices/CartSlice";
import productSlice from "../Slices/ProductSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    cart: CartSlice,
    products: productSlice,
  },
});

export default store;
