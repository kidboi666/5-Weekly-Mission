import { axiosInstance } from 'sharing/util';
import { useAsync } from 'sharing/util';

export interface Folders {
  data: {
    id: number;
    created_at: string;
    name: string;
    user_id: number;
    favorite: boolean;
    link: {
      count: number;
    };
  }[];
}

export const useGetFolders = () => {
  const getFolders = () => axiosInstance.get('users/1/folders');
  const { loading, error, data } = useAsync<Folders>(getFolders);
  if (data) {
    const folders = data.data;
    const sortedFolders = folders.sort((a, b) => a.id - b.id);

    return { loading, error, data: sortedFolders };
  }
  return;
};
