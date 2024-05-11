import { MouseEvent, ReactNode } from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
  onMouseOver: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave: (e: MouseEvent<HTMLElement>) => void;
}

export const Card = ({ children, onMouseOver, onMouseLeave }: Props) => {
  return (
    <div
      className={cx("container")}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};
