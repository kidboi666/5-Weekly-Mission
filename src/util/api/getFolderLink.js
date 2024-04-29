const url = "https://bootcamp-api.codeit.kr/api";

export async function getFolderLink() {
  try {
    const response = await fetch(
      `${url}/users/1/links?folderId={해당 폴더 ID}`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error");
  }
}
