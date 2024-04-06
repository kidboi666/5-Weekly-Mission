/**
 * API로 불러온 유저정보 가공
 *
 * @author yum
 * @date 23.04
 * @param date
 * @return
 */
export const mapUserData = (user) => {
  if (!user || typeof user !== "object") return {};

  if (!(user.data && Array.isArray(user.data) && user.data.length > 0)) {
    return user;
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
