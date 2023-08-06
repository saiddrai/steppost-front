import axios from "axios";
import Strapi from "strapi-sdk-javascript";

const apiUrl = "http://localhost:1337/api"; // Update with your Strapi server URL
export const axiosGet = (endpoint) => {
  axios
    .get(`${apiUrl}${endpoint}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

export const axiosPost = (endpoint, data) => {
  axios
    .post(`${apiUrl}${endpoint}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};
