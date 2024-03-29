import React from 'react';

function Input() {
  return (
    <div>
      <input type='search' id='search-link' name='search-link'></input>
      <div>
        <img alt='돋보기 아이콘' />
        <label htmlFor='search-link'>링크를 검색해보세요</label>
      </div>
    </div>
  );
}

export default Input;
