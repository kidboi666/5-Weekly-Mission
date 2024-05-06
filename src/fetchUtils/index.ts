import axios from "axios";
import camelcaseKeys from "camelcase-keys";

const BASE_URL = "https://bootcamp-api.codeit.kr/";

export const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/sample/folder`);
    if (response.status !== 200) {
      throw new Error("서버에서 데이터를 가져오는 데 실패했습니다.");
    }
    const { data } = response;
    const { folder } = data;
    const { links } = folder;
    return { folderData: folder, cardListData: links };
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
};

export const loginFetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/sample/user`);
    if (response.status !== 200) {
      throw new Error("서버에서 로그인정보를 가져오는데 실패 했습니다.");
    }
    const { data } = response;

    return data;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
};

export const tabDataList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/users/1/folders`);
    if (response.status !== 200) {
      throw new Error("서버에서 폴더 메뉴 정보를 가져오는데 실패 했습니다.");
    }
    const { data } = response;

    return data;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
};

export const userFoldersData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}api/users/1/links`);

    if (response.status !== 200) {
      throw new Error("서버에서 유저 폴더 정보를 가져오는데 실패 했습니다.");
    }
    if (response.data) {
      response.data = camelcaseKeys(response.data, { deep: true });
    }
    const { data } = response;

    return data;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
};

export const userFoldersTapData = async (id: number | null) => {
  try {
    let response;
    id === null
      ? (response = await axios.get(`${BASE_URL}api/users/1/links`))
      : (response = await axios.get(`${BASE_URL}api/users/1/links?folderId=${id}`));

    if (response.status !== 200) {
      throw new Error("서버에서 유저 폴더 정보를 가져오는데 실패 했습니다.");
    }
    if (response.data) {
      response.data = camelcaseKeys(response.data, { deep: true });
    }

    const { data } = response;

    return data;
  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    }
  }
};
