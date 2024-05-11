import useSWR from "swr";

import { fetcher } from "@/lib/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading } = useSWR(
    "https://bootcamp-api.codeit.kr/api/sample/user",
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useCurrentUser;
