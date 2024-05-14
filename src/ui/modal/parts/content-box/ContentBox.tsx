import { MouseEventHandler, ReactNode } from "react";
import styles from "./ContentBox.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentBoxProps = {
  header: ReactNode;
  content: ReactNode;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
};

export const ContentBox = ({
  header,
  content,
  onCloseClick,
}: ContentBoxProps) => {
  return (
    <div className={cx("container")}>
      <button onClick={onCloseClick}>
        <img
          className={cx("close")}
          src="images/close.svg"
          alt="X모양 닫기 버튼"
        />
      </button>
      <div className={cx("items")}>
        {header}
        {content}
      </div>
    </div>
  );
};
