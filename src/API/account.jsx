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

export const logInReq = (id, password) => {
  return axios
    .post(`${process.env.REACT_APP_BASEURL}/account/login`, {
      email: id,
      pw: password,
    })
    .then((res) => res.data);
};

export const myPageReq = () => {
  const tokens = getToken();
  if (!tokens) alert("no tokens valid!");

  return axios
    .get(`${process.env.REACT_APP_BASEURL}/account`, {
      headers: {
        Authorization: tokens.accessToken,
      },
    })
    .then((res) => res.data);
};

export const myPageModification = (name, email) => {
  const tokens = getToken();

  return axios.put(
    `${process.env.REACT_APP_BASEURL}/accout`,
    {
      name,
      email,
    },
    {
      Authorization: tokens.accessToken,
    }
  );
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
