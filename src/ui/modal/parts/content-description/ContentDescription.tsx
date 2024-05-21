import { ReactNode } from "react";
import styles from "./ContentDescription.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentDescriptionProps = {
  children: ReactNode;
};

export const ContentDescription = ({ children }: ContentDescriptionProps) => {
  return <p className={cx("description")}>{children}</p>;
};
