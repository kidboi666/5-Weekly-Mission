import { ReactNode, useMemo } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  elementId: string;
}

function Portal({ children, elementId }: Props) {
  const rootElement = useMemo(
    () => document.getElementById(elementId),
    [elementId]
  );
  if (rootElement instanceof HTMLElement)
    return createPortal(children, rootElement);
  else {
    return <></>;
  }
}

export default Portal;
