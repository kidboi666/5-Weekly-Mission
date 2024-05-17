import { mapFolderData } from "@/components-FolderPage/util-map";
import { useAsync } from "@/common/util";
import { axiosInstance } from "@/common/util";
import { Response, SampleFolder } from "@/common/types/data-access-types";
import { AxiosResponse } from "axios";

export const useGetFolder = () => {
  const getFolder: () => Promise<AxiosResponse<Response, any>> = () =>
    axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = data as SampleFolder;

  const folder = mapFolderData(folderData?.folder);

  return { loading, error, data: folder };
};
