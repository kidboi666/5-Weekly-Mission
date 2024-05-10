import { useState } from 'react';
import { useEffectOnce } from './useEffectOnce';
import { AxiosError, AxiosResponse } from 'axios';

interface Folder {
  folder: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profileImageSource: string;
    };
  };
  links: {
    id: number;
    createdAt: string;
    url: string;
    title: string;
    description: string;
    imageSource: string;
  }[];
  count: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}
interface Link {
  id: number;
  createdAt: string;
  imageSource: string;
  url: string;
  title: string;
  description: string;
}

type AsyncData = Folder | User | Link;
export const useAsync = (
  asyncFunction: () => Promise<AxiosResponse<any, any>>
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<AsyncData | null>(null);

  const execute = async () => {
    setLoading(true);
    setError('');
    // setData(null);
    try {
      const response = await asyncFunction();
      setData(response.data);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(execute);

  return { execute, loading, error, data };
};
