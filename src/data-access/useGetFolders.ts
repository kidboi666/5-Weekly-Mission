import { instance, useAsync, mapFoldersData } from "@/src/util";
import { FolderRawData } from "@/src/type";

export const useGetFolders = () => {
  const getFolders = () =>
    instance.get<{ data: FolderRawData[] }>("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const folders = mapFoldersData(data?.data);
  const sortedFolders = folders.sort((a, b) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
