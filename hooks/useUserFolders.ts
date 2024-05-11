import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

const useUserFolders = (userId: number) => {
  const { data, error, isLoading } = useSWR(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/folders`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useUserFolders;
