import styles from "./ShareModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "../Template/Modal";
import { ModalContentBox } from "../Template/ModalContentBox";
import { ModalContentDescription } from "../Template/ModalContentDescription";
import { ModalContentTitle } from "../Template/ModalContentTitle";
import { ReactComponent as KakaoIcon } from "./imgSrc/kakao.svg";
import { ReactComponent as FacebookIcon } from "./imgSrc/facebook.svg";
import { ReactComponent as LinkIcon } from "./imgSrc/link.svg";

const cx = classNames.bind(styles);

export const ShareModal = ({
  isOpen,
  folderName,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
  onCloseClick,
  onKeyDown,
}) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx("modal-header")}>
            <ModalContentTitle>폴더 공유</ModalContentTitle>
            <ModalContentDescription>{folderName}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            <button className={cx("button")} onClick={onKakaoClick}>
              <KakaoIcon />
              <span>카카오톡</span>
            </button>
            <button className={cx("button")} onClick={onFacebookClick}>
              <FacebookIcon />
              <span>페이스북</span>
            </button>
            <button className={cx("button")} onClick={onLinkCopyClick}>
              <LinkIcon />
              <span>링크 복사</span>
            </button>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
