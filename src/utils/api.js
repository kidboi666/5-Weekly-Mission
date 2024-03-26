const BASE_URL = 'https://bootcamp-api.codeit.kr/api';

export async function getFolderInfo() {
  const query = `${BASE_URL}/sample/folder`;
  const response = await fetch(query);

  if (!response.ok) {
    throw new Error('폴더 정보를 불러오는데 실패했습니다');
  }

  const result = await response.json();
  return result;
}
