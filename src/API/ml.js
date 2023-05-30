import axios from "axios";

export const getPrediction = (formData) => {
  return axios
    .post(`${process.env.REACT_APP_PYTHON}`, formData)
    .then((res) => res.data);
};
