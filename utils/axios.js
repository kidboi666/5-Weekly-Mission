import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});
