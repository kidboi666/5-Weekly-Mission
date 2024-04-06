const URL = "https://bootcamp-api.codeit.kr";

export async function getUserData() {
  try {
    const response = await fetch(`${URL}/api/users/1`, {
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

export async function getFolderListData() {
  try {
    const response = await fetch(`${URL}/api/users/1/folders`, {
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

export async function getFolderLinkData() {
  try {
    const response = await fetch(`${URL}/api/users/1/links`, {
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

export async function getSampleUserData() {
  try {
    const response = await fetch(`${URL}/api/sample/folder`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("shared샘플 데이터 불러오기 실패!");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getSampleFolderData() {
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
