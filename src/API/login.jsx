import axios from "axios";

export const handleLogin = () => {
  axios
    .post(`${process.env.REACT_APP_BASEURL}/login`, {
      email: "asd@naver.com",
      pw: "asd12345",
    })
    .then((res) => console.log(res));
};
