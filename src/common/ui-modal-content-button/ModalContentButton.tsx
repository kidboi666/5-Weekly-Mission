import { MouseEventHandler, ReactNode } from "react";
import styles from "./ModalContentButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler;
  themeColor: string;
}

export const ModalContentButton = ({
  children,
  onClick,
  themeColor = "blue",
}: Props) => {
  return (
    <button className={cx("button", themeColor)} onClick={onClick}>
      {children}
    </button>
  );
};
