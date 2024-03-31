const URL = "https://bootcamp-api.codeit.kr/api";

// 네비게이션 바 - 프로필 유저 정보
export async function getUser() {
  const reponse = await fetch(`${URL}/sample/user`);
  const result = await reponse.json();

  return result;
}

// 로그인
export const signinRequest = async (email, password) => {
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

// 폴더 소유자 정보, 링크 정보
export async function getContent() {
  const reponse = await fetch(`${URL}/sample/folder`);
  const result = await reponse.json();

  return result;
}
