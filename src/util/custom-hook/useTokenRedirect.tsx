import { ROUTE } from "@/src/util";
import { useRouter } from "next/router";
import { useEffect } from "react";

/**
 * useTokenRedirect 훅은 주어진 토큰 응답이나 로컬 스토리지에 저장된 액세스 토큰을 기반으로 사용자를 특정 경로로 리디렉션합니다.
 *
 * @param {string} [tokenResponse] - 서버로부터 받은 토큰 응답입니다. 선택적 매개변수입니다.
 *
 * @example
 * const tokenResponse = "exampleToken";
 * useTokenRedirect(tokenResponse);
 */
export const useTokenRedirect = (tokenResponse?: string) => {
  const router = useRouter();

  useEffect(() => {
    const routeToFolderPage = () => {
      router.replace(ROUTE.폴더);
    };
    const accessTokenInLocalStorage = localStorage.getItem("accessToken");

    if (tokenResponse) {
      routeToFolderPage();
      return;
    }

    if (accessTokenInLocalStorage) {
      routeToFolderPage();
    }
  }, [tokenResponse, router]);
};
