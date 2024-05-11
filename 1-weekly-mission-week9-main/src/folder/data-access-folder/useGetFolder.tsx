import { mapFolderData } from 'folder/util-map';
import { useAsync } from 'sharing/util';
import { axiosInstance } from 'sharing/util';
import { Folder } from 'sharing/util';

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get('sample/folder');
  const { loading, error, data } = useAsync<Folder>(getFolder);
  if (data && data.hasOwnProperty('folder')) {
    const folderData = mapFolderData(data);

    return { loading, error, data: folderData };
  }
};
