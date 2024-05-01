import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children }) => {
  // 모달이 body에 렌더링 될 수 있게 처리
  const [rootModal, setRootModal] = useState(null);

  useEffect(() => {
    setRootModal(document.body);
  }, []);

  return rootModal ? createPortal(children, rootModal) : null;
};
