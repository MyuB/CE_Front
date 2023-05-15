import axios from "axios";
import { getToken } from "utils/localStorage";

export const groupCreate = (
  group_name,
  start_time,
  end_time,
  is_food,
  is_traffic
) => {
  const tokens = getToken();
  if (!tokens) alert("no tokens valid!");

  return axios
    .post(
      `${process.env.REACT_APP_BASEURL}/group`,
      {
        group_name,
        start_time,
        end_time,
        is_food,
        is_traffic,
      },
      {
        headers: {
          Authorization: tokens.accessToken,
        },
      }
    )
    .then((res) => res.data);
};

export const joinGourp = (inviteCode) => {
  const tokens = getToken();
  if (!tokens) alert("no tokens valid!");

  return axios.post(
    `${process.env.REACT_APP_BASEURL}/group/join`,
    {
      invite_code: inviteCode,
    },
    {
      headers: {
        Authorization: tokens.accessToken,
      },
    }
  );
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
