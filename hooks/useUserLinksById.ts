import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

const useUserLinksById = (userId: number, folderId: number) => {
  const { data, error, isLoading } = useSWR(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/links?folderId=${folderId}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useUserLinksById;
