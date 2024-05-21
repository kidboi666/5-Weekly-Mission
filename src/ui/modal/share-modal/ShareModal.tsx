import styles from "./ShareModal.module.scss";
import classNames from "classnames/bind";
import {
  Template,
  ContentBox,
  ContentDescription,
  ContentTitle,
} from "../parts";
import { KeyboardEventHandler, MouseEventHandler } from "react";
import { KakaoIcon, FacebookIcon, LinkIcon } from "./constant";

const cx = classNames.bind(styles);

type ShareModalProps = {
  isOpen: boolean;
  folderName: string;
  onKakaoClick: MouseEventHandler<HTMLButtonElement>;
  onFacebookClick: MouseEventHandler<HTMLButtonElement>;
  onLinkCopyClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

export const ShareModal = ({
  isOpen,
  folderName,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
  onCloseClick,
  onKeyDown,
}: ShareModalProps) => {
  const buttons = [
    { onClick: onKakaoClick, Icon: KakaoIcon, label: "카카오톡" },
    { onClick: onFacebookClick, Icon: FacebookIcon, label: "페이스북" },
    { onClick: onLinkCopyClick, Icon: LinkIcon, label: "링크 복사" },
  ];

  return (
    <Template
      isOpen={isOpen}
      onBackdropClick={onCloseClick}
      onKeyDown={onKeyDown}
    >
      <ContentBox
        header={
          <div className={cx("modal-header")}>
            <ContentTitle>폴더 공유</ContentTitle>
            <ContentDescription>{folderName}</ContentDescription>
          </div>
        }
        content={
          <div className={cx("modal-content")}>
            {buttons.map(({ onClick, Icon, label }) => (
              <button key={label} className={cx("button")} onClick={onClick}>
                <Icon />
                <span>{label}</span>
              </button>
            ))}
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Template>
  );
};
