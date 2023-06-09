import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './auth/reducer';
import CategoriesReducer from './categories/reducer';
import NotifReducer from './notif/reducer';
import TalentsReducer from './talents/reducer';
import PaymentsReducer from './payments/reducer';
import EventsReducer from './events/reducer';
import ListsReducer from './lists/reducer';
import OrdersReducer from './orders/reducer';
import OrganizersReducer from './organizers/reducer';
import AdminsReducer from './admins/reducer';


const store = configureStore({
    reducer: {
        auth: AuthReducer,
        categories: CategoriesReducer,
        notif: NotifReducer,
        talents: TalentsReducer,
        payments: PaymentsReducer,
        events: EventsReducer,
        lists: ListsReducer,
        orders: OrdersReducer,
        organizers: OrganizersReducer,
        admins: AdminsReducer
    }
})


export default store