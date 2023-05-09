import axios from "axios";
import { getToken } from "utils/localStorage";

export const setTrafficCarbon = (carbon) => {
  const tokens = getToken();
  return axios
    .post(
      `${process.env.REACT_APP_BASEURL}/traffic`,
      { carbon },
      {
        headers: {
          Authorization: tokens.accessToken,
        },
      }
    )
    .then((res) => res.data);
};

export const getTrafficSolution = () => {
  const tokens = getToken();

  return axios
    .get(`${process.env.REACT_APP_BASEURL}/traffic/solution`, {
      headers: {
        Authorization: tokens.accessToken,
      },
    })
    .then((res) => res.data);
};

export const getTrafficCarbon = () => {
  const tokens = getToken();

  return axios
    .get(`${process.env.REACT_APP_BASEURL}/traffic/carbon`, {
      headers: {
        Authorization: tokens.accessToken,
      },
    })
    .then((res) => res.data);
};
