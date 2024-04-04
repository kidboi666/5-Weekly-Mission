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

export async function getFoldersMenu() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/folders"
  );
  if (!response.ok) {
    throw new Error("사용자 데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  const menuArray = body.data.map((item) => item.name);
  return menuArray;
}

export async function getFoldersItems() {
  // const queryId = id ? `?folderId=${id}` : "";
  const response = await fetch(
    `https://bootcamp-api.codeit.kr/api/users/1/links`
  );
  if (!response.ok) {
    throw new Error("사용자 데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  const data = body.data;
  const newData = data.map((item) => {
    item.createdAt = item.created_at;
    delete item.created_at;
    item.imageSource = item.image_source;
    delete item.image_source;
    return item;
  });
  return newData;
}
