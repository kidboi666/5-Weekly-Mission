import { useAsync, axiosInstance, mapFolderData } from "@/src/util";
import { SampleFolderRawData } from "@/src/type"

export const useGetFolder = () => {
  const getFolder = () =>
    axiosInstance.get<{ folder: SampleFolderRawData }>("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
