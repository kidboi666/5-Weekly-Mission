import styles from "./CenterSearchBar.module.scss";
import classNames from "classnames/bind";
import { ADD_LINK_ICON } from "./constant";

const cx = classNames.bind(styles);

export const CenterSearchBar = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("SearchBar_block")}>
        <div className={cx("link_block")}>
          <img src={ADD_LINK_ICON} alt="링크 아이콘" />
          <input
            className={cx("input")}
            type="search"
            placeholder="링크를 추가해 보세요."
          ></input>
        </div>
        <button className={cx("button")} type="button">
          추가하기
        </button>
      </div>
    </div>
  );
};
