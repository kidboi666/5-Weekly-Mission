import React from "react";
import styled from "styled-components";
import searchImg from "../assets/SearchIcon.svg";

const SearchBlock = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 1rem;
  margin: 0 6rem;
  border-radius: 0.625rem;
  background: #f5f5f5;

  div {
    display: flex;
    gap: 0.75rem;
  }

  @media screen and (max-width: 1124px) {
    margin: 2.5rem 2rem 0;
  }

  input {
    width: 100%;
    padding: 0.9375rem 0;
    color: #666;
    background: #f5f5f5;
    text-align: right;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    text-align: left;
    border: none;
  }

  input:focus {
    outline: none;
  }
`;

// input 스타일 변경
function Search() {
  return (
    <SearchBlock>
      <div>
        <img src={searchImg} alt="검색 아이콘" />
        <input type="search" placeholder="링크를 검색해 보세요."></input>
      </div>
    </SearchBlock>
  );
}

export default Search;
