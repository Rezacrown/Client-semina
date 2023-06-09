import axios from "axios";
import { config } from "../config";

const handleError = (error) => {
  const originalRequest = error.config;

  // console.log(error)
  // console.log('originalRequest._retry');
  // console.log(originalRequest._retry);

  if (error.response.data.msg === "jwt expired") {
    originalRequest._retry = true;
    const session = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    return axios
      .get(`${config.api_host_dev}/cms/refresh-token/${session.refreshToken}`)
      .then((res) => {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...session,
            token: res.data.data.token,
          })
        );

        originalRequest.headers.Authorization = `Bearer ${res.data.data.token}`;

        // console.log("originalRequest");
        // console.log(originalRequest);

        return axios(originalRequest);
      })
      .catch((err) => {
        window.location.href = "/signin";
        localStorage.removeItem("auth");
      });
  }

  return error;
};

export default handleError;
