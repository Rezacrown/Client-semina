import { getData } from '../../utils/fetch';
import { clearNotif } from '../notif/action'
import { ERROR_FETCHING_ADMINS, START_FETCHING_ADMINS, SUCCESS_FETCHING_ADMINS } from './constants'
import debounce from "debounce-promise";


let debouncedFetchAdmins = debounce(getData, 1000);


const startFetchingAdmins = () => {
    return {
        status: START_FETCHING_ADMINS
    }
 }
const errorFetchingAdmins = () => {
    return {
        status: ERROR_FETCHING_ADMINS
    }
 }
const successFetchingAdmins = ({admins}) => {
    return {
        status: SUCCESS_FETCHING_ADMINS,
        admins,
    }
}
 

const fetchAdmins = () => {
    return async (dispatch, getState) => {
        dispatch(startFetchingAdmins())
        try {
            setTimeout(() => {
               dispatch(clearNotif()) 
            }, 5000)

            const res = await debouncedFetchAdmins('/cms/admins')

        } catch (error) {
            dispatch(errorFetchingAdmins())
        }
    }
}