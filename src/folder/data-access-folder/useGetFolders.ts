import { axiosInstance } from "@/sharing/util";
import { useAsync } from "@/sharing/util";
import { AxiosResponse } from "axios";

type Body = {
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
};

type Header = {
  accessControlAllowCredentials: boolean;
  accessControlAllowHeaders: string;
  accessControlAllowMethods: string;
  accessControlAllowOrigin: string;
  age: number;
  cacheControl: string;
  contentEncoding: string;
  contentType: string;
  date: Date;
  etag: string;
  server: string;
  strictTransportSecurity: string;
  xMatchedPath: string;
  xVercelCache: string;
  xVercelId: string;
};

export const useGetFolders = () => {
  const getFolders = (): Promise<AxiosResponse<Body, Header>> =>
    axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getFolders);

  const folders = data?.data ?? [];
  const sortedFolders = folders.sort((a, b) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
