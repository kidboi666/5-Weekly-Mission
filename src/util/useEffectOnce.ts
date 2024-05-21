import { EffectCallback, useEffect } from "react";

/**
 * useEffectOnce 훅은 컴포넌트가 마운트될 때 한 번만 실행되는 useEffect 훅입니다.
 *
 * @param {EffectCallback} callback - 컴포넌트가 마운트될 때 실행될 함수입니다.
 *
 * @example
 * useEffectOnce(() => {
 *   console.log("컴포넌트가 마운트되었습니다.");
 *   return () => {
 *     console.log("컴포넌트가 언마운트되었습니다.");
 *   };
 * });
 */
export const useEffectOnce = (callback: EffectCallback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
