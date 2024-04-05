import "./SearchBar.css";
import { SEARCH_IMAGE } from "./constant";

export const SearchBar = () => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        className="searchBar-input"
      />
      <img src={SEARCH_IMAGE} alt="돋보기 아이콘" className="searchBar-icon" />
    </div>
  );
};
