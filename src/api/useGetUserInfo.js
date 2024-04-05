import { useAsync } from "../hooks/useAsync";
import { axiosInstance } from "../utill/axiosInstance";

/**
 * 유저 정보 불러오기
 *
 * @author yum
 * @date 23.04
 * @param
 * @return { email, id, name, profileImageSource}
 */
export const useGetUserInfo = () => {
  const getUserInfo = () => axiosInstance.get("sample/user");
  const { error, data } = useAsync(getUserInfo);
  return { error, data };
};
