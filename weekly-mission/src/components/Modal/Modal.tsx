import React from "react";
import { useState } from "react";
import * as S from "./Modal.styled";
import closeButton from "../../../image/_close.svg";
import Button from "../Button/Button";
import KaKaoIcon from "../../image/Chat.svg";
import FacebookIcon from "../../../image/Telegram.svg";
import CopyUrlIcon from "../../../image/More.svg";
import copy from "clipboard-copy";
import { FolderId } from "../Folder/Folder";

interface ModalProps {
  activeFolderId?: FolderId;
  text?: string;
  onClick: () => void;
  showInput?: boolean;
  content?: string;
  folderMenu?: string[];
  linkCount?: number[];
  showButton?: boolean;
  buttonText?: string;
  buttonType?: string;
  showShareIcons?: boolean;
}

const Modal = ({
  activeFolderId,
  text,
  onClick,
  showInput,
  content,
  folderMenu,
  linkCount,
  showButton,
  buttonText,
  buttonType,
  showShareIcons,
}: ModalProps) => {
  const [selectedFolderIndex, setSelectedFolderIndex] = useState<number | null>(
    null
  );

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
        {folderMenu && linkCount && (
          <S.AddFolderList>
            {folderMenu.map((folder, index) => (
              <S.AddFolderListContent
                key={index}
                onClick={() => setSelectedFolderIndex(index)}
                selected={selectedFolderIndex === index}
              >
                <S.FolderName selected={selectedFolderIndex === index}>
                  {folder}
                </S.FolderName>
                <S.LinkCount>{linkCount[index]}개 링크</S.LinkCount>
                {selectedFolderIndex !== null &&
                  selectedFolderIndex === index && (
                    <S.CheckMark>✔️</S.CheckMark>
                  )}
              </S.AddFolderListContent>
            ))}
          </S.AddFolderList>
        )}
        {showButton && <Button text={buttonText} />}
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
