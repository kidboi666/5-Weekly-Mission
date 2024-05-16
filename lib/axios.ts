import axios from "axios";

export const instance = axios.create({
  baseURL:'https://bootcamp-api.codeit.kr/api/users/1'
});

export const joinInstance = axios.create({
  baseURL:'https://bootcamp-api.codeit.kr/api'
});