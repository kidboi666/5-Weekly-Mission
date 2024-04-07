const BASE_URL = "https://bootcamp-api.codeit.kr/";

export const fetchData = async () => {
    try {
        const response = await fetch(`${BASE_URL}api/sample/folder`);
        if (!response.ok) {
            throw new Error("서버에서 데이터를 가져오는 데 실패했습니다.");
        }
        const data = await response.json();
        const { folder } = data;
        const { links } = folder;
        return { folderData: folder, cardListData: links };
    } catch (e) {
        alert(e.message);
    }
};

export const loginFetchData = async () => {
    try {
        const response = await fetch(`${BASE_URL}api/sample/user`);
        if (!response.ok) {
            throw new Error("서버에서 로그인정보를 가져오는데 실패 했습니다.");
        }
        const data = await response.json();
        return data;
    } catch (e) {
        alert(e.message);
    }
};

export const tabDataList = async () => {
    try {
        const response = await fetch(`${BASE_URL}api/users/1/folders`);
        if (!response.ok) {
            throw new Error("서버에서 폴더 메뉴 정보를 가져오는데 실패 했습니다.");
        }
        const data = await response.json();
        return data;
    } catch (e) {
        alert(e.message);
    }
};

export const userFoldersData = async () => {
    try {
        const response = await fetch(`${BASE_URL}api/users/1/links`);
        if (!response.ok) {
            throw new Error("서버에서 유저 폴더 정보를 가져오는데 실패 했습니다.");
        }
        const data = await response.json();
        return data;
    } catch (e) {
        alert(e.message);
    }
};

export const userFoldersTapData = async (id) => {
    try {
        let response;
        id === null
            ? (response = await fetch(`${BASE_URL}api/users/1/links`))
            : (response = await fetch(`${BASE_URL}api/users/1/links?folderId=${id}`));

        if (!response.ok) {
            throw new Error("서버에서 유저 폴더 정보를 가져오는데 실패 했습니다.");
        }
        const data = await response.json();

        return data;
    } catch (e) {
        alert(e.message);
    }
};
