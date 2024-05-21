import { useAsync, instance, mapFolderData } from "@/src/util";
import { SampleFolderRawData } from "@/src/type";

export const useGetFolder = () => {
  const getFolder = () =>
    instance.get<{ folder: SampleFolderRawData }>("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};


