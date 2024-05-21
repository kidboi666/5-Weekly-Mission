import { useEffect, useLayoutEffect } from "react";

/**
 * useEnhancedEffect 훅은 클라이언트 환경에서는 useLayoutEffect를, 서버 환경에서는 useEffect를 사용하도록 하는 훅입니다.
 * 이를 통해 서버 사이드 렌더링(SSR) 시 발생할 수 있는 경고를 피할 수 있습니다.
 *
 * @type {Function}
 *
 * @example
 * useEnhancedEffect(() => {
 *   console.log("컴포넌트가 마운트되었고 DOM이 준비되었습니다.");
 * });
 */
export const useEnhancedEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
