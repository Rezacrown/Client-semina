import { createSlice } from "@reduxjs/toolkit";
import { CLEAR_NOTIF, SET_NOTIF } from "./constants";

let initialState = { status: false, typeNotif: "", message: null };

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_NOTIF:
//       return {
//         ...state,
//         status: action.status,
//         typeNotif: action.typeNotif,
//         message: action.message,
//       };

//     case CLEAR_NOTIF:
//       return { state: initialState };

//     default:
//       return state;
//   }
// }

const notifReducer = createSlice({
  name: "notif",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(SET_NOTIF, (state, action) => {
      return {
        ...state,
        status: action.status,
        typeNotif: action.typeNotif,
        message: action.message,
      };
    }),
      builder.addCase(CLEAR_NOTIF, (state, action) => {
        return {
            state: initialState
        };
      });
  },
});

export default notifReducer.reducer
