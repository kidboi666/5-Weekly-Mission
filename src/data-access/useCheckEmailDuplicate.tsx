import { instance, useAsync } from "@/src/util";
import { useCallback } from "react";

/**
 * useCheckEmailDuplicate 훅은 이메일 중복 확인을 위한 비동기 요청을 처리합니다.
 *
 * @param {string} email - 중복 확인할 이메일 주소입니다.
 * @returns {Object} 훅의 반환 객체입니다.
 * @returns {() => Promise<void>} return.execute - 이메일 중복 확인을 실행하는 함수입니다.
 * @returns {boolean} return.loading - 이메일 중복 확인 요청의 로딩 상태입니다.
 * @returns {any | null} return.error - 이메일 중복 확인 요청 중 발생한 오류입니다.
 * @returns {{ data: { isUsableNickname: boolean } } | null} return.data - 이메일 중복 확인 응답 데이터입니다.
 *
 * @example
 * const { execute, loading, error, data } = useCheckEmailDuplicate("example@example.com");
 *
 * useEffect(() => {
 *   execute();
 * }, [execute]);
 */
export const useCheckEmailDuplicate = (email: string) => {
  const checkEmailDuplicate = useCallback(
    () =>
      instance.post<{ data: { isUsableNickname: boolean } }>("check-email", {
        email,
      }),
    [email]
  );
  const { execute, loading, error, data } = useAsync(checkEmailDuplicate, true);

  return {
    execute,
    loading,
    error,
    data,
  };
};
