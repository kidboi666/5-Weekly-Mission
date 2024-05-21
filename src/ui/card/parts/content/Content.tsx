import styles from "./Content.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentProps = {
  elapsedTime: string;
  description: string;
  createdAt: string;
  isHovered: boolean;
};

export const Content = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
}: ContentProps) => {
  return (
    <div className={cx("container", { hovered: isHovered })}>
      <span className={cx("elapsed-time")}>{elapsedTime}</span>
      <p className={cx("description")}>{description}</p>
      <span className={cx("created-at")}>{createdAt}</span>
    </div>
  );
};
