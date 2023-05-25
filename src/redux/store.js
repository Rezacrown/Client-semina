import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './auth/reducer';
import CategoriesReducer from './categories/reducer';
import NotifReducer from './notif/reducer';
import TalentsReducer from './talents/reducer';


const store = configureStore({
    reducer: {
        auth: AuthReducer,
        categories: CategoriesReducer,
        notif: NotifReducer,
        talents: TalentsReducer
    }
})


export default store