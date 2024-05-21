import { useRef, useState } from "react";
import { useEnhancedEffect } from "./useEnhancedEffect";

/**
 * useIntersectionObserver 훅은 IntersectionObserver API를 사용하여 요소가 뷰포트에 교차되었는지 여부를 감지합니다.
 *
 * @template T - 관찰할 HTML 요소의 타입입니다.
 * @param {boolean} [once=false] - 요소가 한 번 교차되면 더 이상 관찰하지 않도록 설정하는 플래그입니다.
 * @param {IntersectionObserverInit} [options] - IntersectionObserver 설정 옵션입니다.
 * @returns {Object} 훅의 반환 객체입니다.
 * @returns {React.RefObject<T>} return.ref - 관찰할 요소에 연결할 ref 객체입니다.
 * @returns {boolean} return.isIntersecting - 요소가 뷰포트에 교차되었는지 여부를 나타내는 상태입니다.
 *
 * @example
 * const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>(true, { threshold: 0.5 });
 *
 * return (
 *   <div ref={ref}>
 *     {isIntersecting ? "요소가 보입니다." : "요소가 보이지 않습니다."}
 *   </div>
 * );
 */
export const useIntersectionObserver = <T extends HTMLElement>(
  once: boolean = false,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEnhancedEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (once && entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref?.current) {
      observer.observe(ref.current!);
    }

    return () => {
      observer.disconnect();
    };
  }, [options, once]);

  return { ref, isIntersecting };
};
