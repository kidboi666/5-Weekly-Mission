import styles from "./MainSearchBar.module.scss";
import classNames from "classnames/bind";
import { SEARCH_ICON } from "./constant";

const cx = classNames.bind(styles);

export const MainSearchBar = () => {
  return (
    <div className={cx("container")}>
      <img src={SEARCH_ICON} alt="검색 아이콘" />

      <input
        className={cx("input-text")}
        type="search"
        placeholder="링크를 검색해 보세요."
      ></input>
    </div>
  );
};
