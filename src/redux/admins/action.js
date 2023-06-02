import moment from "moment";
import { getData } from "../../utils/fetch";
import { clearNotif } from "../notif/action";
import {
  ERROR_FETCHING_ADMINS,
  START_FETCHING_ADMINS,
  SUCCESS_FETCHING_ADMINS,
} from "./constants";
import debounce from "debounce-promise";

let debouncedFetchAdmins = debounce(getData, 1000);

export const startFetchingAdmins = () => {
  return {
    type: START_FETCHING_ADMINS,
  };
};
export const errorFetchingAdmins = () => {
  return {
    type: ERROR_FETCHING_ADMINS,
  };
};
export const successFetchingAdmins = ({ admins }) => {
  return {
    type: SUCCESS_FETCHING_ADMINS,
    admins,
  };
};

export const fetchAdmins = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingAdmins());
    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      const res = await debouncedFetchAdmins("/cms/users");

      res.data.data.forEach((key, index) => {
        key.createdAt = moment(key.createdAt).format("MMMM Do YYYY, h:mm:ss a");
      });

      dispatch(
        successFetchingAdmins({
          admins: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingAdmins());
    }
  };
};
