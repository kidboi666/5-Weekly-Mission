import { useAsync } from "@/common/util";
import { axiosInstance } from "@/common/util";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get("sample/user");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
