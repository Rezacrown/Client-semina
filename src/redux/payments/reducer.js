import {createSlice} from '@reduxjs/toolkit'
import {
  START_FETCHING_PAYMENTS,
  SUCCESS_FETCHING_PAYMENTS,
  ERROR_FETCHING_PAYMENTS,
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
  status: statuslist.idle,
};

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case START_FETCHING_PAYMENTS:
//       return { ...state, status: statuslist.process };

//     case ERROR_FETCHING_PAYMENTS:
//       return { ...state, status: statuslist.error };

//     case SUCCESS_FETCHING_PAYMENTS:
//       return {
//         ...state,
//         status: statuslist.success,
//         data: action.payments,
//       };

//     default:
//       return state;
//   }
// }



const paymentsReducer = createSlice({
    name: 'payments',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(START_FETCHING_PAYMENTS, (state, action) => {
            return {
                ...state,
                status: statuslist.process
            }
        })
        builder.addCase(ERROR_FETCHING_PAYMENTS, (state, action) => {
            return {
                ...state,
                status: statuslist.error
            }
        })
        builder.addCase(SUCCESS_FETCHING_PAYMENTS, (state, action) => {
            return {
                ...state,
                status: statuslist.success,
                data: action.payments
            }
        })
    }
})


export default paymentsReducer.reducer

