import { ReactNode } from "react";
import styles from "./ModalContentTitle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
}
export const ModalContentTitle = ({ children }: Props) => {
  return <h2 className={cx("title")}>{children}</h2>;
};
