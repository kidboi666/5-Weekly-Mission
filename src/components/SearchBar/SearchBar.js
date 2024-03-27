export default function SearchBar({ onSubmit }) {
  return (
    <div className='search-bar'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='search-input'
          id='search-link'
          placeholder='링크를 검색하세요'
          className='search-input'
        />
      </form>
    </div>
  );
}
