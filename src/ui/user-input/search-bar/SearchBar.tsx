import styles from "./SearchBar.module.scss";
import classNames from "classnames/bind";
import { SEARCH_IMAGE } from "./constant";
import { ChangeEventHandler, MouseEventHandler } from "react";
import CloseIcon from "./close.svg";

const cx = classNames.bind(styles);

type SearchBarProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
};

/**
 * SearchBar 컴포넌트는 사용자가 검색 기능을 사용할 수 있도록 하는 검색 바를 렌더링합니다.
 *
 * @component
 * @example
 * return (
 *   <SearchBar
 *     value="검색어"
 *     onChange={(e) => console.log(e.target.value)}
 *     onCloseClick={() => console.log("Close Clicked")}
 *   />
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {string} props.value - 사용자가 입력한 값을 저장하는 변수입니다.
 * @param {ChangeEventHandler<HTMLInputElement>} props.onChange - 사용자의 입력 값을 처리하는 함수입니다.
 * @param {MouseEventHandler<HTMLButtonElement>} props.onCloseClick - 검색 값을 삭제하는 버튼 클릭 시 트리거되는 함수입니다.
 * 
 * @returns {JSX.Element} 사용자가 검색 기능을 사용할 수 있도록 하는 검색 바 컴포넌트입니다.
 */
export const SearchBar = ({ value, onChange, onCloseClick }: SearchBarProps) => {
  return (
    <div className={cx("container")}>
      <input
        className={cx("input")}
        type="search"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={onChange}
      />
      <img
        src={SEARCH_IMAGE}
        alt="검색창인 것을 알려주는 돋보기 아이콘"
        className={cx("search-icon")}
      />
      {value && (
        <button className={cx("close")} onClick={onCloseClick}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
