import styles from "./Template.module.scss";
import classNames from "classnames/bind";
import {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from "react";
import { Portal } from "@/src/ui";

const cx = classNames.bind(styles);

type TemplateProps = {
  children: ReactNode;
  isOpen?: boolean;
  disableScrollLock?: boolean;
  hideBackdrop?: boolean;
  onBackdropClick?: MouseEventHandler<HTMLDivElement>;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
};

export const Template = ({
  children,
  isOpen = false,
  disableScrollLock = false,
  hideBackdrop = false,
  onBackdropClick,
  onKeyDown,
}: TemplateProps) => {
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={cx("container", { backdrop: !hideBackdrop })}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {children}
      </div>
    </Portal>
  );
};
