import React from "react";
import styles from "./IconAndTextButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IconAndTextButtonProps {
  iconSource: string;
  text: string;
  onClick: () => void; // QUESTION : '() => setCurrentModal(modalId)'의 타입은 이게 맞을까? setter 함수의 타입은 여기서 고려해주지 않아도 되는걸까?
}

export const IconAndTextButton: React.FC<IconAndTextButtonProps> = ({
  iconSource,
  text,
  onClick,
}) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <img className={cx("icon")} src={iconSource} alt={`${text} 아이콘`} />
      <span className={cx("text")}>{text}</span>
    </button>
  );
};
