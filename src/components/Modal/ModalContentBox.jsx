import * as S from "./ModalContentBox.style";
import { CLOSE_IMAGE } from "./constant";

export const ModalContentBox = ({ title, content, onCloseClick }) => {
  return (
    <S.WrapModalContent>
      <button onClick={onCloseClick}>
        <S.CloseImage src={CLOSE_IMAGE} alt="닫기버튼" />
      </button>
      <S.WrapContent>
        {title}
        {content}
      </S.WrapContent>
    </S.WrapModalContent>
  );
};
