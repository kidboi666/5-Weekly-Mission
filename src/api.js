const BASIC_URL = 'https://bootcamp-api.codeit.kr';

export async function getSharedList() {
  const response = await fetch(`${BASIC_URL}/api/sample/folder`);
  if (!response.ok) {
    throw new Error('리스트를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  const folder = body.folder;
  return folder;
}

export async function getUser() {
  const response = await fetch(`${BASIC_URL}/api/users/1`);
  if (!response.ok) {
    throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  const data = body.data[0];
  return data;
}

export async function getFoldersMenu() {
  const response = await fetch(`${BASIC_URL}/api/users/1/folders`);
  if (!response.ok) {
    throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  const result = body.data;
  return result;
}

export async function getFoldersItems(id) {
  const queryParam = id === undefined ? '' : `?folderId=${id}`;
  const response = await fetch(`${BASIC_URL}/api/users/1/links${queryParam}`);
  if (!response.ok) {
    throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  const datas = body.data;
  const newData = datas
    ? datas.map((data) => {
        data.createdAt = data.created_at;
        delete data.created_at;
        data.imageSource = data.image_source;
        delete data.image_source;
        return data;
      })
    : datas;
  return newData;
}
