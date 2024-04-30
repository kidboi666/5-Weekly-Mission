import { BASE_URL } from "utils/constant";
import { mapFolderData } from "utils/mapFolderData";
import { useAsync } from "utils/useAsync";

export const useGetFolder = () => {
  const getFolder = () => fetch(`${BASE_URL}/api/sample/folder`);
  const { data, error, loading } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { folderData, error, loading };
};
