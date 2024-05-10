import styles from "./ShareModal.module.scss";
import classNames from "classnames/bind";
import { Modal } from "@/sharing/ui-modal";
import { ModalContentBox } from "@/sharing/ui-modal-content-box";
import { ModalContentDescription } from "@/sharing/ui-modal-content-description";
import { ModalContentTitle } from "@/sharing/ui-modal-content-title";
import { ReactComponent as KaKaoIcon } from "./kakao.svg";
import { ReactComponent as FacebookIcon } from "./facebook.svg";
import { ReactComponent as LinkIcon } from "./link.svg";

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
            <button onClick={onKakaoClick} className={cx("button")}>
              <KaKaoIcon />
              <span>카카오톡</span>
            </button>
            <button onClick={onFacebookClick} className={cx("button")}>
              <FacebookIcon />
              <span>페이스북</span>
            </button>
            <button onClick={onLinkCopyClick} className={cx("button")}>
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
