import { useRouter } from "next/router";
import styles from "./LinkAddSearchBar.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { ADD_LINK_ICON } from "./constant";

const cx = classNames.bind(styles);

export const LinkAddSearchBar = () => {
  // const router = useRouter();
  // const [value, setValue] = useState<string>(Value);

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // }

  const handleSubmit = (e: FormEvent) => {    
    e.preventDefault();  // 기본 동작 X
    
    // router.push(`/folder?q=${value}`);
  }

  return (
    <div className={cx("container")}>
      <div className={cx("searchBar-block")}>
        <div className={cx("link-block")}>
          <form className={cx("form-block")} onSubmit={handleSubmit}>
            <Image className={cx("image")} src={ADD_LINK_ICON} alt="링크 아이콘" width={100} height={100}/>
          
            <input
              // onChange={handleChange}
              className={cx("input-text")}
              type="search"
              placeholder="링크를 추가해 보세요."
            />

            <button className={cx("button-text")}>
              추가하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
