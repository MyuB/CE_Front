import axios from "axios";
import { getToken } from "utils/localStorage";

export const postCertification = (user_name, img) => {
  const tokens = getToken();
  if (!tokens) alert("no tokens!");

  return axios.post(
    `${process.env.REACT_APP_BASEURL}/user_auth`,
    {
      user_name,
      img,
    },
    {
      headers: {
        Authorization: tokens.accessToken,
      },
    }
  );
};
