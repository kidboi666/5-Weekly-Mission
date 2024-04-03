import "./Search.css";
import SearchIcon from "../assets/icon/Search.png";

function Search() {
    return (
        <form className="search-form">
            <button>
                <img src={SearchIcon} alt="검색하기" />
            </button>
            <input type="text" placeholder="링크를 검색해 보세요." />
        </form>
    );
}

export default Search;
