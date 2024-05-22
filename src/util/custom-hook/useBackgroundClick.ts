import { useEffect } from "react";
import { ROOT_ID } from "../constant";

/**
 * useBackgroundClick 훅은 특정 DOM 요소에 클릭 이벤트 리스너를 추가하고,
 * 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
 *
 * @param {Function} callback - 클릭 이벤트가 발생했을 때 호출될 함수입니다.
 *
 * @example
 * useBackgroundClick((event) => {
 *   console.log("백그라운드가 클릭되었습니다.", event);
 * });
 */
export const useBackgroundClick = (
  callback: (this: HTMLElement, ev: MouseEvent) => any
) => {
  useEffect(() => {
    const rootElement = document.getElementById(ROOT_ID);
    rootElement?.addEventListener<"click">("click", callback);
    return () => {
      rootElement?.removeEventListener<"click">("click", callback);
    };
  }, [callback]);
};
