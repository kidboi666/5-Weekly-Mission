import { MouseEventHandler, ReactNode } from "react";
import styles from "./ContentButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  themeColor?: "blue" | "red";
};

export const ContentButton = ({
  children,
  onClick,
  themeColor = "blue",
}: ContentButtonProps) => {
  return (
    <button className={cx("button", themeColor)} onClick={onClick}>
      {children}
    </button>
  );
};
