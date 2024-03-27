import { useState } from 'react';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div class='search-bar'>
      <input
        type='text'
        name='search-link'
        id='search-link'
        placeholder='링크를 검색하세요'
        class='search-input'
      />
    </div>
  );
}
