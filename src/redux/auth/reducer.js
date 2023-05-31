import { USER_LOGIN } from "./constants";
import { createSlice } from "@reduxjs/toolkit";

let initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : { token: null, role: null, refreshToken: null, email: null };



const reducer = createSlice({
  name: "Auth",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(USER_LOGIN, (state, action) => {
      return {
        token: action.token,
        role: action.role,
        refreshToken: action.refreshToken,
        email: action.email
      };
    });
  },
});

export default reducer.reducer;
