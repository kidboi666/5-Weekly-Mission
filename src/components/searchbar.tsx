import "./searchbar.css";
import searchIcon from '../assets/Search.svg';
function SearchBar() {
  return (
    <form className="searchBar">
      <input
        className="searchBar__input"
        type="search"
        placeholder="링크를 검색해 보세요."
      ></input>
      <img src={searchIcon} alt="검색창 돋보기 아이콘" className="searchIcon"/>
    </form>
  );
}

export default SearchBar;
