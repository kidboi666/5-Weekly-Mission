import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

const useUserLinks = (userId: number) => {
  const { data, error, isLoading } = useSWR(
    `https://bootcamp-api.codeit.kr/api/users/${userId}/links`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useUserLinks;
