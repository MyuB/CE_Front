import axios from "axios";

export const emailVerification = (email) => {
  return axios
    .post(`${process.env.REACT_APP_BASEURL}/email`, {
      email,
    })
    .then((res) => res.data);
};
