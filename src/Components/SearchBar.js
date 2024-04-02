import search from '../static/images/search.svg';

function SearchBar() {

    return (
        <section className="search">
            <div className="search-bar">
                <img src={search} alt="돋보기" />
                <input type="text" className="input-search" placeholder="링크를 검색해보세요."/>
            </div>
            
        </section>
    );
}

export default SearchBar;