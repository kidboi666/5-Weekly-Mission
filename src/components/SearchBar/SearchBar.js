import "./SearchBar.css";
import searchIcon from "../../assets/Search.svg";

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input
        className="SearchBarInput"
        type="search"
        placeholder="링크를 검색해 보세요."
      />
      <img
        src={searchIcon}
        alt="검색 돋보기 아이콘"
        className="SearchBarIcon"
      />
    </div>
  );
};
