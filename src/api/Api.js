const URL = "https://bootcamp-api.codeit.kr";

export async function getUserData() {
  try {
    const response = await fetch(`${URL}/api/sample/user`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("이용자정보 불러오기 실패!");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getFolderData() {
  try {
    const response = await fetch(`${URL}/api/sample/folder`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("내용 불러오기 실패!");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
