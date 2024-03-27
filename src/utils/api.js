const BASE_URL = 'https://bootcamp-api.codeit.kr/api/sample';

export async function getFolderInfo() {
  const query = `${BASE_URL}/folder`;
  const response = await fetch(query);

  if (!response.ok) {
    throw new Error('폴더 정보를 불러오는데 실패했습니다');
  }

  const result = await response.json();
  return result.folder;
}

export async function getUserInfo() {
  const query = `${BASE_URL}/user`;
  const response = await fetch(query);
  if (!response.ok) {
    throw new Error('이용자 정보를 불러오는데 실패했습니다');
  }
  const result = await response.json();
  return result;
}

/*
fetch('https://bootcamp-api.codeit.kr/api/sample/folder').then((response) => response.json()).then((result)=>{console.log(result);});
fetch('https://bootcamp-api.codeit.kr/api/sample/user').then((response) => response.json()).then((result)=>{console.log(result);});
*/
