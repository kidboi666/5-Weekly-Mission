const BASE_URL = 'https://bootcamp-api.codeit.kr/api/sample';

const FOLDER_PATH = '/folder';
const USER_PATH = '/user';
const FOLDER_LOADING_ERROR_MESSAGE = '폴더 정보를 불러오는데 실패했습니다';
const USER_LOADING_ERROR_MESSAGE = '이용자 정보를 불러오는데 실패했습니다';

export async function getFolderInfo() {
  const query = `${BASE_URL}${FOLDER_PATH}`;
  const response = await fetch(query);

  if (!response.ok) {
    throw new Error(FOLDER_LOADING_ERROR_MESSAGE);
  }

  const result = await response.json();
  return result.folder;
}

export async function getUserInfo() {
  const query = `${BASE_URL}${USER_PATH}`;
  const response = await fetch(query);
  if (!response.ok) {
    throw new Error(USER_LOADING_ERROR_MESSAGE);
  }
  const result = await response.json();
  return result;
}
