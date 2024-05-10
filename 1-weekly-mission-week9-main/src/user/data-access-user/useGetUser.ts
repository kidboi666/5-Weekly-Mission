import { useAsync } from 'sharing/util';
import { axiosInstance } from 'sharing/util';

interface UserData {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export const useGetUser = () => {
  const getUser = () => axiosInstance.get('sample/user');
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
