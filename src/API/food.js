import axios from "axios";
import { getToken } from "utils/localStorage";

export const getFoodSolution = () => {
  const tokens = getToken();
  if (!tokens) alert("no tokens!");

  return axios
    .get(`${process.env.REACT_APP_BASEURL}/food/solution`, {
      headers: {
        Authorization: tokens.accessToken,
      },
    })
    .then((res) => res.data);
};
