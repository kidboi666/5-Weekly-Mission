import { useState } from "react";
import "./SearchBar.css";

export function SearchBar({ searchKeyWord, setSearchKeyWord }) {
  const [value, setValue] = useState("");

  const handleInputValue = (e) => {
    if (e.key === "Enter") {
      setSearchKeyWord(e.target.value);
    }
  };

  const handleEmptyValue = () => {
    setSearchKeyWord(null); //값이 바뀌면 search-result-text없애기
    setValue("");
  };

  return (
    <>
      <div className="search-box">
        <div>
          <img src="./images/Search.svg" alt="searcher" />
          <input
            placeholder="링크를 검색해보세요"
            onKeyDown={handleInputValue}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>
        <img
          src="images/_close.png"
          alt="닫기 버튼"
          onClick={handleEmptyValue}
        ></img>
      </div>
      {searchKeyWord && (
        <p className="search-result-text">
          <span>{searchKeyWord}</span>으로 검색한 결과입니다.
        </p>
      )}
    </>
  );
}
