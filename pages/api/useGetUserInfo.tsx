import { useAsync } from "@/hooks/useAsync";
import { axiosInstance } from "@/utils/axios";
import { mapUserData } from "@/utils/mapUserData";
import { UserRawData } from "@/types/user.interface";

/**
 * 유저 정보 불러오기
 *
 * @author yum
 * @date 23.05
 * @param
 * @return { email, id, name, profileImageSource}
 */
export const useGetUserInfo = (userId: number | null = null) => {
  const url = userId ? `users/${userId}` : "sample/user";
  const getUserInfo = () => axiosInstance.get<{ data: UserRawData }>(url);
  const { error, data } = useAsync(getUserInfo);

  const userData = mapUserData(data);

  return { error, data: userData };
};
