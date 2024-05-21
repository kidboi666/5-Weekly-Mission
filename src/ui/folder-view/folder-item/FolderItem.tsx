import { MouseEventHandler } from "react";
import styles from "./FolderItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type FolderItemProps = {
  folderName: string;
  linkCount: number;
  isSelected?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

/**
 * FolderItem 컴포넌트는 폴더 이름과 링크 수를 표시하고, 선택된 상태를 시각적으로 나타내는 버튼을 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <FolderItem
 *     folderName="내 폴더"
 *     linkCount={5}
 *     isSelected={true}
 *     onClick={() => console.log("Folder clicked")}
 *   />
 * );
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {string} props.folderName - 폴더의 이름입니다.
 * @param {number} props.linkCount - 폴더에 포함된 링크의 개수입니다.
 * @param {boolean} [props.isSelected=false] - 폴더가 선택된 상태인지 여부를 나타냅니다.
 * @param {MouseEventHandler<HTMLButtonElement>} props.onClick - 버튼 클릭 시 호출되는 함수입니다.
 * 
 * @returns {JSX.Element} 폴더 이름과 링크 수를 표시하고 선택 상태를 시각적으로 나타내는 버튼 컴포넌트입니다.
 */
export const FolderItem = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}: FolderItemProps) => {
  return (
    <button className={cx("button", { selected: isSelected })} onClick={onClick}>
      <span className={cx("name", { selected: isSelected })}>{folderName}</span>
      <span className={cx("count")}>{linkCount}개 링크</span>
      {isSelected && <img className={cx("check")} src="images/check.svg" alt="체크 아이콘" />}
    </button>
  );
};
