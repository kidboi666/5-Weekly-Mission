import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

const useSampleFolder = () => {
  const { data, error, isLoading } = useSWR(
    "https://bootcamp-api.codeit.kr/api/sample/folder",
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useSampleFolder;
