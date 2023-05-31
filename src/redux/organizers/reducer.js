import { createSlice } from "@reduxjs/toolkit";
import {
  START_FETCHING_ORGANIZERS,
  ERROR_FETCHING_ORGANIZERS,
  SUCCESS_FETCHING_ORGANIZERS,
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

const organizersReducer = createSlice({
  name: "organizers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(START_FETCHING_ORGANIZERS, (state, action) => {
      return {
        ...state,
        status: statuslist.process,
      };
    });
    builder.addCase(ERROR_FETCHING_ORGANIZERS, (state, action) => {
      return {
        ...state,
        status: statuslist.error,
      };
    });
    builder.addCase(SUCCESS_FETCHING_ORGANIZERS, (state, action) => {
      return {
        ...state,
        status: statuslist.success,
        data: action.organizers,
      };
    });
  },
});

export default organizersReducer.reducer;
