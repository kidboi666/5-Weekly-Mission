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
 * 
 * @value 사용자가 입력한 값 저장하는 변수
 * @onChange 사용자의 입력 값 처리하는 setter 함수 
 * @onCloseClick 검색 값 삭제 버튼 트리거
 * @returns 사용자가 검색 기능 쓰도록 하는 검색 바
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
