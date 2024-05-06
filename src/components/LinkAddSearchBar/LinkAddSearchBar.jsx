import styles from "./LinkAddSearchBar.module.scss";
import classNames from "classnames/bind";
import { ADD_LINK_ICON } from "./constant";

const cx = classNames.bind(styles);

export const LinkAddSearchBar = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("searchBar-block")}>
        <div className={cx("link-block")}>
          <img src={ADD_LINK_ICON} alt="링크 아이콘" />
          <input
            className={cx("input-text")}
            type="search"
            placeholder="링크를 추가해 보세요."
          ></input>
        </div>
        <button className={cx("button-text")} type="button">
          추가하기
        </button>
      </div>
    </div>
  );
};
