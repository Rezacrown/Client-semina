import {
  START_FETCHING_TALENTS,
  SUCCESS_FETCHING_TALENTS,
  ERROR_FETCHING_TALENTS,
  SET_KEYWORD,
} from "./constants";

import {createSlice} from '@reduxjs/toolkit';


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
//     case START_FETCHING_TALENTS:
//       return { ...state, status: statuslist.process };

//     case ERROR_FETCHING_TALENTS:
//       return { ...state, status: statuslist.error };

//     case SUCCESS_FETCHING_TALENTS:
//       return {
//         ...state,
//         status: statuslist.success,
//         data: action.talents,
//       };

//     case SET_KEYWORD:
//       return {
//         ...state,
//         keyword: action.keyword,
//       };

//     default:
//       return state;
//   }
// }


const talentReducer = createSlice({
    name: 'talents',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(START_FETCHING_TALENTS, (state, action) => {
            return {
                ...state,
                status: statuslist.process
            }
        })
        builder.addCase(ERROR_FETCHING_TALENTS, (state, action) => {
            return {
                ...state,
                status: statuslist.error
            }
        })
        builder.addCase(SUCCESS_FETCHING_TALENTS, (state, action) => {
            return {
                ...state,
                status: statuslist.success,
                data: action.talents
            }
        })
        builder.addCase(SET_KEYWORD, (state, action) => {
            return {
                ...state,
                status: statuslist.success,
                keyword: action.keyword
            }
        })
    }
})


export default talentReducer.reducer