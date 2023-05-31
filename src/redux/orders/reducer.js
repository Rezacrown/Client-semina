import { createSlice } from "@reduxjs/toolkit";
import {
  START_FETCHING_ORDERS,
  SUCCESS_FETCHING_ORDERS,
  ERROR_FETCHING_ORDERS,
  SET_PAGE,
  SET_DATE,
} from "./constants";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  page: 1,
  limit: 10,
  pages: 1,
  date: {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
  status: statuslist.idle,
};

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case START_FETCHING_ORDERS:
//       return { ...state, status: statuslist.process };

//     case ERROR_FETCHING_ORDERS:
//       return { ...state, status: statuslist.error };

//     case SUCCESS_FETCHING_ORDERS:
//       return {
//         ...state,
//         status: statuslist.success,
//         data: action.orders,
//         pages: action.pages,
//       };

//     case SET_PAGE:
//       return {
//         ...state,
//         page: action.page,
//       };

//     case SET_DATE:
//       return {
//         ...state,
//         date: action.ranges,
//       };

//     default:
//       return state;
//   }
// }


const ordersReducer = createSlice({
    name: 'orders',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(START_FETCHING_ORDERS, (state, action) => {
            return {
                ...state,
                status: statuslist.process
            }
        })
        builder.addCase(ERROR_FETCHING_ORDERS, (state, action) => {
            return {
                ...state,
                status: statuslist.error
            }
        })
        builder.addCase(SUCCESS_FETCHING_ORDERS, (state, action) => {
            return {
                ...state,
                status: statuslist.success,
                data: action.orders,
                pages: action.pages
            }
        })
        builder.addCase(SET_PAGE, (state, action) => {
            return {
                ...state,
                page: action.page,
            }
        })
        builder.addCase(SET_DATE, (state, action) => {
            return {
                ...state,
                date: action.ranges,
            }
        })
    }
})

export default ordersReducer.reducer