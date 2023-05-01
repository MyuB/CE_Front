import axios from "axios";
import { getToken } from "utils/localStorage";

export const groupCreate = () => {
  const tokens = getToken();
  if (!tokens) alert("no tokens valid!");

  return axios
    .post(
      `${process.env.REACT_APP_BASEURL}/group`,
      {},
      {
        headers: {
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        },
      }
    )
    .then((res) => res.data);
};

export const getRank = (group_index) => {
  const tokens = getToken();
  if (!tokens) alert("no tokens valid!");

  return axios
    .get(`${process.env.REACT_APP_BASEURL}/group`, {
      params: { group_index },
      headers: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      },
    })
    .then((res) => res.data);
};
