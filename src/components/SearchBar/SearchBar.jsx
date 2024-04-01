import './SearchBar.css';
import searchIcon from '../../assets/images/search_icon.svg';

const STYLE_SEARCH_BAR_CLASS_NAME = 'search-bar';
const STYLE_SEARCH_BUTTON_CLASS_NAME = 'search-button';
const STYLE_SEARCH_INPUT_CLASS_NAME = 'search-input';

export const SEARCH_INPUT_ID = 'search-link';
const SEARCH_INPUT_PLACEHOLDER = '링크를 검색하세요';
const SEARCH_INPUT_ICON_ALT = 'Search Icon';

export default function SearchBar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={STYLE_SEARCH_BAR_CLASS_NAME}>
      <button className={STYLE_SEARCH_BUTTON_CLASS_NAME} type="submit">
        <img src={searchIcon} alt={SEARCH_INPUT_ICON_ALT} />
      </button>
      <input
        type="text"
        name={SEARCH_INPUT_ID}
        id={SEARCH_INPUT_ID}
        placeholder={SEARCH_INPUT_PLACEHOLDER}
        className={STYLE_SEARCH_INPUT_CLASS_NAME}
      />
    </form>
  );
}
