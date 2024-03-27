import LinkCard from '../LinkCard/LinkCard';
import SearchBar from '../SearchBar/SearchBar';
import './LinkCardList.css';

export default function LinkCardList({ items }) {
  return (
    <div className='link-card-list-container'>
      <SearchBar />
      <ul className='link-card-list'>
        {items.map((item) => (
          <li key={item.id}>
            <LinkCard linkCardInfo={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
