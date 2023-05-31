import { ERROR_FETCHING_ADMINS, START_FETCHING_ADMINS, SUCCESS_FETCHING_ADMINS } from './constants'


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
    return (dispatch, getState) => {
        dispatch(startFetchingAdmins())
        try {
            
        } catch (error) {
            dispatch(errorFetchingAdmins())
        }
    }
}