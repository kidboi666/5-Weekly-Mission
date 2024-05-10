import styles from "./ModalContentDescription.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const ModalContentDescription = ({ children }) => {
  return <span className={cx("description")}>{children}</span>;
};
