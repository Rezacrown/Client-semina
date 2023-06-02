import { createSlice } from "@reduxjs/toolkit";
import {
  ERROR_FETCHING_ADMINS,
  START_FETCHING_ADMINS,
  SUCCESS_FETCHING_ADMINS,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

let initialState = {
  data: [],
  status: statuslist.idle,
};

const adminsReducer = createSlice({
  name: "admins",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(START_FETCHING_ADMINS, (state, action) => {
      return {
        ...state,
        status: statuslist.process,
      };
    });
    builder.addCase(ERROR_FETCHING_ADMINS, (state, action) => {
      return {
        ...state,
        status: statuslist.error,
      };
    });
    builder.addCase(SUCCESS_FETCHING_ADMINS, (state, action) => {
      return {
        ...state,
        status: statuslist.success,
        data: action.admins,
      };
    });
  },
});

export default adminsReducer.reducer;
