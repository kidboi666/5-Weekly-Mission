import { MouseEventHandler } from "react";
import styles from "./FolderButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type FolderButtonProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
};

/**
 * FolderButton 컴포넌트는 폴더 이름을 표시하고, 선택 상태를 시각적으로 나타내며, 클릭 시 지정된 핸들러를 호출하는 버튼을 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <FolderButton
 *     text="내 폴더"
 *     onClick={() => console.log("폴더 버튼 클릭됨")}
 *     isSelected={true}
 *   />
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {string} props.text - 버튼에 표시될 텍스트입니다.
 * @param {MouseEventHandler<HTMLButtonElement>} props.onClick - 버튼 클릭 시 호출되는 함수입니다.
 * @param {boolean} [props.isSelected=false] - 버튼이 선택된 상태인지 여부를 나타냅니다.
 * 
 * @returns {JSX.Element} 폴더 이름을 표시하고 선택 상태를 나타내며 클릭 시 핸들러를 호출하는 버튼 컴포넌트입니다.
 */
export const FolderButton = ({ text, onClick, isSelected = false }: FolderButtonProps) => {
  return (
    <button className={cx("container", { selected: isSelected })} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};
