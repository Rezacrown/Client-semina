import {
  ERROR_FETCHING_ORGANIZERS,
  START_FETCHING_ORGANIZERS,
  SUCCESS_FETCHING_ORGANIZERS,
} from "./constants";

import { getData } from "../../utils/fetch";
import debounce from "debounce-promise";
import { clearNotif } from "../notif/action";
import moment from "moment";

let debouncedFetchOrganizers = debounce(getData, 1000);

export const startFetchinOrganizers = () => {
  return {
    type: START_FETCHING_ORGANIZERS,
  };
};
export const errorFetchinOrganizers = () => {
  return {
    type: ERROR_FETCHING_ORGANIZERS,
  };
};
export const successFetchinOrganizers = ({ organizers }) => {
  return {
    type: SUCCESS_FETCHING_ORGANIZERS,
    organizers,
  };
};

export const fetchOrganizer = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchinOrganizers());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      const res = await debouncedFetchOrganizers("/cms/users");

      res.data.data.forEach((key, index) => {
        key.createdAt = moment(key.createdAt).format("MMMM Do YYYY, h:mm:ss a");
      });

      dispatch(
        successFetchinOrganizers({
          organizers: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchinOrganizers());
    }
  };
};
