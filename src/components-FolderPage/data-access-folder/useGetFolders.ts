import { axiosInstance } from "@/common/util";
import { useAsync } from "@/common/util";
import { AxiosResponse } from "axios";

export const useGetFolders = () => {
  const getFolders = (): Promise<AxiosResponse<Body, Header>> =>
    axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const folders = data?.data ?? [];
  const sortedFolders = folders.sort((a, b) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
