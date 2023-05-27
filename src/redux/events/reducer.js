import { createSlice } from "@reduxjs/toolkit";
import {
  START_FETCHING_EVENTS,
  SUCCESS_FETCHING_EVENTS,
  ERROR_FETCHING_EVENTS,
  SET_KEYWORD,
  SET_CATEGORY,
  SET_TALENT,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  keyword: "",
  talent: "",
  category: "",
  status: statuslist.idle,
};

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case START_FETCHING_EVENTS:
//       return { ...state, status: statuslist.process };

//     case ERROR_FETCHING_EVENTS:
//       return { ...state, status: statuslist.error };

//     case SUCCESS_FETCHING_EVENTS:
//       return {
//         ...state,
//         status: statuslist.success,
//         data: action.events,
//       };

//     case SET_KEYWORD:
//       return {
//         ...state,
//         keyword: action.keyword,
//       };

//     case SET_CATEGORY:
//       return {
//         ...state,
//         category: action.category,
//       };

//     case SET_TALENT:
//       return {
//         ...state,
//         talent: action.talent,
//       };

//     default:
//       return state;
//   }
// }


const eventsReducer = createSlice({
    name: 'events',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(START_FETCHING_EVENTS, (state, action) => {
            return {
                ...state,
                status: statuslist.process
            }
        })
        builder.addCase(ERROR_FETCHING_EVENTS, (state, action) => {
            return {
                ...state,
                status: statuslist.error
            }
        })
        builder.addCase(SUCCESS_FETCHING_EVENTS, (state, action) => {
            return {
                ...state,
                status: statuslist.success,
                data: action.events
            }
        })
        builder.addCase(SET_KEYWORD, (state, action) => {
            return {
                ...state,
                keyword: action.keyword
            }
        })
        builder.addCase(SET_CATEGORY, (state, action) => {
            return {
                ...state,
                category: action.category
            }
        })
        builder.addCase(SET_TALENT, (state, action) => {
            return {
                ...state,
                talent: action.talent
            }
        })
    }
})


export default eventsReducer.reducer