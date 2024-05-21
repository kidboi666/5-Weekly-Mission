import { instance, useAsync } from "@/src/util";
import { useCallback, useEffect } from "react";
import { Token } from "@/src/type";

type UseSignInParams = { email: string; password: string };

/**
 * useSignIn 훅은 사용자 인증을 처리하고, 토큰을 로컬 스토리지에 저장합니다.
 *
 * @param {UseSignInParams} params - 사용자 인증에 필요한 이메일과 비밀번호입니다.
 * @param {string} params.email - 사용자 이메일 주소입니다.
 * @param {string} params.password - 사용자 비밀번호입니다.
 * @returns {Object} 훅의 반환 객체입니다.
 * @returns {() => Promise<void>} return.execute - 사용자 인증을 수동으로 실행하는 함수입니다.
 * @returns {boolean} return.loading - 사용자 인증 요청의 로딩 상태입니다.
 * @returns {any | null} return.error - 사용자 인증 요청 중 발생한 오류입니다.
 * @returns {Token | null} return.data - 사용자 인증 응답 데이터입니다.
 *
 * @example
 * const { execute, loading, error, data } = useSignIn({ email: "user@example.com", password: "password" });
 *
 * const handleSignIn = async () => {
 *   await execute();
 * };
 *
 * useEffect(() => {
 *   if (data) {
 *     console.log("로그인 성공:", data);
 *   }
 * }, [data]);
 */
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
