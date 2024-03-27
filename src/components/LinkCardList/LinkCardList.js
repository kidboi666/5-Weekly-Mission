import LinkCard from '../LinkCard/LinkCard';
import SearchBar from '../SearchBar/SearchBar';
import './LinkCardList.css';

export default function LinkCardList({ items, searchOnSubmit }) {
  return (
    <div className='link-card-list-container'>
      <div className='content-wrapper'>
        <SearchBar onSubmit={searchOnSubmit} />
        <ul className='link-card-list'>
          {items.map((item) => (
            <li key={item.id}>
              <LinkCard linkCardInfo={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
