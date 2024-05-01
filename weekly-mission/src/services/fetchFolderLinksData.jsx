export async function fetchLinkData(folderId) {
  let query = "";
  if (folderId) {
    query = `?folderId=${folderId}`;
  }
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/users/1/links${query}`
  );
  if (!response.ok) {
    throw new Error("링크 리스트를 불러오는 데 실패했습니다.");
  }
  const result = await response.json();

  return result;
}
