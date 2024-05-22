import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
  container?: Element | DocumentFragment | null;
};

/**
 * Portal 컴포넌트는 자식 요소를 지정된 DOM 노드에 렌더링합니다. 기본적으로 `document.body`에 렌더링됩니다.
 *
 * @component
 * @example
 * return (
 *   <Portal>
 *     <div>이 내용은 포탈을 통해 렌더링됩니다.</div>
 *   </Portal>
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {ReactNode} props.children - 포탈을 통해 렌더링할 자식 요소입니다.
 * @param {Element | DocumentFragment | null} [props.container] - 자식 요소를 렌더링할 DOM 노드입니다. 기본값은 `document.body`입니다.
 * 
 * @returns {JSX.Element | null} 자식 요소를 지정된 DOM 노드에 렌더링하는 컴포넌트입니다. `container`가 설정되지 않았거나 `null`인 경우 `document.body`에 렌더링합니다.
 */
export const Portal = ({ children, container }: PortalProps) => {
  const [mountNode, setMountNode] = useState<Element | DocumentFragment | null>(null);

  useLayoutEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
