import searchIcon from "../assets/Search.svg";
import "./Search.css";

function Search() {
  return (
    <div className="searchBar">
      <img src={searchIcon} alt="검색" />
      <input placeholder="링크를 검색해 보세요"></input>
    </div>
  );
}

export default Search;
