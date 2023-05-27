import { createSlice } from "@reduxjs/toolkit";
import {
  START_FETCHING_LISTS_CATEGORIES,
  SUCCESS_FETCHING_LISTS_CATEGORIES,
  ERROR_FETCHING_LISTS_CATEGORIES,
  START_FETCHING_LISTS_TALENTS,
  SUCCESS_FETCHING_LISTS_TALENTS,
  ERROR_FETCHING_LISTS_TALENTS,
  START_FETCHING_LISTS_EVENTS,
  SUCCESS_FETCHING_LISTS_EVENTS,
  ERROR_FETCHING_LISTS_EVENTS,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  categories: [],
  statusCategories: statuslist.idle,
  talents: [],
  statusTalents: statuslist.idle,
  events: [],
  statusEvents: statuslist.idle,
};

const listsReducer = createSlice({
  name: "lists",
  initialState,
    extraReducers: (builder) => {
    //   Categories
      builder.addCase(START_FETCHING_LISTS_CATEGORIES, (state, action) => {
          return {
              ...state,
              statusCategories: statuslist.process
        }
    });
      builder.addCase(ERROR_FETCHING_LISTS_CATEGORIES, (state, action) => {
          return {
              ...state,
              statusCategories: statuslist.error
        }
    });
      builder.addCase(SUCCESS_FETCHING_LISTS_CATEGORIES, (state, action) => {
          return {
              ...state,
              statusCategories: statuslist.success,
              categories: action.categories
        }
      });
    //   Talents
      builder.addCase(START_FETCHING_LISTS_TALENTS, (state, action) => {
          return {
              ...state,
              statusTalents: statuslist.process,
        }
    });
      builder.addCase(ERROR_FETCHING_LISTS_TALENTS, (state, action) => {
          return {
              ...state,
              statusTalents: statuslist.error,
        }
    });
      builder.addCase(SUCCESS_FETCHING_LISTS_TALENTS, (state, action) => {
          return {
              ...state,
              statusTalents: statuslist.success,
              talents: action.talents
        }
      });
        // Events
      builder.addCase(START_FETCHING_LISTS_EVENTS, (state, action) => {
          return {
              ...state,
              statusEvents: statuslist.process,
        }
      });
      builder.addCase(ERROR_FETCHING_LISTS_EVENTS, (state, action) => {
          return {
              ...state,
              statusEvents: statuslist.error,
        }
      });
      builder.addCase(SUCCESS_FETCHING_LISTS_EVENTS, (state, action) => {
          return {
              ...state,
              statusEvents: statuslist.success,
              events: action.events
        }
      });
        
  },
});


export default listsReducer.reducer
