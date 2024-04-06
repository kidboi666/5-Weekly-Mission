import { axiosInstance } from "../util/axiosInstance";
import { useAsync } from "./useAsync";

export const useFetchUser = () => {
  const user = () => axiosInstance.get("sample/user");
  const { data, loading, error } = useAsync(user);

  return { data, loading, error };
};
