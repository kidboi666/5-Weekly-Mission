import { instance, useAsync } from "@/src/util";
import { useCallback, useEffect } from "react";
import { Token } from "@/src/type";

type UseSignInParams = { email: string; password: string };

export const useSignIn = ({ email, password }: UseSignInParams) => {
  const signIn = useCallback(
    () =>
      instance.post<{ data: Token }>("sign-in", {
        email,
        password,
      }),
    [email, password]
  );
  const { execute, loading, error, data } = useAsync(signIn, true);

  useEffect(() => {
    if (data?.data.accessToken) {
      localStorage.setItem("accessToken", data.data.accessToken);
    }
  }, [data?.data.accessToken]);

  return {
    execute,
    loading,
    error,
    data,
  };
};
