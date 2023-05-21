import axios from "axios";
import { config } from "../../config";
import { USER_LOGIN, USER_LOGOUT } from "./constants";
import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";

let initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : { token: null, role: null, refreshToken: null };

// console.log(initialState);
// let { token, email, role } = initialState;

// let initialState = localStorage.getItem("auth");
// console.log(initialState)

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case USER_LOGIN:
//       return {
//         token: action.token,
//         role: action.role,
//         refreshToken: action.refreshToken,
//       };

//     case USER_LOGOUT:
//       return { token: null, role: null, refreshToken: null };

//     default:
//       return state;
//   }
// }

const loginFetchData = createAsyncThunk(USER_LOGIN, async () => {
  const res = await axios.post(`${config.api_host_dev}/cms/signin`);
});

const reducer = createSlice({
  name: "Auth",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(USER_LOGIN, (state, action)=> {
      // console.log(state, action)
      return {
        token: action.token,
        role: action.role,
        // email: action.email,
      };
    });
  },
});

export default reducer.reducer;
