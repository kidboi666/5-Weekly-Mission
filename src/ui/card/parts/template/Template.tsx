import { MouseEventHandler, ReactNode } from "react";
import styles from "./Template.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type TemplateProps = {
  children: ReactNode;
  onMouseOver: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
};

export const Template = ({
  children,
  onMouseOver,
  onMouseLeave,
}: TemplateProps) => {
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
