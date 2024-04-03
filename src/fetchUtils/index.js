const BASE_URL = "https://bootcamp-api.codeit.kr/api/sample";

export const fetchData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/folder`);
        if (!response.ok) {
            throw new Error("서버에서 데이터를 가져오는 데 실패했습니다.");
        }
        const data = await response.json();
        const { folder } = data;
        const { links } = folder;
        return { folderData: folder, cardData: links };
    } catch (e) {
        alert(e.message);
    }
};

export const loginFetchData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/user`);
        if (!response.ok) {
            throw new Error("서버에서 로그인정보를 가져오는데 실패 했습니다.");
        }
        const data = await response.json();
        return data;
    } catch (e) {
        alert(e.message);
    }
};
