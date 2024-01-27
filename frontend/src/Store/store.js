import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slices/AuthSlice";
import CartSlice from "../Slices/CartSlice"; // Import the persistedReducer
import productSlice from "../Slices/ProductSlice";
import SearchSlice from "../Slices/SearchSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: [],
};

const reducer = combineReducers({
  auth: AuthSlice,
  cart: CartSlice,
  products: productSlice,
  search: SearchSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
