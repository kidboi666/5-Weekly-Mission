const BASE_URL = "https://bootcamp-api.codeit.kr";
export const YOUTUBE_URL = "https://www.youtube.com/";
export const FACEBOOK_URL = "https://www.facebook.com/";
export const TWITTER_URL = "https://www.twitter.com/";
export const INSTAGRAM_URL = "https://www.instagram.com/";

export const getUser = async () => {
  const response = await fetch(`${BASE_URL}/api/sample/user`);
  if (!response.ok) {
    throw new Error("유저 정보를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
};

export const getFolderUser = async () => {
  const response = await fetch(`${BASE_URL}/api/sample/folder`);
  if (!response.ok) {
    throw new Error("유저 정보를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
};
