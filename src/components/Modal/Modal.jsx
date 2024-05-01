import * as S from "./Modal.style";
import { Portal } from "../Portal";

export const Modal = ({
  children,
  isOpen = false,
  onCloseClick,
  onKeyDown,
}) => {
  const handelDimClick = (event) => {
    // 모달창을 클릭했을 때는 창이 닫히지 않도록 설정
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onCloseClick) {
      onCloseClick(event);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <S.WrapModal onClick={handelDimClick} onKeyDown={onKeyDown} tabIndex={0}>
        {children}
      </S.WrapModal>
    </Portal>
  );
};
