export async function getSharedList() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  if (!response.ok) {
    throw new Error("리스트를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  const folder = body.folder;
  return folder;
}

export async function getUser() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  if (!response.ok) {
    throw new Error("사용자 데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
