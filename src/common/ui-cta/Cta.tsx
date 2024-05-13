import styles from "./Cta.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
}

export const Cta = ({ children }: Props) => {
  return <div className={cx("container")}>{children}</div>;
};
