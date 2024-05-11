import { ReactNode } from "react";
import styles from "./ModalContentDescription.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
}

export const ModalContentDescription = ({ children }: Props) => {
  return <span className={cx("description")}>{children}</span>;
};
