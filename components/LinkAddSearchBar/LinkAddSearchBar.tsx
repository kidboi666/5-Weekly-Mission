import { useRouter } from "next/router";
import styles from "./LinkAddSearchBar.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { ADD_LINK_ICON } from "./constant";

const cx = classNames.bind(styles);

export const LinkAddSearchBar = ({ initialValue = '' }) => {
  const router = useRouter();
  const [value, setValue] = useState<string>(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {    
    e.preventDefault();  // 기본 동작 X
    
    router.push(`/folder?q=${value}`);
  }

  return (
    <div className={cx("container")}>
      <div className={cx("searchBar-block")}>
        <div className={cx("link-block")}>
          <form className={cx("form-block")} onSubmit={handleSubmit}>
            <img src={ADD_LINK_ICON} alt="링크 아이콘" />
            <input
              onChange={handleChange}
              className={cx("input-text")}
              type="search"
              placeholder="링크를 추가해 보세요."
            ></input>

            <button className={cx("button-text")}>
              추가하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
