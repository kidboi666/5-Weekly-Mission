import './SearchBar.css';
import searchIcon from '../../assets/images/search_icon.svg';

export default function SearchBar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className='search-bar'>
      <button className='search-button' type='submit'>
        <img src={searchIcon} alt='Search Icon' />
      </button>
      <input
        type='text'
        name='search-input'
        id='search-link'
        placeholder='링크를 검색하세요'
        className='search-input'
      />
    </form>
  );
}
