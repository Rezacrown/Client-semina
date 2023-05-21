import { configureStore, combineReducers } from '@reduxjs/toolkit'
import AuthReducer from './auth/reducer';


const store = configureStore({
    reducer: {
        auth: AuthReducer
    }
})


export default store