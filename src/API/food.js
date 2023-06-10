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

export const getFoodCarbonData = (food) => {
  const tokens = getToken();
  if (!tokens) alert("no tokens!");

  return axios
    .get(`${process.env.REACT_APP_BASEURL}/food`, {
      params: { menu: food },
      headers: {
        Authorization: tokens.accessToken,
      },
    })
    .then((res) => res.data);
};

export const setFoodCarbonData = (carbon) => {
  const tokens = getToken();
  if (!tokens) alert("no tokens!");

  return axios
    .post(
      `${process.env.REACT_APP_BASEURL}/food`,
      {
        carbon,
      },
      {
        headers: {
          Authorization: tokens.accessToken,
        },
      }
    )
    .then((res) => res.data);
};
