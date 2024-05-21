import styles from "./AlertModal.module.scss";
import classNames from "classnames/bind";
import { KeyboardEventHandler, MouseEventHandler } from "react";
import {
  Template,
  ContentBox,
  ContentButton,
  ContentDescription,
  ContentTitle,
} from "../parts";
const cx = classNames.bind(styles);

type AlertModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

export const AlertModal = ({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}: AlertModalProps) => {
  return (
    <Template
      isOpen={isOpen}
      onBackdropClick={onCloseClick}
      onKeyDown={onKeyDown}
    >
      <ContentBox
        header={
          <div className={cx("modal-header")}>
            <ContentTitle>{title}</ContentTitle>
            <ContentDescription>{description}</ContentDescription>
          </div>
        }
        content={
          <ContentButton onClick={onClick} themeColor="red">
            {buttonText}
          </ContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Template>
  );
};
