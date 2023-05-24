import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './auth/reducer';
import CategoriesReducer from './categories/reducer';
import NotifReducer from './notif/reducer';


const store = configureStore({
    reducer: {
        auth: AuthReducer,
        categories: CategoriesReducer,
        notif: NotifReducer
    }
})


export default store