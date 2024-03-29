export const BASE_URL = 'https://bootcamp-api.codeit.kr/api/folders';

export function getFolder(folderId) {
  fetch(`${BASE_URL}/${folderId}`)
    .then((res) => {
      if (!res.ok) throw new Error('네트워크 요청에 실패했습니다');

      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

export function deleteFolder(folderId) {
  fetch(`${BASE_URL}/${folderId}`, { method: 'DELETE' });
}
