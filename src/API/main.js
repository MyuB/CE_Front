import axios from "axios";
import { getToken } from "utils/localStorage";

export const getMainPageInfo = () => {
  const tokens = getToken();
  if (!tokens) alert("no tokens valid!");

  return axios
    .get(`${process.env.REACT_APP_BASEURL}/main`, {
      headers: {
        Authorization: tokens.accessToken,
      },
    })
    .then((res) => res.data);
};
