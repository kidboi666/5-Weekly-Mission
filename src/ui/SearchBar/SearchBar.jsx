import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="SearchBar-wrapper">
        <input
          className="SearchBar-input"
          type="search"
          placeholder="링크를 검색해 보세요"
        />
        <img
          className="SearchBar-icon"
          src="images/search.svg"
          alt="검색바 아이콘"
        />
      </div>
    </div>
  );
};
