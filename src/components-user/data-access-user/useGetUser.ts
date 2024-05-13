import { SampleUser } from "@/common/types/data-access-types";
import { useAsync } from "@/common/util";
import { axiosInstance } from "@/common/util";

export const useGetUser = () => {
  const getUser = () => axiosInstance.get("sample/user");
  const { loading, error, data } = useAsync(getUser);

  const userData = data as SampleUser;
  return { loading, error, userData };
};
