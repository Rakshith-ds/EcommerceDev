import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    name: "",
  },
  reducers: {
    login(state, action) {
      const userName = action.payload;
      state.name = userName;
    },
  },
});

export const { login } = AuthSlice.actions;
export default AuthSlice.reducer;
