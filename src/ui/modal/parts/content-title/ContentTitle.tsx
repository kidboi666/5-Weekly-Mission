import { ReactNode } from "react";
import styles from "./ModalContentTitle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentTitleProps = {
  children: ReactNode;
};

export const ContentTitle = ({ children }: ContentTitleProps) => {
  return <h2 className={cx("title")}>{children}</h2>;
};
