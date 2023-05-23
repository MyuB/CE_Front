import axios from "axios";
import { getToken } from "utils/localStorage";

export const postCertification = (img) => {
  const tokens = getToken();
  if (!tokens) alert("no tokens!");

  return axios
    .post(
      `${process.env.REACT_APP_BASEURL}/user_auth`,
      {
        img: img,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: tokens.accessToken,
        },
      }
    )
    .then((res) => res.data);
};
