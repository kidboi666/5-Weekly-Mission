import "../SearchBar/SearchBar.css";
import SearchImg from "../../assets/Search.svg";

function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input className="search-input" placeholder="링크를 검색해 보세요." />
        <button>
          <img className="search-icon" src={SearchImg} alt="search-img" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
