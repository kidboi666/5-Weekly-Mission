import { useAsync, instance } from "@/src/util";
import { UserRawData } from "@/src/type";

export const useGetUser = () => {
  const getUser = () => instance.get<{ data: UserRawData }>("sample/user");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data: data?.data ?? null };
};
