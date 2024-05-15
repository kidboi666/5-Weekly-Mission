import { ReactNode, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
  container?: Element | DocumentFragment | null;
};

/**
 * 
 * @container 모달 띄울 시 주변 어둡게 하는 그런 용도
 * @returns 모달 생성시 나오는 배경 어둡게 하는 컴포넌트 -> 클릭 시 모달 다시 들어가는 기능 있음
 */
export const Portal = ({ children, container }: PortalProps) => {
  const [mountNode, setMountNode] = useState<Element | DocumentFragment | null>(null);

  useLayoutEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
