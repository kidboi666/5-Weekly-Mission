/**
 * API로 불러온 유저정보 가공
 *
 * @author yum
 * @date 23.05
 * @param date
 * @return
 */
interface UserData {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export const mapUserData = (user: any): UserData => {
  if (!user || typeof user !== "object") return {} as UserData;

  if (!(user.data && Array.isArray(user.data) && user.data.length > 0)) {
    return user as UserData;
  }

  const userData = user.data[0];
  const { id, name, email, image_source } = userData;

  return {
    id,
    name,
    email,
    profileImageSource: image_source,
  };
};
