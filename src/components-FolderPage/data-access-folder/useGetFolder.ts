import { mapFolderData } from "@/components-FolderPage/util-map";
import { useAsync } from "@/common/util";
import { axiosInstance } from "@/common/util";

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
