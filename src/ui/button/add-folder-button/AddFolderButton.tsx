import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import AddIcon from "./add.svg";
import { MouseEventHandler } from "react";

const cx = classNames.bind(styles);

type AddFolderButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

/**
 * AddFolderButton 컴포넌트는 "폴더 추가" 버튼을 렌더링하며, 클릭 시 지정된 핸들러를 호출합니다.
 *
 * @component
 * @example
 * return (
 *   <AddFolderButton onClick={() => console.log("폴더 추가 버튼 클릭됨")} />
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {MouseEventHandler<HTMLButtonElement>} props.onClick - 버튼 클릭 시 호출되는 함수입니다.
 * 
 * @returns {JSX.Element} "폴더 추가" 버튼을 렌더링하는 컴포넌트입니다.
 */
export const AddFolderButton = ({ onClick }: AddFolderButtonProps) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      <span>폴더 추가</span>
      <AddIcon className={cx("icon")} />
    </button>
  );
};
