import { BASE_URL } from "utils/constant";
import { useAsync } from "utils/useAsync";

export const useGetUser = () => {
  const getUser = () => fetch(`${BASE_URL}/api/sample/user`);
  const { data, error, loading } = useAsync(getUser);
  return { data, error, loading };
};
