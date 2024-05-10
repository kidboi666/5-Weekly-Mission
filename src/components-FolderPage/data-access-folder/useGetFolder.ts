import { mapFolderData } from "@/components-FolderPage/util-map";
import { useAsync } from "@/common/util";
import { axiosInstance } from "@/common/util";
import { AxiosError, AxiosResponse } from "axios";
import { FolderResponse } from "@/common/types/data-access-types";

export const useGetFolder = () => {
  const getFolder = (): Promise<AxiosResponse<FolderResponse, AxiosError>> =>
    axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
