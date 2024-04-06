import { useAsync } from "../hooks/useAsync";
import { axiosInstance } from "../utill/axiosInstance";
import { mapUserData } from "../utill/mapUserData";

/**
 * 유저 정보 불러오기
 *
 * @author yum
 * @date 23.04
 * @param
 * @return { email, id, name, profileImageSource}
 */
export const useGetUserInfo = (userId = null) => {
  const url = userId ? `users/${userId}` : "sample/user";
  const getUserInfo = () => axiosInstance.get(url);
  const { error, data } = useAsync(getUserInfo);

  const userData = mapUserData(data);

  return { error, data: userData };
};
