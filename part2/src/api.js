export async function getSampleUser() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
  if (!response.ok) {
    throw new Error("유저 정보를 불러오는 데 실패했습니다.");
  }
  const result = await response.json();
  return result;
}

export async function getFolderInfo() {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  if (!response.ok) {
    throw new Error("폴더 정보를 불러오는 데 실패했습니다.");
  }
  const result = await response.json();
  return result;
}

export async function getFolderList(id) {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/${id}/folders`);
  if (!response.ok) {
    throw new Error("폴더 리스트를 불러오는 데 실패했습니다.");
  }
  const result = await response.json();
  return result;
}

export async function getLinkList(id, folderId) {
  let query = "";
  if (folderId) {
    query = `?folderId=${folderId}`;
  }
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/${id}/links${query}`);
  if (!response.ok) {
    throw new Error("링크 리스트를 불러오는 데 실패했습니다.");
  }
  const result = await response.json();
  return result;
}
