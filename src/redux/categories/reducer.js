import { createSlice } from "@reduxjs/toolkit";
import {
  START_FETCHING_CATEGORIES,
  SUCCESS_FETCHING_CATEGORIES,
  ERROR_FETCHING_CATEGORIES,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statuslist.idle,
};

const categoriesReducer = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(START_FETCHING_CATEGORIES, (state, action) => {
      return {
        ...state,
        status: statuslist.process,
      };
    }),
      builder.addCase(SUCCESS_FETCHING_CATEGORIES, (state, action) => {
        return {
          ...state,
          status: statuslist.success,
          data: action.categories,
        };
      }),
      builder.addCase(ERROR_FETCHING_CATEGORIES, (state, action) => {
        return {
          ...state,
          status: statuslist.error,
        };
      });
  },
});

// export const {} = categoriesReducer.actions

export default categoriesReducer.reducer;
