import { instance, useAsync } from "@/src/util";
import { useCallback, useEffect } from "react";
import { Token } from "../type";

type UseSignUpParams = { email: string; password: string };

/**
 * useSignUp 훅은 사용자 등록을 처리하고, 토큰을 로컬 스토리지에 저장합니다.
 *
 * @param params - 사용자 등록에 필요한 이메일과 비밀번호입니다.
 * @param params.email - 사용자 이메일 주소입니다.
 * @param params.password - 사용자 비밀번호입니다.
 * @returns 훅의 반환 객체입니다.
 * @returns return.execute - 사용자 등록을 수동으로 실행하는 함수입니다.
 * @returns  return.loading - 사용자 등록 요청의 로딩 상태입니다.
 * @returns return.error - 사용자 등록 요청 중 발생한 오류입니다.
 * @returns return.data - 사용자 등록 응답 데이터입니다.
 *
 * @example
 * const { execute, loading, error, data } = useSignUp({ email: "user@example.com", password: "password" });
 *
 * const handleSignUp = async () => {
 *   await execute();
 * };
 *
 * useEffect(() => {
 *   if (data) {
 *     console.log("회원가입 성공:", data);
 *   }
 * }, [data]);
 */
export const useSignUp = ({ email, password }: UseSignUpParams) => {
  const signUp = useCallback(
    () =>
      instance.post<{ data: Token }>("sign-up", {
        email,
        password,
      }),
    [email, password]
  );
  const { execute, loading, error, data } = useAsync(signUp, true);

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
