import { SEARCH_ICON } from "./constant";
import styles from "./MainSearchBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const MainSearchBar = () => {
  return (
    <div className={cx("container")}>
      <img src={SEARCH_ICON} alt="검색 아이콘" />
      <input
        className={cx("input")}
        type="search"
        placeholder="링크를 검색해 보세요."
      ></input>
    </div>
  );
};
