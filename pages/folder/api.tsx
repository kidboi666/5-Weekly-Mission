import axios from "lib/axios";

export const getUser = async () => {
  const response = await axios.get(`/sample/user`);
  return response.data;
};

export const getLinks = async () => {
  const response = await axios.get(`/users/1/links`);
  return response.data.data;
};

export const getFolders = async () => {
  const response = await axios.get(`/users/1/folders`);
  return response.data.data;
};
