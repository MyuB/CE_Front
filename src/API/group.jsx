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
          Authorization: tokens.accessToken,
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
        Authorization: tokens.accessToken,
      },
    })
    .then((res) => res.data);
};
