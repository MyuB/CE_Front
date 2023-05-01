import axios from "axios";
import { getToken } from "utils/localStorage";

export const registerReq = (name, email, pw) => {
  return axios
    .post(`${process.env.REACT_APP_BASEURL}/account`, {
      name,
      email,
      pw,
    })
    .then((res) => res.data);
};

export const logInReq = () => {
  return axios
    .post(`${process.env.REACT_APP_BASEURL}/account/login`, {
      email: "asd@naver.com",
      pw: "asd12345",
    })
    .then((res) => res.data);
};

export const myPageReq = () => {
  const tokens = getToken();
  if (!tokens) alert("no tokens valid!");

  return axios
    .get(`${process.env.REACT_APP_BASEURL}/account`, {
      headers: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },
    })
    .then((res) => res.data);
};

export const averageConsume = () => {
  const tokens = getToken();
  if (!tokens) alert("no tokens valid!");

  return axios
    .get(`${process.env.REACT_APP_BASEURL}/account/avg`, {
      headers: {
        Authorization: tokens.accessToken,
      },
    })
    .then((res) => res.data);
};
