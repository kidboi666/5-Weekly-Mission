import * as S from "./Modal.styled";
import closeButton from "../../../image/_close.svg";
import Button from "../Button/Button";
import KaKaoIcon from "../../../image/Chat.svg";
import FacebookIcon from "../../../image/Telegram.svg";
import CopyUrlIcon from "../../../image/More.svg";
import copy from "clipboard-copy";

const Modal = ({
  activeFolderId,
  text,
  onClick,
  showInput,
  content,
  showButton,
  buttonText,
  buttonType,
  showShareIcons,
}) => {
  const handleCopyUrlIconClick = () => {
    const shareLink = `${window.location.origin}/folder/${activeFolderId}`;
    //임시로 확인용
    copy(shareLink)
      .then(() => {
        console.log("링크가 클립보드에 복사되었습니다:", shareLink);
      })
      .catch((error) => {
        console.error("링크 복사 중 오류가 발생했습니다:", error);
      });
  };

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.CloseButton src={closeButton} onClick={onClick} />
        <S.ModalName>{text}</S.ModalName>
        {showInput && <S.ModalInput placeholder="내용 입력" />}
        {content && <S.ModalInfo>{content}</S.ModalInfo>}
        {showButton && <Button text={buttonText} type={buttonType} />}
        {showShareIcons && (
          <S.ShareIconsGroup>
            <S.ShareIcon>
              <img src={KaKaoIcon} alt="카카오톡 아이콘" />
            </S.ShareIcon>
            <S.ShareIcon>
              <img src={FacebookIcon} alt="페이스북 아이콘" />
            </S.ShareIcon>
            <S.ShareIcon onClick={handleCopyUrlIconClick}>
              <img src={CopyUrlIcon} alt="URL 복사 아이콘" />
            </S.ShareIcon>
          </S.ShareIconsGroup>
        )}
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;
