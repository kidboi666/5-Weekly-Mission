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
export const useGetUserInfo = (userId = null) => {
  const url = userId ? `users/${userId}` : "sample/user";
  const getUserInfo = () => axiosInstance.get(url);
  const { error, data } = useAsync(getUserInfo);

  if (data) {
    let userInfoObject = {};
    if (userId) {
      // userId 값이 존재하고 데이터가 존재하는 경우에만 처리
      const userData = data.data[0]; // 데이터 추출
      userInfoObject = {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        profileImageSource: userData.image_source,
      };
    } else {
      // userId 값이 존재하지 않는 경우, 기본 데이터를 객체에 추가
      userInfoObject = {
        id: data.id,
        name: data.name,
        email: data.email,
        profileImageSource: data.profileImageSource,
      };
    }
    // 새로운 객체를 반환
    return { error, data: userInfoObject };
  } else {
    return { error, data };
  }
};
