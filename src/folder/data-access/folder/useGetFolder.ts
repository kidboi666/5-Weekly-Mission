import { SampleFolderRawData, mapFolderData } from "@/src/folder";
import { useAsync, axiosInstance } from "@/src/util";

export const useGetFolder = () => {
  const getFolder = () =>
    axiosInstance.get<{ folder: SampleFolderRawData }>("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
