import searchIcon from '../assets/search.svg';
import '../styles/searchBar.css';

function SearchBar() {
    return (
        <div className="searchbar-container">
            <img src={searchIcon} alt="검색" />
            <input placeholder="링크를 검색해 보세요" />
        </div>
    );
}

export default SearchBar;
