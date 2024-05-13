import { axiosInstance } from "@/common/util";
import { useAsync } from "@/common/util";
import { Folders, Response } from "@/common/types/data-access-types";
import { AxiosResponse } from "axios";

export const useGetFolders = () => {
  const getFolders: () => Promise<AxiosResponse<Response, any>> = () =>
    axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const foldersData = data as Folders;

  const folders = foldersData?.data ?? [];
  const sortedFolders = folders.sort((a, b) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
