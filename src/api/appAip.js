import { useState, useEffect } from "react";

export const URL = "https://bootcamp-api.codeit.kr/api";

// 네비게이션 바 - 프로필 유저 정보
export const fetchUser = async () => {
  try {
    const response = await fetch(`${URL}/sample/user`);

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error.message);
  }
};

// 폴더 소유자 정보, 링크 정보
export const fetchFoderContent = async () => {
  try {
    const response = await fetch(`${URL}/sample/folder`);

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    console.log(error.message);
  }
};

// 로그인
// 전체 수정필요
export const requestPost = async (email, password) => {
  try {
    const response = await fetch(`${URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      // window.location.href = "/";
      const result = await response.json();
      return result;
    }

    if (!response.ok) {
      throw new Error("테스트");
    }
  } catch (error) {
    console.log(error.message);
  }
};

function AppAip() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const fetchContent = async () => {
    const { folder } = await fetchFoderContent();

    setProfile(folder);
    setItems(folder.links);
  };

  const fetchUser = async () => {
    const userData = await fetchUser();

    setUser(userData);
  };

  useEffect(() => {
    // 이름 변경
    fetchContent();
    fetchUser();
  }, []);

  return { items, user, profile };
}

export default AppAip;
