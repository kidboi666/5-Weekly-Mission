import './SearchBar.css';

export function SearchBar() {
    return (
        <div className='search-box'>
            <img src="./images/Search.svg" alt="searcher"></img>
            <input value="링크를 검색해보세요"></input>
        </div>
    );
}