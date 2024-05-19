import { useState } from "react";
import styles from "./MainSearchBar.module.scss";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { SEARCH_ICON } from "./constant";

const cx = classNames.bind(styles);

export const MainSearchBar = ({ initialValue = '' }) => {
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
      <form className={cx("form-block")} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={value}
          className={cx("input-text")}
          type="search"
          name="q"
          placeholder="링크를 검색해 보세요."
        ></input>
        <button className={cx("button")}>
          <img src={SEARCH_ICON} alt="검색 아이콘" />  
        </button>
      </form>
    </div>
  );
};
