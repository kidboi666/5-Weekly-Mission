import { MouseEventHandler } from "react";
import styles from "./EditFolderButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type EditFolderButtonProps = {
  iconSource: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const EditFolderButton = ({
  iconSource,
  text,
  onClick,
}: EditFolderButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
      <span className={cx("text")}>{text}</span>
    </button>
  );
};
