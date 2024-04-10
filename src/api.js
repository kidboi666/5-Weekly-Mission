import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr";

export const getRequest = async (path, token) => {
  const res = await axios.get(`${BASE_URL}/${path}`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};
