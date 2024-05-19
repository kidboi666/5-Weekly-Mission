import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "./MainSearchBar.module.scss";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { SEARCH_ICON } from "./constant";
import Image from "next/image";

const cx = classNames.bind(styles);

export const MainSearchBar = ({ initialValue = '' }) => {
  const router = useRouter();
  const [value, setValue] = useState<string>(initialValue);
  const [search, setSearch] = useState<string>('');
  const { q } = router.query;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e: FormEvent) => {    
    e.preventDefault();  // 기본 동작 X

    router.push(`/folder?q=${value}`);
  }

  const getCards = async (query) => {
    setSearch(query);
  }

  useEffect(() => {
    getCards(q);
  }, [q])

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
        />
        <button className={cx("button")}>
          <Image 
            className={cx("image")}
            src={SEARCH_ICON} 
            alt="검색 아이콘" 
            width={100} 
            height={100}
          />  
        </button>
      </form>
    </div>
  );
};
