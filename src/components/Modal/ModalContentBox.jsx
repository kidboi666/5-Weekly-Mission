import * as S from "./ModalContentBox.style";

export const ModalContentBox = ({ title, content }) => {
  return (
    <S.WrapModalContent>
      <button>
        <S.CloseImage />
      </button>
      <S.WrapContent>
        {title}
        {content}
      </S.WrapContent>
    </S.WrapModalContent>
  );
};
