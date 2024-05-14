import React from "react";
import { useState } from "react";
import Image from "next/image";
import closeButton from "../../images/_close.svg";
import Button from "@components/Button";
import KaKaoIcon from "../../images/Chat.svg";
import FacebookIcon from "../../images/Telegram.svg";
import CopyUrlIcon from "../../images/More.svg";
import { FolderId } from "@components/Folder";
import copy from "clipboard-copy";
import styles from "./Modal.module.css";

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
    <div className={styles.modal_container}>
      <div className={styles.modal_content}>
        <Image
          className={styles.closebuttonimg}
          src={closeButton}
          alt="닫기 버튼"
          onClick={onClick}
        />
        <h4 className={styles.modal_name}>{text}</h4>
        {showInput && (
          <input className={styles.modal_input} placeholder="내용 입력" />
        )}
        {content && <div className={styles.modal_info}>{content}</div>}
        {folderMenu && linkCount && (
          <div className={styles.addfolderlist_wrapper}>
            {folderMenu.map((folder, index) => (
              <div
                className={`${styles.addfolderlist_content} ${
                  selectedFolderIndex === index ? styles.selected : ""
                }`}
                key={index}
                onClick={() => setSelectedFolderIndex(index)}
              >
                <span
                  className={`${styles.addfolderlist_foldername} ${
                    selectedFolderIndex === index ? styles.selected_folder : ""
                  }`}
                >
                  {folder}
                </span>
                <span className={styles.addfolderlist_linkcount}>
                  {linkCount[index]}개 링크
                </span>
                {selectedFolderIndex !== null &&
                  selectedFolderIndex === index && (
                    <span className={styles.addfolderlist_checkmark}>✔️</span>
                  )}
              </div>
            ))}
          </div>
        )}
        {showButton && <Button children={buttonText} btnType={buttonType} />}
        {showShareIcons && (
          <div className={styles.shareiconsgroup}>
            <button className={styles.shareicon}>
              <Image src={KaKaoIcon} alt="카카오톡 아이콘" />
            </button>
            <button className={styles.shareicon}>
              <Image src={FacebookIcon} alt="페이스북 아이콘" />
            </button>
            <button
              className={styles.shareicon}
              onClick={handleCopyUrlIconClick}
            >
              <Image src={CopyUrlIcon} alt="URL 복사 아이콘" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
