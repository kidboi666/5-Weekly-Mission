import "./SearchBar.css";

export function SearchBar({ searchKeyWord, setSearchKeyWord }) {
  const handleInputValue = (e) => {
    if (e.key === "Enter") {
      setSearchKeyWord(e.target.value);
    }
  };

  return (
    <div className="search-box">
      <img src="./images/Search.svg" alt="searcher" />
      <input
        placeholder="링크를 검색해보세요"
        onKeyDown={handleInputValue}
      ></input>
      {searchKeyWord && (
        <p>
          <span>{searchKeyWord}</span>으로 검색한 결과입니다.
        </p>
      )}
    </div>
  );
}
