export async function getLinkList() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const body = await response.json();
  return body.folder;
}

export async function getData(url) {
  const response = await fetch(url);
  const body = await response.json();
  return body;
}

export async function postData(apiUrl, userData) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("페이지 없다.");
  }
  return await response.json();
}
