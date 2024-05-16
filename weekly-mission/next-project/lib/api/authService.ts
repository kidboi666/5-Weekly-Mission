import instance from ".";

export const login: (
  email: string,
  password: string
) => Promise<boolean> = async (email, password) => {
  try {
    const response = await instance.post(`/sign-in`, { email, password });
    if (response.status === 200) {
      return true; //로그인 성공
    } else {
      return false; //로그인 실패
    }
  } catch (error) {
    console.error("로그인 오류:", error);
    return false;
  }
};
