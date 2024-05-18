interface SignInParams {
  email: string;
  password: string;
}

interface SignUpParams {
  email: string;
  password: string;
}

export const signIn = async ({
  email,
  password,
}: SignInParams): Promise<string> => {
  const response = await fetch("/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("로그인 실패");
  }

  const { accessToken } = await response.json();
  return accessToken;
};

export const signUp = async ({
  email,
  password,
}: SignUpParams): Promise<string> => {
  const response = await fetch("/api/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("회원 가입 실패");
  }

  const { accessToken } = await response.json();
  return accessToken;
};
