import searchIcon from "../../assets/Search.svg";
import "./Search.css";

function Search() {
  return (
    <div className="searchBar">
      <img className="searchIcon" src={searchIcon} alt="검색" />
      <input className="searchInput" placeholder="링크를 검색해 보세요"></input>
    </div>
  );
}

export default Search;
