const BASIC_URL = 'https://bootcamp-api.codeit.kr';

export async function getUser() {
  const response = await fetch(`${BASIC_URL}/api/users/1`);
  if (!response.ok) {
    throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  const data = body.data[0];
  return data;
}

export async function getFolders() {
  const response = await fetch(`${BASIC_URL}/api/users/1/folders`);
  if (!response.ok) {
    throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  const result = body.data;
  return result;
}

export async function getLinks(folderId: number) {
  const queryParam = folderId === 0 ? '' : `?folderId=${folderId}`;
  const response = await fetch(`${BASIC_URL}/api/users/1/links${queryParam}`);
  if (!response.ok) {
    throw new Error('사용자 데이터를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  const rawData = body.data;
  const newData = rawData
    ? rawData.map(
        (data: {
          createdAt?: string;
          created_at?: string;
          imageSource?: string;
          image_source?: string;
        }) => {
          data.createdAt = data.created_at;
          delete data.created_at;
          data.imageSource = data.image_source;
          delete data.image_source;
          return data;
        }
      )
    : rawData;
  return newData;
}
