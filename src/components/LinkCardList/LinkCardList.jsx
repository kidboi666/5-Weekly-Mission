import LinkCard from '../LinkCard/LinkCard';
import SearchBar from '../SearchBar/SearchBar';
import './LinkCardList.css';

const STYLE_LINK_CARD_LIST_CONTAINER_CLASS_NAME = 'link-card-list-container';
const STYLE_LINK_CARD_LIST_CLASS_NAME = 'link-card-list';
const STYLE_CONTENT_WRAPPER_CLASS_NAME = 'content-wrapper';

export default function LinkCardList({ items, searchOnSubmit }) {
  return (
    <div className={STYLE_LINK_CARD_LIST_CONTAINER_CLASS_NAME}>
      <div className={STYLE_CONTENT_WRAPPER_CLASS_NAME}>
        <SearchBar onSubmit={searchOnSubmit} />
        <ul className={STYLE_LINK_CARD_LIST_CLASS_NAME}>
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
