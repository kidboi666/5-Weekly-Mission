import { MouseEventHandler } from "react";
import styles from "./EditFolderButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type EditFolderButtonProps = {
  iconSource: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

/**
 * EditFolderButton 컴포넌트는 아이콘과 텍스트를 포함한 버튼을 렌더링하며, 클릭 시 지정된 핸들러를 호출합니다.
 *
 * @component
 * @example
 * return (
 *   <EditFolderButton
 *     iconSource="edit-icon.svg"
 *     text="편집"
 *     onClick={() => console.log("편집 버튼 클릭됨")}
 *   />
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {string} props.iconSource - 버튼에 표시될 아이콘의 소스 URL입니다.
 * @param {string} props.text - 버튼에 표시될 텍스트입니다.
 * @param {MouseEventHandler<HTMLButtonElement>} props.onClick - 버튼 클릭 시 호출되는 함수입니다.
 * 
 * @returns {JSX.Element} 아이콘과 텍스트를 포함한 버튼을 렌더링하는 컴포넌트입니다.
 */
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
