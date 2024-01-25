import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice";
import CartSlice from "../Slices/CartSlice";
import productSlice from "../Slices/ProductSlice";
import SearchSlice from "../Slices/SearchSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    cart: CartSlice,
    products: productSlice,
    search: SearchSlice,
  },
});

export default store;
