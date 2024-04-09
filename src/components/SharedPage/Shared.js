import CardList from '../CardList';
import SearchBar from '../SearchBar';
import MainContent from '../MainContent';

const SEARCH_LINK = '링크를 검색해보세요';

function Shared({ items }) {
  return (
    <MainContent>
      <SearchBar palceholder={SEARCH_LINK} />
      <CardList items={items} />
    </MainContent>
  );
}

export default Shared;
